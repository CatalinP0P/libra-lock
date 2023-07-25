import React, {
    InputHTMLAttributes,
    SelectHTMLAttributes,
    useEffect,
    useState,
} from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { ReactComponent as DownSVG } from '../../../assets/svgs/down.svg';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    title: string;
    options: string[];
}

export default function FormSelectFluid({
    title,
    className,
    options,
    ...props
}: SelectProps) {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div
            onClick={() => setDropdown(!dropdown)}
            className={
                'flex flex-col border-b-2 border-neutral-500 p-3 relative w-full ' +
                className
            }
        >
            <label className=" opacity-60">{title}</label>
            <select
                {...props}
                className="bg-transparent outline-none border-none mx-[-4px]"
            >
                {options.map((option) => {
                    return <option key={option}>{option}</option>;
                })}
            </select>
        </div>
    );
}
