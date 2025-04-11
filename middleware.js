import multer from "multer";
import { NextResponse } from "next/server";

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, "public/images");
  },
  filename: (request, file, cb) => {
    cb(null, file.uploadImage);
  },
});
const upload = multer({ storage });



export async function middleware(request) {
  let uploadImage;
  const formData = await request.formData();
  uploadImage = formData.get("file");
  console.log(uploadImage.name);
  if (!uploadImage) {
    return Response.json("No files were uploaded.");
  }
  upload.single("file");
  return NextResponse.redirect(new URL("/admin/upload-image", request.url));
}

// export const config = {
//   matcher: "/admin/upload-image",
// };
