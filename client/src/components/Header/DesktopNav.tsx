import React, { useState } from 'react';
import ThemeSlider from '../ui/ThemeSlider';
import AccountButton from './AccountButton';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import SearchBar from './SearchBar';

export default function DesktopNav() {
    const { theme } = useTheme();
    const navigate = useNavigate();

    return (
        <>
            <div className="hidden lg:flex flex-row gap-6 w-full items-center">
                <SearchBar />
                <div>
                    <ThemeSlider />
                </div>

                <AccountButton />
            </div>
        </>
    );
}
