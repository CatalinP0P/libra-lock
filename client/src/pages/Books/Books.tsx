import React, { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Layout from '../../Layout';
import Container from '../../components/ui/Container';
import FormInputFluid from '../../components/ui/forms/FormInputFluid';
import FormSelectFluid from '../../components/ui/forms/FormSelectFluid';
import Button from '../../components/ui/Button';

export default function Books() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [newFilter, setNewFilter] = useState('');
    const { theme } = useTheme();

    useEffect(() => {
        console.log(
            searchParams.forEach((value, key) => {
                console.log(key, value);
            })
        );
    }, [searchParams]);

    return (
        <Layout>
            <Container>
                <div className="pt-24 flex flex-col w-full flex-1">
                    <div
                        className={
                            'hidden flex-col w-[300px] lg:grid grid-cols-2' +
                            (theme == 'dark'
                                ? ' bg-darkMode-800'
                                : ' bg-neutral-200')
                        }
                    >
                        <label
                            className={
                                'col-span-2 border-b-2 px-3 pt-3 pb-8 text-2xl border-neutral-500 '
                            }
                        >
                            Filters
                        </label>
                        <FormSelectFluid
                            title="Genre"
                            options={['Drama', 'Self Development', 'Action']}
                            className="col-span-2"
                            onChange={(e) => {
                                console.log(e.target.value);
                            }}
                        />
                        <FormInputFluid
                            title="Min Price"
                            placeholder="Minimum Price"
                            type="number"
                            className="border-r"
                        />
                        <FormInputFluid
                            title="Max Price"
                            placeholder="Maximum Price"
                            type="number"
                            className="border-s"
                        />
                        <div className="col-span-2 p-4 border-b border-neutral-500 flex flex-col">
                            <label className="opacity-60">Authors</label>
                            <div className="flex flex-col text-sm">
                                <div className="flex flex-row gap-2">
                                    <input id="ion" type="checkbox" />
                                    <label>Ion Creanga</label>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <input type="checkbox" />
                                    <label>Popa Liviu</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 p-4 border-b border-neutral-500 flex flex-col">
                            <label className="opacity-60">Rating</label>
                            <div className="flex flex-col text-sm">
                                <div className="flex flex-row gap-2">
                                    <input id="ion" type="checkbox" />
                                    <label>1 Star</label>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <input type="checkbox" />
                                    <label>2 Stars</label>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <input type="checkbox" />
                                    <label>3 Stars</label>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <input type="checkbox" />
                                    <label>4 Stars</label>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <input type="checkbox" />
                                    <label>5 Stars</label>
                                </div>
                            </div>
                        </div>
                        <FormInputFluid
                            title="Min Pages"
                            placeholder="ex: 100"
                            type="number"
                            className="border-r"
                        />
                        <FormInputFluid
                            title="Max Pages"
                            placeholder="ex: 310"
                            type="number"
                            className="border-s"
                        />
                        <Button
                            className="col-span-2"
                            rounded={false}
                            variant="secondary"
                        >
                            Apply Filters
                        </Button>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}
