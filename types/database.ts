export interface DatabaseConfig {
  engine: string;
  database: string;
  version: string;
}

export const DB: DatabaseConfig = {
  engine: "Cloudflare D1",
  database: "mhbuilder-d1",
  version: "1.0.0",
};
