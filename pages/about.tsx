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
                    <div className={"relative bg-white-off -top-[50px] left-[50px] px-[10px] py-[5px] flex flex-col gap-[20px]"}>
                        <p>
                            It&apos;m a 20-year-old computer science student and front-end developer, deeply passionate about React. Solving problems is at the core of my being, and I find great fulfillment in utilizing my skills to create innovative solutions. During my third year of high school, I had the opportunity to compete in the MASSUM competition, where I proudly secured 3rd place. This experience solidified my love for problem-solving and ignited a drive for continuous growth and learning.
                        </p>
                        <p>
                            Throughout my academic journey, I consistently demonstrated excellence, earning the recognition as the best student in my high school. This achievement is a testament to my strong work ethic and unwavering commitment to acquiring knowledge and achieving academic success. When I'm not immersed in coding, I find balance and rejuvenation through regular workouts, understanding the importance of maintaining a healthy lifestyle for both physical and mental well-being.
                        </p>
                        <p>
                            With a solid foundation in front-end development and a genuine love for React, I am excited to explore the vast realms of computer science, particularly in the intersection of machine learning and artificial intelligence. I believe that by harnessing the power of these cutting-edge technologies, we can revolutionize industries, drive innovation, and shape a brighter future.
                        </p>
                        <p>
                            In summary, I am a motivated computer science student and front-end developer driven by a love for problem-solving. My experience in competitions, academic achievements, and commitment to personal fitness all contribute to my well-rounded approach to life and work. I am eager to continue honing my skills, embracing new challenges, and making a meaningful impact in the dynamic world of technology.
                        </p>
                        <p>
                            In addition to my passion for front-end development, I have a strong inclination towards the field of cybersecurity. I am deeply fascinated by the ever-evolving landscape of digital threats and the critical importance of protecting sensitive information. With the rise of machine learning and artificial intelligence, I am eager to explore their applications in enhancing cybersecurity measures. By combining my knowledge of computer science with these emerging technologies, I aspire to become a skilled cyber security engineer, contributing to the development of robust systems and safeguarding against potential vulnerabilities.                        </p>
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

