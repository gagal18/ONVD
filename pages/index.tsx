import React, {useEffect, useRef} from "react";
import Slider from "../components/Slider/Slider";
import HeroItem from "../components/HeroItem/HeroItem";


const Home: React.FC = () => {
    const scrollSectionRef = useRef(null);
    return (
        <div className={"w-full mx-auto relative "}>
            <Slider />
            <div className="max-w-[1360px] mx-auto relative flex h-min pt-[100px] pb-[150px]">
                    <div className="left-0 absolute flex flex-col gap-[40px]">
                        <HeroItem header={"welcome!"} >
                            <div>01</div>
                        </HeroItem>
                        <HeroItem header={"who is Bojan:"} >
                            <div>02</div>
                        </HeroItem>
                        <HeroItem header={"as Developer"} >
                            <div>03</div>
                        </HeroItem>
                        <HeroItem header={"as Student"} >
                            <div>04</div>
                        </HeroItem>
                        <HeroItem header={"as Young Individual"} >
                            <div>05</div>
                        </HeroItem>
                    </div>
                </div>
        </div>
    )
}

export default Home;

