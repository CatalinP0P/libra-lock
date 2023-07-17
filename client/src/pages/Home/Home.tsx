import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import Slider from '../../components/ui/Slider';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import BookCard from '../../components/ui/BookCard';

import { useBooks } from '../../hooks/useBooks';
import { useAuth } from '../../context/AuthContext';
import Hero from './Hero';

export default function Home() {
    const { loading, user } = useAuth();
    const { books } = useBooks();
    return loading ? (
        <Layout>
            <label className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-6xl">
                PULA ( la cererea lu Liviu =D )
            </label>
        </Layout>
    ) : (
        <Layout>
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
                                title={book.title}
                                author={book.author}
                                imageURL={book.imageURL}
                                price={book.price}
                                rating={book.rating}
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
