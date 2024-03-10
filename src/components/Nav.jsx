/* eslint-disable react/prop-types */
import menu from "../assets/menu.svg";
import { FaPenToSquare } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Nav = ({ open, setOpen }) => {
  return (
    <nav className="relative px-4 py-2 flex items-center justify-between border-b-[#424242] border-b-solid border-b-[1px]">
      <button onClick={() => setOpen(true)}>
        <img src={menu} alt="Menu Icon" className="w-[2rem]" />
      </button>
      <span className="text-lg font-semibold">
        MightyGPT <span className="text-[#B4B4B4]">3.5</span>
      </span>
      <button>
        <FaPenToSquare className="text-[1.3rem]" />
      </button>

      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className={`${
          open ? "block" : "hidden"
        } border-solid border-[2px] border-white absolute right-8 top-4 p-2`}
      >
        <IoMdClose className="text-xl" />
      </button>
    </nav>
  );
};

export default Nav;
