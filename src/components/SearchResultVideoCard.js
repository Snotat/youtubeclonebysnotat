import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "../shared/VideoLength";

const SearchResultVideoCard = ({ video }) => {

  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-black/[0.1] dark:lg:hover:bg-white/[0.1] rounded-xl md:p-4">
        <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40w-full md:w-48 lg:w-64 rounded-xl bg-slate-800 overflow-hidden">
          <img
            src={video?.thumbnail[0]?.url}
            alt="thumbnails"
            className="h-full w-full object-fill "
          />
          {video?.lengthText && <VideoLength time={video?.lengthText} />}
        </div>

        <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
          <span className="text-lg md:text-2xl font-semibold line-clamp-2 text-black dark:text-[#ebedeeed]">
            {video?.title}
          </span>

          <span className="empty:hidden text-sm line-clamp-1 md:line-clamp-2 text-black dark:text-white/[0.7] md:pr-24 md:my-4">
            {video?.description}
          </span>

          <div className="flex text-xs font-semibold text-black dark:text-white/[0.7] truncate overflow-hidden">
            <span>{`${abbreviateNumber(video?.viewCount, 2)} views`}</span>
            <span className="flex text-[24px] text-black dark:text-white/[0.7] font-bold leading-none relative top-[-10px] mx-1">
              .
            </span>
            <span className="truncate">{video?.publishedTimeText}</span>
          </div>

          <div className="hidden md:flex items-center">
            <div className="flex items-start mr-3">
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img
                  src={video?.channelThumbnail?.[0]?.url}
                  alt="Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-semibold mt-2 text-black dark:text-white/[0.7] flex items-center">
                {video?.channelHandle}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-black/[0.7] dark:text-white/[0.5] text-[12px] ml-1" />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultVideoCard;
