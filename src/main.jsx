import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { BlogList } from "./components/HeaderPages/BlogList";
import { BlogPost } from "./components/HeaderPages/BlogPost";
import { AboutUs } from "./components/HeaderPages/AboutUs";  

import Homepage from "./pages/Homepage.jsx";
import Products from "./pages/Products.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Checkout from "./pages/Checkout.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import { Loggin } from "./components/Loggin/Loggin";
import { MyStore } from "./components/HeaderPages/MyStore";

import { DatabaseProvider } from "./contexts/DatabaseContext.jsx";
import { HeaderProvider } from "./contexts/HeaderContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { CheckoutProvider } from "./contexts/CheckoutContext.jsx";

const routes = createBrowserRouter([
  { 
    path: "/",
    element: <Homepage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/shop",
    element: <Products />,
  },
  {
    path: "/shop/:productId",  // Añadimos un parámetro dinámico para productos individuales
    element: <SingleProduct />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
  {
    path: "/login",
    element: <Loggin />,
  },
  {
    path: "/mystore",
    element: <MyStore />,
  },
  {
    path: "/bloglist",
    element: <BlogList />,
  },
  {
    path: "/blogpost",
    element: <BlogPost />,
  },
  {
    path: "/sobre",  
    element: <AboutUs />, 
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DatabaseProvider>
      <CartProvider>
        <CheckoutProvider>
          <HeaderProvider>
            <RouterProvider router={routes} />
          </HeaderProvider>
        </CheckoutProvider>
      </CartProvider>
    </DatabaseProvider>
  </React.StrictMode>
);
