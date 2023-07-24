import React, {ReactNode, useEffect} from "react";

interface SliderItemProps {
    content: string;
    icon?: string;
    children?: ReactNode;
}

const SliderItem: React.FC<SliderItemProps> = ({ content, icon, children}) => {
    return (
        <>
            <div className={"knowledge_item w-16 h-16 lg:w-40 lg:h-40 rounded-full bg-black text-white flex items-center justify-center ml-auto"}>
                {children}
            </div>
            <div className={"shadow-lg px-4 py-2 knowledge_modal opacity-0 -top-[50px] lg:top-0 -right-[30px] lg:right-[50px]  absolute w-min lg:w-[400px] rounded-xl bg-black text-white flex items-center justify-center"}>
                {content}
            </div>
        </>
    )
}

export default SliderItem
