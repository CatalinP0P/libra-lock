import React, {
    ChangeEventHandler,
    FormEvent,
    FormEventHandler,
    useState,
} from 'react';
import FormInputFluid from '../../components/ui/forms/FormInputFluid';
import FormSelectFluid from '../../components/ui/forms/FormSelectFluid';
import Button from '../../components/ui/Button';

import { useTheme } from '../../context/ThemeContext';
import { useSearchParams } from 'react-router-dom';
import { StringMappingType } from 'typescript';

interface FilterProps {
    q: string;
    genre: string | null;
    minPrice: number | null;
    maxPrice: number | null;
    minPages: number | null;
    maxPages: number | null;
    authors: string[];
    rating: string[];
}

export default function FiltersForm() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [filterData, setFilterData] = useState<FilterProps>({
        q: searchParams.get('q') || '',
        genre: searchParams.get('genre') || 'Show All',
        minPrice: parseInt(searchParams.get('minPrice') + '') || null,
        maxPrice: parseInt(searchParams.get('maxPrice') + '') || null,
        minPages: parseInt(searchParams.get('minPages') + '') || null,
        maxPages: parseInt(searchParams.get('maxPages') + '') || null,
        authors: searchParams.getAll('authors'),
        rating: searchParams.getAll('rating'),
    });
    const { theme } = useTheme();

    const handleSubmit: FormEventHandler<HTMLFormElement> = (
        e: FormEvent<any>
    ) => {
        e.preventDefault();

        var filters: any = filterData;
        var newFilters = {};
        Object.keys(filterData).forEach((key: string) => {
            if (filters[key] && filters[key] != 'Show All') {
                newFilters = { ...newFilters, [key]: filters[key] };
            }
        });

        setSearchParams(newFilters);
    };

    const handleChange: ChangeEventHandler<
        HTMLSelectElement | HTMLInputElement
    > = (e: any) => {
        const { name, value } = e.target;

        if (name == 'authors') {
            const author = e.target.getAttribute('author-name');
            if (e.target.checked)
                if (filterData.authors == null) {
                    setFilterData({ ...filterData, [name]: [author] });
                } else {
                    setFilterData({
                        ...filterData,
                        [name]: [...filterData.authors, author],
                    });
                }
            else {
                var newArray: string[] = [];
                const authors = filterData.authors;
                for (var i = 0; i < authors.length; i++) {
                    if (authors[i] != author) {
                        newArray.push(authors[i]);
                    }
                }

                setFilterData({ ...filterData, [name]: newArray });
            }
        } else if (name == 'rating') {
            const rating = e.target.getAttribute('rating-value');
            if (e.target.checked)
                if (filterData.authors == null) {
                    setFilterData({ ...filterData, [name]: [rating] });
                } else {
                    setFilterData({
                        ...filterData,
                        [name]: [...filterData.rating, rating],
                    });
                }
            else {
                var newArray: string[] = [];
                const ratings = filterData.rating;
                for (var i = 0; i < ratings.length; i++) {
                    if (ratings[i] != rating) {
                        newArray.push(ratings[i]);
                    }
                }

                setFilterData({ ...filterData, [name]: newArray });
            }
        } else {
            setFilterData({ ...filterData, [name]: value });
        }
    };
    return (
        <form className="w-full grid grid-cols-2" onSubmit={handleSubmit}>
            <label
                className={
                    'col-span-2 border-b-2 px-3 pt-3 pb-8 text-2xl border-neutral-500 '
                }
            >
                Filters
            </label>
            <FormSelectFluid
                title="Genre"
                name="genre"
                defaultValue={searchParams.get('genre') || ''}
                options={['Show All', 'Drama', 'Self Development', 'Action']}
                className="col-span-2"
                onChange={handleChange}
            />
            <FormInputFluid
                title="Min Price"
                defaultValue={filterData.minPrice || ''}
                placeholder="Minimum Price"
                name="minPrice"
                onChange={handleChange}
                type="number"
                className="border-r"
            />
            <FormInputFluid
                title="Max Price"
                placeholder="Maximum Price"
                name="maxPrice"
                onChange={handleChange}
                type="number"
                defaultValue={filterData.maxPrice || ''}
                className="border-s"
            />
            <div className="col-span-2 p-4 border-b border-neutral-500 flex flex-col">
                <label className="opacity-60">Authors</label>
                <div className="flex flex-col text-sm">
                    <div className="flex flex-row gap-2">
                        <input
                            id="ion"
                            type="checkbox"
                            author-name="Ion Creanga"
                            name="authors"
                            defaultChecked={filterData.authors.includes(
                                'Ion Creanga'
                            )}
                            onChange={handleChange}
                        />
                        <label>Ion Creanga</label>
                    </div>
                    <div className="flex flex-row gap-2">
                        <input
                            type="checkbox"
                            author-name="Popa Liviu"
                            name="authors"
                            defaultChecked={filterData.authors.includes(
                                'Popa Liviu'
                            )}
                            onChange={handleChange}
                        />

                        <label>Popa Liviu</label>
                    </div>
                </div>
            </div>
            <div className="col-span-2 p-4 border-b border-neutral-500 flex flex-col">
                <label className="opacity-60">Rating</label>
                <div className="flex flex-col text-sm">
                    <div className="flex flex-row gap-2">
                        <input
                            id="ion"
                            type="checkbox"
                            name="rating"
                            rating-value="1"
                            defaultChecked={filterData.rating.includes('1')}
                            onChange={handleChange}
                        />
                        <label>1 Star</label>
                    </div>
                    <div className="flex flex-row gap-2">
                        <input
                            type="checkbox"
                            name="rating"
                            rating-value="2"
                            defaultChecked={filterData.rating.includes('2')}
                            onChange={handleChange}
                        />
                        <label>2 Stars</label>
                    </div>
                    <div className="flex flex-row gap-2">
                        <input
                            type="checkbox"
                            name="rating"
                            rating-value="3"
                            defaultChecked={filterData.rating.includes('3')}
                            onChange={handleChange}
                        />
                        <label>3 Stars</label>
                    </div>
                    <div className="flex flex-row gap-2">
                        <input
                            type="checkbox"
                            name="rating"
                            rating-value="4"
                            defaultChecked={filterData.rating.includes('4')}
                            onChange={handleChange}
                        />
                        <label>4 Stars</label>
                    </div>
                    <div className="flex flex-row gap-2">
                        <input
                            type="checkbox"
                            name="rating"
                            rating-value="5"
                            defaultChecked={filterData.rating.includes('5')}
                            onChange={handleChange}
                        />
                        <label>5 Stars</label>
                    </div>
                </div>
            </div>
            <FormInputFluid
                title="Min Pages"
                placeholder="ex: 100"
                type="number"
                className="border-r"
                name="minPages"
                defaultValue={filterData.minPages || ''}
                onChange={handleChange}
            />
            <FormInputFluid
                title="Max Pages"
                placeholder="ex: 310"
                type="number"
                className="border-s"
                name="maxPages"
                defaultValue={filterData.maxPages || ''}
                onChange={handleChange}
            />
            <Button className="col-span-2" rounded={false} variant="secondary">
                Apply Filters
            </Button>
        </form>
    );
}
