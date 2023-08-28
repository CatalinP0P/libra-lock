import React, { useEffect } from 'react';
import { ClearRounded } from '@mui/icons-material';
import { useTheme } from '../../context/ThemeContext';

interface ModalProps {
    children: React.ReactNode;
    className: string;
    visible: boolean;
    setVisible: Function;
}

export default function Modal({
    children,
    className,
    visible,
    setVisible,
}: ModalProps) {
    const { theme } = useTheme();

    return (
        <>
            <div
                className={
                    'fixed z-[100] left-[50%] top-[50%] translate-x-[-50%] overflow-x-hidden max-h-[75vh] overflow-y-auto transition-all  ' +
                    (visible
                        ? ' opacity-100 translate-y-[-50%]'
                        : ' opacity-0 translate-y-[-100%] pointer-events-none') +
                    ' ' +
                    className +
                    ' ' +
                    (theme === 'dark'
                        ? 'bg-darkMode text-white'
                        : 'bg-white text-neutral-800')
                }
            >
                <div
                    className="absolute top-0 cursor-pointer hover:text-neutral-400 transition-all text-neutral-600 right-0 m-2"
                    onClick={() => setVisible(false)}
                >
                    <ClearRounded fontSize={'small'} />
                </div>
                {children}
            </div>
            {visible && (
                <div
                    className="bg-black/60 z-[90] left-0 top-0 right-0 bottom-0 fixed block"
                    onClick={() => setVisible(false)}
                />
            )}
        </>
    );
}
