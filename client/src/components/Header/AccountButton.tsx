import React from 'react';

import { ReactComponent as PersonSVG } from '../../assets/svgs/PersonFill.svg';
import * as colors from '../../static/colors';

import { useAuth } from '../../context/AuthContext';
import { usePopup } from '../../context/PopupContext';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

export default function AccountButton() {
    const { user, signOut } = useAuth();
    const { theme } = useTheme();
    const navigate = useNavigate();
    const { accountDropdown, setAccountDropdown } = usePopup();

    return (
        <>
            {user && (
                <div className="relative">
                    <img
                        onClick={() => {
                            if (setAccountDropdown)
                                setAccountDropdown(!accountDropdown);
                        }}
                        className="w-[32px] h-[32px] rounded-full cursor-pointer"
                        src={user?.photoURL as string}
                    />
                    <div
                        className={
                            'z-[100] absolute transition-all right-0 top-10 w-fit shadow-2xl h-fit text-end flex flex-col rounded-md ' +
                            (theme == 'light' ? 'bg-white' : 'bg-primary') +
                            (accountDropdown
                                ? ' opacity-100 pointer-events-auto'
                                : ' opacity-0 translate-y-[-20%] pointer-events-none')
                        }
                    >
                        <label className="px-8 whitespace-nowrap py-2 hover:brightness-75 cursor-pointer">
                            My account
                        </label>
                        <label
                            className="px-8 whitespace-nowrap py-2 hover:brightness-75 cursor-pointer"
                            onClick={() => signOut()}
                        >
                            Sign out
                        </label>
                    </div>
                </div>
            )}

            {!user && (
                <PersonSVG
                    className="cursor-pointer"
                    onClick={() => navigate('/signin')}
                    width={24}
                    height={24}
                    fill={theme == 'light' ? colors.primary : colors.secondary}
                />
            )}
        </>
    );
}
