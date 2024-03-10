import icon from "../assets/chatgpt.svg";
import { FaArrowUp } from "react-icons/fa";
import Nav from "./Nav";
import { useState } from "react";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [rows, setRows] = useState(1); // Initial number of rows

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    // Calculate the number of rows based on the content
    const lines = e.target.value.split("\n").length;
    setRows(lines <= 1 ? 1 : lines);
  };

  return (
    <section className="relative w-full h-screen">
      {/* Nav Bar */}
      <Nav />

      {/* lg:Title */}
      <header className="hidden lg:block">MightyGPT 3.5</header>

      {/* Hero Section */}
      <div className="pt-[14rem]">
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
          <div
            className={`absolute bottom-[12px] right-2 p-1.5 rounded-lg ${
              inputValue.length > 0 ? "bg-white" : "bg-[#383838]"
            }`}
          >
            <FaArrowUp
              className={`${
                inputValue.length > 0 ? "fill-black" : "fill-[#1e1e1e]"
              }`}
            />
          </div>
        </div>

        {/* Footer note */}
        <small className="py-0.5 text-xs text-center text-[#AFAFAF]">
          MightyGPT can make mistakes. Consider checking important information.
        </small>
      </div>
    </section>
  );
};

export default Main;
