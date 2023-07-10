import {
    SiReact,
    SiJavascript,
    SiNextdotjs,
    SiWordpress,
    SiGatsby,
    SiCplusplus,
    SiC,
    SiTypescript,
    SiMongodb,
    SiHtml5, SiTailwindcss, SiCss3, SiJquery, SiPostgresql, SiPhp, SiBootstrap, SiChakraui, SiMysql, SiFirebase
} from 'react-icons/si';

interface IProps {
    [icon: string]: string;
    modalContent: string;
}

interface IconComponents {
    [icon: string]: JSX.Element | null;
}

export const sliderIconData: IProps[] = [
    { icon: "HTML", modalContent: "HTML Modal Content" },
    { icon: "CSS", modalContent: "CSS Modal Content" },
    { icon: "JavaScript", modalContent: "JavaScript Modal Content" },
    { icon: "TypeScript", modalContent: "TypeScript Modal Content" },
    { icon: "React", modalContent: "React Modal Content" },
    { icon: "PHP", modalContent: "PHP Modal Content" },
    { icon: "C", modalContent: "C Modal Content" },
    { icon: "NoSQL", modalContent: "MongoDB Modal Content" },
    { icon: "SQL", modalContent: "MongoDB Modal Content" },
];

const iconComponents: IconComponents = {
    "HTML": <SiHtml5 color={"#E34F26"}/>,
    "CSS": <div className={"flex gap-[5px] relative"}><SiCss3 className={"relative -top-[20px]"} color={"#214CE5"}/><SiTailwindcss className={"left-[20px] absolute"}  color={"#38BDF8"}/><SiChakraui className={"absolute top-[20px]"} color={"#43C8C2"}/><SiBootstrap className={"absolute -left-[20px]"} color={"#7B28F8"}/></div>,
    "JavaScript": <div className={"flex relative"}><SiJavascript className={"text-[40px] relative -top-[5px] -left-[5px]"} color={"#F0DB4F"}/><SiJquery className={"top-[20px] left-[20px] absolute"} color={"#007ACC"}/></div>,
    "TypeScript": <SiTypescript color={"#007ACC"}/>,
    "React": <div className={"flex gap-[5px] relative"}><SiReact className={"text-[50px] relative -top-[5px]"} color={"#A6DFFF"}/><SiNextdotjs className={"top-[30px] left-[30px] absolute"} color={"#717171"}/><SiGatsby className={"top-[30px] -left-[15px] absolute"} color={"#663399"}/></div>,
    "PHP": <div className={"flex gap-[5px]"}><SiPhp color={"#8A93BD"}/> <SiWordpress color={"#00749A"}/></div>,
    "C": <div className={"flex gap-[5px]"}><SiCplusplus color={"#00599C"}/><SiC color={"#00599C"}/></div>,
    "NoSQL": <div className={"flex gap-[5px]"}><SiFirebase color={"#FECA28"}/><SiMongodb color={"#429544"}/></div>,
    "SQL": <div className={"flex gap-[5px]"}><SiPostgresql color={"#00599C"}/><SiMysql color={"#00599C"}/></div>,
}

export const renderIconComponent = (icon: string): JSX.Element | null => {
    const Component = iconComponents[icon];
    return Component ? Component : null;
};
