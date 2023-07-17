import React, { useEffect, useState } from 'react';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import Layout from '../../Layout';
import * as colors from '../../static/colors';

import { ReactComponent as CoinSVG } from '../../assets/svgs/Coin.svg';

import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { usePopup } from '../../context/PopupContext';
import { useBooks } from '../../hooks/useBooks';
import { Rating } from '@mui/material';
import BookCard from '../../components/ui/BookCard';
import BookImage from '../../components/ui/BookImage';

export default function Book(props: any) {
    const [book, setBook] = useState<any>(null);
    const { theme } = useTheme();
    const navigate = useNavigate();
    const { id } = useParams();
    const { books, loading } = useBooks();

    const fetchBook = async () => {
        const book = books.find((m) => m.id == id);
        if (!book) navigate('/');
        setBook(book);
    };

    useEffect(() => {
        if (loading) return;

        fetchBook();
    }, [loading]);

    useEffect(() => {
        if (loading) return;
        fetchBook();
    }, [id]);

    return !book ? (
        <></>
    ) : (
        <Layout>
            <Container className="py-32 flex flex-col gap-24">
                <div className="grid grid-cols-1 md:grid-cols-2 pt-8 gap-24">
                    <BookImage imageURL={book.imageURL} />
                    <div className="flex flex-col px-8 gap-8 justify-between">
                        <div className="flex flex-col gap-2">
                            <label className="text-4xl font-bold">
                                {book.title}
                            </label>
                            <label>
                                <span className="font-thin me-2">by</span>
                                {book.author}
                            </label>
                            <Rating value={book.rating} readOnly={true} />
                            <div className="flex flex-col gap-2 pt-8">
                                <label>
                                    Category: <b>{book.category}</b>
                                </label>
                                <label>
                                    Author: <b>{book.author}</b>
                                </label>
                                <label>
                                    Pages: <b>{book.pages}</b>
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row gap-4 items-center text-5xl font-bold">
                                <CoinSVG
                                    className="w-12 h-12"
                                    fill={
                                        theme == 'dark'
                                            ? colors.white
                                            : colors.darkMode
                                    }
                                />
                                <label>{book.price}</label>
                            </div>
                            <div className="flex flex-row gap-2 w-full">
                                <Button
                                    className="w-full"
                                    variant="primary"
                                    rounded={false}
                                >
                                    Buy
                                </Button>
                                <Button
                                    className="w-full"
                                    variant="secondary"
                                    rounded={false}
                                >
                                    Rent
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-2xl font-bold">Description</label>
                    <label className="font-light ">{book.description}</label>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <label>You may also like</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                        {books.map((book) => {
                            return (
                                <div
                                    onClick={() => navigate('/' + book.id)}
                                    className=" cursor-pointer"
                                >
                                    <BookImage imageURL={book.imageURL} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </Layout>
    );
}
