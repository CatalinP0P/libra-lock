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
                    {user.photoURL ? (
                        <img
                            onClick={() => {
                                if (setAccountDropdown)
                                    setAccountDropdown(!accountDropdown);
                            }}
                            className="min-w-[40px] h-[40px] rounded-full cursor-pointer"
                            src={user?.photoURL as string}
                        />
                    ) : (
                        <PersonSVG
                            className="cursor-pointer"
                            onClick={() => {
                                if (setAccountDropdown)
                                    setAccountDropdown(!accountDropdown);
                            }}
                            width={40}
                            height={40}
                            fill={
                                theme == 'light'
                                    ? colors.primary
                                    : colors.secondary
                            }
                        />
                    )}

                    <div
                        className={
                            'z-[2] fixed md:absolute transition-all right-0 left-0 md:left-auto w-full md:w-fit top-14 md:top-10 shadow-2xl h-fit text-end flex flex-col rounded-md ' +
                            (theme == 'light' ? 'bg-white' : 'bg-primary') +
                            (accountDropdown
                                ? ' opacity-100 pointer-events-auto'
                                : ' opacity-0 translate-y-[-20%] pointer-events-none')
                        }
                    >
                        <label className="px-8 whitespace-nowrap py-2 hover:brightness-75 cursor-pointer">
                            Logged in as <strong>{user.email}</strong>
                        </label>
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
                    width={40}
                    height={40}
                    fill={theme == 'light' ? colors.primary : colors.secondary}
                />
            )}
        </>
    );
}
