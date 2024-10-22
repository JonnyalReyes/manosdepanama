import React from "react";
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
              Siguenos en nuestras redes
            </h3>
            <div className="mb-1 flex justify-between ">
              <TiSocialFacebook size={34} />
              <TiSocialTwitter size={34} />
              <TiSocialInstagram size={34} />
              <TiSocialYoutube size={34} />
            </div>
          </div>
        </div>
      </div>
        <div className="container mx-auto mt-9">
          <p className="py-10 text-center text-xs">
            © 2024 Manos de Panamá. Todos los derechos reservados
          </p>
        </div>
    </footer>
  );
};

export default Footer;
