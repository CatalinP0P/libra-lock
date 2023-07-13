import React from 'react';
import Container from '../../components/ui/Container';
import * as colors from '../../static/colors';
import Logo from '../../components/Header/Logo';
import { useTheme } from '../../context/ThemeContext';
import ThemeSlider from '../../components/ui/ThemeSlider';
import GoogleButton from '../../components/ui/GoogleButton';
import FacebookButton from '../../components/ui/FacebookButton';
import AppleButton from '../../components/ui/AppleButton';
import HorizontalSeparator from '../../components/ui/HorizontalSeparator';
import FormInput from '../../components/ui/forms/FormInput';
import Button from '../../components/ui/Button';

export default function SignIn() {
    const { theme } = useTheme();
    return (
        <div
            className={
                'flex flex-row w-[%] h-screen overflow-hidden ' +
                (theme == 'dark'
                    ? 'bg-darkMode text-white'
                    : 'bg-white text-black')
            }
        >
            <Logo className="absolute left-0 top-0 m-6" />
            <div className="absolute right-0 top-0 m-4 z-[10]">
                <ThemeSlider />
            </div>
            <div className="relative w-full h-full">
                <div className="absolute w-fit h-fit left-[50%] top-[50%] flex flex-col translate-x-[-50%] translate-y-[-50%] p-8 gap-4 items-center">
                    <label className="font-extrabold text-3xl sm:text-4xl md:text-6xl whitespace-nowrap">
                        Login to Your Account
                    </label>
                    <label className="text-2xl font-light">
                        Login using social networks
                    </label>
                    <div className="flex flex-row gap-4 items-center">
                        <FacebookButton />
                        <GoogleButton />
                        <AppleButton />
                    </div>

                    <HorizontalSeparator title="or" className="w-[50%]" />

                    <FormInput placeholder="Email" />
                    <FormInput placeholder="Password" type="password" />
                    <Button variant="primary" className="px-32 mt-8">
                        Login
                    </Button>
                </div>
            </div>
            <div
                className={
                    'relative w-[75%] max-w-[750px] h-full hidden xl:block ' +
                    (theme == 'dark' ? 'bg-secondary/10' : 'bg-secondary/50')
                }
            >
                <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-8 items-center">
                    <label className="font-extrabold text-4xl md:text-6xl">
                        New Here?
                    </label>
                    <p className="font-light text-lg sm:text-2xl text-center min-w-[400px]">
                        You can sign up and discover great amount of new
                        opportunities
                    </p>
                    <Button className="px-16" variant="secondary">
                        Sign up
                    </Button>
                </div>
            </div>
        </div>
    );
}
