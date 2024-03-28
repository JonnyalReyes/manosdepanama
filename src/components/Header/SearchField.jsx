import React from "react";
import Typewriter from "typewriter-effect";
import { IoIosSearch } from "react-icons/io";

const SearchField = () => {
  return (
    <div className="flex flex-1 cursor-pointer items-center gap-3 rounded-lg bg-white p-2">
      <div className="h-full w-full   outline-none">
        <div className="flex font-extrabold text-gray-400">
          <span className="mr-1 font-normal">Search for</span>
          <Typewriter
            options={{
              strings: [
                '"Surfing Shorts"',
                '"Carrom Boards"',
                '"Table Tennis"',
                '"Skating"',
                '"Basketball"',
                '"Jackets"',
              ],
              autoStart: true,
              loop: true,
              speed: 53,
            }}
          />
        </div>
      </div>
      <IoIosSearch />
    </div>
  );
};

export default SearchField;
