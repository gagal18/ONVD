import React, {useRef, useState} from "react";
import Image from "next/image";
import gsap from "gsap";

interface HoverItemProps {
    text: string;
    link: string;
    img: string;
    gif: string;
}
const HoverItem: React.FC<HoverItemProps> = ({text, link, img, gif}) => {
    const [isHovered, setIsHovered] = useState(false);
    const lineRef = useRef(null);

    const handleHover = () => {
        setIsHovered(!isHovered);
        if(!isHovered){
            gsap.to(lineRef.current, { width: "100%" ,  duration: 0.5 });
        }else{
            gsap.to(lineRef.current, { width: 0 ,  duration: 0.5 });
        }

    };

    return (
                <a className={"w-max flex items-center gap-[10px] relative"} href={link} onMouseEnter={handleHover}
                   onMouseLeave={handleHover}>
                  {isHovered ? (
                      <Image className={"w-12"} src={gif} alt={"Bojan Gagaleski"}/>
                  ) : (
                      <Image className={"w-12"} src={img} alt={"Bojan Gagaleski"}/>
                  )}
                    <span>{text}</span>
                    <span ref={lineRef} className={"absolute bottom-0 h-[2px] w-0 bg-black-off"}></span>
                </a>
    );
};


export default HoverItem
