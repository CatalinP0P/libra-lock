import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import React, { ChangeEventHandler } from 'react';
import { StringMappingType } from 'typescript';

export default function FormInput({
    value,
    name,
    className,
    onChange,
    placeholder,
    type,
    title,
}: {
    value?: string;
    name?: string;
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    type?: 'text' | 'password';
    title?: string;
}) {
    return (
        <div className="flex flex-col gap-1 w-full">
            {title && <label className='ps-1' >{title}</label>}
            <input
                placeholder={placeholder}
                value={value}
                type={type}
                className={
                    'rounded-full w-full border py-2 px-4 bg-transparent ' +
                    className
                }
                onChange={onChange}
            />
        </div>
    );
}
