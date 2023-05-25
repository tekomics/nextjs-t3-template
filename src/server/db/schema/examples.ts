import { mysqlTable, varchar, text } from 'drizzle-orm/mysql-core';
import { type InferModel } from 'drizzle-orm';
import nanoid from '@/server/db/nanoid';

export const examples = mysqlTable('examples', {
  id: nanoid('id', {}).notNull().primaryKey(),
  owner_id: varchar('owner_id', { length: 50 }),
  name: varchar('name', { length: 50 }),
  description: text('description'),
});

export type Example = InferModel<typeof examples>;
export type NewExample = InferModel<typeof examples, 'insert'>;
