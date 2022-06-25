const { NODE_ENV, PORT, JWT_SECRET, DATABASE_URL } = process.env;

const enviromentVariables = {
  DATABASE_URL: DATABASE_URL,
  JWT_SECRET: JWT_SECRET!,
  NODE_ENV: NODE_ENV,
  PORT: PORT,
};

Object.entries(enviromentVariables).forEach(([key, value]) => {
  if (!value) {
    console.warn(`[Environment variable]: ${key} is not set.`);
  }
});

export default enviromentVariables;
