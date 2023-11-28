import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";

interface IconsType {
  name: "Home" | "Friends" | "Commercial" | "Profile" | "Messages";
  icon: JSX.Element;
}

export default function iconValue() {
  const result: IconsType[] = [
    { name: "Home", icon: <AiFillHome size={35} color={"#325928"} /> },
    { name: "Friends", icon: <FaUserFriends size={35} color={"#325928"} /> },
    { name: "Commercial", icon: <FaShop size={35} color={"#325928"} /> },
    {
      name: "Profile",
      icon: <FaUserCircle size={35} color={"#325928"}></FaUserCircle>,
    },
    {
      name: "Messages",
      icon: <TbMessages size={35} color={"#325928"}></TbMessages>,
    },
  ];

  return result;
}
