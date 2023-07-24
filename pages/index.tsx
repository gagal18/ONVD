import React, {useEffect, useRef} from "react";
import Slider from "../components/Slider/Slider";
import HeroItem from "../components/HeroItem/HeroItem";


const Home: React.FC = () => {
    const scrollSectionRef = useRef(null);
    return (
        <div className={"w-full mx-auto relative "}>
            <Slider />
            <div className="max-w-[1360px] mx-auto relative flex h-min pt-[100px] pb-[150px]">
                    <div className="left-0 absolute flex flex-row lg:flex-col gap-[40px] w-[100vw] overflow-x-auto lg:overflow-x-unset lg:w-full px-[40px] lg:px-unset">
                        <HeroItem header={"welcome!"} >
                            <div className={"text-white-off flex"}>
                                <span>01</span>
                            </div>
                        </HeroItem>
                        <HeroItem header={"who is Bojan:"} >
                            <div className={"text-white-off flex flex-col gap-[10px]"}>
                                <div>Bojan is 20 years old, Front-End Developer at Eagle IT Solutions, Student at FCSE - Skopje(majoring Computer Science)</div>
                                <span>02</span>
                            </div>
                        </HeroItem>
                        <HeroItem header={"as Developer"} >
                            <div className={"text-white-off flex flex-col gap-[10px]"}>
                                <div>I am head over heels for React and JavaScript; their dynamic nature captivates me. However, I yearn to enhance my skills in TypeScript and delve deeper into its statically-typed wonders.</div>
                                <span>03</span>
                            </div>
                        </HeroItem>
                        <HeroItem header={"as Student"} >
                            <div className={"text-white-off flex flex-col gap-[10px]"}>
                                <div>As a passionate computer science student, I am eager to embark on a thrilling journey into the realms of cybersecurity, machine learning, and artificial intelligence. The fusion of these fields holds immense potential for creating secure systems powered by intelligent algorithms. I am determined to explore their intricate interplay and make a lasting impact in this exciting domain.</div>
                                <span>04</span>
                            </div>
                        </HeroItem>
                        <HeroItem header={"as Young Individual"} >
                            <div className={"text-white-off flex flex-col gap-[10px]"}>
                                <div>Running and Exercising to stay healthy and active, while maintaining full-time job and being full-time student</div>
                                <div>Reading<span className={"text-xs"}>(slow)</span> and Partying<span className={"text-xs"}>(hard)</span> occasionally to keep everything under-control</div>
                                <span>05</span>
                            </div>
                        </HeroItem>
                    </div>
                </div>
        </div>
    )
}

export default Home;

