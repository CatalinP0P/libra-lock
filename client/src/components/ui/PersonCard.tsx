import React, { HTMLAttributes } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    imageURL: string;
}

export default function PersonCard({
    imageURL,
    name,
    className,
    ...props
}: CardProps) {
    const { theme } = useTheme();
    return (
        <div
            {...props}
            className={
                'group cursor-pointer p-4 shadow-lg flex flex-col items-center gap-8 ' +
                className +
                ' ' +
                (theme == 'dark'
                    ? ' bg-darkMode-800 text-white'
                    : 'bg-white text-primary')
            }
        >
            <div className="relative rounded-full overflow-hidden w-[60%] h-[0] pb-[60%]  cursor-pointer transition-all">
                <div className="absolute left-0 top-0 w-full h-full bg-black/30 transition-all group-hover:bg-transparent z-[2]" />
                <img
                    className="absolute left-0 top-0 w-full h-full object-cover z-[1] group-hover:scale-105 transition-all"
                    src={imageURL}
                />
            </div>
            <div className="w-full h-[2px] bg-neutral-500" />
            <label className="font-semibold text-2xl mb-4 py-2">{name}</label>
        </div>
    );
}
