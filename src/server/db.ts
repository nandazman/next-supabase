import { createClient } from "@supabase/supabase-js";
import { env } from "../utils/env";
import { Database } from "@/server/schema";

export const supabase = createClient<Database>(env.SUPABASE_URL, env.SUPABASE_KEY);