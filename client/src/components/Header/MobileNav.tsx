import React, { useEffect, useState } from 'react';
import * as colors from '../../static/colors';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountButton from './AccountButton';
import SearchBar from './SearchBar';

import { ClearRounded } from '@mui/icons-material';
import { ReactComponent as PersonSVG } from '../../assets/svgs/PersonFill.svg';

import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useActionData, useNavigate } from 'react-router-dom';

export default function MobileNav() {
    const [visible, setVisible] = useState<boolean>(false);
    const { theme } = useTheme();
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    return (
        <div className={'lg:hidden'}>
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
                {user ? (
                    <>
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
