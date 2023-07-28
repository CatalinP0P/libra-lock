import React, { ReactComponentElement } from 'react';

export default function Slider({
    checked,
    onChange,
    size = 'medium',
    SvgOFF,
    SvgON,
}: {
    checked: boolean;
    onChange: any;
    size?: 'small' | 'medium' | 'large';
    SvgOFF?: React.FunctionComponent<any>;
    SvgON?: React.FunctionComponent<any>;
}) {
    return (
        <div
            className={
                (size == 'small'
                    ? 'text-sm'
                    : size == 'medium'
                    ? 'text-base'
                    : 'text-lg') +
                ' cursor-pointer transition-all p-1 w-[3.25em] rounded-full flex-row ' +
                (checked ? 'bg-secondary/50' : 'bg-primary/90 dark:bg-white/90')
            }
            onClick={onChange}
        >
            <div
                className={
                    'w-[1.5em] relative h-[1.5em] transition-all items-center justify-center rounded-full ' +
                    (checked
                        ? ' bg-secondary ' +
                          (size == 'small'
                              ? 'translate-x-[1.25em]'
                              : size == 'medium'
                              ? 'translate-x-[1.3em]'
                              : 'translate-x-[1.35em]')
                        : ' bg-secondary/75')
                }
            >
                {SvgOFF && (
                    <SvgOFF
                        className={
                            'w-[12px] h-[12px] transition-all absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ' +
                            (!checked ? ' opacity-100 z-[10]' : ' opacity-0')
                        }
                    />
                )}
                {SvgON && (
                    <SvgON
                        className={
                            'w-[12px] h-[12px] transition-all absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ' +
                            (checked ? ' opacity-100 z-[10]' : ' opacity-0')
                        }
                    />
                )}
            </div>
        </div>
    );
}
