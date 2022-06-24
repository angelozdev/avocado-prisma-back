import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

const orm = new PrismaClient();

async function createAdminUser() {
  console.log("Creating admin user...");
  const password = await bcrypt.hash("admin", 10);
  const adminUser = await orm.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      password,
    },
  });

  const token = sign(
    { user: { name: adminUser.username, id: adminUser.id } },
    process.env.JWT_SECRET || ""
  );

  console.log(`Admin user created.`);
  console.log(`Token: Bearer ${token}`);
  return adminUser;
}

createAdminUser();
