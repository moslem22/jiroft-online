import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET() {
  try {
    const category = await prisma.category.findMany({
      orderBy: {
        title: "asc",
      },
    });

    return Response.json(category);
  } catch (error) {
    console.log(error);
  }
}
