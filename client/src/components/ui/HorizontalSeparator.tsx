import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function HorizontalSeparator({
    className,
    title,
    color,
}: {
    className?: string;
    title?: string;
    color?: string;
}) {
    const { theme } = useTheme();

    return (
        <div
            className={
                'flex flex-row items-center w-full ' +
                (title ? ' gap-4 ' : '') +
                className
            }
        >
            <div
                className={
                    'h-[1px] w-full ' +
                    (theme == 'dark' ? 'bg-white/50' : 'bg-black/50')
                }
            />
            {title && <label className="font-light">{title}</label>}
            <div
                className={
                    'h-[1px] w-full ' +
                    (theme == 'dark' ? 'bg-white/50' : 'bg-black/50')
                }
            />
        </div>
    );
}
