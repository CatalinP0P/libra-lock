import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import BookCard from '../../components/ui/BookCard';

import { useNavigate } from 'react-router-dom';
import { useBooks } from '../../hooks/useBooks';
import { useAuth } from '../../context/AuthContext';
import Hero from './Hero';
import RentModal from '../../components/ui/RentModal';
import BuyModal from '../../components/ui/BuyModal';
import { useAuthors } from '../../hooks/useAuthors';
import PersonCard from '../../components/ui/PersonCard';
import { useGenres } from '../../hooks/useGenres';
import CategoryCard from '../../components/ui/CategoryCard';

export default function Home() {
    const { user } = useAuth();

    const { books } = useBooks();
    const { authors } = useAuthors();
    const { genres } = useGenres();

    const navigate = useNavigate();

    const [bookId, setBookId] = useState<string>('');

    const [rentModalVisibility, setRentModalVisibility] =
        useState<boolean>(false);
    const [buyModalVisibility, setBuyModalVisibility] =
        useState<boolean>(false);

    const rentBook = (id: string) => {
        setBookId(id);
        setRentModalVisibility(true);
    };

    const buyBook = (id: string) => {
        setBookId(id);
        setBuyModalVisibility(true);
    };

    return (
        <Layout>
            <RentModal
                visible={rentModalVisibility}
                setVisible={setRentModalVisibility}
                id={bookId}
            />
            <BuyModal
                visible={buyModalVisibility}
                setVisible={setBuyModalVisibility}
                id={bookId}
            />
            <Hero />
            <div className="flex flex-col gap-24 w-full py-32">
                <Container className="flex flex-col items-start gap-4 mt-32 z-[5]">
                    <h2 className="text-3xl transition-all md:text-4xl text-start font-extrabold block z-[5]">
                        Trending Writers
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4">
                        {authors.map((author: any) => (
                            <PersonCard
                                onClick={() =>
                                    navigate(`/books?authors=${author.name}`)
                                }
                                name={author.name}
                                imageURL={author.imageURL}
                            />
                        ))}
                    </div>
                </Container>

                <Container className="flex flex-col gap-4 z-[5]">
                    <h2 className="text-3xl transition-all md:text-4xl text-start font-extrabold block z-[5]">
                        Explore by Genre
                    </h2>
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-4 w-full">
                        {genres.map((genre: any) => (
                            <CategoryCard
                                onClick={() =>
                                    navigate('/books?genre=' + genre.name)
                                }
                                name={genre.name}
                            />
                        ))}
                    </div>
                </Container>

                <Container className="flex flex-col items-start gap-4 z-[5]">
                    <h2 className="text-3xl transition-all md:text-4xl text-start font-extrabold block z-[5]">
                        Recommended Books
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-8 md:gap-4">
                        {books.map((book) => {
                            return (
                                <BookCard
                                    key={book.id || Math.random() * 1000}
                                    id={book.id}
                                    title={book.title}
                                    author={book.author}
                                    imageURL={book.imageURL}
                                    price={book.price}
                                    rating={book.rating}
                                    onBuy={() => buyBook(book.id)}
                                    onRent={() => rentBook(book.id)}
                                />
                            );
                        })}
                    </div>
                    {user && (
                        <>
                            <Button
                                onClick={async () =>
                                    console.log(await user.getIdToken())
                                }
                                className="mx-auto mt-8"
                            >
                                Log Token
                            </Button>
                        </>
                    )}
                </Container>
            </div>
        </Layout>
    );
}
