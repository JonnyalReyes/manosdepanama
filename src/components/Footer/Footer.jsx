import React from "react";
import StoreBenefits from "../Utilities/StoreBenefits";

import GoogleStore from "../../assets/google-store.webp";
import AppleStore from "../../assets/apple-store.svg";

const Footer = () => {
  return (
    <footer className="mx-4">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 flex items-center justify-center bg-[#f7f8f9]">
          <div className="flex gap-10">
            <h3 className="font-bold text-gray-700">Our Promise</h3>
            <div>
              <StoreBenefits />
            </div>
          </div>
        </div>
        <div className=" bg-[#f7f8f9]">
          <h3 className="font-bold text-gray-700">
            Experience decathlon app on mobile
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <img src={GoogleStore} alt="Google Pay" />
            <img src={AppleStore} alt="Apple Store" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
