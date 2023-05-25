// db.ts
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { connect } from '@planetscale/database';

import { env } from '@/env.mjs';

// create the connection
const connection = connect({
  url: env.DATABASE_URL,
});

const db = drizzle(connection);

export { db };
