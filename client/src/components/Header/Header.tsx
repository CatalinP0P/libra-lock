import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Container from '../ui/Container';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function Header() {
    const { theme } = useTheme();
    const navigate = useNavigate();
    return (
        <div
            className={
                'absolute top-0 left-0 right-0 z-[100] border-b-2 border-secondary/10 lg:bg-transparent ' +
                (theme == 'dark'
                    ? ' bg-darkMode-800 text-white'
                    : 'bg-white text-primary')
            }
        >
            <Container className="flex flex-row justify-between py-2 items-center gap-8 [&>*]:whitespace-nowrap">
                <div className="w-full flex flex-row items-center gap-16">
                    <Logo className="z-[10] flex-grow" />
                    <div className="hidden lg:flex flex-row items-center gap-8">
                        <label
                            className="font-semibold opacity-60 hover:opacity-100 cursor-pointer text-lg"
                            onClick={() => navigate('/books')}
                        >
                            Browse Books
                        </label>
                        <label
                            className="font-semibold opacity-60 hover:opacity-100 cursor-pointer text-lg"
                            onClick={() => navigate('/buycoins')}
                        >
                            Buy Credits
                        </label>
                        <label
                            className="font-semibold opacity-60 hover:opacity-100 cursor-pointer text-lg"
                            onClick={() => navigate('/why-us')}
                        >
                            Why us
                        </label>
                        <label
                            className="font-semibold opacity-60 hover:opacity-100 cursor-pointer text-lg"
                            onClick={() => navigate('/contact')}
                        >
                            Contact
                        </label>
                    </div>
                </div>
                <DesktopNav />
                <MobileNav />
            </Container>
        </div>
    );
}
