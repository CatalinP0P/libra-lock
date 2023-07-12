'use client';
import React from 'react';
import Container from '../ui/Container';
import { ReactComponent as FacebookSVG } from '../../assets/svgs/Facebook2.svg';
import { ReactComponent as InstagramSVG } from '../../assets/svgs/Instagram.svg';

export default function Footer() {
    return (
        <div className="border-t-2 py-4 border-secondary/10">
            <Container className="flex flex-row justify-between">
                <label className="text-black/50 font-thin">
                    © All Rights Reserved
                </label>
                <div className="flex flex-row gap-8 items-center cursor-pointer">
                    <a href="https://facebook.com">
                        <FacebookSVG height={20} />
                    </a>
                    <a href="https://instagram.com">
                        <InstagramSVG height={24} />
                    </a>
                </div>
            </Container>
        </div>
    );
}
