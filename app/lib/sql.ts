import postgres from 'postgres';

const databaseUrl = process.env.POSTGRES_URL;

if (!databaseUrl) {
  throw new Error('POSTGRES_URL environment variable is not set');
}

export const sql = postgres(databaseUrl, {
  ssl: 'require',
});


