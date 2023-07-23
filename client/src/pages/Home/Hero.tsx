import React from 'react';
import Container from '../../components/ui/Container';
import { useTheme } from '../../context/ThemeContext';
import { ReactComponent as HeroImage } from '../../assets/svgs/HeroImage.svg';

import heroDarkImage from '../../assets/backgrounds/HeroDark.png';
import heroLightImage from '../../assets/backgrounds/HeroLight.png';

import darkLeft from '../../assets/backgrounds/DarkLeft.png';
import darkRight from '../../assets/backgrounds/DarkRight.png';

import whiteLeft from '../../assets/backgrounds/WhiteLeft.png';
import whiteRight from '../../assets/backgrounds/WhiteRight.png';

export default function Hero() {
    const { theme } = useTheme();

    return (
        <div className="w-full bg-transparent relative z-[0]">
            <img
                className="absolute left-0 top-0 w-fit max-w-[75%] z-[0]"
                src={theme == 'dark' ? darkLeft : whiteLeft}
            />

            {/* <img
                className="absolute bottom-[-10rem] right-[-10rem] w-[30%] min-w-[20rem] max-w-[30rem] z-[0]"
                src={theme == 'dark' ? darkRight : whiteRight}
            /> */}
            <Container className="relative flex flex-col gap-4 min-h-[60vh] justify-center pt-44">
                <div className="flex flex-col lg:flex-row justify-between w-full items-center lg:items-start lg:pt-32 gap-32">
                    <label className="text-6xl lg:text-8xl z-[2] lg:max-w-[5em] mx-auto pt-12">
                        REAL BOOKS
                    </label>
                    <HeroImage className="w-[50%] max-w-[50rem] min-w-[20rem] h-full z-[1]" />
                </div>
            </Container>
        </div>
    );
}
