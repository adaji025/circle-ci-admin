import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashbaord from "../../pages/dashboard/Dashbaord";

const Authenticated = () => {
  return (
    <div className="flex items-start">
      <div className="sticky top-0">
        <Sidebar />
      </div>
      <main className="flex">
        <Routes>
          <Route path="/" element={<Dashbaord />} />
        </Routes>
      </main>
    </div>
  );
};

export default Authenticated;
