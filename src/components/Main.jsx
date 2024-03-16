/* eslint-disable react/prop-types */
import icon from "../assets/chatgpt.svg";
import { FaArrowUp } from "react-icons/fa";
import Nav from "./Nav";

const Main = ({
  open,
  setOpen,
  getMessages,
  inputValue,
  handleInputChange,
  rows,
  currentTitle,
  currentChat,
}) => {
  return (
    <>
      <section className="relative w-full h-screen">
        {/* Nav Bar */}
        <Nav open={open} setOpen={setOpen} />

        {/* lg:Title */}
        <header className="hidden text-lg font-semibold lg:block lg:p-5 lg:px-6">
          MightyGPT <span className="text-[#B4B4B4]">3.5</span>
        </header>

        {/* Hero Section */}
        {!currentTitle ? (
          <div className="pt-[10rem] lg:pt-[8rem]">
            <div className="flex justify-center mb-3">
              <img
                className="w-[3rem] p-2 bg-white rounded-full"
                src={icon}
                alt="ChatGPT icon"
              />
            </div>
            <p className="mb-5 text-2xl font-medium text-center text-[#ECECEC]">
              How can I help you today?
            </p>
          </div>
        ) : (
          ""
        )}

        {/* Chat feed */}
        {currentChat && (
          <ul className="w-full h-screen pt-3 pl-5 overflow-scroll lg:pl-16 lg:text-lg lg:w-[90%]">
            {currentChat?.map((chatMessage, index) => (
              <li key={index} className="flex w-full p-5">
                <p className="capitalize role">{chatMessage.role}</p>
                <p className="px-10 italic">{chatMessage.content}</p>
              </li>
            ))}
          </ul>
        )}

        {/* Bottom Section */}
        <div className="absolute bottom-0 flex flex-col items-center justify-center w-full px-3 pb-2">
          {/* Message box */}
          <div className="relative w-full max-w-[650px]">
            <textarea
              className="placeholder:text-[#8B8B8B] w-full py-2 min-h-4 max-h-[10rem] rounded-2xl border-solid border-[1px] border-[#424242] bg-[#212121] px-[15px] focus:outline-0 focus:border-[#8b8989] shadow-[rgba(0,_0,_0,_0.04)_0px_3px_5px]"
              placeholder="Message MightyGPT..."
              value={inputValue}
              rows={rows}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              onClick={getMessages}
              className={`absolute bottom-[12px] right-2 p-1.5 rounded-lg ${
                inputValue?.length > 0 ? "bg-white" : "bg-[#383838]"
              }`}
            >
              <FaArrowUp
                className={`${
                  inputValue?.length > 0 ? "fill-black" : "fill-[#1e1e1e]"
                }`}
              />
            </button>
          </div>

          {/* Footer note */}
          <small className="py-0.5 text-xs text-center text-[#AFAFAF]">
            MightyGPT can make mistakes. Consider checking important
            information.
          </small>
        </div>
      </section>
    </>
  );
};

export default Main;
