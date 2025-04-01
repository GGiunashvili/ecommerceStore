import "./App.css";
import Detail from "./pages/Detail";
function App() {
  return (
    <>
      <div className="w-full h-[100px] fixed top-0 bg-red-100 text-center m-auto z-9 border border-red-500">
        <p> header</p>
      </div>
      <Detail />
      <div className="w-full h-[100px] bg-red-100 text-center m-auto">
        footer
      </div>
    </>
  );
}

export default App;
