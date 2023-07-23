'use client';
import React from 'react';
import Container from '../ui/Container';
import * as colors from '../../static/colors';
import { ReactComponent as FacebookSVG } from '../../assets/svgs/Facebook2.svg';
import { ReactComponent as InstagramSVG } from '../../assets/svgs/Instagram.svg';
import { useTheme } from '../../context/ThemeContext';

export default function Footer() {
    const { theme } = useTheme();
    return (
        <div className="border-t-2 py-4 border-secondary/10">
            <Container className="flex flex-row justify-between">
                <label className="text-sm font-light">© All Rights Reserved</label>
                <div className="flex flex-row gap-8 items-center">
                    <a href="https://facebook.com" className="cursor-pointer">
                        <FacebookSVG
                            height={20}
                            className="transition-all"
                            fill={
                                theme == 'dark' ? colors.white : colors.primary
                            }
                        />
                    </a>
                    <a href="https://instagram.com" className="cursor-pointer">
                        <InstagramSVG
                            className="transition-all"
                            height={28}
                            fill={
                                theme == 'dark' ? colors.white : colors.primary
                            }
                        />
                    </a>
                </div>
            </Container>
        </div>
    );
}
