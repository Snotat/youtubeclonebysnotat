import React, { useContext, useEffect, useRef, useState } from 'react'

import { DataContext } from "../context/contextApi";


import { head } from '../utils/constants'
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

function Head() {
    const containerRef = useRef(null);
    const [scw, setScw] = useState(0)

    const { cartcomp, setCartComp, selectedCategory, setSelectedCategory } = useContext(DataContext);
    // console.log("from feed", searchResults);
    const navigate = useNavigate()
    const [isEndOfScroll, setIsEndOfScroll] = useState(false);

    const handleScroll = () => {
        const container = containerRef.current;
        if (container) {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            // Check if we are at the bottom of the scroll
            setIsEndOfScroll(scrollLeft + clientWidth >= scrollWidth);
            setIsScrolled(container.scrollLeft > 0);
        }
        console.log('setCartCompComp', cartcomp)
    };

    const [isScrolled, setIsScrolled] = useState(false);



    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);


    const [leftScrollButton, setLeftScrollButton] = useState(false)
    const scrollRightdiv = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 50; // Adjust scroll amount as needed
            setScw(containerRef.current.scrollLeft)
        } console.log("R", containerRef.current.scrollRight)
        setScw(containerRef.current.scrollLeft)
        console.log("L", containerRef.current.scrollLeft)

    };
    const scrollLeftdiv = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 50;
            setScw(containerRef.current.scrollLeft)
            // Adjust scroll amount as needed
        } setScw(containerRef.current.scrollLeft)
    }
    useEffect(() => {
        console.log('ccccck', cartcomp)
    }, [cartcomp])

    const handleCl = (e) => {
        console.log(e.target.value)
        setSelectedCategory(e.target.value)
    }
    return (
        <div className="flex z-30 relative bg-white dark:bg-black w-100% ml-20 max-md:ml-0 pt-1 pr-5">
            <div ref={containerRef} className="flex w-100% h-100% pl-3 overflow-x-scroll scroll-smooth no-scrollbar">
                <div className='flex w-100% py-2 top-0 z-20 bg-white flex-row justify-start gap-3 dark:bg-black'>
                    {cartcomp?.[0]?.map((items, index) => {
                        return (
                            <div key={index} className='px-3 py-[0.4em] font-semibold text-sm bg-gray-200 dark:text-white hover:bg-gray-300 hover:dark:bg-gray-700 dark:bg-gray-800 rounded-lg whitespace-nowrap' onClick={() => {
                                setSelectedCategory(items.filter)
                                navigate('/')
                            }} value={items.filter} >{items.filter}</div>
                        )
                    })}
                </div>
            </div>
            {!isEndOfScroll && <div onClick={scrollRightdiv} className="absolute h-fit right-0 align-middle z-40 items-end dark:bg-black bg-white w-32 pr-3 pt-2 mask"><GoChevronRight className='  self-end items-end  m-0 font-thin text-black dark:text-white align-middle w- h-6' /></div>}
            {isScrolled && <div onClick={scrollLeftdiv} className="absolute h-fit left-15 align-middle z-40 items-end dark:bg-black bg-white w-32 pr-24 pt-2 mask_1"><GoChevronLeft className='  self-end items-end  m-0 font-thin text-black dark:text-white align-middle w- h-6' /></div>}

        </div>
    )
}

export default Head
