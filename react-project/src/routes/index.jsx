import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Product from "../pages/Product";
import About from "../pages/About";
import NotFound from "../component/shared/NotFound";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
