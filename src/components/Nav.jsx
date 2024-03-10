import menu from "../assets/menu.svg";
import { FaPenToSquare } from "react-icons/fa6";

const Nav = () => {
  return (
    <nav className="px-4 py-2 flex items-center justify-between border-b-[#424242] border-b-solid border-b-[1px]">
      <img src={menu} alt="Menu Icon" className="w-[2rem]"/>
      <span className="text-lg font-semibold">
        MightyGPT <span className="text-[#B4B4B4]">3.5</span>
      </span>
      <FaPenToSquare className="text-[1.3rem]"/>
    </nav>
  );
};

export default Nav;
