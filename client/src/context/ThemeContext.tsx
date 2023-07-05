import React, {
    useState,
    useEffect,
    createContext,
    useContext,
    ReactNode,
} from 'react';

const ThemeContext = createContext<any>(null);

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<'dark' | 'light'>(localStorage.theme);

    const toggleTheme = () => {
        const newTheme = theme == 'dark' ? 'light' : 'dark';
        setTheme(newTheme);

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
