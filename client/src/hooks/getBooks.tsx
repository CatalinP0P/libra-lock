import React, { useEffect, useState } from 'react';

export const useBooks = () => {
    const [books, setBooks] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetch = async () => {
            // todo
            // Calling the api
            setBooks([
                { id: 1, title: 'Carte 1 ' },
                { id: 2, title: 'Cart 2' },
            ]);
            setLoading(false);
        };

        fetch();
    }, []);

    return { books, loading };
};
