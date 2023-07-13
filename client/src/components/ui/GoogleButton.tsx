import React from 'react';
import { ReactComponent as GoogleSVG } from '../../assets/svgs/GooglePlus.svg';

export default function GoogleButton({ className }: { className?: string }) {
    return (
        <div className={className + ' bg-[#df4d3a] rounded-full p-2 cursor-pointer'}>
            <GoogleSVG fill="white" width={32} height={32} />
        </div>
    );
}
