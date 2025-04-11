import Image from "next/image";
import axios from "axios";

const AdminViewShop = async () => {
  const response = await axios.get("http://localhost:3000/api");
  const { data } = response;
  return (
    <div className="w-full h-96 overflow-y-scroll gap-1 grid grid-cols-3">
      {data ? data.forEach((shop) => {
            <div>
              <Image
                className="w-full"
                src={shop.imageAddress}
                alt={shop.name}
              />
              <div>
                <h3>{shop.name}</h3>
                <form
                  className="inline"
                  action="/admin/delete-shop"
                  method="post"
                >
                  <input type="hidden" name="delete" value={shop.id} />
                  <input
                    type="hidden"
                    name="shopImage"
                    value={shop.imageAddress}
                  />
                  <input
                    className="bg-pink-700 text-white rounded"
                    type="submit"
                    value="حذف"
                  />
                </form>
                <form
                  className="inline ml-0"
                  action="/admin/get-one-shop-products"
                  method="post"
                >
                  <input type="hidden" name="products" value={shop.name} />
                  <input
                    className="bg-pink-700 text-white rounded"
                    type="submit"
                    value="محصولات"
                  />
                </form>
              </div>
            </div>;
          })
       : (
        <h1>There is no shop!</h1>
      )}
    </div>
  )
};

export default AdminViewShop;
