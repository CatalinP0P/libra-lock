import React from 'react';
import heroDarkImage from '../../assets/backgrounds/HeroDark.png';
import heroLightImage from '../../assets/backgrounds/HeroLight.png';
import Container from '../../components/ui/Container';
import { useTheme } from '../../context/ThemeContext';
import { ReactComponent as HeroImage } from '../../assets/svgs/HeroImage.svg';

export default function Hero() {
    const { theme } = useTheme();

    return (
        <div className="w-full bg-transparent">
            <img
                className="absolute left-0 top-0 w-full h-full object-cover select-none pointer-events-none"
                src={theme == 'dark' ? heroDarkImage : heroLightImage}
            />
            <Container className="relative flex flex-col gap-4 w-full min-h-[60vh] justify-center pt-44">
                <div className="flex flex-col lg:flex-row justify-between w-full items-center lg:items-start lg:pt-32 gap-32">
                    <label className="text-6xl lg:text-8xl text-white z-[10] lg:max-w-[5em] mx-auto pt-12">
                        REAL BOOKS
                    </label>
                    <HeroImage className="w-[50%] max-w-[50rem] min-w-[20rem] h-full z-[5]" />
                </div>
            </Container>
        </div>
    );
}
