import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.css";

import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Basket from "./pages/Basket";
import ScrollToTop from "./components/ScrollToTop"; // ✅

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop /> {/* ✅ აქ არის სწორი ადგილი */}
        <Header />
        <div className="min-h-[calc(100vh-356px)] mt-[148px] md:mt-[148px]">
          <Outlet />
        </div>
        <Footer />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/detail", element: <Detail /> },
      { path: "/detail/:id", element: <Detail /> },
      { path: "/category", element: <Category /> },
      { path: "/category/:id", element: <Category /> },
      { path: "/basket", element: <Basket /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
