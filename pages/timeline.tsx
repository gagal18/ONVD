import React from "react";
import Heading from "../components/Heading/Heading";
import 'react-vertical-timeline-component/style.min.css';
import TimelineSection from "../components/Timeline/TimelineSection";

const Timeline: React.FC = () => {
    return (
        <div className={"w-full mx-auto relative"}>
            <div className="max-w-[1360px] mx-auto relative flex flex-col h-min pt-[100px] pb-[150px]">
                <Heading specChar={"."} text={"my journey"}/>
                <TimelineSection />
            </div>
        </div>
    )
}

export default Timeline;

