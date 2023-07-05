import React from 'react';

export default function Container({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={'w-[95%] max-w-[1280px] mx-auto ' + className}>
            {children}
        </div>
    );
}
