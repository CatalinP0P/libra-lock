import React from 'react';
import { ReactComponent as GoogleSVG } from '../../assets/svgs/Google.svg';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

export default function GoogleButton({ className }: { className?: string }) {
    const { theme } = useTheme();
    const { signWithGoogle } = useAuth();
    return (
        <div
            onClick={() => signWithGoogle()}
            className={
                className +
                ' rounded-full p-2 cursor-pointer ' +
                (theme == 'light' ? 'bg-black/10' : 'bg-white')
            }
        >
            <GoogleSVG width={32} height={32} />
        </div>
    );
}
