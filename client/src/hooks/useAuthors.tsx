import React, { useEffect, useState } from 'react';

export const useAuthors = () => {
    const [authors, setAuthors] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    const fetchAuthors = async () => {
        // try {
        //     const response = await fetch(process.env.REACT_APP_SERVER_ADRESS, {
        //         method: 'GET',
        //     });

        //     const data = await response.json();
        //     setAuthors(data)
        // } catch (err) {
        //     console.error(err);
        // }

        setAuthors([
            {
                id: 1,
                name: 'James Clear',
                imageURL:
                    'https://i0.wp.com/blog.rescuetime.com/wp-content/uploads/2018/01/james-clear-smiling-wide-1400-1.jpg?fit=1400%2C870&ssl=1',
            },
            {
                id: 2,
                name: 'David Goggins',
                imageURL:
                    'https://nationaltoday.com/wp-content/uploads/2022/10/456840964-min-1200x834.jpg',
            },
            {
                id: 3,
                name: 'Ion Creanga',
                imageURL:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Ion_Creanga-Foto03.jpg/800px-Ion_Creanga-Foto03.jpg',
            },
        ]);
        setLoading(false);
    };

    useEffect(() => {
        fetchAuthors();
    }, []);

    return { authors, loading };
};
