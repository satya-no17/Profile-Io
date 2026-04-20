"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData: FormData) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not logged in");

  console.log("✅ User found:", user.id);

  const avatarFile = formData.get("avatar") as File | null;
  console.log("📁 Avatar file:", avatarFile?.name, avatarFile?.size);

  let avatarUrl: string | undefined;

  if (avatarFile && avatarFile.size > 0) {
    const fileExt = avatarFile.name.split(".").pop();
    const filePath = `${user.id}/${user.id}.${fileExt}`;

    console.log("⬆️ Uploading to path:", filePath);

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, avatarFile, {
        upsert: true,
        contentType: avatarFile.type,
      });

    console.log("📦 Upload result:", uploadData, uploadError);

    if (uploadError) throw new Error("Avatar upload failed: " + uploadError.message);

    const { data: urlData } = supabase.storage
      .from("avatars")
      .getPublicUrl(filePath);

    avatarUrl = urlData.publicUrl;
    console.log("🔗 Avatar URL:", avatarUrl);
  }

  const profileUpdate: Record<string, any> = {
    fullname: formData.get("fullname"),
    username: formData.get("username"),
    bio: formData.get("bio"),
    description: formData.get("description"),
  };

  if (avatarUrl) {
    profileUpdate.avatar = avatarUrl;
  }

  console.log("💾 Saving profile:", profileUpdate);

  const { data: profileData, error: profileError } = await supabase
    .from("profile")
    .update(profileUpdate)
    .eq("id", user.id);

  console.log("📝 Profile update result:", profileData, profileError);

  const links = JSON.parse(formData.get("links") as string);
  await supabase.from("links").delete().eq("user_id", user.id);
  await supabase.from("links").insert(
    links.map((l: any, i: number) => ({ ...l, user_id: user.id, position: i }))
  );

  revalidatePath("/profile");
}