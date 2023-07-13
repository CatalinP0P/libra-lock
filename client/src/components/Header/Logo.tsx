import React, { useEffect } from 'react';
import logoDark from '../../assets/logos/logoDark.png';
import logoWhite from '../../assets/logos/logoWhite.png';
import { useTheme } from '../../context/ThemeContext';

export default function Logo({ className }: { className?: string }) {
    const { theme } = useTheme();
    return (
        <img
            src={theme == 'dark' ? logoDark : logoWhite}
            className={'h-[40px] md:h-[64px] ' + className}
        />
    );
}
