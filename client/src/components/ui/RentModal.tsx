import React, { useEffect, useState } from 'react';
import { useBooks } from '../../hooks/useBooks';
import Modal from './Modal';
import BookImage from './BookImage';
import Button from './Button';
import FormSelectFluid from './forms/FormSelectFluid';
import FormSelect from './forms/FormSelect';
import { ReactComponent as LoadingSVG } from '../../assets/svgs/loading.svg';

interface ModalProps {
    id: string;
    visible: boolean;
    setVisible: Function;
}

export default function RentModal({ id, visible, setVisible }: ModalProps) {
    const { books } = useBooks();
    const [selectedBook, setSelectedBook] = useState<any>();
    const [modalStep, setModalStep] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const book = books.filter((m) => m.id == id)[0];
        setSelectedBook(book);
    }, [id]);

    useEffect(() => {
        setTimeout(() => {
            setModalStep(1);
        }, 100);
    }, [visible]);

    return (
        <Modal
            visible={visible}
            setVisible={setVisible}
            className="w-[90%] max-w-[64rem]"
        >
            {modalStep == 1 && (
                <div className="flex flex-col gap-2 pt-8 items-center h-full justify-between">
                    <label className="text-4xl font-semibold text-neutral-800 mx-auto pb-4">
                        Rent this book {selectedBook?.price / 5}
                    </label>
                    <div className="flex flex-col gap-1">
                        <BookImage
                            imageURL={selectedBook?.imageURL}
                            className="w-[80vw] max-w-[32rem]"
                        />
                        <label className="text-2xl text-neutral-800 font-semibold">
                            {selectedBook?.title}
                        </label>
                        <label className="text-neutral-600">
                            by{' '}
                            <span className="text-neutral-800 font-semibold">
                                {selectedBook?.author}
                            </span>
                        </label>
                    </div>
                    <div className="w-full flex flex-row pt-16">
                        <Button
                            variant={'secondary'}
                            rounded={false}
                            className="w-full"
                            onClick={() => setVisible(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            rounded={false}
                            className="w-full"
                            onClick={() => setModalStep(2)}
                        >
                            Continue
                        </Button>
                    </div>
                </div>
            )}

            {modalStep == 2 && (
                <div className="flex flex-col gap-2 pt-8 text-start relative items-center justify-between">
                    <div className="flex flex-col gap-4">
                        <label className="text-4xl font-semibold text-neutral-800 pb-4">
                            Checkout
                        </label>
                        <div className="flex flex-col gap-1 items-start pt-8 w-[90%]">
                            <FormSelect
                                title="Select collection point"
                                options={[
                                    'Cluj Napoca, Iuliu Hateg',
                                    'Timisoara, Unirii',
                                ]}
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-row pt-16">
                        <Button
                            variant={'secondary'}
                            rounded={false}
                            className="w-full"
                            onClick={() => setModalStep(1)}
                        >
                            Back
                        </Button>
                        <Button
                            variant="primary"
                            rounded={false}
                            className="w-full"
                            onClick={() => {
                                setLoading(true);
                                setTimeout(() => {
                                    setLoading(false);
                                    setModalStep(modalStep + 1);
                                }, 1750);
                            }}
                        >
                            Rent Book
                        </Button>
                    </div>
                    {loading && (
                        <div className="absolute left-0 top-0 bottom-0 right-0 flex flex-col items-center justify-center bg-black/75 z-[110]">
                            <label className="z-[114] text-3xl font-medium text-white flex flex-row gap-4 items-center">
                                <LoadingSVG
                                    width={32}
                                    height={32}
                                    fill="#FFFFFF"
                                    className="animate-spin"
                                />
                                Loading
                            </label>
                        </div>
                    )}
                </div>
            )}

            {modalStep == 3 && (
                <div className="flex flex-col gap-2 pt-8 text-center items-center h-full justify-between">
                    <div className="flex flex-col gap-4 w-full">
                        <label className="text-2xl md:text-4xl mx-auto font-semibold text-neutral-800 pb-4">
                            Book rented successfully
                        </label>
                        <label className="flex flex-col items-center justify-center text-4xl">
                            <label className="text-sm font-semibold text-neutral-400">
                                Here is your book code
                            </label>
                            13573
                        </label>
                    </div>
                    <div className="w-full flex flex-row pt-16">
                        <Button
                            variant={'secondary'}
                            rounded={false}
                            className="w-[50%]"
                            onClick={() => setVisible(false)}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </Modal>
    );
}
