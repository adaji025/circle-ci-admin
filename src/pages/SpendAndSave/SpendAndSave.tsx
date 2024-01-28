import { TextInput } from "@mantine/core";
import Tabs from "./components/Tabs";
import { SearchIcon } from "../../components/SVGs/Svg";
import { PiArrowCircleDownLight } from "react-icons/pi";
import CandleIcon from "../../assets/svgs/icons/candle-2.svg";
const SpendAndSave = () => {
  return (
    <div className="main px-5 md:px-6 py-5 sm:py-10 mt-16 lg:mt-[unset]">
      <h3 className="font-medium text-xl">Spend & Save</h3>
      <p className="font-light text-sm">
        Create, Review & Manage all user and merchant activities on the Circle
        App
      </p>
      <div className="mt-5">
        <Tabs />
        <div className="flex flex-col gap-5 md:flex-row justify-between items-center mt-5 md:bg-[#9B9FC61F] p-2 rounded-xl">
          <TextInput
            placeholder="Search for investments by entering keywords, Trustees or Custodians"
            size="sm"
            className="w-full md:w-1/2 placeholder:text-xs order-2 md:order-1"
            leftSection={<SearchIcon />}
          />
          <div className="w-full md:w-1/2 flex justify-end md:justify-center gap-5 lg:gap-10 order-1 md:order-2">
            <div className="shadow py-2  flex gap-2 bg-white rounded-md px-10">
              <img src={CandleIcon} alt="fliter" />
              <div>Filter</div>
            </div>
            <div className="shadow py-2  flex gap-2 bg-white rounded-md px-10">
              <PiArrowCircleDownLight size={24} />
              <div>Export</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendAndSave;
