import { RingProgress, Text } from "@mantine/core";
import HandImage from "../../../assets/images/hand-background-image.png";
import { IoChevronForwardSharp } from "react-icons/io5";

const TicketPerformance = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="bg-[#E6F5FA] w-full flex flex-col rounded-[10px] relative">
        <h3 className="text-sm text-center py-6 font-normal mb-2">
          Tickets & Supports
        </h3>
        <div className="flex gap-2 pl-4">
          <div className="flex-[0_0_50%]">
            <div className="mb-2">
              <h3 className="font-semibold text-3xl">2,340</h3>
              <span className="text-sm text-gray-500 font-normal">
                Total Amount Invested
              </span>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-3xl text-[#D61515]">121</h3>
              <span className="text-sm text-gray-500 font-normal">
                Open Tickets
              </span>
            </div>
            <div className="flex mb-6">
              <a href="#" className="flex items-center">
                <span className="text-sm font-normal text-gray-500">
                  View all
                </span>
                <span>
                  <IoChevronForwardSharp />
                </span>
              </a>
            </div>
          </div>
          <div className="absolute right-0 bottom-0">
            <img src={HandImage} alt="" className="w-[300px]" />
          </div>
        </div>
      </div>

      <div className="bg-[#EEFCEF] w-full flex flex-col rounded-[10px]">
        <h3 className="text-sm text-center py-6 font-normal mb-2">
          Tickets & Supports
        </h3>
        <div className="flex gap-2">
          <div className="flex-[0_0_50%] order-2 pr-2">
            <div className="mb-2 flex flex-col text-center justify-center">
              <h3 className="font-semibold text-base underline">12</h3>
              <span className="text-sm text-gray-500 font-normal">
                Down APIs
              </span>
            </div>
            <div className="mb-5 flex flex-col text-center justify-center">
              <h3 className="font-semibold text-base underline">121</h3>
              <span className="text-sm text-gray-500 font-normal">
                Open Tickets
              </span>
            </div>
            <div className="flex justify-center mb-6">
              <a href="#" className="flex items-center">
                <span className="text-sm font-normal text-gray-500">
                  View all
                </span>
                <span>
                  <IoChevronForwardSharp />
                </span>
              </a>
            </div>
          </div>
          <div className="flex-[0_0_50%] relative order-1">
            <RingProgress
              label={
                <Text size="xs" ta="center">
                  <Text size="xl" fw={900}>
                    91
                  </Text>
                  <Text>Uptime</Text>
                </Text>
              }
              sections={[{ value: 80, color: "green" }]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPerformance;
