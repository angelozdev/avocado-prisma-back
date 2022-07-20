import { PrismaClient } from "@prisma/client";
import db from "./db.json";
import bcrypt from "bcrypt";

const prismaClient = new PrismaClient();

async function seed() {
  try {
    const array = new Array(db.length);
    console.log("Seeding...");

    db.forEach(({ id, attributes, ...avocado }, index) => {
      array[index] = prismaClient.avocado.create({
        data: {
          ...avocado,
          createdAt: new Date(),
          updatedAt: new Date(),
          attributes: {
            create: {
              ...attributes,
            },
          },
        },
      });
    });

    await Promise.all(array);
    console.log("Seeded avocados!");

    console.log("Seeding ADMIN USER...");
    const adminUser = await prismaClient.user.create({
      data: {
        email: "admin.1234@mail.com",
        username: "admin",
        password: await bcrypt.hash("Admin.1234", 10),
      },
    });

    console.log("Seeded ADMIN USER!", { adminUser });
  } catch (error) {
    console.error(error);
  }
}

seed();
