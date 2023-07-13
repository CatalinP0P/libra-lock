import React from 'react';
import Logo from '../../components/Header/Logo';
import ThemeSlider from '../../components/ui/ThemeSlider';
import { useTheme } from '../../context/ThemeContext';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
            {children}
        </div>
    );
}
