import React from "react";
import { useRef } from 'react';
import gsap from 'gsap';

interface HeadingProps {
    text: string;
    specChar: string;
}
const Heading:React.FC<HeadingProps> = ({text, specChar}) => {
    const headingRef = useRef(null);
    const handleMouseEnter = () => {
        gsap.to(headingRef.current, { scale: 1.2,  duration: 0.3 });
    }
    const handleMouseLeave = () => {
        gsap.to(headingRef.current, { scale: 1,  duration: 0.3 });
    }
    return(
        <div className="w-max inline bg-white-off cursor-pointer" ref={headingRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h1 className={" px-[12px] text-black-off text-2xl"}>{text}<span className={"text-grey-off text-3xl font-bold"}>{specChar}</span></h1>
        </div>
    )
}

export default Heading
