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
    { icon: "HTML", modalContent: "As a front-end developer, HTML has been an integral part of my journey. With its semantic structure and powerful markup capabilities, I have utilized HTML to create well-structured and accessible web pages. From laying the foundation of a website to structuring its content, HTML allows me to create meaningful and interactive user experiences." },
    { icon: "CSS", modalContent: "With CSS as my go-to tool, I bring web pages to life by designing visually stunning and responsive interfaces. Leveraging CSS, I utilize its flexibility and extensive features to customize the appearance of websites, ensuring a consistent and engaging user experience. I have skillfully employed CSS to style elements, create layouts, and incorporate animations and transitions. Additionally, I have embraced popular CSS frameworks like Bootstrap, Tailwind CSS, and Chakra UI, harnessing their pre-built components and responsive grid systems to expedite development and achieve aesthetically pleasing designs." },
    { icon: "JavaScript", modalContent: "JavaScript has been the driving force behind dynamic web applications I've built. From handling user interactions to manipulating data and creating interactive features, JavaScript empowers me to bring functionality to life. I have leveraged JavaScript libraries and frameworks to develop powerful applications, enabling me to build responsive interfaces and implement complex logic." },
    { icon: "TypeScript", modalContent: "TypeScript has been a game-changer in my development process. By adding static typing and strict type checking to JavaScript, TypeScript has enhanced my code's reliability and scalability. With its comprehensive tooling support, I can catch errors during development and improve code maintainability. TypeScript's robustness and ability to handle large-scale projects have been instrumental in my quest for writing clean and efficient code." },
    { icon: "React", modalContent: "React has transformed the way I build user interfaces. Its component-based architecture and virtual DOM simplify the creation of reusable and modular UI components. I utilize React to develop responsive web applications with interactive features. Next.js and Gatsby.js further enhance my workflow, offering server-side rendering and static site generation. The vast ecosystem and strong community support surrounding React, Next.js, and Gatsby.js provide invaluable resources for building robust and scalable applications." },
    { icon: "PHP", modalContent: "Using PHP and WordPress together unlocks limitless possibilities for creating awe-inspiring custom themes and blocks. PHP's server-side scripting seamlessly integrates dynamic functionalities, enabling me to manipulate data, implement complex logic, and tailor the user experience. WordPress, with its user-friendly interface and extensive plugin ecosystem, provides a solid foundation for managing content and extending functionality. This powerful combination allows me to design visually stunning websites with unique features, delivering exceptional user experiences that leave a lasting impression." },
    { icon: "C", modalContent: "C and C++ have played pivotal roles in my academic journey, both in college and high school. In college, C introduced me to the fundamental concepts of programming and algorithm design, while in high school, I expanded my skills with the versatility of C++. These languages have equipped me with a strong foundation in logical thinking, problem-solving, and understanding the nuances of efficient programming. The knowledge and experience gained through working with C and C++ have been invaluable in shaping my journey as a computer science enthusiast." },
    { icon: "NoSQL", modalContent: "Building applications with MongoDB and Firebase has been a game-changer for me. MongoDB's flexibility and scalability have allowed me to handle diverse and unstructured data effectively. With Firebase, I've leveraged its powerful backend services, including real-time database and user authentication, to create modern and feature-rich applications. The combination of MongoDB and Firebase has enabled me to deliver exceptional user experiences and build applications that seamlessly handle large datasets while providing real-time updates and secure authentication." },
    { icon: "SQL", modalContent: "SQL has been instrumental in my journey as a developer, enabling me to create robust applications for managing structured data efficiently. With SQL's powerful querying capabilities and support for transactions, I have crafted database schemas, executed complex queries, and ensured data integrity. Leveraging its versatility and widespread adoption, I have developed scalable and reliable applications that leverage the power of relational databases. SQL has provided me with a solid foundation for effective data management and the creation of applications that leverage structured data effectively." },
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
