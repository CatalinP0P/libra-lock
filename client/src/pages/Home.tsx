import React, { useEffect } from 'react';
import { useBooks } from '../hooks/getBooks';

export default function Home() {
    const { books, loading } = useBooks();

    return loading ? (
        <label>Loading...</label>
    ) : (
        <div>
            {books.map((book: any) => {
                return <label key={book.id}>{book.title}</label>;
            })}
        </div>
    );
}
