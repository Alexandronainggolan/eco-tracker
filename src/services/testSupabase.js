import { supabase } from "../config/supabase";

export async function testConnection() {
  const { data, error } = await supabase
    .from("footprints")
    .select("*");

  console.log("DATA:", data);
  console.log("ERROR:", error);
}