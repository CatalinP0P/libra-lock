'use client';

import React from 'react';
import Button from './Button';

import { Rating } from '@mui/material';
import { ReactComponent as CoinSVG } from '../../assets/svgs/Coin.svg';
import { useTheme } from '../../context/ThemeContext';
import { primary } from '../../static/colors';
import { useNavigate } from 'react-router-dom';
import Book from '../../pages/Book/Book';

interface bookProps {
    id: string;
    title: string;
    imageURL: string;
    price: number;
    author: string;
    rating: 1 | 2 | 3 | 4 | 5;
    onRent?: any;
    onBuy?: any;
}

export default function BookCard({
    id,
    title,
    imageURL,
    price,
    author,
    rating,
    onRent,
    onBuy,
}: bookProps) {
    const navigate = useNavigate();
    const { theme } = useTheme();

    return (
        <div
            className={
                'flex flex-col transition-all relative w-full cursor-pointer items-start rounded-md text-start shadow-2xl ' +
                (theme == 'dark'
                    ? ' bg-secondary/5 text-white'
                    : 'bg-white text-primary')
            }
        >
            <div className="relative h-[100%] w-full">
                <img
                    className="relative w-[60%] h-[100%] mx-auto z-[10]"
                    onClick={() => navigate('/' + id)}
                    src={imageURL}
                />
                <img
                    className="absolute left-0 top-0 w-full h-full z-[1] object-cover"
                    src={imageURL}
                />
                <div
                    className={
                        'transition-all absolute top-0 left-0 w-full h-full z-[4] ' +
                        (theme == 'dark' ? 'bg-darkMode/90' : 'bg-white/90')
                    }
                />
            </div>
            <div className="flex flex-col gap-1 px-4 pb-4 w-full">
                <label className="font-bold text-lg pt-4 ms-1">{title}</label>
                <label className="opacity-50 text-base ms-1">{author}</label>
                <Rating value={rating} readOnly={true} size="medium" />
                <div className="flex flex-row items-center gap-1 mt-1">
                    <CoinSVG
                        height={16}
                        width={16}
                        fill={theme == 'dark' ? 'white' : 'secondary'}
                    />
                    <label>{price}</label>
                </div>
            </div>
            <div className="grid grid-cols-2 w-full pt-4 z-[5] pointer-events-auto">
                <Button
                    variant="primary"
                    className="w-full py-1"
                    rounded={false}
                    onClick={onBuy ? onBuy : null}
                >
                    Buy
                </Button>
                <Button
                    variant="secondary"
                    className="w-full py-1"
                    rounded={false}
                    onClick={onRent}
                >
                    Rent
                </Button>
            </div>
        </div>
    );
}
