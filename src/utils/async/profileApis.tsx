import { PROFILE_DATA } from "../../constants/apiConstants";
import { supabase } from "../../supabaseClient";

export async function getProfile() {
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
      return data;
    }
  } catch (error) {
    alert(error.message);
  }
}

export async function updateProfile({ username, website, avatar_url }) {
  try {
    const user = supabase.auth.user();

    const updates = {
      id: user.id,
      username,
      website,
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
