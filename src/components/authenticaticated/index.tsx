import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashbaord from "../../pages/dashboard/Dashbaord";

const Authenticated = () => {
  return (
    <div className="flex w-full items-start">
      <div className="sticky top-0 hidden lg:flex">
        <Sidebar />
      </div>
      <main className="flex flex-1">
        <Routes>
          <Route path="/dashboard" element={<Dashbaord />} />
        </Routes>
      </main>
    </div>
  );
};

export default Authenticated;
