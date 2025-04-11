"use client";

import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    async function getCategory() {
      const response = await axios.get("http://localhost:3000/api");
      const { data } = response;
      console.log(data)
      setCategory([...data]);
    }
    getCategory();
  }, []);

  return (
    <div className="w-full mx-2 grid grid-cols-1 gap-1 sm:grid sm:grid-cols-2   md:grid md:grid-cols-4 lg:grid lg:grid-cols-5">
      
        {category.map((item) => {
        return (<div className=" w-fit mx-auto p-1">

            <Image
              className="w-full rounded-md mb-1"
              src={item.imageAddress}
              alt={item.title}
              width={200}
              height={200}
            />
            <span className="lg:text-base sm:text-xs md:text-sm mr-auto cursor-default border-b-4 p-1 h-fit border-y-amber-400">
              1
            </span>
            <span className="lg:text-base sm:text-xs md:text-sm mr-auto cursor-default">
              {item.title}
            </span>
            <form className="inline" action="/shops-page" method="post">
              <input type="hidden" name="categoryId" value={item.id} />
              <button
                className="bg-pink-800 lg:hover:bg-yellow-300 sm:text-xs md:text-sm lg:text-base p-1 text-white rounded ml-3 my-1 float-left"
                type="submit"
              >
                مشاهده
              </button>
            </form>
          </div>)
        })}
      
    </div>
  );
}
