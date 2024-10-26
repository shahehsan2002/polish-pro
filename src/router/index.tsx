import Dashboard from "@/components/Layouts/Dashboard";
import MainLayout from "@/components/Layouts/MainLayouts";
import About from "@/pages/About/About";
import Cart from "@/pages/Cart/Cart";
import CheckoutPage from "@/pages/Checkout/Checkout";
import SuccessPage from "@/pages/Checkout/Success";
import ContactPage from "@/pages/Contact/Contact";
import BookingPage from "@/pages/Dashboard/Booking/BookingPage";
import SlotManagementPage from "@/pages/Dashboard/SlotManagement/SlotManagement";
import UserManagement from "@/pages/Dashboard/UserManagement/UserManagement";
import Home from "@/pages/Home/Home";
import ProductsPage from "@/pages/Product/Product";
import ProductDetail from "@/pages/Product/ProductDetails";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import ServiceDetailsPage from "@/pages/Service/ServiceDetailsPage";
import ServicesPage from "@/pages/Service/ServicePage";
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
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetailsPage />,
      },
      {
        path: "/booking/:id/:time",
        element: <BookingPage />,
      },
      {
        path: "/products/:id",
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
      { path: "users", element: <UserManagement /> },
    ],
  },
]);

export default router;
