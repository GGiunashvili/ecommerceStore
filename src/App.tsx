import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Basket from "./pages/Basket";
import Favorites from "./pages/Favorites";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/category" element={<Category />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
