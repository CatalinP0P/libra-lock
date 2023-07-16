'use client';
import React from 'react';
import { Rating } from '@mui/material';
import bookImage from '../../assets/svgs/atomichabits.gif';
import { ReactComponent as CoinSVG } from '../../assets/svgs/Coin.svg';
import Button from './Button';
import { useTheme } from '../../context/ThemeContext';
import { primary } from '../../static/colors';

export default function BookCard() {
    const { theme } = useTheme();
    return (
        <div
            className={
                'flex flex-col transition-all relative w-full h-full cursor-pointer items-start rounded-md text-start shadow-2xl ' +
                (theme == 'dark'
                    ? ' bg-secondary/5 text-white'
                    : 'bg-white text-black')
            }
        >
            <div className="relative h-[100%] w-full">
                <img
                    className="relative w-[60%] h-[100%] mx-auto z-[10]"
                    src={bookImage}
                />
                <img
                    className="absolute left-0 top-0 w-full h-full z-[1] object-fill"
                    src={bookImage}
                />
                <div
                    className={
                        'transition-all absolute top-0 left-0 w-full h-full z-[4] ' +
                        (theme == 'dark' ? 'bg-darkMode/90' : 'bg-white/90')
                    }
                />
            </div>
            <div className="flex flex-col gap-1 px-4 pb-4 w-full">
                <label className="font-bold text-lg pt-4 ms-1">
                    Atomic Habits
                </label>
                <Rating value={4} readOnly={true} size="medium" />
                <div className="flex flex-row items-center gap-1 mt-1">
                    <label>120</label>
                    <CoinSVG
                        height={16}
                        width={16}
                        fill={theme == 'dark' ? 'white' : 'secondary'}
                    />
                </div>
                <div className="grid grid-cols-2 gap-1 w-full pt-4">
                    <Button
                        variant="primary"
                        className="w-full py-1"
                        rounded={false}
                    >
                        Buy
                    </Button>
                    <Button
                        variant="secondary"
                        className="w-full py-1"
                        rounded={false}
                    >
                        Rent
                    </Button>
                </div>
            </div>
        </div>
    );
}
