const fs = require("fs-extra");
const path = require("path");

const sourcePath = path.join(__dirname, "../src");
const distPath = path.join(__dirname, "../dist");
const staticPath = path.join(__dirname, "../static");

async function copyAssets() {
  console.log("Copying assets...");
  await fs.copy(staticPath, path.resolve(distPath, "static"));
}

async function copyGraphqlFiles() {
  console.log("Copying graphql files...");
  const schemaPath = path.join(sourcePath, "schema", "schema.graphql");
  await fs.copy(
    schemaPath,
    path.resolve(distPath, "src/schema/schema.graphql")
  );
}

// async function copyPrismaClient() {
//   console.log("Copying prisma client...");
//   const prismaPath = path.join(sourcePath, "@prisma/client");
//   await fs.copy(prismaPath, path.resolve(distPath, "src/@prisma/client"));
// }

const promises = [copyAssets(), copyGraphqlFiles()];

Promise.all(promises)
  .then(() => {
    console.log("Build complete");
  })
  .catch((error) => {
    console.error(error);
  });
