import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa";
import { RxDotsVertical } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { HiOutlineStatusOffline } from "react-icons/hi";
import { BsArrowLeft } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { DataContext } from "../context/contextApi";
import Loader from "../shared/Loader";
import UseOnline from "../utils/UseOnline";

import '../Styles/header.css'
import Head from "./Head";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu, large, setLarge, theme, setTheme, setSide, side, windowWidth, setWindowWidth } =

    useContext(DataContext);
  const [searchBtn, setSearchBtn] = useState(true)
  const navigate = useNavigate();

  //custom hook for online/offline feature
  const isOnline = UseOnline();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };
  const searchQueryHandler2 = () => {
    if (searchQuery?.length > 0) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const sideToggle = () => {
    setSide(!side);
  };
  const toggleSearchBtn = () => {
    setSearchBtn(!searchBtn)
  }

  //I don't want to show menu or leftNav for videoDetails page. for that reason i fetch the path name and use it wisely for video router.
  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="flex sticky left-0  top-0 z-10 w-full flex-col ">
      <div className="flex flex-row h-14 w-full items-center bg-white dark:bg-black">
        {/* {loading && <Loader />} */}
        {searchBtn || windowWidth >= 768 ? <div className="w-full flex justify-between flex-row">
          <div className="head_left flex  ml-3 p-5 flex-row h-5 items-center">
            <RxHamburgerMenu onClick={sideToggle} className="flex w-6 h-6 dark:text-white" />

            <Link to="/" className="flex h-5 items-center">
              <FaYoutube className="flex w-8 h-8 ml-3 mr-1 text-red-600" />
              <span className="flex text-lg font-bold max-lg:text-base dark:text-white">YouTube</span>
            </Link>
          </div>

          <div className="group flex w-full max-w-[600px] justify-end mx-1 flex-1 items-center">
            {windowWidth < 768 ? <IoIosSearch onClick={toggleSearchBtn} className="text-black/[0.7] mr-3 dark:text-white text-xl" />
              : <><div className="flex h-8 w-full md:h-10 pl-5 border border-[#c3c3c3] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:pl-0 ">
                <div className="w-10 justify-center items-center hidden group-focus-within:md:flex">
                  <IoIosSearch className="text-black/[0.7] dark:text-white text-xl" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  placeholder="Search"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyUp={searchQueryHandler}
                  className="flex w-full px-5 bg-transparent outline-none text-black/[0.7] dark:text-white md:pl-0 md:group-focus-within:pl-0"
                />
              </div>
                <button
                  onClick={searchQueryHandler2}
                  className="w-[80px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#a8a8a8] rounded-r-3xl bg-gray-200 dark:bg-white/[0.15]"
                >
                  <IoIosSearch className="text-black/[0.7] dark:text-white text-xl w-6 h-6" />
                </button></>}
            <div className="flex w-10 h-10 items-center rounded-3xl align-middle justify-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 ">
              <FaMicrophone className='flex w-11 h-4 text-black dark:text-white' />
            </div>
          </div>

          <div className="flex flex-row items-center w-fit">

            <div
              onClick={handleThemeSwitch}
              className="flex dark:text-white justify-center items-center mx-3 h-10 rounded-full hover:bg-black/[0.2] dark:hover:bg-[#303030]/[0.8]"
            >
              <RxDotsVertical className="flex dark:text-white text-black dark:white w-4  h-5" />
            </div>
            <div className="flex max-md:hidden flex-row whitespace-nowrap w-fit border-[0.5px] box-content border-gray-300 h-9
            rounded-full text-blue-500 ">       <Link to='/' className="flex w-fit whitespace-nowrap flex-none pr-2" >
                <RxAvatar className="flex self-center pl-2 pr-2 w-10 h-10 items-center align-middle text-blue-500" />    <span className="flex items-center whitespace-nowrap w
           break-normal text-sm font-semibold pr-2">Sign in</span>

              </Link></div>

          </div></div> :
          <div className="pl-[5rem] max-md:pl-0 m-auto group flex w-full max-w-[600px] justify-center mx-2 flex-1 items-center">
            <div className="flex w-10 h-fit align-middle justify-center" onClick={toggleSearchBtn}><BsArrowLeft className="text-2xl font-extrabold dark:text-white text-black" /></div>
            <div className="flex h-8 w-full md:h-10 pl-5 border border-[#c3c3c3] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:pl-0 ">
              <div className="w-10 justify-center items-center hidden group-focus-within:md:flex">
                <IoIosSearch className="text-black/[0.7] dark:text-white text-xl" />
              </div>
              <input
                type="text"
                value={searchQuery}
                placeholder="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                className="flex w-full px-5 bg-transparent outline-none text-black/[0.7] dark:text-white md:pl-0 md:group-focus-within:pl-0"
              />
            </div>
            <button
              onClick={searchQueryHandler2}
              className="w-[80px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#a8a8a8] rounded-r-3xl bg-gray-200 dark:bg-white/[0.15]"
            >
              <IoIosSearch className="text-black/[0.7] dark:text-white text-xl" />
            </button>
            <div className="flex w-10 h-10 items-center rounded-3xl align-middle justify-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 ">
              <FaMicrophone className='flex w-11 h-4 text-black dark:text-white' />
            </div>
          </div>}


      </div> <div className="w-full"> <Head /></div></div>);
};

export default Header;
