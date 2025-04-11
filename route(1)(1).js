import path, { dirname } from "node:path";
import fs from "node:fs/promises";

export async function POST(request) {
  try {
    let uploadPath;
    let uploadImage;

    const formData = await request.formData();
    uploadImage = formData.get("file");

    if (!uploadImage) {
      return Response.json("No files were uploaded.");
    }

    // uploadPath = path.join(__dirname,
    //   "../../../../../../public/images/",
    //   uploadImage.name
    // );
    // const exist = await fs.stat(uploadPath);
    // if (exist.size) return Response.json(`${uploadImage.name} existed!`);

    const arrayBuffer = await uploadImage.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    await fs.writeFile(`./public/images/${uploadImage.name}`, buffer);

    return Response.json(`${uploadImage.name} uploaded!`);
  } catch (error) {
    console.log(error);
    return Response.json(error);
  }
}
