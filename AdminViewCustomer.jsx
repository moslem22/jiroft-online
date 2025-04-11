import axios from "axios";

const AdminViewCustomer = async () => {
  const response = await axios.get("http://localhost:3000/api");
  const { data } = response;
  return (
    <div className="w-full h-96 overflow-y-scroll gap-1 grid grid-cols-7 border-t-2">
      {data ? (
        data.forEach((item) => {
          <div className="text-white bg-violet-950 p-2 rounded-md h-fit">
            <h3>{item.userName}</h3>
            <h3>{item.firstName}</h3>
            <h3>{item.lastName}</h3>
            <h3>{item.phoneNumber}</h3>
            <form action="/admin/delete-customer" method="post">
              <input type="hidden" name="customerId" value={item.id} />
              <input
                className="bg-pink-700 text-white rounded"
                type="submit"
                value="حذف"
              />
            </form>
            <form
              className="mt-2"
              action="/admin/get-customer-shops"
              method="post"
            >
              <input type="hidden" name="customerId" value={item.id} />
              <input
                className="bg-pink-700 text-white rounded"
                type="submit"
                value="فروشگاه های مشتری"
              />
            </form>
          </div>;
        })
      ) : (
        <h1>There is no customer!</h1>
      )}
    </div>
  );
};

export default AdminViewCustomer;
