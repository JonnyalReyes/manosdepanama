import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import { useDatabase } from "../../contexts/DatabaseContext";

import CTABanner from "../../assets/cta-banner.webp";
import ReturnPolicy from "../../assets/90-days-return.avif";
import FreeDelivery from "../../assets/free-delivery.avif";
import Warranty from "../../assets/Warranty.avif";
import ProductCard from "../Utilities/ProductCard";

const CallToAction = () => {
  const { data } = useDatabase();
  const [favouriteItems, setFavouriteItems] = useState([]);

  useEffect(() => {
    const filteredItems = data.filter((item) => item.rating.rate >= 4);
    setFavouriteItems(filteredItems);
  }, [data]);

  const CTAActions = [
    {
      id: 1,
      title: "No Cost EMI Available",
      image: Warranty,
      className: "justify-center",
    },
    {
      id: 2,
      title: "Easy Returns",
      image: ReturnPolicy,
      className: "justify-center",
    },
    {
      id: 3,
      title: "1 M+ happy Customers",
      image: FreeDelivery,
      className: "justify-center",
    },
  ];

  return (
    <>
      <section className="container mx-auto">
        <div>
          <div className="my-6">
            <span className="block text-sm font-bold capitalize text-gray-500">
              Most loved
            </span>
            <h2 className="text-lg font-bold uppercase">
              Favourite Products This Season
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            {favouriteItems.map((product, index) => {
              return (
                <div
                  className="-z-20 flex flex-col justify-between gap-5 border border-gray-300 p-4"
                  key={index}
                >
                  <ProductCard index={index} product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div
        className="my-6 py-6"
        style={{ backgroundImage: `url(${CTABanner})` }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 divide-x-0 divide-slate-500 md:grid-cols-3 md:gap-0 md:divide-x-[2px]">
            {CTAActions.map((item, index) => (
              <div
                key={index}
                className={twMerge(`flex items-center gap-2`, item.className)}
              >
                <img className="w-6" src={item.image} alt={item.title} />
                <p className="font-semibold">{item.title}</p>
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-50 p-4">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
