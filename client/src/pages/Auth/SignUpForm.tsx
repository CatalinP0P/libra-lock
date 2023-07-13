import React, { useState } from 'react';
import FormInput from '../../components/ui/forms/FormInput';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

export default function SignUpForm() {
    const { createAccountWithEmail } = useAuth();

    interface FormProps {
        email: string;
        password: string;
        confirmPassword: string;
        displayName: string;
    }

    const [formData, setFormData] = useState<FormProps>({
        email: '',
        password: '',
        confirmPassword: '',
        displayName: '',
    });

    const [error, setError] = useState('');

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();
        if (formData.confirmPassword != formData.password) {
            return;
        }
        try {
            await createAccountWithEmail(
                formData.email,
                formData.password,
                formData.displayName
            );
            console.log('Account created');
            window.location.href = window.location.origin;
        } catch (err: any) {
            setError(err.message.split(':')[1].split('.')[0]);
        }
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form
            className="w-full flex flex-col gap-4 text-center"
            autoComplete="do-not-autofill"
            onSubmit={handleSubmit}
        >
            {error && (
                <label className="text-red-400 font-medium text-xs">
                    {error}
                </label>
            )}
            <FormInput
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />
            <FormInput
                name="displayName"
                placeholder="Display Name"
                onChange={handleChange}
            />
            <FormInput
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleChange}
            />
            <FormInput
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
                onChange={handleChange}
            />
            <Button className="px-32">Create Account</Button>
        </form>
    );
}
