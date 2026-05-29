import { supabase } from "./supabase";

export async function saveFootprint(
  username,
  carbonScore
) {
  const { data, error } =
    await supabase
      .from("footprints")
      .insert([
        {
          username,
          carbon_score: carbonScore,
        },
      ]);

  if (error) {
    console.log(error);
  }

  return data;
}