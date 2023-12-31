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
import { useSelector } from "react-redux";
import { UserType } from "../../types/auth";
import { RootState } from "../../redux/store";
import { useDisclosure } from "@mantine/hooks";
import { Fragment } from "react";
import ConfirmationLogout from "./ConfirmationLogout";

type Props = {
  openMobileNav?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ openMobileNav }: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const userData: UserType = useSelector(
    (state: RootState) => state.user.userData
  );

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
    <Fragment>
      <ConfirmationLogout opened={opened} close={close} />
      <div className="w-[250px] border-r">
        <Group justify="center">
          <img src={Logo} alt="" className="mt-10 w-[100px]" />
        </Group>
        <div className="grid gap-5 mt-10">
          {route.map((route) => (
            <div
              className="flex gap-6 items-center cursor-pointer"
              onClick={() => {
                navigate(route.route);
                openMobileNav && openMobileNav(false);
              }}
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

        <div className="mt-5 px-8 ">
          <hr />
        </div>

        <div
          className="flex gap-6 items-center cursor-pointer"
          onClick={() => {
            navigate("/users-admin");
            openMobileNav && openMobileNav(false);
          }}
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

        <div className="mt-10 bg-[#D9D9D9] p-2 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Avatar size="lg" />
            <div>
              <h2 className="font-bold text-black text-sm">
                {userData.first_name} {userData.last_name}
              </h2>
              <div className="text-xs">{userData.email}</div>
            </div>
          </div>
          <Menu shadow="xl" width={200} position="left">
            <Menu.Target>
              <Button
                size="sm"
                rightSection={<SlOptionsVertical size={30} color="#C0C0C0" />}
              ></Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item>Change Password</Menu.Item>
              <Menu.Item>Change DP</Menu.Item>
              <Menu.Item color="#FF0030" onClick={open}>
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
