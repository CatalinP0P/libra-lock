import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import React, { ChangeEventHandler } from 'react';

export default function FormSelect({
    value,
    name,
    className,
    onChange,
    placeholder,
    type,
    options,
    title,
}: {
    value?: string;
    name?: string;
    className?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    placeholder?: string;
    type?: 'text' | 'password';
    options: string[];
    title?: string;
}) {
    return (
        <div className="flex flex-col gap-1 w-full">
            {title && <label className="text-neutral-400 font-semibold text-sm">{title}</label>}
            <select
                placeholder={placeholder}
                value={value}
                className={
                    'bg-transparent border-b border-neutral-500 pb-3 pt-1 outline-none w-full ' +
                    className
                }
                onChange={onChange}
            >
                {options.map((option) => (
                    <option>{option}</option>
                ))}
            </select>
        </div>
    );
}
