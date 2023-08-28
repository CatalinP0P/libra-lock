import React, { useEffect } from 'react';
import logoDark from '../../assets/logos/logoDark.png';
import logoWhite from '../../assets/logos/logoWhite.png';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

export default function Logo({ className }: { className?: string }) {
    const { theme } = useTheme();

    return (
        <div
            onClick={() => (window.location.href = window.location.origin)}
            className="cursor-pointer flex-grow z-[10]"
        >
            <img
                src={theme === 'dark' ? logoDark : logoWhite}
                alt="logo"
                loading="eager"
                className={
                    'min-w-[7rem] w-[7rem] transition-all  cursor-pointer' +
                    className
                }
            />
        </div>
    );
}
