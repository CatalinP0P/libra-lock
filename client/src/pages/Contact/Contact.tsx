import React from 'react';
import Button from '../../components/ui/Button';
import Layout from '../../Layout';
import Container from '../../components/ui/Container';
import FormInput from '../../components/ui/forms/FormInput';
import FormSelect from '../../components/ui/forms/FormSelect';
import FormTextArea from '../../components/ui/forms/FormTextArea';

export default function Contact() {
    return (
        <Layout>
            <Container className="pt-24">
                <label className="flex flex-col gap-2">
                    <h2 className="text-3xl transition-all md:text-4xl text-start font-extrabold block z-[5]">
                        Contact us
                    </h2>
                    <label>
                        We have answers for all of your questions and
                        curiosities
                    </label>
                    <form className="flex flex-col gap-4 mt-8">
                        <FormSelect
                            options={['Shipping', 'Lockers', 'Other']}
                        ></FormSelect>
                        <div className="flex flex-row gap-4">
                            <FormInput
                                rounded={false}
                                title="First Name"
                                placeholder="ex: John"
                            />
                            <FormInput
                                rounded={false}
                                title="Last Name"
                                placeholder="ex: Mich"
                            />
                        </div>
                        <FormInput
                            title="Your Email"
                            placeholder="ex: john@gmail.com"
                            rounded={false}
                        />
                        <FormTextArea rounded={false} title="Details" />
                        <Button rounded={false} className="mt-4">
                            Submit
                        </Button>
                    </form>
                </label>
            </Container>
        </Layout>
    );
}
