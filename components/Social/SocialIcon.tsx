import React, {useEffect, useState} from 'react';
import { IconContext } from "react-icons";

import {FaFacebookSquare, FaGithubSquare, FaLinkedin} from "react-icons/fa";
import Link from "next/link";


const SocialIcon = ({icon}: ISocial) =>  {

    const [mouseOver, setMouseOver] = useState(false)
    let iconRender
    let iconLink:string = ''

        switch (icon) {
            case "Github": {
                iconRender = <FaGithubSquare color={mouseOver ? "#fff" : "#a5a5a5"}/>
                iconLink = 'https://github.com/gagal18'
            }break;
            case "Facebook": {
                iconRender = <FaFacebookSquare color={mouseOver ? "#1877f2" :  "#a5a5a5"}/>
                iconLink = 'https://www.facebook.com/bojan.gagaleski'
            }break;
            case "LinkedIn": {
                iconRender = <FaLinkedin color={mouseOver ? "#3987C8" :  "#a5a5a5"}/>
                iconLink = 'https://www.linkedin.com/in/bojan-gagaleski-318922197'
            }break;
        }

    return (
        <div className={'w-20 p-2 flex justify-center items-center'}>
        <Link href={iconLink}>
        <div className={'text-[25px] flex justify-center flex-col items-center w-full'} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
            <IconContext.Provider value={{className: "custom-transition duration-300" }}>
                <div>
                    {iconRender}
                </div>
            </IconContext.Provider>
        </div>
        </Link>
        </div>
    );
}

export default SocialIcon;

interface ISocial{
    icon: string;
}
