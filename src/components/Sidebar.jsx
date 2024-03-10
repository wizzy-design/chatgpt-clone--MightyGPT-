import { FaPenToSquare } from "react-icons/fa6";
import icon from "../assets/chatgpt.svg";

const Sidebar = () => {
  return (
    
      <section className="lg:flex hidden flex-col justify-between bg-[#202123] h-screen w-[244px]">
        <button className="m-2.5 p-2.5 bg-transparent rounded-[5px] border-solid border-[0.5px] border-[rgba(255_255_255_0.5)]">
          <img src={icon} alt="ChatGPT logo" />
          New chat
          <span>
            <FaPenToSquare />
          </span>
        </button>

        {/* Chat history */}
        <ul>
          <li></li>
        </ul>

        {/* Footer bar */}
        <nav className="m-2.5 p-2.5 border-t-solid border-t-[0.5px] border-t-[rgba(255_255_255_0.5)]">
          <p>Made by Mighty</p>
        </nav>
      </section>
    
  );
};

export default Sidebar;
