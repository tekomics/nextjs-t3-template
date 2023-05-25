import { connect } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { migrate } from 'drizzle-orm/planetscale-serverless/migrator';

async function runMigrate() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL not set');

  const connection = connect({
    url: process.env.DATABASE_URL,
  });

  const db = drizzle(connection);

  console.log('Running migrations...');

  const start = Date.now();

  await migrate(db, {
    migrationsFolder: `${process.cwd()}/drizzle-orm/migrations`,
  });

  const end = Date.now();

  console.log(`Migrations completed in ${end - start}ms`);

  process.exit(0);
}

runMigrate().catch((err) => {
  console.error('Error running migrations');
  console.error(err);
  process.exit(1);
});
