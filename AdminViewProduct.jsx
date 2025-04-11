import Image from "next/image";
import axios from "axios";

const AdminViewProduct = async () => {
  const response = await axios.get("http://localhost:3000/api");
  const { data } = response;
  return (
    <div className="w-full h-96 overflow-y-scroll gap-1 grid grid-cols-3">
      {data ? (
        data.forEach((product) => {
          <div>
            <Image
              className="w-full"
              src={product.imageAddress}
              alt={product.name}
            />
            <div>
              <h3>{product.name}</h3>
              <form action="/admin/delete-product" method="post">
                <input type="hidden" name="delete" value={product.id} />
                <input
                  className="bg-pink-700 text-white rounded"
                  type="submit"
                  value="حذف"
                />
              </form>
            </div>
          </div>;
        })
      ) : (
        <h1>There is no product!</h1>
      )}
    </div>
  );
};

export default AdminViewProduct;
