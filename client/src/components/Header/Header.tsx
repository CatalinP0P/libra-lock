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

export default function Header() {
    const { theme } = useTheme();
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    return (
        <div className="absolute top-0 left-0 right-0 border-b-2 border-secondary/10 z-[2]">
            <Container className="flex flex-row py- justify-between py-2 items-center">
                <Logo />
                <div className="flex flex-row gap-4 items-center min-w-[200px]">
                    <div className="hidden md:flex flex-row gap-2 bg-transparent text-secondary/75 p-2 rounded-full border-2 border-secondary/75 items-top ">
                        <div
                            className=" cursor-pointer z-[10]"
                            onClick={() => navigate('/books?q=' + search)}
                        >
                            <SearchIcon className="w-[24px] h-[24px]" />
                        </div>
                        <input
                            className="w-full bg-transparent outline-none"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                        />
                        <div
                            onClick={() => setSearch('')}
                            className={
                                'transition-all ' +
                                (search.length >= 1
                                    ? ' opacity-100 cursor-pointer'
                                    : ' opacity-0 pointer-events-none')
                            }
                        >
                            <ClearIcon fontSize={'small'} />
                        </div>
                    </div>
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
