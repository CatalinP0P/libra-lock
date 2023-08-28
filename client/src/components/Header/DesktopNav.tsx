import React, { useState } from 'react';
import ThemeSlider from '../ui/ThemeSlider';
import AccountButton from './AccountButton';
import SearchBar from './SearchBar';

export default function DesktopNav() {
    return (
        <>
            <div className="hidden lg:flex flex-row gap-6 w-full items-center justify-end">
                <SearchBar />
                <div>
                    <ThemeSlider />
                </div>
                <AccountButton />
            </div>
        </>
    );
}
