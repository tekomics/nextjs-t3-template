import { eq, and } from 'drizzle-orm';

import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc';
import { examples, type NewExample, type Example } from '@/server/db/schema';
import createId from '@/utils/createId';
import { examplesRouterSchema } from '@/zods/examples';

export const examplesRouter = createTRPCRouter({
  insert: protectedProcedure
    .input(examplesRouterSchema.insert)
    .mutation(({ ctx, input }) => {
      const owner = ctx.auth.orgId || ctx.auth.userId;
      return ctx.db
        .insert(examples)
        .values({ id: createId(), owner, ...input } as NewExample);
    }),
  list: protectedProcedure.query(async ({ ctx }) => {
    const owner = ctx.auth.orgId || ctx.auth.userId;
    const results = await ctx.db
      .select()
      .from(examples)
      .where(eq(examples.owner, owner));
    return results;
  }),
  get: protectedProcedure
    .input(examplesRouterSchema.get)
    .query(async ({ ctx, input }) => {
      const results = await ctx.db
        .select()
        .from(examples)
        .where(eq(examples.id, input.id));
      return results[0];
    }),
  update: protectedProcedure
    .input(examplesRouterSchema.update)
    .mutation(async ({ ctx, input }) => {
      const owner = ctx.auth.orgId || ctx.auth.userId;
      return ctx.db
        .update(examples)
        .set(input as Example)
        .where(and(eq(examples.id, input.id), eq(examples.owner, owner)));
    }),
  delete: protectedProcedure
    .input(examplesRouterSchema.get)
    .mutation(async ({ ctx, input }) => {
      const owner = ctx.auth.orgId || ctx.auth.userId;
      return ctx.db
        .delete(examples)
        .where(and(eq(examples.id, input.id), eq(examples.owner, owner)));
    }),
});

// CRUD Naming
// insert
// list
// get
// update
// delete
