import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import SplitType from "split-type";

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+=[]{}|;:,.<>?/~`"';

interface NavbarItemProps {
    name: string;
    to: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ name, to }) => {
    const spanRef = useRef<HTMLDivElement>(null!);
    let interval: NodeJS.Timeout | null = null;

    useEffect(() => {
        let isCompleted = false; // Flag variable
        let iteration = 0;
        const handleMouseOver = () => {
            interval = setTimeout(() => {
                const text = new SplitType(spanRef.current, { types: 'chars' })
                const childNodesArray = Array.from(spanRef.current?.childNodes || []);
                spanRef.current.innerHTML = childNodesArray.map((letter, index) => {
                    if (index < iteration && text.chars) {
                        return `<span class="font-bold text-transparent bg-gradient-to-r from-gray-300 to-grey-off bg-clip-text">${text.chars[index].innerText}</span>`;
                    }
                    return `<span style="color: red" className="text-red-900">${letters[Math.floor(Math.random() * 26)]}</span>`;
                }).join("");
                if (iteration >= spanRef.current.childNodes.length) {
                    spanRef.current.removeEventListener('mouseover', handleMouseOver);
                    isCompleted = true; // Set flag to true to avoid re-entering the condition
                }
                iteration += 1 / 2;
            }, 30)
        }
        if (spanRef.current) {
            spanRef.current.addEventListener('mouseover', handleMouseOver);
        }

        return () => {
            if (spanRef.current) {
                spanRef.current.removeEventListener('mouseover', handleMouseOver);
            }
        };
    }, []);

    return (
        <Link href={to}>
            <div className="bg-white px-4 py-2">
                <div className={"text-center text-transparent bg-gradient-to-r from-gray-300 to-gray-800 bg-clip-text font-bold transition duration-300"} ref={spanRef} data-name={name} dangerouslySetInnerHTML={{ __html: name }}></div>
            </div>
        </Link>
    );
};

export default NavbarItem;
