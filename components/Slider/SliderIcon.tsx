import {
    SiReact,
    SiJavascript,
    SiRedux,
    SiNextdotjs,
    SiWordpress,
    SiGatsby,
    SiCplusplus,
    SiC,
    SiTypescript,
    SiMongodb,
    SiGithub,
    SiGitlab,
    SiHtml5
} from 'react-icons/si';

interface IProps {
    [icon: string]: string;
    modalContent: string;
}

export const sliderIconData: IProps[] = [
    { icon: "React", modalContent: "React Modal Content" },
    { icon: "JavaScript", modalContent: "JavaScript Modal Content" },
    { icon: "Redux", modalContent: "Redux Modal Content" },
    { icon: "Next", modalContent: "Next Modal Content" },
    { icon: "WordPress", modalContent: "WordPress Modal Content" },
    { icon: "Gatsby", modalContent: "Gatsby Modal Content" },
    { icon: "CPP", modalContent: "CPP Modal Content" },
    { icon: "C", modalContent: "C Modal Content" },
    { icon: "TypeScript", modalContent: "TypeScript Modal Content" },
    { icon: "MongoDB", modalContent: "MongoDB Modal Content" },
    { icon: "GitHub", modalContent: "GitHub Modal Content" },
    { icon: "GitLab", modalContent: "GitLab Modal Content" },
    { icon: "HTML", modalContent: "HTML Modal Content" },
];

interface IconComponents {
    [icon: string]: JSX.Element | null;
}

const iconComponents: IconComponents = {
    React: <SiReact color={"#A6DFFF"} />,
    JavaScript: <SiJavascript color={"#F0DB4F"} />,
    Redux: <SiRedux color={"#764ABC"} />,
    Next: <SiNextdotjs color={"#717171"} />,
    WordPress: <SiWordpress color={"#00749A"} />,
    Gatsby: <SiGatsby color={"#663399"} />,
    CPP: <SiCplusplus color={"#00599C"} />,
    C: <SiC color={"#00599C"} />,
    TypeScript: <SiTypescript color={"#007ACC"} />,
    MongoDB: <SiMongodb color={"#47A248"} />,
    GitHub: <SiGithub color={"#fff"} />,
    GitLab: <SiGitlab color={"#FCA121"} />,
    HTML: <SiHtml5 color={"#E34F26"} />,
};

export const renderIconComponent = (icon: string): JSX.Element | null => {
    const Component = iconComponents[icon];
    return Component ? Component : null;
};
