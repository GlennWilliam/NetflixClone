import React from "react";
import EachUtils from "../../utils/eachUtils";
import { LIST_NAVBAR } from "../../constants/listNavbar";

const Navbar = () => {
  return (
    <header className="relative">
      <nav className="bg-[#141414] fixed text-white top-0 left-0 px-8 w-full z-10">
        <div className="flex justify-between items-center">
          <div className="flex item-center gap-4">
            <img
              src="/netflix_logo_icon.png"
              className="w-[120px] ml-2 cursor-pointer hover:scale-105 transition-all"
            />
            <ul className="sm:flex hidden items-center gap-4">
              <EachUtils
                of={LIST_NAVBAR}
                render={(item, index) => (
                  <li key={index}>
                    <a href={item.url}>{item.title}</a>
                  </li>
                )}
              />
            </ul>
          </div>
          <div className="flex items-center gap-4"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
