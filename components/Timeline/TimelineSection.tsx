import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {SiReact} from "react-icons/si";
import React from "react";
import styles from "./TimelineSection.module.css"
import {FaBookOpen, FaLaptopCode} from "react-icons/fa";

const TimelineSection:React.FC = () =>{
    return(
        <VerticalTimeline className={styles.timeline_section}>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2018 - 2022"
                dateClassName={"bg-white text-black-off w-[max-content!important] px-[12px!important]"}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaBookOpen />}
            >
                <h3 className="vertical-timeline-element-title">Student</h3>
                <h4 className="vertical-timeline-element-subtitle">Struga, Macedonia</h4>
                <p>
                    Enrolled in High School,  Electrical and Electronics Engineering
                    Where I started my programming path, coding in Pascal and C++
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                date="January 2021 - February 2021"
                dateClassName={"bg-white text-black-off w-[max-content!important] px-[12px!important]"}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaLaptopCode />}
            >
                <h3 className="vertical-timeline-element-title">Frontend Developer (Internship)</h3>
                <h4 className="vertical-timeline-element-subtitle">Eagle IT Solutions Struga, Southwestern, North Macedonia</h4>
                <p>
                    Completed my first internship as an 18-year-old student, acquiring valuable knowledge and skills during this experience.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                date="April 2021 - June 2021"
                dateClassName={"bg-white text-black-off w-[max-content!important] px-[12px!important]"}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaLaptopCode />}
            >
                <h3 className="vertical-timeline-element-title">Frontend Developer (Internship)</h3>
                <h4 className="vertical-timeline-element-subtitle">JM International (JMI) (Remote)</h4>
                <p>
                    Participated in an internship focused on gaining experience and learning React and Next.js while contributing to the team&apos;s projects.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                date="September 2021 - December 2021"
                dateClassName={"bg-white text-black-off w-[max-content!important] px-[12px!important]"}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaLaptopCode />}
            >
                <h3 className="vertical-timeline-element-title">Freelance Web Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Self-employed (Remote)</h4>
                <p>
                    Worked as a freelance web developer, creating custom WordPress themes from scratch using JavaScript, jQuery, CSS, and PHP.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                date="February 2022 - Present"
                dateClassName={"bg-white text-black-off w-[max-content!important] px-[12px!important]"}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaLaptopCode />}
            >
                <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Eagle IT Solutions Struga, Southwestern, North Macedonia</h4>
                <p>
                    Working as a frontend developer, contributing to various projects and utilizing my skills in React, JavaScript, and CSS.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2022 - 2026"
                dateClassName={"bg-white text-black-off w-[max-content!important] px-[12px!important]"}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaLaptopCode />}
            >
                <h3 className="vertical-timeline-element-title">Student</h3>
                <h4 className="vertical-timeline-element-subtitle">Skopje, Macedonia</h4>
                <p>
                    Enrolled in Computer Science at FCSE
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>

    )
}

export default TimelineSection
