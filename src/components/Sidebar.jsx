/* eslint-disable react/prop-types */
import icon from "../assets/chatgpt.svg";
import pen from "../assets/pen.svg";

const Sidebar = ({ open }) => {
  return (
    <section
      className={`${
        open ? "translate-x-0" : "translate-x-full hidden"
      } z-10 absolute flex-col items-center justify-between bg-[#171717] h-screen w-[70%] lg:static lg:block lg:z-0 lg:translate-x-0 lg:w-[20rem]`}
    >
      <button className="flex m-2.5 py-2 px-1.5 rounded-xl w-[92%] justify-between items-center hover:bg-[#242424] focus:bg-[#242424]">
        <span className="flex items-center text-sm font-semibold gap-x-2">
          <img
            src={icon}
            alt="ChatGPT logo"
            className="w-[1.7rem] p-1 rounded-full bg-white "
          />
          New chat
        </span>
        <span>
          <img src={pen} alt="pen icon" className="w-[1.3rem]" />
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
