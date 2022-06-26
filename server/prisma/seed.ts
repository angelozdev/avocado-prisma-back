import { PrismaClient } from "@prisma/client";
import db from "./db.json";

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
  } catch (error) {
    console.error(error);
  }
}

seed();
