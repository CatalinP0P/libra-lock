import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import Slider from '../../components/ui/Slider';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import BookCard from '../../components/ui/BookCard';

import { useBooks } from '../../hooks/useBooks';
import { useAuth } from '../../context/AuthContext';
import Hero from './Hero';
import RentModal from '../../components/ui/RentModal';
import BuyModal from '../../components/ui/BuyModal';

export default function Home() {
    const { loading, user } = useAuth();
    const { books } = useBooks();
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

    return loading ? (
        <Layout></Layout>
    ) : (
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
            <Container className="flex flex-col items-start gap-4 mt-32 py-24 z-[5]">
                <h2 className="text-3xl transition-all md:text-4xl text-start font-extrabold block z-[5]">
                    Recommended Books
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4">
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
        </Layout>
    );
}
