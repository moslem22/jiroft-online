import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const formData = await request.formData();
    const id = formData.get("id");
    await prisma.category.delete({
      where: {
        id: id,
      },
    });
    return Response.json("deleted!");
  } catch (error) {
    return Response.json(error);
  }
}
