import React, { useState } from 'react';
import ThemeSlider from '../ui/ThemeSlider';
import AccountButton from './AccountButton';
import * as colors from '../../static/colors';
import { ReactComponent as CoinSVG } from '../../assets/svgs/Coin.svg';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import SearchBar from './SearchBar';

export default function DesktopNav() {
    const { theme } = useTheme();
    const navigate = useNavigate();

    return (
        <>
            <div className="hidden lg:flex w-full flex-row gap-2">
                <label
                    className="font-bold opacity-60 hover:opacity-100 cursor-pointer text-lg"
                    onClick={() => navigate('/books')}
                >
                    Browse Books
                </label>
            </div>
            <div className="hidden lg:flex flex-row gap-4 w-full items-center">
                <SearchBar />
                <div>
                    <ThemeSlider />
                </div>
                <label
                    className="flex flex-row items-center text-xl gap-2 cursor-pointer"
                    onClick={() => navigate('/buycoins')}
                >
                    540
                    <CoinSVG
                        height={24}
                        width={24}
                        fill={theme == 'dark' ? colors.white : colors.primary}
                    />
                </label>
                <AccountButton />
            </div>
        </>
    );
}
