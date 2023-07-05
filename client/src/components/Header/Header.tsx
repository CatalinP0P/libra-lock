import React from 'react';
import Logo from './Logo';
import Container from '../ui/Container';
import { useTheme } from '../../context/ThemeContext';
import Slider from '../ui/Slider';

export default function Header() {
    const { toggleTheme, theme } = useTheme();

    return (
        <div className="border-b border-secondary/10">
            <Container className="w-full flex flex-row py- justify-between py-2 items-center">
                <Logo />
                <Slider
                    checked={theme == 'dark' ? true : false}
                    onChange={() => {
                        toggleTheme();
                    }}
                />
            </Container>
        </div>
    );
}
