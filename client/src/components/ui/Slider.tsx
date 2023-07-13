import React, { ReactComponentElement } from 'react';

export default function Slider({
    checked,
    onChange,
    SvgOFF,
    SvgON,
}: {
    checked: boolean;
    onChange: any;
    SvgOFF?: React.FunctionComponent<any>;
    SvgON?: React.FunctionComponent<any>;
}) {
    return (
        <div
            className={
                'cursor-pointer transition-all p-1 w-[60px] rounded-full flex-row ' +
                (checked ? 'bg-secondary/50' : 'bg-primary/90 dark:bg-white/90')
            }
            onClick={onChange}
        >
            <div
                className={
                    'w-[25px] relative h-[25px] transition-all items-center justify-center rounded-full ' +
                    (checked
                        ? ' translate-x-[27px] bg-secondary'
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
