import React, { useEffect, useState } from 'react';
import { useBooks } from '../../hooks/getBooks';
import Layout from '../../Layout';
import Slider from '../../components/ui/Slider';
import { useAuth } from '../../context/AuthContext';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';

export default function Home() {
    const { loading, user } = useAuth();

    return loading ? (
        <Layout>
            <label className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-6xl">
                PULA ( la cererea lu Liviu =D )
            </label>
        </Layout>
    ) : (
        <Layout>
            <Container className="flex flex-cols items-center">
                {user && (
                    <>
                        <label className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                            Logged in as {user?.displayName}
                        </label>
                        <Button
                            onClick={async () =>
                                console.log(await user.getIdToken())
                            }
                            className="mx-auto mt-8"
                        >
                            Log Token
                        </Button>
                    </>
                )}
            </Container>
        </Layout>
    );
}
