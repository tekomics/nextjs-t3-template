import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

import { examples } from '@/server/db/schema';

export const insertExampleSchema = createInsertSchema(examples);
export const selectExampleSchema = createSelectSchema(examples);

export const examplesRouterSchema = {
  insert: insertExampleSchema.extend({
    id: z.string().length(12).optional(),
    owner: z.string().max(50).optional(),
  }),
  get: z.object({
    id: z.string().length(12),
  }),
  update: z.object({
    id: z.string().length(12),
    owner: z.string().max(50).optional(),
  }),
};
