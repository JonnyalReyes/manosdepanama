import React from "react";
import StoreBenefits from "../Utilities/StoreBenefits";

import GoogleStore from "../../assets/google-store.webp";
import AppleStore from "../../assets/apple-store.svg";
import Warranty from "../../assets/Warranty.avif";
import DebitCard from "../../assets/debit-card.svg";
import CreditCard from "../../assets/credit-card.svg";
import UPI from "../../assets/upi.svg";
import NetBanking from "../../assets/net-banking.svg";
import FooterLogo from "../../assets/footer-logo.svg";
import Leaf from "../../assets/leaf.webp";
import Stick from "../../assets/stick.webp";

import FooterMenu from "./FooterMenu.json";

import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialYoutube,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="relative mx-4">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        <div className="col-span-full flex items-center justify-center bg-[#f7f8f9] sm:col-span-1 md:col-span-2">
          <div className="container mx-auto px-0 py-10 md:px-10 md:py-0">
            <div className="flex w-full flex-col flex-wrap items-center justify-between gap-10 md:flex-row">
              <h3 className="font-semibold uppercase text-gray-900">
                Our Promise
              </h3>
              <div>
                <StoreBenefits />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full flex w-full flex-col items-center justify-center bg-[#f7f8f9] px-10 py-5 sm:col-auto sm:items-start">
          <h3 className="mb-5 text-sm font-semibold uppercase text-gray-900">
            Experience Decathlon App on Mobile
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        <div className="col-span-2 mt-8 flex flex-col items-center justify-center">
          <div className="container mx-auto px-10">
            <div className="flex w-full flex-wrap justify-between gap-10">
              {FooterMenu.map((item, index) => (
                <div key={index} className="flex-1">
                  <h3 className="mb-3 font-bold uppercase text-gray-900">
                    {item.name}
                  </h3>
                  <ul>
                    {item.subNames.map((subItem, subIndex) => (
                      <li key={subIndex} className="mb-1">
                        <a href={subItem.url}>{subItem.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="container mx-auto mt-6 border-b border-t px-10 py-10 md:py-4">
            <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
              <div className="flex flex-wrap items-center gap-4">
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-3 bg-[#f7f8f9] px-10 py-5 md:col-span-1">
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-gray-900">
              follow us
            </h3>
            <div className="mb-10 flex justify-between">
              <TiSocialFacebook size={34} />
              <TiSocialTwitter size={34} />
              <TiSocialInstagram size={34} />
              <TiSocialYoutube size={34} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="container mx-auto mt-9">
          <p className="py-10 text-center text-xs">
            © 2024 Decathlon Sports India Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
