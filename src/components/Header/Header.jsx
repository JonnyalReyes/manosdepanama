import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { FaRegMessage, FaRegFloppyDisk } from "react-icons/fa6";
import { PiStorefront } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import "./Header.css";
import BrandLogo from "../../assets/logo.svg";
import ManosPan from "../../assets/Manos_de_Panama.svg";
import { Loggin } from '../Loggin/Loggin';
import MegaMenu from "./MegaMenu";
import HamburgerButton from "./HamburgerButton";
import SearchField from "./SearchField";
import MainMenu from "./MainMenu";
import OffCanvas from "./OffCanvas";
import SlideInCart from "../SlideInCart/SlideInCart";

import { useHeader } from "../../contexts/HeaderContext";
import { useCart } from "../../contexts/CartContext";

const Header = () => {
  
  const { itemsInCart, calculateQuantity, slideInCart, setSlideInCart } =
    useCart();
  const navigate = useNavigate();

  const TotalQuantity = calculateQuantity(itemsInCart);
  const Navigation = [
    {
      id: 1,
      menu: "Sign In",
      icon: <FaRegUser />,
      url: "/Login",
    },
    {
      id: 2,
      menu: "Mi Tienda",
      icon: <PiStorefront />,
      url: "/MyStore",
    },
    {
      id: 3,
      menu: "Blogs",
      icon: <FaRegMessage />,
      url: "/BlogList",
    },
    {
      id: 4,
      menu: "About Us",
      icon: <HiOutlineUserGroup />,
      url: "/sobre",
    },
  ];

  const MobileNavigation = Navigation.filter((item) =>
    ["Wishlist"].includes(item.menu),
  );

  const { isOpen, setIsOpen, menuHandler, offCanvasHandler } = useHeader();
  const [showMegamenu, setShowMegamenu] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setShowMegamenu(false);
      }, 1000);

      return () => clearTimeout(timeout);
    } else {
      setShowMegamenu(true);
    }
  }, [isOpen]);

  const openProduct = (id) => {
    navigate(`/products/${id}`);
    setShowMegamenu((showMegamenu) => !showMegamenu);
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <header className="relative">
        <SlideInCart
          className={slideInCart ? "translate-x-0" : ""}
          setSlideInCart={setSlideInCart}
          slideInCart={slideInCart}
        />
        <div className="bg-gray-500 px-4 py-3 xl:py-4 2xl:px-16">
          <div className="container mx-auto">
            <div className="hidden flex-col items-center justify-between gap-6 md:flex lg:flex-row">
              <div className="flex w-full justify-between lg:w-auto lg:justify-normal">
                <HamburgerButton desktop={true} handler={menuHandler} />
                <Link to="/" className="ml-3 cursor-default md:ml-6 lg:ml-12">
                  <img
                    className="cursor-pointer border border-white lg:w-24"
                    src={ManosPan}
                    alt="Manos de Panamá"
                  />
                </Link>
              </div>
              <div className="flex w-full flex-grow items-center lg:w-auto">
                <div className="flex w-full items-center gap-10 pl-0 pr-0 lg:pl-6 lg:pr-6 ">
                  <SearchField />
                </div>
              </div>
              <div className="lg:pr-0 xl:pl-14 xl:pr-6 2xl:pr-4">
                <MainMenu
                  MenuArray={Navigation}
                  label={true}
                  slideInCart={slideInCart}
                  setSlideInCart={setSlideInCart}
                  itemsInCart={itemsInCart}
                  TotalQuantity={TotalQuantity}
                />
              </div>
            </div>
            {/* Mobile eader */}
            <div className="container mx-auto md:hidden">
              <div className="mb-5 flex justify-between">
                <div className="flex items-center">
                  <HamburgerButton handler={offCanvasHandler} />
                  <Link to="/" className="ml-3 cursor-default md:ml-6 lg:ml-12">
                    <img
                      src={BrandLogo}
                      className="w-28 cursor-pointer border border-white"
                      alt="Dekaathlon"
                    />
                  </Link>
                </div>
                <div className="flex items-center gap-1 ">
                  <Link to="/Login"
                    className="flex h-7 w-16 items-center justify-center rounded-md border border-white text-xs uppercase text-white"
                    >
                      Sign In
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <SearchField />
                <div className="pl-4">
                  <MainMenu
                    MenuArray={MobileNavigation}
                    label={false}
                    slideInCart={slideInCart}
                    setSlideInCart={setSlideInCart}
                    TotalQuantity={TotalQuantity}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {showMegamenu && <MegaMenu openProduct={openProduct} />}
      <OffCanvas />
    </>
  );
};

export default Header;
