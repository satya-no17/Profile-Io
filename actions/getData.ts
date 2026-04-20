import { createClient } from "@/lib/supabase/server";

export async function getProfileData() {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error("Not logged in");
  }

  // try fetch safely
  let{ data, error } = await supabase
    .from("profile")
    .select(`
      id,
      username,
      fullname,
      bio,
      avatar,
      description,
      links(*)
    `)
    .eq("id", user.id)
    .maybeSingle();

  if (error) {
    throw new Error("Error fetching profile");
  }

  // create if not exists
  if (!data) {
    const { error: insertError } = await supabase
      .from("profile")
      .insert({
        id: user.id,
        username: "user_" + user.id.slice(0, 6),
      });

    if (insertError) {
      throw new Error("Error creating profile");
    }

    // fetch again
    const res = await supabase
      .from("profile")
      .select(`
        id,
        username,
        fullname,
        bio,
        avatar,
        description,
        links(*)
      `)
      .eq("id", user.id)
      .single();

    data = res.data;
  }

  return data;
}