import "./App.css";
import Detail from "./pages/Detail";
function App() {
  return (
    <>
      <div className="w-full h-[100px] bg-red-100 text-center m-auto">
        header
      </div>
      <Detail />
      <div className="w-full h-[100px] bg-red-100 text-center m-auto">
        footer
      </div>
    </>
  );
}

export default App;
