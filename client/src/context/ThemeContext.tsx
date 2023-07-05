import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, {
    useState,
    useEffect,
    createContext,
    useContext,
    ReactNode,
} from 'react';
import { setOriginalNode } from 'typescript';

const ThemeContext = createContext<any>(null);

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<'dark' | 'light'>('light');

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme != 'light' && localTheme != 'dark') {
            return;
        }

        setTheme(localTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme == 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        if (newTheme == 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    };

    return (
        <ThemeContext.Provider
            value={{ theme: theme, toggleTheme: toggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
