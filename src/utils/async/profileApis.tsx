import { PROFILE_DATA } from "../../constants/apiConstants";
import { supabase } from "../../supabaseClient";
import { ProfileType } from "../../types/profile";

export async function getProfile(): Promise<ProfileType> {
  try {
    const user = supabase.auth.user();

    let { data, error, status } = await supabase
      .from("profiles")
      .select(PROFILE_DATA)
      .eq("id", user.id)
      .single();

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      console.log("DATA", data);
      return data;
    }
  } catch (error) {
    alert(error.message);
  }
}

export async function updateProfile({
  username,
  website,
  avatar_url,
  name,
}): Promise<void> {
  try {
    const user = supabase.auth.user();

    const updates = {
      id: user.id,
      username,
      website,
      name,
      avatar_url,
      updated_at: new Date(),
    };

    let { error } = await supabase.from("profiles").upsert(updates, {
      returning: "minimal", // Don't return the value after inserting
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    alert(error.message);
  }
}
