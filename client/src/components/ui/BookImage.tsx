import React, { HTMLAttributes } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface BookImageProps extends React.HTMLProps<HTMLDivElement> {
    hoverEffect?: boolean;
    imageURL: string;
}

export default function BookImage({
    imageURL,
    className,
    hoverEffect = false,
    ...props
}: BookImageProps) {
    const { theme } = useTheme();

    return (
        <div
            className={
                'group relative h-full overflow-hidden w-full ' + className
            }
            {...props}
        >
            <img
                className={
                    'relative w-[60%] h-[100%] mx-auto z-[10] pointer-events-none ' +
                    (hoverEffect ? 'transition-all group-hover:scale-105' : '')
                }
                loading="lazy"
                src={imageURL}
            />
            <img
                className={
                    'absolute left-0 top-0 w-full h-full z-[1] object-cover pointer-events-none ' +
                    (hoverEffect ? 'transition-all group-hover:scale-105' : '')
                }
                src={imageURL}
            />
            <div
                className={
                    'transition-all absolute top-0 left-0 w-full h-full z-[4] pointer-events-none ' +
                    (theme == 'dark' ? 'bg-darkMode/90' : 'bg-white/90')
                }
            />
        </div>
    );
}
