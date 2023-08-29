import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import React, { ChangeEventHandler } from 'react';

export default function FormTextArea({
    value,
    name,
    className,
    onChange,
    placeholder,
    title,
    rounded = true,
}: {
    value?: string;
    name?: string;
    className?: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    placeholder?: string;
    title?: string;
    rounded?: boolean;
}) {
    return (
        <div className="flex flex-col gap-1 w-full">
            {title && <label className="ps-1">{title}</label>}
            <textarea
                placeholder={placeholder}
                value={value}
                name={name}
                className={
                    ' w-full border-2 py-2 px-4 min-h-[7rem] bg-transparent ' +
                    (rounded ? 'rounded-2xl ' : 'rounded-md ') +
                    className
                }
                onChange={onChange}
            />
        </div>
    );
}
