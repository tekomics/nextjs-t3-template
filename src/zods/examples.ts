import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

import { examples } from '@/server/db/schema';

export const insertExampleSchema = createInsertSchema(examples);
export const selectExampleSchema = createSelectSchema(examples);

export const examplesRouterSchema = {
  insert: insertExampleSchema.extend({
    id: z.string().length(12).optional(),
    owner_id: z.string().length(50).optional(),
    name: z.string().nonempty().max(256),
    description: z.string().optional(),
  }),
  get: z.object({
    id: z.string().length(12),
  }),
  update: z.object({
    id: z.string().length(12),
    owner_id: z.string().length(50).optional(),
    name: z.string().nonempty().max(256).optional(),
    description: z.string().optional(),
  }),
};
