import { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashbaord from "../../pages/dashboard/Dashbaord";
import MobileSidebar from "./MobileSidebar";
import Header from "../Header";

const Authenticated = () => {
  const [mobileNav, openMobileNav] = useState(true);
  return (
    <Fragment>
      <MobileSidebar {...{ mobileNav, openMobileNav }} />
      <div className="flex w-full items-start">
        <div className="sticky top-0 hidden lg:flex">
          <Sidebar />
        </div>
        <Header mobileNav={mobileNav} openMobileNav={openMobileNav} />
        <main className="flex flex-1">
          <Routes>
            <Route path="/dashboard" element={<Dashbaord />} />
          </Routes>
        </main>
      </div>
    </Fragment>
  );
};

export default Authenticated;
