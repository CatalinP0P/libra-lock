import React, {
    ChangeEventHandler,
    FormEventHandler,
    useEffect,
    useState,
} from 'react';

import { useSearchParams } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FormEvent } from 'react';
import Layout from '../../Layout';
import Container from '../../components/ui/Container';
import FiltersForm from './FiltersForm';
import Button from '../../components/ui/Button';

export default function Books() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [mobileFilters, setMobileFilters] = useState(false);

    const { theme } = useTheme();

    useEffect(() => {
        const root = document.getElementById('root');
        if (mobileFilters) {
            root?.classList.add('h-[100vw]');
            root?.classList.add('md:h-fit');
        } else {
            root?.classList.remove('h-[100vw]');
            root?.classList.remove('md:h-fit');
        }
    }, [mobileFilters]);

    useEffect(() => {
        setMobileFilters(false);
    }, [searchParams]);

    return (
        <Layout>
            <Container>
                <div className="pt-24 flex flex-col w-full flex-1 ">
                    <div
                        className={
                            'hidden w-[300px] lg:flex flex-col' +
                            (theme == 'dark'
                                ? ' bg-darkMode-800'
                                : ' bg-neutral-200')
                        }
                    >
                        <FiltersForm />
                    </div>
                    <Button
                        variant="secondary"
                        rounded={false}
                        className="lg:hidden"
                        onClick={() => setMobileFilters(!mobileFilters)}
                    >
                        Filters
                    </Button>
                    <div
                        className={
                            'absolute left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)] z-[9] lg:hidden ' +
                            (mobileFilters ? ' ' : ' hidden')
                        }
                        onClick={() => setMobileFilters(false)}
                    />
                    <div
                        className={
                            'fixed left-0 lg:hidden w-[40%] max-w-[300px] min-w-[250px] top-0 transition-all bottom-0 z-[10] ' +
                            (mobileFilters
                                ? ' pointer-event-auto '
                                : ' pointer-events-none translate-x-[-100%] ') +
                            (theme == 'dark'
                                ? ' bg-darkMode-800'
                                : ' bg-neutral-200')
                        }
                    >
                        <FiltersForm />
                    </div>
                </div>
            </Container>
        </Layout>
    );
}
