import { PrismaClient } from "@prisma/client";
import path from "node:path";
import fs from "node:fs/promises";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const formData = await request.formData();
    const categoryImage = formData.get("file");
    const categoryTitle = formData.get("title");

    if (!categoryImage) {
      return Response.json({ message: "No files were uploaded." });
    }

    // const uploadPath = path.join("./public/images/", categoryImage.name);
    // const exist = await fs.stat(uploadPath);
    // if (exist.size) return Response.json(`${categoryImage.name} existed!`);

    const arrayBuffer = await categoryImage.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    await fs.writeFile(`./public/images/${categoryImage.name}`, buffer);

    await prisma.category.create({
      data: {
        title: categoryTitle,
        imageAddress: `/images/${categoryImage.name}`,
      },
    });
    return Response.json({ message: "Category created successfully" });
  } catch (error) {
    return Response.json({ message: error });
  }
}
