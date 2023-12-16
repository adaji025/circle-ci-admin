import { Group } from "@mantine/core";
import Logo from "../../assets/svgs/circle-ci.svg";
import HomeIcome from "../../assets/svgs/sidebar/home.svg";
import MoneyIcon from "../../assets/svgs/sidebar/moneys.svg";
import BubbleIcon from "../../assets/svgs/sidebar/bubble.svg";
import PeopleIcon from "../../assets/svgs/sidebar/people.svg";
import GalleryIcon from "../../assets/svgs/sidebar/gallery-export.svg";
import SupportIcon from "../../assets/svgs/sidebar/device-message.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const route = [
    {
      title: "Home",
      icon: HomeIcome,
      route: "/dashboard",
    },
    {
      title: "Spend & Save",
      icon: MoneyIcon,
      route: "/spend-and-save",
    },
    {
      title: "Circles",
      icon: BubbleIcon,
      route: "/circles",
    },
    {
      title: "Circlers",
      icon: PeopleIcon,
      route: "/circlers",
    },
    {
      title: "Investments",
      icon: MoneyIcon,
      route: "/investments",
    },
    {
      title: "Content Management",
      icon: GalleryIcon,
      route: "/content-management",
    },
    {
      title: "Support",
      icon: SupportIcon,
      route: "/support",
    },
  ];
  return (
    <div className="h-screen w-[250px] border-r ">
      <Group justify="center">
        <img src={Logo} alt="" className="mt-5 w-[100px]" />
      </Group>
      <div className="grid gap-5 mt-10">
        {route.map((route) => (
          <div
            className="flex gap-6 items-center cursor-pointer"
            onClick={() => navigate(route.route)}
          >
            <div
              className={`h-[40px] w-[8px] rounded-r-lg ${
                location.pathname === route.route && "bg-circle-blue-two"
              }`}
            />
            <div className="flex gap-3 items-center">
              <img src={route.icon} alt={route.title} />
              <div>{route.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
