import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
// import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-[#212121]">
      {/* <Nav /> */}
      <div className="flex">
      <Sidebar />
      <Main />
      </div>
    </div>
  );
}

export default App;
