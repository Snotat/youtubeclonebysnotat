import React, { useContext } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaYoutube } from 'react-icons/fa'
import { RxAvatar, RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { HiFire } from "react-icons/hi";
import ytshort from '../assets/yt-short.png'
import { MdOutlineSubscriptions } from 'react-icons/md'
import { RiVideoLine } from 'react-icons/ri'
import { VscHistory } from 'react-icons/vsc'
import { IoMusicalNoteOutline } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsTrophy } from "react-icons/bs";
import youtube_music from '../assets/Youtube_Music_icon.png'
import youtube_kid from '../assets/youtube-kids-icon.png'
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { TfiHelpAlt } from "react-icons/tfi";
import { RiFeedbackLine } from "react-icons/ri";
import { DataContext } from '../context/contextApi'

function LargeSide() {
    const { large, setLarge, setTheme, setSide, side } =
        useContext(DataContext);
    const sideToggle = () => {
        setLarge(!large);
    };

    return (
        <div className="small w-60 float-left z-40 h-full  text-gray-700  scroll-smooth overflow-y-scroll overflow-x-hidden bg-white flex-col pr-2">
            <div className="flex p-5 pl-6 sticky top-0 bg-white">  <RxHamburgerMenu onClick={sideToggle} className="flex w-6 h-6 dark:text-white" />   <Link to="/" className="flex h-4 align-middle items-center">
                <FaYoutube className="flex w-8 h-8 ml-5 text-red-600" />
                <span className="flex ml-1 text-lg font-bold dark:text-white">YouTube</span>
            </Link>
            </div>
            <div className="flex p-3 pt-1 flex-col">
                <div className="flex mb-1 bg-black/5 p-3 rounded-xl w-full "><AiFillHome className='w-5 h-5' /><span className='pl-6 align-middle self-center text-sm font-semibold'>Home</span></div>
                <div className="flex bg mb-1 bg-black/5 p-3 rounded-xl w-full "><img src={ytshort} alt="" /><span className='pl-6 align-middle self-center text-sm font-semibold'>Shorts</span></div>
                <div className="flex mb-1 bg-black/5 p-3 rounded-xl w-full "><MdOutlineSubscriptions className='w-5 h-5' /><span className='pl-6 align-middle self-center text-sm font-semibold'>Subscriptions</span></div>

            </div>
            <hr className='bg-gray-300 w-full' />

            <div className="flex p-3 flex-col">
                <div className="flex mb-1 bg-black/5 p-3 rounded-xl w-full "><RiVideoLine className='w-5 h-5' /><span className='pl-6 align-middle self-center text-sm font-semibold'>You</span></div>
                <div className="flex mb-1 bg-black/5 p-3 rounded-xl w-full "><VscHistory className='w-5 h-5' /><span className='pl-6 align-middle self-center text-sm font-semibold'>Subscriptions</span></div>

            </div>
            <hr className='bg-gray-300 w-full' />
            <div className="flex flex-col p-2 pl-5 pb-3">
                <div className="flex pb-3  text-sm leading-5"> Sign in to like videos, comment and subscribe. </div>
                <div className="flex flex-row whitespace-nowrap w-fit border-[0.5px] box-content border-gray-300 h-9 rounded-full text-blue-500 ">       <Link to='/' className="flex w-fit whitespace-nowrap flex-none pr-2" >
                    <RxAvatar className="flex self-center pl-2 pr-2 w-10 h-10 items-center align-middle text-blue-500" />    <span className="flex items-center whitespace-nowrap w
           break-normal text-sm font-semibold pr-2">Sign in</span>

                </Link>
                </div>
            </div>
            <hr className='bg-gray-300 w-full' />
            <div className="flex p-3 flex-col">
                <div className="flex text-[1.2rem] pl-2 font-semibold">
                    Explore
                </div>
                <div className="flex mb-1 p-2 rounded-xl w-full "><HiFire className='w-5 h-5' /><span className='pl-6 align-middle self-center text-sm font-semibold'>Trending</span></div>
                <div className="flex mb-1 p-2 rounded-xl w-full "><IoMusicalNoteOutline className='w-5 h-5' /><span className='pl-6 align-middle self-center text-sm font-semibold'>Music</span></div>
                <div className="flex mb-1 p-2 rounded-xl w-full "><SiYoutubegaming className='w-5 h-5' /><span className='pl-6 align-middle self-center text-sm font-semibold'>Gaming</span></div>
                <div className="flex mb-1 p-2 rounded-xl w-full "><IoNewspaperOutline className='w-5 h-5' /><span className='pl-6 align-middle self-center text-sm font-semibold'>News</span></div>
                <div className="flex mb-1 p-2 rounded-xl w-full "><BsTrophy className='w-5 h-5' /><span className='pl-6 align-middle self-center text-sm font-semibold'>Sport</span></div>

            </div>
            <hr className='bg-gray-300 w-full' />
            <div className="flex p-3 flex-col">
                <div className="flex text-base pl-3 font-semibold">
                    More from YouTube
                </div>
                <div className="flex mb-1 p-2 rounded-xl w-full ">  <FaYoutube className="flex w-5 h-5 ml-0 text-red-600" /><span className='pl-6 align-middle self-center text-sm font-semibold'>YouTube Premium</span></div>

                <div className="flex mb-1 p-2 rounded-xl w-full "> <img src={youtube_music} className='w-5 h-5 ' alt="" /> <span className='pl-6 align-middle self-center text-sm font-semibold'>YouTube Music</span></div>

                <div className="flex mb-1 p-2 rounded-xl w-full "> <img src={youtube_kid} className='w-5 h-5 ' alt="" /> <span className='pl-6 align-middle self-center text-sm font-semibold'>YouTube Kids</span></div>

            </div>
            <hr className='bg-gray-300 w-full' />
            <div className="flex p-3 flex-col">

                <div className="flex mb-1 p-2 rounded-xl w-full "><IoSettingsOutline className='w-5 h-5' /><span className='pl-6 align-middle self-center text-sm font-semibold'>Settings</span></div>
                <div className="flex mb-1 p-2 rounded-xl w-full "><MdOutlineOutlinedFlag className='w-5 h-5' /><span className='pl-6 align-middle self-center text-sm font-semibold'>Report history</span></div>
                <div className="flex mb-1 p-2 rounded-xl w-full "><TfiHelpAlt className='w-5 h-5' /><span className='pl-6 align-middle self-center text-sm font-semibold'>Help</span></div>
                <div className="flex mb-1 p-2 rounded-xl w-full "><RiFeedbackLine className='w-5 h-5' /><span className='pl-6 align-middle self-center text-sm font-semibold'>Send feedback</span></div>
            </div>
            <hr className='bg-gray-300 w-full' />
            <div className="flex p-3 py-2 flex-wrap ">
                <span className="text-xs font-bold px-1">About</span>
                <span className="text-xs font-bold px-1">Press</span>
                <span className="text-xs font-bold px-1">Copyright</span>
                <span className="text-xs font-bold px-1">Contact us</span>
                <span className="text-xs font-bold px-1">Creators</span>
                <span className="text-xs font-bold px-1">Advertise</span>
                <span className="text-xs font-bold px-1">Developers</span>

            </div>
            <div className="flex p-3 py-2 pt-1 flex-wrap ">
                <span className="text-xs font-bold px-1">Terms</span>
                <span className="text-xs font-bold px-1">Privacy</span>
                <span className="text-xs font-bold px-1">Policy & Safety</span>
                <span className="text-xs font-bold px-1">How YouTube works</span>
                <span className="text-xs font-bold px-1">Test new features</span>
            </div>
            <div className="flex p-4 py-4 flex-wrap text-gray-500 font-medium text-xs">
                © 2024 Google LLC
            </div>
        </div>
    )
}

export default LargeSide;