import React, {useState} from "react";
import Heading from "../components/Heading/Heading";
import gif_mail from "../public/assets/email.gif";
import gif_phone from "../public/assets/telephone.gif";
import img_mail from "../public/assets/email.png";
import img_phone from "../public/assets/telephone.png";
import HoverItem from "../components/HoverItem/HoverItem";

const Blog: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };


    return (
        <div className={"w-full mx-auto relative"}>
            <div className="max-w-[1360px] mx-auto relative flex flex-col h-min pt-[100px] pb-[150px]">
                <Heading specChar={"."} text={"read about my opinions and experiences"}/>
                <div className={"relative bg-white-off px-[10px] py-[5px] mt-[150px] flex flex-col gap-[20px]"}>
                    <p>right now I am too lazy to write blogs and share experiences, but I promise I will</p>
                    <p>stay tuned, and write me if you have anything on your mind</p>
                    <div className={"my-[20px] flex flex-col gap-[10px]"}>
                        <HoverItem text={"gagaleskibojan@gmail.com"} gif={gif_mail} img={img_mail}
                                   link={"mailto:gagaleskibojan@gmail.com"}/>
                        <HoverItem text={"072 525 452"} gif={gif_phone} img={img_phone}
                                   link={"tel:072525452"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
