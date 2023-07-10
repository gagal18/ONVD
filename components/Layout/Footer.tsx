import React from "react";
import SocialIcon from "../Social/SocialIcon";
import Image from "next/image";
import avatar from '../../public/assets/icon.png';

function Footer() {

    return (
        <>
            <div className={`bg-black py-4 custom-transition duration-300 fixed z-50 w-full bottom-0 min-h-[80px]`}>
                <div className={"flex justify-center items-start"}>
                    <SocialIcon icon={"Github"}/>
                    <SocialIcon icon={"Facebook"}/>
                    <SocialIcon icon={"LinkedIn"}/>
                    <SocialIcon icon={"CodeWars"}/>
                </div>
                <div className={"flex justify-center"}>
                    <div className={"flex items-center"}>
                        <span  className={"text-white"}>Crafted by</span>
                        <span className={"flex items-center"}>
                            <Image className={"w-12"} src={avatar}  alt={"Bojan Gagaleski"}/>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Footer;
