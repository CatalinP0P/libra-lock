import React, { useEffect, useState } from 'react';
import book1image from '../assets/svgs/atomichabits.gif';
import book2image from '../assets/svgs/CantHurtMe.jpg';

export const useBooks = () => {
    const [books, setBooks] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBooks = async () => {
            // try {
            //     const response = await fetch(
            //         process.env.REACT_APP_SERVER_ADRESS + '/books',
            //         {
            //             method: 'GET',
            //         }
            //     );

            //     setBooks(await response.json());
            // } catch (err: any) {
            //     throw 'FETCH ERROR: ' + err.message;
            // }

            setBooks([
                {
                    id: 1,
                    title: 'Atomic Habits',
                    imageURL: book1image,
                    author: 'James Clear',
                    category: 'Self Development',
                    pages: 218,
                    description:
                        "Atomic Habits is the most comprehensive and practical guide on how to create good habits, break bad ones, and get 1 percent better every day. I do not believe you will find a more actionable book on the subject of habits and improvement. If you're having trouble changing your habits, the problem isn't you",
                    price: 120,
                    rating: 5,
                },
                {
                    id: 2,
                    title: 'Cant Hurt Me',
                    imageURL: book2image,
                    author: 'David Goggins',
                    category: 'Self Development',
                    pages: 294,
                    description:
                        "David Goggins is a being of pure will and inspiration. Just listening to this guy talk makes you want to run up a mountain. I firmly believe people like him can change the course of the world just by inspiring us to push harder and dig deeper in everything we do. His goal to be 'uncommon amongst uncommon people' is something we can all use to propel ourselves to fulfill our true potential. I'm a better man having met him.",
                    price: 200,
                    rating: 4,
                },
            ]);
            setLoading(false);
        };

        fetchBooks();
    }, []);

    return { books, loading };
};
