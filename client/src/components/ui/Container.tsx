import React from 'react';

export default function Container({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={'max-w-[1280px] w-[95%] mx-auto ' + className}>
            {children}
        </div>
    );
}
