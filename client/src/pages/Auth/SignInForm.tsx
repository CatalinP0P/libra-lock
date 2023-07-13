import React, { useState } from 'react';
import FormInput from '../../components/ui/forms/FormInput';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

export default function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { signWithEmail } = useAuth();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();
        try {
            await signWithEmail(email, password);
            window.location.href = window.location.origin;
        } catch (err: any) {
            setError(err.message.split(':')[1].split('.')[0]);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-center items-center w-full"
        >
            {error && (
                <label className="text-red-400 font-medium text-xs">
                    {error}
                </label>
            )}
            <FormInput
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="primary" className="px-32 mt-8">
                Login
            </Button>
            <label className="xl:hidden">
                No Account?{' '}
                <a
                    className="font-bold underline underline-offset-2"
                    href="/signup"
                >
                    sign up
                </a>
            </label>
        </form>
    );
}
