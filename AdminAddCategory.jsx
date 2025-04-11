"use client"

import { useRef } from "react";
import axios from "axios";

const AdminAddCategory = async () => {
  const inputFileImage = useRef(null);
  const inputFileTitle = useRef(null);
  const handelUpload = () => {
    axios
      .postForm("http://localhost:3000/api/admin/add-category", {
        'file': inputFileImage.current.files[0],
        'title': inputFileTitle.current.value,
      })
      .then((response) => {
        console.log(response)
        alert(response.data.message);
      })
      .catch((err) => alert(err));
  };
  return (
    <div>
      
        
          <legend className="mb-4 float-left ml-2">ADD Category</legend>
          <input
            className="mr-4 text-slate-900 mb-1 rounded w-4/5 border-2 border-teal-800"
            type="text"
            name="categoryTitle"
            placeholder="title of category"
            ref={inputFileTitle}
          />
          <input
            className="mr-4 mb-1 rounded w-4/5 border-2 border-teal-800"
            type="file"
            name="categoryImage"
            placeholder="Image of the category"
            ref={inputFileImage}
          />
          <button
        className="mr-8 mb-1 rounded bg-sky-500 w-4/5 border-2 border-teal-800"
        type="button"
        onClick={handelUpload}
      >send</button>
      
    </div>
  );
};

export default AdminAddCategory;
