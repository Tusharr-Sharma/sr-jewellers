// components/ContactForm.tsx
'use client';
import { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    // Add your onChange and submit logic

    return (
        <div className="max-w-[1450px] mx-auto px-4">
            <div className="bg-white p-10 rounded-2xl shadow-md mx-auto sm:w-[430px] md:w-[520px] mt-6 mb-14">
                <h2 className="font-serif text-[1.17rem] font-normal text-center mb-7 text-[#222]">Send us a Message</h2>
                <form className="flex flex-col gap-5">
                    <input
                        required
                        type="text"
                        placeholder="Name *"
                        className="border border-[#f2ecda] rounded px-4 py-3 text-black placeholder:text-gray-400 font-serif"
                    />
                    <input
                        required
                        type="email"
                        placeholder="Email *"
                        className="border border-[#f2ecda] rounded px-4 py-3 text-black placeholder:text-gray-400 font-serif"
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        className="border border-[#f2ecda] rounded px-4 py-3 text-black placeholder:text-gray-400 font-serif"
                    />
                    <textarea
                        required
                        placeholder="Message *"
                        className="border border-[#f2ecda] rounded px-4 py-3 text-black placeholder:text-gray-400 font-serif"
                        rows={4}
                    />
                    <button type="submit" className="w-full bg-linear-to-r from-[#C2A669] to-[#674B24] text-white py-3 rounded-full font-semibold mt-2">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
