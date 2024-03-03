import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { FaRegMessage, FaRegFloppyDisk } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

import "./Header.css";
import BrandLogo from "../../assets/logo.svg";
import MegaMenu from "./MegaMenu";
import HamburgerButton from "./HamburgerButton";
import { useHeader } from "../../contexts/HeaderContext";
import OffCanvas from "./OffCanvas";

const Navigation = [
  {
    id: 1,
    menu: "Sign In",
    icon: <FaRegUser />,
    url: "/sign-in",
  },
  {
    id: 2,
    menu: "My Store",
    icon: <FaRegFloppyDisk />,
    url: "/my-store",
  },
  {
    id: 3,
    menu: "Support",
    icon: <FaRegMessage />,
    url: "/support",
  },
  {
    id: 4,
    menu: "Wishlist",
    icon: <FaRegHeart />,
    url: "/wishlist",
  },
  {
    id: 5,
    menu: "cart",
    icon: <MdOutlineShoppingCart />,
    url: "/cart",
  },
];

const MobileNavigation = Navigation.filter((item) =>
  ["Wishlist", "cart"].includes(item.menu),
);

const Header = () => {
  const { isOpen, menuHandler, offCanvasHandler } = useHeader();

  return (
    <>
      <header>
        <div className="bg-primary px-4 py-3 xl:py-4 2xl:px-16">
          <div className="container mx-auto">
            <div className="hidden items-center justify-between md:flex">
              <div className="flex">
                <HamburgerButton desktop={true} handler={menuHandler} />
                <a href="#" className="ml-3 cursor-default md:ml-6 lg:ml-12">
                  <img
                    className="cursor-pointer border border-white lg:w-36"
                    src={BrandLogo}
                    alt="Dekaathlon"
                  />
                </a>
              </div>
              <div className="flex flex-grow items-center lg:pr-0 xl:pl-14 xl:pr-6 2xl:pr-4">
                <div className="flex w-full items-center gap-10">
                  <SearchField />
                  <DeliveryLocation />
                </div>
              </div>
              <div className="lg:pr-0 xl:pl-14 xl:pr-6 2xl:pr-4">
                <MainMenu MenuArray={Navigation} label={true} />
              </div>
            </div>
            {/* Mobile Header */}
            <div className="container mx-auto md:hidden">
              <div className="mb-5 flex justify-between">
                <div className="flex items-center">
                  <HamburgerButton handler={offCanvasHandler} />
                  <a href="#" className="ml-3 cursor-default md:ml-6 lg:ml-12">
                    <img
                      src={BrandLogo}
                      className="w-28 cursor-pointer border border-white"
                      alt="Dekaathlon"
                    />
                  </a>
                </div>
                <div className="flex items-center gap-3 ">
                  <button className="h-7 w-16 rounded-md border border-white text-xs uppercase text-white">
                    Sign In
                  </button>
                  <DeliveryLocation />
                </div>
              </div>
              <div className="flex items-center">
                <SearchField />
                <div className="pl-4">
                  <MainMenu MenuArray={MobileNavigation} label={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MegaMenu />
      <OffCanvas />
    </>
  );
};

export default Header;

const DeliveryLocation = () => (
  <div>
    <p className="text-xs text-white md:text-sm">Delivery Location</p>
    <div>
      <span className="text-xs font-bold text-yellow-400 md:text-sm">
        12345
      </span>
      <button className="ml-1 text-xs uppercase text-white underline md:text-sm">
        change
      </button>
    </div>
  </div>
);

const SearchField = () => (
  <div className="flex flex-1 cursor-pointer items-center gap-3 rounded-lg bg-white p-2">
    <div className="h-full w-full   outline-none">
      <div className="flex font-extrabold text-gray-400">
        <span className="mr-1 font-normal">Search for</span>
        <Typewriter
          options={{
            strings: [
              '"Surfing Shorts"',
              '"Carrom Boards"',
              '"Table Tennis"',
              '"Skating"',
              '"Basketball"',
              '"Jackets"',
            ],
            autoStart: true,
            loop: true,
            speed: 53,
          }}
        />
      </div>
    </div>
    <IoIosSearch />
  </div>
);

const MainMenu = ({ MenuArray, label }) => (
  <ul className="flex gap-x-5 text-white">
    {MenuArray.map((items) => (
      <li key={items.id}>
        <a href={items.url} className="flex flex-col items-center gap-1">
          {items.icon}
          {label && <span className="text-sm">{items.menu}</span>}
        </a>
      </li>
    ))}
  </ul>
);
