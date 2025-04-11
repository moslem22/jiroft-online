import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
      
      try {
            const category = await prisma.category.findMany();
            return Response.json({category: category});
      } catch (error) {
            return Response.json({error: error});
      }
}