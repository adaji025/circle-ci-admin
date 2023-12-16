import PositiveTrends from "../../../assets/svgs/positive-trends.svg";
import { IoChevronForwardSharp } from "react-icons/io5";

const MostSubscribe = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="bg-[#FFEEE2] w-full flex flex-col px-4 py-6 rounded-[10px]">
        <h3 className="text-sm text-center font-normal mb-2">
          Most Subscribed Investment
        </h3>
        <div className="text-center my-6">
          <div className="flex justify-center items-center">
            <span className="font-light text-xl">N</span>
            <h1 className="font-bold text-3xl">50,678,980</h1>
            <img src={PositiveTrends} alt="" />
          </div>
          <span className="text-sm text-gray-500 font-normal">
            Total Amount Invested
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <div className="flex">
            <div className=" w-11 h-11 bg-[#5200FF] rounded-full mr-2"></div>
            <div>
              <h3 className="font-semibold text-lg">Investment Title</h3>
              <span className="text-sm text-gray-500">52 Total Investors</span>
            </div>
          </div>
          <div>
            <span className="text-right">9.5% p/a</span>
          </div>
        </div>
        <div className="flex justify-end">
          <a href="#" className="flex items-center">
            <span className="text-sm font-normal text-gray-500">View all</span>
            <IoChevronForwardSharp />
          </a>
        </div>
      </div>
      <div className="bg-[#F4F5F9] w-full flex flex-col px-4 py-6 rounded-[10px]">
        <h3 className="text-sm text-center font-normal mb-2">
          Top Performing Circle
        </h3>
        <div className="text-center my-6">
          <div className="flex justify-center gap-2 items-center">
            <span className="font-light text-xl">N</span>
            <h1 className="font-bold text-3xl">94,456,980</h1>
            <img src={PositiveTrends} alt="" />
          </div>
          <span className="text-sm text-gray-500 font-normal">
            Total Amount Saved
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <div className="flex">
            <div className=" w-11 h-11 bg-[#FF5D5D] rounded-full mr-2"></div>
            <div>
              <h3 className="font-semibold text-lg">Red Devils 4 Life</h3>
              <span className="text-sm text-gray-500">123 Total Circlers</span>
            </div>
          </div>
          <div>
            <span className="text-right">10.2% p/a</span>
          </div>
        </div>
        <div className="flex justify-end">
          <a href="#" className="flex items-center">
            <span className="text-sm font-normal text-gray-500">View all</span>
            <IoChevronForwardSharp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MostSubscribe;
