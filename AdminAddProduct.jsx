import axios from "axios";

const AdminAddProduct = async () => {
  const response = await axios.get("http://localhost:3000/api");
  const { data } = response;
  return (
    <div>
      <form
        className="flex flex-col mr-2 mt-2 bg-red-800 rounded border-4 border-gray-700 w-fit h-fit"
        action="/admin/add-product"
        method="post"
        enctype="multipart/form-data"
      >
        <fieldset className="">
          <legend className="mb-4 float-left ml-2">ADD Product</legend>
          <input
            className="mr-4 mb-1 rounded w-4/5 border-2 border-teal-800"
            type="text"
            name="productName"
            placeholder="name of product"
          />
          <input
            className="mr-4 mb-1 rounded w-4/5 border-2 border-teal-800"
            type="text"
            name="productPrice"
            placeholder="price of product"
          />
          <input
            className="mr-4 mb-1 rounded w-4/5 border-2 border-teal-800"
            type="file"
            name="productImage"
            placeholder="Image of the product"
          />
          <input
            className="mr-4 mb-1 rounded w-4/5 border-2 border-teal-800"
            type="text"
            name="shopName"
            placeholder="the name of shop"
          />
          <input
            className="mr-4 mb-1 rounded w-4/5 border-2 border-teal-800"
            type="submit"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default AdminAddProduct;
