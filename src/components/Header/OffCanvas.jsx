import React from "react";
import { useHeader } from "../../contexts/HeaderContext";
import { useDatabase } from "../../contexts/DatabaseContext";

const OffCanvas = () => {
  const { isOffCanvasOpen, allCategories, activeCategory } = useHeader();
  const { data } = useDatabase();
  return (
    <div
      id="offcanvas"
      className={`transition duration-500 ease-in-out ${isOffCanvasOpen ? "opacity-1 h-full translate-x-4" : "h-0 opacity-0"}`}
    >
      OffCanvas
      <ul>
        {allCategories.map((category, index) => (
          <li key={category}>
            <span className="ml-3 font-bold">{category}</span>
            <ul>
              {data
                .filter((item) => item.category === category)
                .map((item) => (
                  <li key={item.id}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-square w-12"
                    />
                    <span>{item.title}</span>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
      <h1 className="text-2xl">{activeCategory}</h1>
      <ul></ul>
      <div className="container mx-auto pt-4">
        <h1 className="text-2xl">OffCanvas</h1>
      </div>
    </div>
  );
};

export default OffCanvas;
