if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  throw Error("Provide Supabase")
}
const env = {
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_KEY: process.env.SUPABASE_KEY,
  NODE_ENV: process.env.NODE_ENV,
  // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
};

export { env }