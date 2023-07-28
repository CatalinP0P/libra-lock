import React from 'react';
import Layout from '../../Layout';
import boxImage from '../../assets/logos/box.png';
import Container from '../../components/ui/Container';

export default function NotFound() {
    return (
        <Layout>
            <Container className="flex flex-row h-screen">
                <div className="flex flex-col gap-4 h-full justify-center items-center md:items-start text-center md:text-start pb-40">
                    <img
                        className="w-[60%] max-w-[20rem] translate-x-[-5%]"
                        src={boxImage}
                    />
                    <label className="text-4xl md:text-5xl">
                        <span className="text-6xl md:text-8xl font-light me-4">
                            404
                        </span>{' '}
                        Not found
                    </label>
                    <p className="opacity-60 text-xl md:text-2xl">
                        The page that you accessed is not found, please navigate
                        back to the homepage
                    </p>
                </div>
            </Container>
        </Layout>
    );
}
