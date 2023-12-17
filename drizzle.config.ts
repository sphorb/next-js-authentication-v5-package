import { Config } from 'drizzle-kit';

import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local"
});

export default {
  schema: "./database/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.DATABASE_HOST!,
    user: process.env.DATABASE_USERNAME!,
    password: process.env.DATABASE_PASSWORD!,
    database: "next-database-tutorial"
  },
  out: "./drizzle"
} satisfies Config