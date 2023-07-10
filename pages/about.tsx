import React, {useRef} from "react";
import Heading from "../components/Heading/Heading";
import Image from "next/image";
import bojan from "../public/assets/bojan.jpg";
import {gsap} from "gsap";
import {useMediaQuery} from "react-responsive";
import HoverItem from "../components/HoverItem/HoverItem";
import gif_mail from "../public/assets/email.gif";
import img_mail from "../public/assets/email.png";
import gif_phone from "../public/assets/telephone.gif";
import img_phone from "../public/assets/telephone.png";

const About: React.FC = () => {
    const slideRef = useRef<HTMLDivElement>(null);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const handleMouseOver = () => {
        if (slideRef !== null && slideRef.current) {
            if (isTabletOrMobile) {
                gsap.to(slideRef.current, {
                    y: "-90px",
                    x: "150px",
                    ease: "power4.out",
                    duration: 1,
                    opacity: 1,
                });
            } else {
                gsap.to(slideRef.current, {
                    y: "-90px",
                    x: "150px",
                    ease: "power4.out",
                    duration: 1,
                    opacity: 1,
                });

            }
        }
    };
    const handleMouseLeave = () => {
        if (slideRef !== null && slideRef.current) {
            if (isTabletOrMobile) {
                gsap.to(slideRef.current, {
                    y: "0",
                    x: "0",
                    ease: "power4.out",
                    duration: 1,
                    opacity: 0,
                });
            } else {
                gsap.to(slideRef.current, {
                    x: "0",
                    y: "0",
                    ease: "power4.out",
                    duration: 1,
                    opacity: 0,
                });

            }
        }
    };
    return (
        <div className={"w-full mx-auto relative"}>
            <div className="max-w-[1360px] mx-auto relative flex flex-col h-min pt-[100px] pb-[150px]">
                <Heading specChar={"."} text={"more about me"}/>
                <div className={"mt-[50px] relative "}  onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} >
                    <div className={"w-[300px]"}>
                        <Image className={"object-contain"} src={bojan}
                           alt={"Bojan Gagaleski at Eagle IT Solutions"}/>
                    </div>
                    <div ref={slideRef} className={"opacity-0 absolute top-[100px] bg-white-off px-[10px] py-[5px] top-0"}>
                        <p>
                            Hey, it&apos;s me!
                            At Eagle IT Solutions&apos;s office
                        </p>
                    </div>
                    <div className={"relative bg-white-off -top-[50px] left-[50px] px-[10px] py-[5px]"}>
                        <p>
                            Welcome to my portfolio page!
                            I am thrilled to have this opportunity to showcase my skills, experiences, and projects. As
                            a [insert your profession/field here], I am passionate about [insert your area of expertise
                            here] and constantly strive for excellence in my work. Whether you&apos;re a potential employer,
                            collaborator, or simply someone interested in learning more about me, I hope this portfolio
                            provides valuable insights into my abilities and achievements.
                            Skills:
                            Throughout my career, I have honed a diverse set of skills that enable me to excel in my
                            field. These skills include:
                        </p>
                            <div className={"my-[20px] flex flex-col gap-[10px]"}>
                        <HoverItem text={"gagaleskibojan@gmail.com"} gif={gif_mail} img={img_mail}
                                   link={"mailto:gagaleskibojan@gmail.com"}/>
                        <HoverItem text={"072 525 452"} gif={gif_phone} img={img_phone}
                                   link={"tel:072525452"}/>
                            </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default About;

