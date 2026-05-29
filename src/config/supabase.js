import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://karbriqmtilnxysqrclx.supabase.co";

const supabaseKey =
  "sb_publishable_FfANoAU44pHWpPE3S5NpEA_Wgbe5EO7";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);