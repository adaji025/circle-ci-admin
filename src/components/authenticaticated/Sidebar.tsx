import { Avatar, Button, Group, Menu } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import { SlOptionsVertical } from "react-icons/sl";
import Logo from "../../assets/svgs/circle-ci.svg";
import HomeIcome from "../../assets/svgs/sidebar/home.svg";
import MoneyIcon from "../../assets/svgs/sidebar/moneys.svg";
import BubbleIcon from "../../assets/svgs/sidebar/bubble.svg";
import PeopleIcon from "../../assets/svgs/sidebar/people.svg";
import GalleryIcon from "../../assets/svgs/sidebar/gallery-export.svg";
import SupportIcon from "../../assets/svgs/sidebar/device-message.svg";
import UserIcon from "../../assets/svgs/sidebar/user-octagon.svg";

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
    <div className="h-screen w-[250px] border-r">
      <Group justify="center">
        <img src={Logo} alt="" className="mt-10 w-[100px]" />
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

      <div className="mt-5 mb-10 px-8 ">
        <hr />
      </div>

      <div
        className="flex gap-6 items-center cursor-pointer"
        onClick={() => navigate("/users-admin")}
      >
        <div
          className={`h-[40px] w-[8px] rounded-r-lg ${
            location.pathname === "/users-admin" && "bg-circle-blue-two"
          }`}
        />
        <div className="flex gap-3 items-center">
          <img src={UserIcon} alt="user admin" />
          <div>Users admin</div>
        </div>
      </div>

      <div className="mt-16 bg-[#D9D9D9] p-2 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Avatar size="lg" />
          <div>
            <h2 className="font-bold text-black text-sm">John Doe</h2>
            <div className="text-xs">sbxsn@circle.com</div>
          </div>
        </div>
        <Menu shadow="md" width={200} position="left">
          <Menu.Target>
            <Button size="sm" rightSection={<SlOptionsVertical size={30} color="#C0C0C0" />}>
              
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>Change Password</Menu.Item>
            <Menu.Item>Change DP</Menu.Item>
            <Menu.Item color="#FF0030">Logout</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
      {/* <div className="text-transparent">
        hello
      </div> */}
    </div>
  );
};

export default Sidebar;
