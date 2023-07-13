import React from 'react';
import { ReactComponent as MoonSecondary } from '../../assets/svgs/MoonSecondary.svg';
import { ReactComponent as SunSecondary } from '../../assets/svgs/SunSecondary.svg';
import { ReactComponent as SunWhite } from '../../assets/svgs/SunWhite.svg';
import Slider from './Slider';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeSlider() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <Slider
            checked={theme == 'dark' ? true : false}
            onChange={() => {
                toggleTheme();
            }}
            SvgOFF={SunWhite}
            SvgON={MoonSecondary}
        />
    );
}
