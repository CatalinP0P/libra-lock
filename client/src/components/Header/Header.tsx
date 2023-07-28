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
    return (
        <div
            className={
                'absolute top-0 left-0 right-0 border-b-2 border-secondary/10 z-[2] md:bg-transparent ' +
                (theme == 'dark'
                    ? ' bg-darkMode-800 text-white'
                    : 'bg-white text-primary')
            }
        >
            <Container className="flex flex-row justify-between py-2 items-center">
                <Logo className='z-[10]' />
                <DesktopNav />
                <MobileNav />
            </Container>
        </div>
    );
}
