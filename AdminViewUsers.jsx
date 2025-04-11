import axios from "axios";

const AdminViewUsers = async () => {
  const response = await axios.get("http://localhost:3000/api");
  const { data } = response;
  return (
    <div className="w-full h-96 overflow-y-scroll gap-1 grid grid-cols-7 border-t-2">
      {data ? (
        data.forEach((item) => {
          <div className="text-white bg-violet-950 p-2 h-fit rounded-md">
            <h3>{item.userName}</h3>
            <h3>{item.firstName}</h3>
            <h3>{item.lastName}</h3>
            <h3>{item.phoneNumber}</h3>
            <form action="/admin/delete-user" method="post">
              <input type="hidden" name="userId" value={item.id} />
              <input
                className="bg-pink-700 text-white rounded"
                type="submit"
                value="حذف"
              />
            </form>
            <form action="/admin/get-user-todolist" method="post">
              <input type="hidden" name="userId" value={item.id} />
              <input
                className="bg-pink-700 text-white rounded"
                type="submit"
                value="لیست های کاربر"
              />
            </form>
          </div>;
        })
      ) : (
        <h1>There is no user!</h1>
      )}
    </div>
  );
};

export default AdminViewUsers;
