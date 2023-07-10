import React, {ReactNode, useEffect} from "react";

interface HeroItemProps {
    header: string;
    children?: ReactNode;
}

const HeroItem: React.FC<HeroItemProps> = ({ header,  children}) => {
    return (
        <div className="rounded-r-lg p-[20px] flex flex-col justify-between min-h-[250px] bg-black last:mb-[200px]">
            <div className="text-white text-[24px]">{header}</div>
            <div className="text-white">{children}</div>
        </div>
    )
}

export default HeroItem
