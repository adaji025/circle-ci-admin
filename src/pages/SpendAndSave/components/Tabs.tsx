import { NavLink } from "react-router-dom";
import { navigationItems } from "../../../config";

const Tabs = () => {
  return (
    <div>
      <div className="block">
        <nav
          className="relative z-0 rounded-[10px] bg-[#9B9FC61F] grid grid-cols-3  sm:grid-cols-5 "
          aria-label="Tabs"
        >
          {navigationItems.circles.map((tab) => (
            <NavLink
              key={tab.name}
              to={tab.href}
              className={({ isActive }) =>
                isActive
                  ? "bg-circle-gray-2"
                  : "py-4 px-4 text-sm font-medium text-center rounded-md"
              }
            >
              <div className="flex flex-col justify-center p-4 rounded-[10px] hover:bg-gray-300">
                <span className="text-lg md:text-3xl font-semibold">{tab.amount}</span>
                <span className="text-xs md:text-sm font-light">{tab.name}</span>
              </div>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
