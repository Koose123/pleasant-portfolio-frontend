import { useState, ChangeEvent, FormEvent } from 'react';
import axios, { AxiosError } from 'axios';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface Status {
    type: 'success' | 'error' | '';
    message: string;
}

const ContactUs = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<Status>({ type: '', message: '' });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await axios.post<{ message: string }>('https://pleasant-portfolio-backend.onrender.com/contact', formData);
            setStatus({ type: 'success', message: response.data.message || 'Message sent successfully!' });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            const axiosError = error as AxiosError<{ message: string }>;
            setStatus({
                type: 'error',
                message: axiosError.response?.data?.message || 'Something went wrong. Please try again.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-20 px-3 md:px-10 flex flex-col md:flex-row justify-between items-centers gap-5 md:gap-10">
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl font-bold cursor-pointer my-5">Contact</h1>
                <p className='py-3 text-gray-300/90 md:w-[70%] text-sm'>
                    I would love to hear your project and how I could help.
                    Please fill in the form and I will get back to you as soon as possible.
                </p>
            </div>
            <form className="w-full md:w-1/2" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full gap-3 my-3">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-inherit outline-none placeholder:text-gray-200/50 border-b-2"
                        placeholder="Your name"
                        required
                    />
                </div>

                <div className="flex flex-col w-full gap-3 my-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-inherit outline-none placeholder:text-gray-200/50 border-b-2"
                        placeholder="you@example.com"
                        required
                    />
                </div>

                <div className="flex flex-col w-full gap-3 my-3">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-inherit outline-none placeholder:text-gray-200/50 border-b-2 h-[10rem]"
                        placeholder="Tell me about your project"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="mt-3 border-b-emerald-400 border-b-2 text-white px-3 py-2"
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>

                {status.message && (
                    <p className={`mt-4 ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {status.message}
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactUs;
