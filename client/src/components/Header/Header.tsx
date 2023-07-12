import React from 'react';
import Logo from './Logo';
import Container from '../ui/Container';
import { useTheme } from '../../context/ThemeContext';
import Slider from '../ui/Slider';
import { ReactComponent as MoonSecondary } from '../../assets/svgs/MoonSecondary.svg';
import { ReactComponent as SunSecondary } from '../../assets/svgs/SunSecondary.svg';
import { ReactComponent as SunWhite } from '../../assets/svgs/SunWhite.svg';

export default function Header() {
    const { toggleTheme, theme } = useTheme();

    return (
        <div className="border-b-2 border-secondary/10">
            <Container className="flex flex-row py- justify-between py-2 items-center">
                <Logo />
                <Slider
                    checked={theme == 'dark' ? true : false}
                    onChange={() => {
                        toggleTheme();
                    }}
                    SvgOFF={SunWhite}
                    SvgON={MoonSecondary}
                />
            </Container>
        </div>
    );
}
