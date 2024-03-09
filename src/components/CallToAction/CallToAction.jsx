import React, { useEffect, useState } from "react";

import { useDatabase } from "../../contexts/DatabaseContext";

import CTABanner from "../../assets/cta-banner.webp";

import ProductCard from "../Utilities/ProductCard";
import StoreBenefits from "../Utilities/StoreBenefits";

const CallToAction = () => {
  const { data } = useDatabase();
  const [favouriteItems, setFavouriteItems] = useState([]);

  useEffect(() => {
    const filteredItems = data.filter((item) => item.rating.rate >= 4);
    setFavouriteItems(filteredItems);
  }, [data]);

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
          <StoreBenefits isBorder={true} />
        </div>
      </div>
    </>
  );
};

export default CallToAction;
