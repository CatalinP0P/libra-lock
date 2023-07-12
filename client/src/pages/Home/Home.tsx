import React, { useEffect } from 'react';
import { useBooks } from '../../hooks/getBooks';
import Layout from '../../Layout';

export default function Home() {
    const { books, loading } = useBooks();

    return loading ? (
        <label>Loading...</label>
    ) : (
        <Layout>
            <div>
                {books.map((book: any) => {
                    return <label key={book.id}>{book.title}</label>;
                })}
            </div>
        </Layout>
    );
}
