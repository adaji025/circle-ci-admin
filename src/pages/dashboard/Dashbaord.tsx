import DashboardMetrics from "./components/DashboardMetrics";
import MostSubscribe from "./components/MostSubscribe";
import RightSidebar from "./components/RightSidebar";
import TicketPerformance from "./components/TicketPerformance";

const Dashbaord = () => {
  return (
    <div className="main px-5 md:px-6 py-5 sm:py-16 flex flex-col xl:flex-row gap-10  justify-between">
      <div className="flex-1 w-full xl:w-4/6">
        <div className="text-circle-black mb-5">
          <h3 className="font-medium text-xl">Hello Wasiu</h3>
          <p className="font-light text-sm">Welcome Back</p>
        </div>
        <DashboardMetrics />
        <MostSubscribe />
        <TicketPerformance />
      </div>
      <div className="w-full xl:w-2/6">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Dashbaord;
