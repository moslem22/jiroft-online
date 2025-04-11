// import Image from "next/image";
import AdminViewCategory from "@/components/AdminViewCategory";
import AdminViewShop from "@/components/AdminViewShop";
import AdminViewProduct from "@/components/AdminViewProduct";
import AdminViewCustomer from "@/components/AdminViewCustomer";
import AdminViewUsers from "@/components/AdminViewUsers";
import AdminAddCategory from "@/components/AdminAddCategory";
import AdminAddShop from "@/components/AdminAddShop";
import AdminUploadImage from "@/components/AdminUploadImage";
import AdminAddProduct from "@/components/AdminAddProduct";
import AdminAddCustomer from "@/components/AdminAddCustomer";
// import { Suspense } from "react";
const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <AdminViewCategory />
        {/* <AdminViewShop /> */}
        {/* <AdminViewProduct /> */}
        {/* <AdminViewCustomer /> */}
        {/* <AdminViewUsers /> */}
      </div>
      <div className="grid grid-cols-4 gap-1">
        <AdminAddCategory />
        <AdminAddShop />
        <AdminUploadImage />
        <AdminAddProduct />
        <AdminAddCustomer />
      </div>
    </>
  );
};

export default Dashboard;
