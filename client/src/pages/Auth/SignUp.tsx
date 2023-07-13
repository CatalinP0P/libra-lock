import React from 'react';
import AuthLayout from './AuthLayout';
import FacebookButton from '../../components/ui/FacebookButton';
import GoogleButton from '../../components/ui/GoogleButton';
import AppleButton from '../../components/ui/AppleButton';
import HorizontalSeparator from '../../components/ui/HorizontalSeparator';
import FormInput from '../../components/ui/forms/FormInput';
import Button from '../../components/ui/Button';
import SignUpForm from './SignUpForm';

export default function SignUp() {
    return (
        <AuthLayout>
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-4 items-center">
                <label className="font-extrabold text-3xl sm:text-4xl md:text-6xl whitespace-nowrap">
                    Create Your Account
                </label>
                <label className="text-2xl font-light">
                    Continue with social networkss
                </label>
                <div className="flex flex-row gap-4 items-center">
                    <FacebookButton />
                    <GoogleButton />
                    <AppleButton />
                </div>
                <HorizontalSeparator className=" w-[50%]" title="or" />
                <SignUpForm />
            </div>
        </AuthLayout>
    );
}
