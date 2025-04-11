"use client";

import axios from "axios";
import { useRef } from "react";
const AdminAddShop = async () => {
  const storeName = useRef(null);
  const owner = useRef(null);
  const address = useRef(null);
  const contact = useRef(null);
  const location = useRef(null);
  const image = useRef(null);
  const category = useRef(null);

  const addShopHandler = () => {
    axios
      .post("http://localhost:3000/api/admin/add-shop", {
        nameS: storeName.current.value,
        owner: owner.current.value,
        file: image.current.files[0],
        address: address.current.value,
        contact: contact.current.value,
        location: location.current.value,
        category: category.current.value,
      })
      .then((response) => {
        console.log(response.data.message.name)
        alert(response.data.message)})
      .catch((err) => alert(err));
  };

  return (
    <div className="text-black">
      <legend className="mb-4 float-left ml-2">ADD Shop</legend>
      <input
        className="mr-8 mb-1 rounded w-4/5 border-2 border-teal-800"
        type="text"
        name="name"
        placeholder="the name of the store"
        ref={storeName}
      />
      <input
        className="mr-8 mb-1 rounded w-4/5 border-2 border-teal-800"
        type="text"
        name="owner"
        placeholder="owner"
        ref={owner}
      />
      <input
        className="mr-8 mb-1 rounded w-4/5 border-2 border-teal-800"
        type="text"
        name="address"
        placeholder="address"
        ref={address}
      />
      <input
        className="mr-8 mb-1 rounded w-4/5 border-2 border-teal-800"
        type="text"
        name="contact"
        placeholder="contact"
        ref={contact}
      />
      <input
        className="mr-8 mb-1 rounded w-4/5 border-2 border-teal-800"
        type="text"
        name="location"
        placeholder="location"
        ref={location}
      />
      <input
        className="mr-8 mb-1 rounded w-4/5 border-2 border-teal-800"
        type="text"
        name="category"
        placeholder="category"
        ref={category}
      />
      
      <input
        className="mr-8 mb-1 rounded w-4/5 border-2 border-teal-800"
        type="file"
        name="image"
        placeholder="Image of the store"
        ref={image}
      />

      <button
        className="mr-8 mb-1 bg-sky-600 rounded w-4/5 border-2 border-teal-800"
        type="button"
        onClick={addShopHandler}
      >
        send
      </button>
    </div>
  );
};

export default AdminAddShop;
