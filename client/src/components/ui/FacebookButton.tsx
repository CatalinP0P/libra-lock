import React from 'react';
import { ReactComponent as FacebookSVG } from '../../assets/svgs/Facebook2.svg';
import { useAuth } from '../../context/AuthContext';

export default function FacebookButton({ className }: { className?: string }) {
    const { signWithFacebook } = useAuth();

    return (
        <div
            onClick={() => signWithFacebook()}
            className={
                className + ' bg-[#0c8bf0] rounded-full p-2 cursor-pointer'
            }
        >
            <FacebookSVG
                fill="white"
                width={28}
                height={28}
                className="m-[2px]"
            />
        </div>
    );
}
