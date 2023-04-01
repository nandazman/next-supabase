import { createTRPCRouter, publicProcedure } from "../trpc";

export const lessonsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const { data: lessons } = await ctx.supabase.from("lessons").select("*");
    return {
      lessons,
    };
  }),
});
