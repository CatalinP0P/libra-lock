import React, { useEffect } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const mode = localStorage.theme;
        console.log(mode);

        if (mode == 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    }, [localStorage.theme]);

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-darkMode text-primary dark:text-white transition-colors">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
        </div>
    );
}
