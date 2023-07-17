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
                    title: 'Atomic Habits',
                    imageURL: book1image,
                    author: 'James Clear',
                    price: 120,
                    rating: 5
                },
                {
                    title: 'Cant Hurt Me',
                    imageURL: book2image,
                    author: 'David Goggins',
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
