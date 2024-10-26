import Dashboard from "@/components/Layouts/Dashboard";
import MainLayout from "@/components/Layouts/MainLayouts";
import About from "@/pages/About/About";
import Cart from "@/pages/Cart/Cart";
import CheckoutPage from "@/pages/Checkout/Checkout";
import SuccessPage from "@/pages/Checkout/Success";
import ContactPage from "@/pages/Contact/Contact";
import SlotManagementPage from "@/pages/Dashboard/SlotManagement/SlotManagement";
import Home from "@/pages/Home/Home";
import ProductsPage from "@/pages/Product/Product";
import ProductDetail from "@/pages/Product/ProductDetails";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import NotFound from "@/pages/shared/NotFound";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/service",
        element: <ProductsPage />,
      },
      {
        path: "/service:id",
        element: <ProductDetail />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/success",
        element: <SuccessPage />,
      },
      {
        path: "/product-management",
        element: <ProductManagement />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "products", element: <ProductManagement /> },
      { path: "slot", element: <SlotManagementPage /> },
    ],
  },
]);

export default router;
