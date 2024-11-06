import React, { useContext, useEffect } from "react";

import { DataContext } from "../context/contextApi";
import LeftNav from "../components/LeftNav";
import VideoCard from "../components/VideoCard";
import UseOnline from "../utils/UseOnline";
import OfflineComponent from "../shared/OfflineComponent";
import ShimmerVideoCard from "../shared/ShimmerVideoCard";
import Head from "../components/Head";


import { head } from '../utils/constants'
import { GoChevronRight } from "react-icons/go";
import SideNav from "../components/SideNav";
const Feed = () => {
  const { loading, searchResults, side, setSide, cartcomp } = useContext(DataContext);
  // console.log("from feed", searchResults);

  const isOnline = UseOnline();
  const sideToggle = () => {
    setSide(!side);
  };

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");

  }, []);
  useEffect(() => {

    console.log('Search Feed', cartcomp)
  }, [cartcomp])
  return (
    <div className="flex w-full h-full">
      <div className="flex max-md:hidden"> <LeftNav /></div>
      {side && <div className='z-40 absolute w-full flex-row top-0 bottom-0 left-0 right-0'>
        <SideNav />
      </div>}


      <div className="grow max-md:pl-0 pl-[5rem] pt-5 bg-white dark:bg-black">

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-3">
          {/* When loading is true means data is not fetched yet meanwhile that time show Shimmer UI 
             when data fetching is done means loading is false and that means we get searchResults then show the data in the dom */}
          {loading
            ? Array(24)
              .fill("")
              .map((e, index) => {
                return <ShimmerVideoCard key={index} />;
              })
            : searchResults?.[0]?.map((item, index) => {

              if (item.type !== "video") return false;
              return <VideoCard key={index} video={item} />;
              // i allways prefered to pass unique key that i got from the api and that is standered way also but for this api some unique key like videoId present twice and more in the searchResults, i don't khow why. So, forcefully i chose map index :(
            })}
        </div>
      </div>

    </div>
  );
};

export default Feed;
