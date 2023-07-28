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
import { useBooks } from '../../hooks/useBooks';
import BookCard from '../../components/ui/BookCard';
import { NearMe } from '@mui/icons-material';
import { green } from '@mui/material/colors';
import { NullLiteral } from 'typescript';

export default function Books() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [mobileFilters, setMobileFilters] = useState(false);

    const { theme } = useTheme();
    const { books, loading } = useBooks();
    const [filteredBooks, setFitleredBooks] = useState<any>([]);

    const fetchBooks = async () => {
        if (!books) return;
        // const data = await fetch(process.env.REACT_APP_SERVER_ADRESS, {
        //     method: 'GET',
        // });
        const authors = searchParams.getAll('authors');
        var newBooks = books;
        if (searchParams.get('q'))
            newBooks = newBooks.filter(
                (book) =>
                    book.title
                        .toLowerCase()
                        .includes(searchParams.get('q')?.toLowerCase()) ||
                    book.author
                        .toLowerCase()
                        .includes(searchParams.get('q')?.toLowerCase())
            );

        if (authors.length)
            newBooks = books.filter((book) => authors.includes(book.author));

        const genres = searchParams.getAll('genre');
        if (genres.length) {
            console.log(genres);
            newBooks = newBooks.filter((book) => genres.includes(book.genre));
        }

        const ratings = searchParams.getAll('rating');
        if (ratings.length)
            newBooks = newBooks.filter((book) =>
                ratings.includes(book.rating + '')
            );

        const minPrice = searchParams.get('minPrice');
        if (minPrice != null)
            newBooks = newBooks.filter(
                (book: any) => book.price > parseInt(minPrice)
            );

        const maxPrice = searchParams.get('maxPrice');
        if (maxPrice != null)
            newBooks = newBooks.filter(
                (book: any) => book.price < parseInt(maxPrice)
            );

        const minPages = searchParams.get('minPages');
        if (minPages != null)
            newBooks = newBooks.filter(
                (book: any) => book.pages > parseInt(minPages)
            );

        const maxPages = searchParams.get('maxPages');
        if (maxPages != null)
            newBooks = newBooks.filter(
                (book: any) => book.pages < parseInt(maxPages)
            );

        setFitleredBooks(newBooks);
    };

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
        fetchBooks();
    }, [searchParams, loading]);

    return (
        <Layout>
            <Container className="flex flex-col lg:flex-row mt-24 gap-8 z-[2]">
                <div className="flex flex-col w-full flex-1 ">
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
                            'fixed left-0 lg:hidden w-[40%] max-w-[300px] min-w-[250px] top-0 transition-all bottom-0 z-[100] ' +
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
                <div className="w-full flex flex-col gap-8">
                    <label className="text-4xl md:text-5xl font-semibold px-2 opacity-80">
                        Results for your search: {filteredBooks.length}
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-2 w-full h-fit">
                        {filteredBooks.map((book: any) => {
                            return (
                                <BookCard
                                    id={book.id}
                                    imageURL={book.imageURL}
                                    title={book.title}
                                    author={book.author}
                                    rating={book.rating}
                                    price={book.price}
                                    key={book.id}
                                />
                            );
                        })}
                    </div>
                </div>
            </Container>
        </Layout>
    );
}
