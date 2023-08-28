import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    return (
        <div className="flex flex-grow flex-shrink flex-row gap-2 bg-transparent text-secondary/75 px-2 py-1 rounded-full border-2 border-secondary/75 items-top ">
            <div
                className=" cursor-pointer z-[10]"
                onClick={() => navigate('/books?q=' + search.trim())}
            >
                <SearchIcon className="w-[24px] h-[24px]" />
            </div>
            <input
                placeholder="Search for a book"
                className="w-full bg-transparent outline-none placeholder:text-secondary/30"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key == 'Enter') {
                        if (search.trim())
                            navigate('/books?q=' + search.trim());
                    }
                }}
            />
            <div
                onClick={() => setSearch('')}
                className={
                    'transition-all ' +
                    (search.length >= 1
                        ? ' opacity-100 cursor-pointer'
                        : ' opacity-0 pointer-events-none')
                }
            >
                <ClearIcon fontSize={'small'} />
            </div>
        </div>
    );
}
