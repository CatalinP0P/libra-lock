import React, { useEffect } from 'react';
import Logo from './Logo';
import Container from '../ui/Container';
import { useTheme } from '../../context/ThemeContext';
import * as colors from '../../static/colors';
import ThemeSlider from '../ui/ThemeSlider';
import { ReactComponent as CoinSVG } from '../../assets/svgs/Coin.svg';
import AccountButton from './AccountButton';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const { theme } = useTheme();
    const navigate = useNavigate();

    return (
        <div className="absolute top-0 left-0 right-0 border-b-2 border-secondary/10 z-[100]">
            <Container className="flex flex-row py- justify-between py-2 items-center">
                <Logo />
                <div className="flex flex-row gap-4 items-center">
                    <ThemeSlider />
                    <label
                        className="flex flex-row items-center text-xl gap-2 cursor-pointer"
                        onClick={() => navigate('/buycoins')}
                    >
                        540
                        <CoinSVG
                            height={24}
                            width={24}
                            fill={
                                theme == 'dark' ? colors.white : colors.primary
                            }
                        />
                    </label>
                    <AccountButton />
                </div>
            </Container>
        </div>
    );
}
