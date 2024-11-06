import React from "react";

const LeftNavMenuItem = ({ text, icon, className, action }) => {
  return (
    <div
      className={
        "flex flex-col items-center mb-8  text-black dark:text-white text-sm cursor-pointer " +
        className
      }
    >
      <span className="mb-1 text-2xl">{icon}</span>
      <span className="text-[10px]">{text}</span>

    </div>
  );
};

export default LeftNavMenuItem;
