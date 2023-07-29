import React, { useEffect, useState } from 'react';
import * as colors from '../../static/colors';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountButton from './AccountButton';
import SearchBar from './SearchBar';

import { ClearRounded } from '@mui/icons-material';
import { ReactComponent as PersonSVG } from '../../assets/svgs/PersonFill.svg';
import { ReactComponent as CoinSVG } from '../../assets/svgs/Coin.svg';

import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useActionData, useNavigate } from 'react-router-dom';
import ThemeSlider from '../ui/ThemeSlider';

export default function MobileNav() {
    const [visible, setVisible] = useState<boolean>(false);
    const { theme } = useTheme();
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    return (
        <div className={'lg:hidden'}>
            {visible && (
                <div
                    className="inset-0 fixed"
                    onClick={() => setVisible(false)}
                />
            )}
            {!visible ? (
                <div onClick={() => setVisible(true)}>
                    <MenuRoundedIcon />
                </div>
            ) : (
                <div onClick={() => setVisible(false)}>
                    <ClearRounded />
                </div>
            )}
            <div
                className={
                    'absolute left-0 shadow-lg right-0 transition-all top-14 md:top-20 flex flex-col w-full ' +
                    (theme == 'dark'
                        ? ' bg-darkMode-800 text-white'
                        : 'bg-white text-primary') +
                    ' ' +
                    (visible
                        ? 'translate-y-[0] pointer-events-auto opacity-100'
                        : ' pointer-events-none opacity-0 translate-y-[-20%]')
                }
            >
                <div className="w-full px-6 py-4">
                    <SearchBar />
                </div>
                <div className="h-[1px] w-full bg-neutral-400" />

                <label
                    className={
                        'flex flex-row justify-between w-full items-center cursor-pointer [&>*]:pointer-events-none py-4 px-8 transition-all ' +
                        (theme == 'dark'
                            ? ' hover:bg-darkMode'
                            : 'hover:bg-neutral-100')
                    }
                    onClick={() => navigate('/books')}
                >
                    Browse Books
                </label>

                <label
                    className={
                        'flex flex-row justify-between w-full items-center py-4 px-8 transition-all ' +
                        (theme == 'dark'
                            ? ' hover:bg-darkMode'
                            : 'hover:bg-neutral-100')
                    }
                >
                    Color Theme
                    <ThemeSlider size={'small'} />
                </label>

                {user ? (
                    <>
                        <div className="h-[1px] w-full bg-neutral-400" />
                        <div
                            className={
                                'flex flex-row justify-between w-full items-center [&>*]:pointer-events-none py-4 px-8 transition-all'
                            }
                        >
                            <label>
                                Logged in as <b>{user.email}</b>
                            </label>
                            {user.photoURL ? (
                                <img
                                    className="w-[40px] h-[40px] rounded-full cursor-pointer"
                                    src={user?.photoURL as string}
                                />
                            ) : (
                                <PersonSVG
                                    className="cursor-pointer"
                                    width={40}
                                    height={40}
                                    fill={
                                        theme == 'light'
                                            ? colors.primary
                                            : colors.secondary
                                    }
                                />
                            )}
                        </div>
                        <label
                            onClick={() => navigate('/buycoins')}
                            className={
                                'flex flex-row justify-between w-full items-center cursor-pointer [&>*]:pointer-events-none py-4 px-8 transition-all ' +
                                (theme == 'dark'
                                    ? ' hover:bg-darkMode'
                                    : 'hover:bg-neutral-100')
                            }
                        >
                            Buy Credits
                            <label className="flex flex-row items-center text-xl gap-3 cursor-pointer">
                                540
                                <CoinSVG
                                    height={24}
                                    width={24}
                                    fill={
                                        theme == 'dark'
                                            ? colors.white
                                            : colors.primary
                                    }
                                />
                            </label>
                        </label>
                        <div
                            className={
                                'flex flex-row justify-between w-full items-center cursor-pointer [&>*]:pointer-events-none py-4 px-8 transition-all ' +
                                (theme == 'dark'
                                    ? ' hover:bg-darkMode'
                                    : 'hover:bg-neutral-100')
                            }
                        >
                            My account
                        </div>
                        <div
                            className={
                                'flex flex-row justify-between w-full items-center cursor-pointer [&>*]:pointer-events-none py-4 px-8 transition-all ' +
                                (theme == 'dark'
                                    ? ' hover:bg-darkMode'
                                    : 'hover:bg-neutral-100')
                            }
                            onClick={signOut}
                        >
                            Sign out
                        </div>
                    </>
                ) : (
                    <label
                        className={
                            'flex flex-row justify-between w-full items-center cursor-pointer [&>*]:pointer-events-none py-4 px-8 transition-all ' +
                            (theme == 'dark'
                                ? ' hover:bg-darkMode'
                                : 'hover:bg-neutral-100')
                        }
                        onClick={() => navigate('/signin')}
                    >
                        Sign in
                        <PersonSVG
                            width={24}
                            height={24}
                            fill={
                                theme == 'light'
                                    ? colors.primary
                                    : colors.secondary
                            }
                        />
                    </label>
                )}
            </div>
        </div>
    );
}
