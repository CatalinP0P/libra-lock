import React, { useEffect, useState } from 'react';
import { useBooks } from '../../hooks/useBooks';
import Modal from './Modal';
import BookImage from './BookImage';
import Button from './Button';
import FormSelectFluid from './forms/FormSelectFluid';
import FormSelect from './forms/FormSelect';

interface ModalProps {
    id: string;
    visible: boolean;
    setVisible: Function;
}

export default function BuyModal({ id, visible, setVisible }: ModalProps) {
    const { books } = useBooks();
    const [selectedBook, setSelectedBook] = useState<any>();
    const [modalStep, setModalStep] = useState(1);

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
        <Modal visible={visible} setVisible={setVisible}>
            {modalStep == 1 && (
                <div className="flex flex-col gap-2 pt-8">
                    <label className="text-4xl font-semibold text-neutral-800 px-24 mx-auto pb-4">
                        Buy a book for {selectedBook?.price}
                    </label>
                    <div className="flex flex-col gap-1 px-24">
                        <div className="relative w-[24rem] shadow-lg">
                            <BookImage imageURL={selectedBook?.imageURL} />
                        </div>
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
                <div className="flex flex-col gap-2 pt-8 text-start">
                    <label className="text-4xl font-semibold text-neutral-800 px-24 pb-4">
                        Checkout
                    </label>
                    <div className="flex flex-col gap-1 px-24 items-start pt-8">
                        <FormSelect
                            title="Select collection point"
                            options={[
                                'Cluj Napoca, Iuliu Hateg',
                                'Timisoara, Unirii',
                            ]}
                        />
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
                            onClick={() => setModalStep(3)}
                        >
                            Buy Book
                        </Button>
                    </div>
                </div>
            )}

            {modalStep == 3 && (
                <div className="flex flex-col gap-2 pt-8 text-start">
                    <label className="text-4xl font-semibold text-neutral-800 px-24 pb-4">
                        Book buyed successfully
                    </label>
                    <label className="flex flex-col items-center justify-center text-4xl">
                        <label className="text-sm font-semibold text-neutral-400">
                            Here is your book code
                        </label>
                        13573
                    </label>
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
