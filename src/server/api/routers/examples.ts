import { eq } from 'drizzle-orm';

import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc';
import { examples, type NewExample, type Example } from '@/server/db/schema';
import createId from '@/utils/createId';
import { examplesRouterSchema } from '@/zods/examples';

export const examplesRouter = createTRPCRouter({
  insert: protectedProcedure
    .input(examplesRouterSchema.insert)
    .mutation(({ ctx, input }) => {
      const owner_id = ctx.auth.orgId || ctx.auth.userId;
      return ctx.db
        .insert(examples)
        .values({ id: createId(), owner_id, ...input } as NewExample);
    }),
  list: protectedProcedure.query(async ({ ctx }) => {
    const results = await ctx.db.select().from(examples);
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
    .mutation(({ ctx, input }) => {
      return ctx.db
        .update(examples)
        .set(input as Example)
        .where(eq(examples.id, input.id));
    }),
});

// CRUD Naming
// insert
// list
// get
// upsert
// update
// delete

// upsert: protectedProcedure
//   .input(insertElementSchema)
//   .mutation(({ ctx, input }) => {
//     return ctx.db
//       .insert(elements)
//       .values(input as NewElement)
//       .onConflictDoUpdate({ target: elements.id, set: { name: "John" } });
//   }),
