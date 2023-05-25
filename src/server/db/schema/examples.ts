import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { type InferModel } from 'drizzle-orm';

import nanoid from '@/server/db/nanoid';

export const examples = mysqlTable('examples', {
  id: nanoid('id', {}).notNull().primaryKey(),
  owner: varchar('owner', { length: 50 }),
});

export type Example = InferModel<typeof examples>;
export type NewExample = InferModel<typeof examples, 'insert'>;
