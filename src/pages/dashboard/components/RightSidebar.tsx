import { Avatar } from "@mantine/core";
import { useState } from "react";
import {
  RandomSVGEight,
  RandomSVGEleven,
  RandomSVGFive,
  RandomSVGFour,
  RandomSVGFourteen,
  RandomSVGNine,
  RandomSVGOne,
  RandomSVGSeven,
  RandomSVGSix,
  RandomSVGTen,
  RandomSVGThirteen,
  RandomSVGThree,
  RandomSVGTwelve,
  RandomSVGTwo,
} from "../../../components/SVGs/Svg";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
const RightSidebar = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <aside className="flex w-full space-y-4">
      <div className="bg-black w-full rounded-[10px]">
        <div className="block">
          <nav className="-mb-px flex px-6" aria-label="Tabs">
            <div className="w-full flex border-b border-gray-50">
              <div
                className={classNames(
                  activeTab === 1
                    ? "after:content-[''] after:block after:absolute after:bottom-0 after:z-50 after:w-full after:h-2 after:rounded-tl-md after:rounded-tr-md after:bg-white text-white"
                    : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-400",
                  "w-1/2 py-4 text-center relative font-medium text-sm cursor-pointer"
                )}
                onClick={() => handleTabClick(1)}
                aria-current={activeTab === 1 ? "page" : undefined}
              >
                Top Circlers
              </div>
              <div
                className={classNames(
                  activeTab === 2
                    ? "after:content-[''] after:block after:absolute after:bottom-0 after:z-50 after:w-full after:h-2 after:rounded-tl-md after:rounded-tr-md after:bg-white text-white"
                    : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-400",
                  "w-1/2 py-4 text-center relative font-medium text-sm cursor-pointer"
                )}
                onClick={() => handleTabClick(2)}
                aria-current={activeTab === 2 ? "page" : undefined}
              >
                Top Investors
              </div>
            </div>
          </nav>

          <div className="text-white">
            <div className="flex flex-col gap-4 divide-y">
              {activeTab === 1 && (
                <div className="">
                  <div className="flex flex-col my-4 justify-between">
                    {[...Array(6)].map((_, idx) => (
                      <div key={idx} className="flex justify-between my-3 px-4">
                        <div className="flex items-center">
                          <Avatar />
                          <div className="ml-2">
                            <span className="text-sm">Shagari Aminu</span>
                            <h3 className="text-lg font-medium">
                              <span className="text-sm font-normal">N</span>
                              <span>12,891,000</span>
                            </h3>
                          </div>
                        </div>
                        <div className="flex items-end text-sm">
                          <span className="font-semibold">17</span>
                          <span className="ml-1">Circlers</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a href="#" className="flex justify-center font-normal">
                    <span className="">Full Leaderboard</span>
                    <span className="ml-1"></span>
                  </a>
                  <div></div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="">
                  <div className="">
                    <div className="flex flex-col my-4 justify-between">
                      {[...Array(6)].map((_, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between my-3 px-4"
                        >
                          <div className="flex items-center">
                            <Avatar />
                            <div className="ml-2">
                              <span className="text-sm">name</span>
                              <h3 className="text-lg font-medium">
                                <span className="text-sm font-normal">N</span>
                                <span>12,891,000</span>
                              </h3>
                            </div>
                          </div>
                          <div className="flex items-end text-sm">
                            <span className="font-semibold">3</span>
                            <span className="ml-1">investments</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a href="#" className="flex justify-center font-normal">
                      <span className="">Full Leaderboard</span>
                      <span className="ml-1"></span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative mt-4 flex h-60 overflow-hidden p-4 ">
          <div className="RandomIcon_container relative w-full">
            <RandomSVGOne />
            <RandomSVGTwo />
            <RandomSVGThree />
            <RandomSVGFour />
            <RandomSVGFive />
            <RandomSVGSix />
            <RandomSVGSeven />
            <RandomSVGEight />
            <RandomSVGNine />
            <RandomSVGTen />
            <RandomSVGEleven />
            <RandomSVGTwelve />
            <RandomSVGThirteen />
            <RandomSVGFourteen />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
