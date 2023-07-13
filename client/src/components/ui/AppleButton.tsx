import React from 'react';
import { ReactComponent as AppleSVG } from '../../assets/svgs/Apple.svg';

export default function AppleButton({ className }: { className?: string }) {
    return (
        <div className={className + ' bg-black rounded-full p-2 cursor-pointer'}>
            <AppleSVG fill="white" width={32} height={32} />
        </div>
    );
}
