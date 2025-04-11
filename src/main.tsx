import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux"; // redux provider
import { store } from "./store/store"; // redux store
import "./index.css";

// იმპორტი კომპონენტების
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Basket from "./pages/Basket";
import Favorites from "./pages/Favorites";

// მარშრუტების კონფიგურაცია
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header /> {/* Header ყველა გვერდზე */}
        <div className="min-h-[calc(100vh-356px)] mt-[208px] md:mt-[148px]">
          <Outlet /> {/* შიგთავსი აქ ჩაიტვირთება */}
        </div>
        <Footer /> {/* Footer ყველა გვერდზე */}
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/detail", element: <Detail /> },
      { path: "/detail/:id", element: <Detail /> },

      { path: "/category", element: <Category /> },
      { path: "/category/:id", element: <Category /> },

      { path: "/favorites", element: <Favorites /> },
      { path: "/basket", element: <Basket /> },
      { path: "*", element: <NotFound /> }, // 404 გვერდი
    ],
  },
]);

// main.tsx -ში ყველაფერი ერთად
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      {/* Redux provider */}
      <RouterProvider router={router} /> {/* Router system */}
    </Provider>
  </StrictMode>
);
