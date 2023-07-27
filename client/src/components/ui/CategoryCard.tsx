import React, { HTMLAttributes } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
}

export default function CategoryCard({ name, className, ...props }: CardProps) {
    const { theme } = useTheme();
    return (
        <div
            className={
                'w-full group py-4 rounded-md cursor-pointer [&>*]:pointer-events-none shadow-lg ' +
                className +
                ' ' +
                (theme == 'dark'
                    ? ' bg-darkMode-800 text-white'
                    : ' bg-white text-primary')
            }
            {...props}
        >
            <label className="group-hover:scale-110 transition-all block text-center font-semibold text-2xl group-hover:opacity-80">
                {name}
            </label>
        </div>
    );
}
