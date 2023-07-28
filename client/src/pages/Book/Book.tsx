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

import RentModal from '../../components/ui/RentModal';
import BuyModal from '../../components/ui/BuyModal';
import BookCard from '../../components/ui/BookCard';
import BookImage from '../../components/ui/BookImage';
import profileImage from '../../assets/profileImage.webp';

export default function Book(props: any) {
    const [book, setBook] = useState<any>(null);
    const [bookReviews, setBookReviews] = useState<any[]>([
        {
            imageURL: profileImage,
            name: 'Profile Name',
            rating: 1,
            text: 'Straight BAAAAD ( this is a dummy comment )',
        },
        {
            imageURL: profileImage,
            name: 'Profile Name',
            rating: 5,
            text: 'Excelence! ( this is a dummy comment )',
        },
        {
            imageURL: profileImage,
            name: 'Profile Name',
            rating: 4,
            text: 'Very nice book ( this is a dummy comment )',
        },
    ]);

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

    const navigate = useNavigate();
    const { theme } = useTheme();
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
            <Container className="py-32 flex flex-col gap-32">
                <div className="grid grid-cols-1 md:grid-cols-2 pt-8 gap-8 md:gap-24">
                    <BookImage imageURL={book.imageURL} />
                    <div className="flex flex-col justify-between">
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
                                    onClick={() => buyBook(book.id)}
                                    className="w-full"
                                    variant="primary"
                                    rounded={false}
                                >
                                    Buy
                                </Button>
                                <Button
                                    className="w-full"
                                    variant="secondary"
                                    onClick={() => rentBook(book.id)}
                                    rounded={false}
                                >
                                    Rent
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-3xl transition-all md:text-4xl text-start font-extrabold block z-[5]">
                        Description
                    </label>
                    <label className="font-light ">{book.description}</label>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <label className="text-3xl transition-all md:text-4xl text-start font-extrabold block z-[5]">
                        You may also like
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {books.map((book) => {
                            return (
                                <div
                                    onClick={() => navigate('/book/' + book.id)}
                                    className=" cursor-pointer shadow-2xl"
                                >
                                    <BookImage
                                        imageURL={book.imageURL}
                                        hoverEffect
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <label className="text-3xl transition-all md:text-4xl text-start font-extrabold block z-[5]">
                        Reviews
                    </label>
                    <div className="flex flex-col gap-8 w-full">
                        {bookReviews.map((review) => {
                            return (
                                <div className="flex flex-col gap-2 border-t w-full">
                                    <div className="flex flex-row gap-4 items-center w-full pt-4 ">
                                        <img
                                            className="w-12 h-12 rounded-full"
                                            src={review.imageURL}
                                        />
                                        <div className="flex flex-col text-start items-start h-full justify-between pb-1">
                                            <label>{review.name}</label>
                                            <Rating
                                                readOnly={true}
                                                size="small"
                                                value={review.rating}
                                            />
                                        </div>
                                    </div>
                                    <p className="ms-16 ps-1">{review.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </Layout>
    );
}
