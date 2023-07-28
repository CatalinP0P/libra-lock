import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Container from '../ui/Container';
import { useTheme } from '../../context/ThemeContext';
import * as colors from '../../static/colors';
import ThemeSlider from '../ui/ThemeSlider';
import { ReactComponent as CoinSVG } from '../../assets/svgs/Coin.svg';
import { useNavigate } from 'react-router-dom';
import AccountButton from './AccountButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
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
            <Container className="flex flex-row justify-between py-2 items-center gap-32">
                <div className="w-full flex flex-row items-center gap-16">
                    <Logo className="z-[10]" />
                    <div className="flex flex-row items-center gap-8">
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
                    </div>
                </div>
                <DesktopNav />
                <MobileNav />
            </Container>
        </div>
    );
}
