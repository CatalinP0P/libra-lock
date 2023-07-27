import React, { useEffect, useState } from 'react';

export const useGenres = () => {
    const [genres, setGenres] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchGenres = async () => {
        try {
            // const data = await fetch(process.env.REACT_APP_SERVER_ADRESS, {
            //     methods: 'GET',
            // });
            // const genres = await data.json();
            // setGenres(genres)

            setGenres([
                {
                    id: 1,
                    name: 'Self Development',
                },
                { id: 2, name: 'Action' },
                { id: 3, name: 'Drama' },
                { id: 4, name: 'Finance' },
                { id: 5, name: 'Fiction' },
                { id: 6, name: 'Anime' },
                { id: 7, name: 'Poetry' },
                { id: 7, name: 'Romance' },
            ]);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchGenres();
    }, []);

    return { genres, loading };
};
