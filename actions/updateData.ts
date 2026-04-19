"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Not logged in");

  // profile update
  await supabase
    .from("profile")
    .update({
      fullname: formData.get("fullname"),
      username: formData.get("username"),
      bio: formData.get("bio"),
      description: formData.get("description"),
    })
    .eq("id", user.id);

  // links update
  const links = JSON.parse(formData.get("links") as string);

  await supabase.from("links").delete().eq("user_id", user.id);

  await supabase.from("links").insert(
    links.map((l: any, i: number) => ({
      ...l,
      user_id: user.id,
      position: i,
    }))
  );

  revalidatePath("/profile");
}