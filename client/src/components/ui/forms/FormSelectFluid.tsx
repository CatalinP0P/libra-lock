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
                className=" bg-transparent outline-none border-none mx-[-4px]"
            >
                {options.map((option) => {
                    return <option>{option}</option>;
                })}
            </select>
            {/* <div className="flex flex-row w-full justify-between">
                <label>{selectedItem}</label>
                <DownSVG
                    fill={theme == 'dark' ? 'white' : 'black'}
                    width={18}
                    height={18}
                    className={
                        'transition-all' + (dropdown ? ' rotate-180' : '')
                    }
                />
            </div>
            <div
                className={
                    'absolute left-0 right-0 top-[4.5rem] transition-all shadow-md border border-neutral-500 flex flex-col z-[10] [&>*]:border-b last:border-none ' +
                    (theme == 'dark' ? 'bg-darkMode-800' : 'bg-neutral-200') +
                    (dropdown
                        ? ' opacity-100 pointer-events-auto'
                        : ' translate-y-[-50%] opacity-0 pointer-events-none')
                }
            >
                {options.map((option) => {
                    return (
                        <label
                            key={option}
                            className="px-3 py-1 w-full opacity-50 hover:opacity-100 border-black"
                            onClick={() => {
                                setSelectedItem(option);
                                setDropdown(false);
                            }}
                        >
                            {option}
                        </label>
                    );
                })}
            </div> 
            <div
                onClick={() => setDropdown(false)}
                className={
                    dropdown
                        ? ' z-[9] fixed left-0 top-0 bottom-0 right-0'
                        : 'hidden'
                }
            ></div> */}
        </div>
    );
}
