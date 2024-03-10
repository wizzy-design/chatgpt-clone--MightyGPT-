import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#212121]">
      <div className="relative overflow-clip lg:flex ">
        <Sidebar open={open} />
        <Main open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default App;
