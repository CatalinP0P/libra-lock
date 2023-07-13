import React, { EventHandler } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function Button({
    children,
    className,
    onClick,
    variant = 'primary',
    rounded = true,
}: {
    children?: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    variant?: 'primary' | 'secondary';
    rounded?: boolean;
}) {
    const { theme } = useTheme();
    var style = `px-8 transition-all hover:scale-[102%] text-xl py-2 ${
        variant == 'primary' ? 'text-white' : 'text-primary'
    } ${rounded ? 'rounded-full' : ''} ${
        variant == 'primary'
            ? theme == 'dark'
                ? 'bg-secondary border-2 border-secondary hover:bg-secondary/75 hover:border-secondary/75'
                : 'bg-primary border-2 border-primary hover:bg-primary/75 hover:border-primary/75'
            : theme == 'dark'
            ? 'border-2 border-secondary text-secondary hover:border-secondary/75 hover:text-secondary/75'
            : 'border-2 border-primary text-primary hover:border-primary/75 hover:text-primary/75'
    }  ${className}`;

    return (
        <button className={style} onClick={onClick}>
            {children}
        </button>
    );
}
