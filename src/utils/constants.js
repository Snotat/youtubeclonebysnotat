import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { VscHistory } from "react-icons/vsc";
import ytshort from '../assets/yt-short.png'

export const categories = [
  { name: "Home", icon: <AiFillHome />, type: "home" },
  { name: "Shorts", icon: <SiYoutubeshorts />, type: "category" },
  { name: "Subscrptions", icon: <MdOutlineSubscriptions />, type: "category" },
  { name: "You", icon: <RiVideoLine />, type: "category" },
  { name: "History", icon: <VscHistory />, type: "category" }
];

export const head = ["All", "Music", "Playlists", "Gaming", "Comedy", , "Rap", "News", "African Music", "Brides", "Skills", "Concert dances", "Live", "Highlight films", "Animated Music", "Recently Uploads"

];
