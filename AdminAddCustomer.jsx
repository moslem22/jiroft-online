import axios from "axios";

const AdminAddCustomer = async () => {
  const response = await axios.get("http://localhost:3000/api");
  const { data } = response;
  return (
    <div>
      <form
        className="flex flex-col h-fit rounded border-4 ml-6 mt-2 border-gray-700 w-fit"
        action="/admin/add-customer"
        method="post"
      >
        <fieldset>
          <legend className="mb-4 float-left ml-2">ADD Customer</legend>
          <input
            className="mr-8 mb-1 rounded w-4/5 border-2 border-teal-800"
            type="text"
            name="firstName"
            placeholder="the first name of the customer"
          />
          <input
            className="mr-8 mb-1 rounded w-4/5 border-2 border-teal-800"
            type="text"
            name="lastName"
            placeholder="the last name of the customer"
          />
          <input
            className="mr-8 mb-1 rounded w-4/5 border-2 border-teal-800"
            type="text"
            name="userName"
            placeholder="user name of customer"
          />
          <input
            className="mr-8 mb-1 rounded w-4/5 border-2 border-teal-800"
            type="text"
            name="phoneNumber"
            placeholder="customer phone number"
          />
          <input
            className="mr-8 mb-1 rounded w-4/5 border-2 border-teal-800"
            type="password"
            name="password"
            placeholder="customer password"
          />
          <input
            className="mr-8 mb-1 rounded w-4/5 border-2 border-teal-800"
            type="submit"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default AdminAddCustomer;
