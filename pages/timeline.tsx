import React from "react";
import Heading from "../components/Heading/Heading";

const Timeline: React.FC = () => {
    return (
        <div className={"w-full mx-auto relative"}>
            <div className="max-w-[1360px] mx-auto relative flex h-min pt-[100px] pb-[150px]">
                <Heading specChar={"."} text={"my journey"}/>
            </div>
        </div>
    )
}

export default Timeline;

