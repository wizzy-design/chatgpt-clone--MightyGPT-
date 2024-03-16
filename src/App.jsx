import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useState, useEffect } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState(1); // Initial number of rows

  const [inputValue, setInputValue] = useState(" ");
  // Data gotten from AI response
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setcurrentTitle] = useState(null);

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: inputValue,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        "http://localhost:8000/completions",
        options
      );
      const data = await response.json();
      setMessage(data.choices[0].message);
      console.log("Data choices", data.choices[0].message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    // Calculate the number of rows based on the content
    const lines = e.target.value.split("\n").length;
    setRows(lines <= 1 ? 1 : lines);
  };

  const createNewChat = () => {
    setMessage(null);
    setInputValue("");
    setcurrentTitle(null);
  };

  const handleUniqueTitleClick = (uniqueTitle) => {
    setcurrentTitle(uniqueTitle);
    setMessage(null);
    setInputValue("");
  };

  useEffect(() => {
    console.log(currentTitle, inputValue, message);

    if (!currentTitle && inputValue && message) {
      setcurrentTitle(inputValue);
    }
    if (currentTitle && inputValue && message) {
      setPreviousChats((prevChats) => [
        ...prevChats,
        {
          title: currentTitle,
          role: "user",
          content: inputValue,
        },
        {
          title: currentTitle,
          role: message.role,
          content: message.content,
        },
      ]);
    }
  }, [message, currentTitle]);

  console.log("Prev chats", previousChats);

  const currentChat = previousChats.filter(
    (previousChat) => previousChat.title === currentTitle
  );

  // Notes: Array.from() converts the set into an array. new Set() makes an iteratable element save only it's unique terms.
  const uniqueTitle = Array.from(
    new Set(previousChats.map((previousChat) => previousChat.title))
  );
  console.log("Unique title", uniqueTitle);

  return (
    <div className="bg-[#212121]">
      <div className="relative overflow-clip lg:flex ">
        <Sidebar
          open={open}
          currentTitle={currentTitle}
          createNewChat={createNewChat}
          uniqueTitle={uniqueTitle}
          handleUniqueTitleClick={handleUniqueTitleClick}
        />
        <Main
          open={open}
          setOpen={setOpen}
          getMessages={getMessages}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          rows={rows}
          currentTitle={currentTitle}
          currentChat={currentChat}
        />
      </div>
    </div>
  );
}

export default App;
