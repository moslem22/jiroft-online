"use client";

import { useRef } from "react";
import axios from "axios";

const AdminUploadImage = () => {
  const inputFile = useRef(null);
  const handelUpload = () => {
    axios
      .postForm("http://localhost:3000/api/admin/upload-image", {
        'file': inputFile.current.files[0],
      })
      .then((response) => {
        alert(response.data);
      })
      .catch((err) => alert(err));
  };
  return (
    <div>
      <input
        className="mr-8 mb-1 rounded w-4/5 border-2 border-teal-800"
        type="file"
        name="uploadImage"
        ref={inputFile}
        autoFocus
      />
      <button
        className="mr-8 mb-1 rounded bg-sky-500 w-4/5 border-2 border-teal-800"
        type="button"
        onClick={handelUpload}
      >send</button>
    </div>
  );
};

export default AdminUploadImage;
