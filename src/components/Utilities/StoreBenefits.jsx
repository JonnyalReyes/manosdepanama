import React from "react";
import { twMerge } from "tailwind-merge";

import ReturnPolicy from "../../assets/90-days-return.avif";
import FreeDelivery from "../../assets/free-delivery.avif";
import Warranty from "../../assets/Warranty.avif";

const CTAActions = [
  {
    id: 1,
    title: "Compras seguras",
    image: Warranty,
    className: "justify-center",
  },
  {
    id: 2,
    title: "Contacto responsable",
    image: ReturnPolicy,
    className: "justify-center",
  },
  {
    id: 3,
    title: "Productos nuevos todos los días",
    image: FreeDelivery,
    className: "justify-center",
  },
];

const StoreBenefits = ({ isBorder }) => {
  return (
    <div
      className={`grid grid-cols-1 gap-2 lg:grid-cols-3 ${isBorder && "divide-x-0 divide-slate-500 lg:divide-x-[2px]"}`}
    >
      {CTAActions.map((item, index) => (
        <div
          key={index}
          className={twMerge(`flex items-center gap-4`, item.className)}
        >
          <img className="w-6" src={item.image} alt={item.title} />
          <p className="font-normal">{item.title}</p>
          {isBorder && (
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-50 p-4">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default StoreBenefits;
