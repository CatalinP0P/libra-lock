import React from 'react';
import { ReactComponent as FacebookSVG } from '../../assets/svgs/Facebook2.svg';

export default function FacebookButton({ className }: { className?: string }) {
    return (
        <div className={className + ' bg-[#48546d] rounded-full p-2 cursor-pointer'}>
            <FacebookSVG fill="white" width={28} height={28} className='m-[2px]' />
        </div>
    );
}
