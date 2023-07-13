import React from 'react';
import { ReactComponent as AppleSVG } from '../../assets/svgs/Apple.svg';
import { useTheme } from '../../context/ThemeContext';

export default function AppleButton({ className }: { className?: string }) {
    const { theme } = useTheme();
    return (
        <div
            className={
                className +
                ' rounded-full p-2 cursor-pointer ' +
                (theme == 'light' ? 'bg-black/80' : 'bg-white')
            }
        >
            <AppleSVG
                className="translate-y-[-1px]"
                fill={theme == 'light' ? 'white' : 'black'}
                width={32}
                height={32}
            />
        </div>
    );
}
