import React from "react";
import { RiStarSFill } from "react-icons/ri";

const ProductCard = ({ props, product }) => {
  return (
    <>
      <div className="relative">
        <img
          className="aspect-square  w-full object-contain"
          src={product.image}
          alt={product.title}
        />
        <div className="absolute bottom-8 right-3 rounded bg-[#000000a6] p-1 text-xs text-white">
          <div className="flex items-center gap-2">
            <RiStarSFill className="inline-block text-yellow-400" />
            <span>
              {product.rating.rate} | {product.rating.count}
            </span>
          </div>
        </div>
        <span className="p-2 text-sm font-bold uppercase">
          {product.category}
        </span>
      </div>
      <div className="p-2">
        <h3 className="text-xs font-semibold">{product.title}</h3>
        <div className="mt-5 flex items-center">
          <div className="relative">
            <span className="block bg-yellow-300 p-2 pr-4 text-xs font-bold">
              {product.price} USD
            </span>
            <span className="absolute left-full top-0 -ml-2 block h-full w-3 skew-x-12 bg-yellow-400"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
