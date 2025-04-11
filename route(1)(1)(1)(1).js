import { PrismaClient } from "@prisma/client";
import fs from "node:fs/promises";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    const storeImage = formData.get(file);
    const data = {
       name: formData.get(nameS),
       owner: formData.get(owner),
       imgUrl: `/images/${storeImage.name}`,
       address: formData.get(address),
       contact: formData.get(contact),
       location: formData.get(location),
       category: {
        connect: {
          title: formData.get(category),
        },
       },
    }
    console.log(data)
    if (!storeImage) {
      return Response.json({ message: "No files were uploaded." });
    }

    const arrayBuffer = await storeImage.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    await fs.writeFile(`./public/images/${storeImage.name}`, buffer);
    
    await prisma.store.create({data})


      return Response.json({ message: "shop created successfully" });
     
  
  } catch (err) {
    return Response.json({ message: err });
    
  }
}

// https://github.com/moslem22/Next-jiroftonline.git