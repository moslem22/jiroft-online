"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import DeleteCase from "./DeleteCase";

const AdminViewCategory = () => {
  const [category, setCategory] = useState([]);
  const categoryId = useRef();

  useEffect(() => {
    async function getCategory() {
      const response = await axios.get(
        "http://localhost:3000/api/admin/getall-category"
      );
      const { category } = response.data;
      console.log(category);
      setCategory([...category]);
    }
    getCategory();
  }, []);

  // const deleteCategory =

  return (
    <div className="w-full h-96 overflow-y-scroll gap-1 grid grid-cols-3">
      {category.map((item) => {
        return (
          <div>
            <Image
              className="w-full"
              src={item.imageAddress}
              alt={item.title}
              width={100}
              height={100}
            />
            <div>
              <h3>{item.title}</h3>

              <DeleteCase ref={categoryId} item={item} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminViewCategory;
