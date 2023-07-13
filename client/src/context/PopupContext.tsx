import React, { createContext, useContext, useState } from 'react';

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

    return (
        <PopupContext.Provider
            value={{
                accountDropdown: accountDropdown,
                setAccountDropdown: setAccountDropdown,
            }}
        >
            {accountDropdown && (
                <div
                    className="fixed left-0 top-0 right-0 bottom-0 bg-black/10 z-[99]"
                    onClick={closeAll}
                ></div>
            )}
            {children}
        </PopupContext.Provider>
    );
};
