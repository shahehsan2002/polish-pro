

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";

export default function Navbar() {
  const products = useAppSelector((store) => store.cart.products);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative mx-auto container px-4 lg:px-8">
      <div className="flex items-center justify-between py-4 border-b border-gray-200 shadow-md bg-white">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <p className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            PolishPro
          </p>
        </Link>

        {/* Cart Icon for small screens */}
        <div className="md:hidden">
          <Link to="/cart" className="relative hover:text-yellow-400">
            <ShoppingCart className="h-6 w-6 text-gray-900" />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
          </div>
        </button>

        {/* Navigation Menu */}
        <NavigationMenu className={`md:flex md:flex-grow ${isMenuOpen ? "block" : "hidden"}`}>
          <NavigationMenuList className="flex flex-col md:flex-row md:space-x-6 lg:space-x-8">
            {["Product", "About", "Contact", "Product-Management"].map((item) => (
              <NavigationMenuItem key={item}>
                <Link to={`/${item.toLowerCase()}`}>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} transition-all duration-300 ease-in-out hover:text-gray-900`}
                  >
                    {item}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Cart Icon for larger screens */}
        <div className="hidden md:block relative">
          <Link to="/cart" className="relative hover:text-yellow-400">
            <ShoppingCart className="h-6 w-6 text-gray-900" />
            <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold rounded-full px-2">
              {products.length}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border border-gray-200 rounded-lg shadow-lg mt-2">
          <ul className="flex flex-col p-4">
            {["Product", "About", "Contact", "Product-Management"].map((item) => (
              <li key={item} className="py-2">
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="block transition duration-300 hover:text-yellow-400"
                  onClick={() => setIsMenuOpen(false)} // Close the menu on item click
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
