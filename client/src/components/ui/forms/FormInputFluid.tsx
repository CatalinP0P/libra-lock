import React, { InputHTMLAttributes } from 'react';
import { useTheme } from '../../../context/ThemeContext';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    title?: string;
}

export default function FormInputFluid({
    className,
    title,
    ...props
}: FormInputProps) {
    const { theme } = useTheme();
    return (
        <div
            className={
                'p-3 border-b-2 flex flex-col border-neutral-500 ' + className
            }
        >
            <label className="opacity-60">{title}</label>
            <input className="outline-none bg-transparent" {...props} />
        </div>
    );
}
