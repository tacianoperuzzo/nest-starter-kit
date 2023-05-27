export const getConfig = (): AppConfig => {
  return {
    port: parseInt(process.env.PORT as string, 10) || 3300,
    jwtSecret: process.env.JWT_SECRET as string,
    logLevel: process.env.LOG_LEVEL || 'info',
    database: {
      host: process.env.DB_HOST as string,
      port: parseInt(process.env.DB_PORT as string, 10) || 5432,
      username: process.env.DB_USERNAME as string,
      password: process.env.DB_PASSWORD as string,
      dbName: process.env.DB_DATABASE as string,
    },
  };
};

export interface AppConfig {
  port: number;
  jwtSecret: string;
  logLevel: string;
  database: DbConfig;
}

export interface DbConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  dbName: string;
}
