import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { DataContext } from "../context/contextApi";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, large, setLarge, theme, setTheme, side, setSide } =
    useContext(DataContext);
  const sideToggle = () => {
    (window.innerWidth > 1280) ? setLarge(!large) : setSide(!side);
  };
  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`w-16 fixed px-2 pt-4 top-0 h-[100vh] bg-white overflow-y-hidden z-30 overflow-hidden text-black dark:bg-black dark:text-white transition-all "
        }`}
    >
      <RxHamburgerMenu onClick={sideToggle} className="flex w-6 h-6 dark:text-white mb-8 mt-1 ml-4" />



      {categories.map((item) => {
        return (
          <div key={item.name}>
            <LeftNavMenuItem
              text={item.name}
              icon={item.icon}
              action={() => {
                clickHandler(item.name, item.type);
                navigate("/");
              }}
              className={`${selectedCategory === item.name
                ? ""
                : ""
                }`}
            />
            {item.divider && (
              <hr className="my-5 border-white/[0.2] md:border-black/[0.2] border dark:border dark:border-white/[0.2]" />
            )}
          </div>
        );
      })}

    </div>
  );
};

export default LeftNav;
