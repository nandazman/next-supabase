import { createTRPCRouter, publicProcedure } from "../trpc";

export const lessonsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const lessons = await ctx.supabase.from("lessons").select("*");
    console.log({ lessons })
    return {
      lessons,
    };
  }),
});
