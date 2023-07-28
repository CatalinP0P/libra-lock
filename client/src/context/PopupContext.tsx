import React, { createContext, useContext, useEffect, useState } from 'react';

interface PopupProps {
    accountDropdown?: boolean;
    setAccountDropdown?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupContext = createContext<PopupProps>({});

export const usePopup = () => {
    return useContext(PopupContext);
};

export const PopupProvider = ({ children }: { children: React.ReactNode }) => {
    const [accountDropdown, setAccountDropdown] = useState(false);

    const closeAll = () => {
        setAccountDropdown(false);
    };

    useEffect(() => {
        const doc = document.getElementById('root');
        if (accountDropdown) {
            doc?.classList.add('h-[100vw]');
            doc?.classList.add('md:h-fit');
        } else {
            doc?.classList.remove('h-[100vw]');
            doc?.classList.remove('md:h-fit');
        }
    }, [accountDropdown]);

    return (
        <PopupContext.Provider
            value={{
                accountDropdown: accountDropdown,
                setAccountDropdown: setAccountDropdown,
            }}
        >
            {accountDropdown && (
                <div
                    className="hidden md:block fixed left-0 top-0 right-0 bottom-0 bg-black/10 z-[1]"
                    onClick={closeAll}
                ></div>
            )}
            {children}
        </PopupContext.Provider>
    );
};
