import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useHeader } from "../../contexts/HeaderContext";
import { useDatabase } from "../../contexts/DatabaseContext";

const MegaMenu = ({ openProduct }) => {
  const { data } = useDatabase();
  const {
    isOpen,
    allCategories,
    activeCategory,
    setActiveCategory,
    showMegamenu,
  } = useHeader();

  const [activeSubmenu, setActiveSubmenu] = useState();
  const [firstItem, setFirstItem] = useState(null);

  useEffect(() => {
    const getRandomProduct = (max) => {
      return Math.floor(Math.random() * max);
    };
    const filteredData = data.filter(
      (item) => item.category === activeCategory,
    );
    if (filteredData.length > 0) {
      const FirstItem =
        filteredData[getRandomProduct(filteredData.length)].image;
      setFirstItem(FirstItem);
    }
  }, [activeCategory]);

  const menuHandler = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
    setActiveSubmenu(category === activeSubmenu ? null : category);
  };

  return (
    <div
      id="submenu-container"
      className={`relative z-50 w-full transition duration-500 ease-in-out ${isOpen ? "h-full -translate-y-0 opacity-100" : "h-0 translate-y-3 opacity-0 "}`}
    >
      {showMegamenu}
      <div>
        <div
          className={`absolute top-full w-full  ${isOpen ? "h-full" : "h-0"}`}
        >
          <div className="flex gap-8 bg-white p-10 pt-0 shadow-lg">
            <div className="flex-1 ">
              <ul className="mt-10 flex justify-between border-b">
                {allCategories.map((category) => (
                  <li
                    onClick={() => menuHandler(category)}
                    key={category}
                    className={`cursor-pointer border-primary pb-5 ${category === activeCategory ? "submenu-active border-b-2" : ""}`}
                  >
                    <span className="text-lg font-semibold capitalize">
                      {category}
                    </span>
                  </li>
                ))}
              </ul>
              {activeCategory && (
                <ul className="my-4 grid grid-cols-2 grid-rows-1 gap-3">
                  {data
                    .filter((item) => item.category === activeCategory)
                    .map((item) => (
                      <li
                        key={item.id}
                        className="mb-3 flex items-center gap-5"
                      >
                        <a
                          onClick={() => openProduct(item.id)}
                          className="flex cursor-pointer items-center gap-5"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="aspect-square w-12"
                          />
                          <h3 className="text-sm font-normal">{item.title}</h3>
                        </a>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
