import React, { useEffect } from 'react';
import logoDark from '../../assets/logoDark.png';
import logoWhite from '../../assets/logoWhite.png';
import { useTheme } from '../../context/ThemeContext';

export default function Logo() {
    const { theme } = useTheme();
    return (
        <img
            src={theme == 'dark' ? logoDark : logoWhite}
            className="h-[64px]"
        />
    );
}
