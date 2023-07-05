import React from 'react';

export default function Slider({
    checked,
    onChange,
}: {
    checked: boolean;
    onChange: any;
}) {
    return (
        <div
            className="transition-all bg-primary/90 rounded-full dark:bg-white p-1 w-[60px] flex-row"
            onClick={onChange}
        >
            <div
                className={
                    'w-[25px] h-[25px] transition-all rounded-full ' +
                    (checked
                        ? ' translate-x-[27px] bg-secondary'
                        : ' bg-secondary/50')
                }
            />
        </div>
    );
}
