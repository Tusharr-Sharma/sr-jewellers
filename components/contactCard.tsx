// components/ContactCards.tsx
const contacts = [
    {
        heading: 'Visit Us',
        details: '123 Jewelry Lane, Gold Market\nMumbai, Maharashtra 400001',
        icon: (
            <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="13" stroke="#C2A669" strokeWidth="2" /><path d="M14 8v8" stroke="#C2A669" strokeWidth="2" /><circle cx="14" cy="17" r="1.5" fill="#C2A669" /></svg>
        )
    },
    {
        heading: 'Call Us',
        details: '91 98765 43210\n91 98765 43211',
        icon: (
            <svg width="28" height="28" fill="none"><path d="M8 8l2 2a10 10 0 006 6l2-2" stroke="#C2A669" strokeWidth="2" /><circle cx="14" cy="14" r="13" stroke="#C2A669" strokeWidth="2" /></svg>
        )
    },
    {
        heading: 'Email Us',
        details: 'info@jewelystore.com\nsales@jewelystore.com',
        icon: (
            <svg width="28" height="28" fill="none"><rect x="3" y="7" width="22" height="14" rx="2" stroke="#C2A669" strokeWidth="2" /><line x1="3" y1="7" x2="25" y2="21" stroke="#C2A669" strokeWidth="2" /><line x1="3" y1="21" x2="25" y2="7" stroke="#C2A669" strokeWidth="2" /></svg>
        )
    },
    {
        heading: 'Working Hours',
        details: 'Mon– Sat: 10:00 AM – 8:00 PM\nSunday: 11:00 AM – 6:00 PM',
        icon: (
            <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="13" stroke="#C2A669" strokeWidth="2" /><path d="M14 8v6l4 2" stroke="#C2A669" strokeWidth="2" /></svg>
        )
    }
];

export default function ContactCards() {
    return (
        <div className="max-w-[1450px] mx-auto px-4 pb-2 mb-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-6">
                {contacts.slice(0, 3).map((c) => (
                    <div key={c.heading} className="bg-white shadow-md rounded-xl p-8 text-center flex flex-col items-center">
                        <span className="mb-3">{c.icon}</span>
                        <h3 className="text-[#222] font-serif text-lg font-normal mb-2">{c.heading}</h3>
                        <pre className="whitespace-pre-wrap text-[#6b6552] text-[1rem] font-serif opacity-90">{c.details}</pre>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <div className="bg-white shadow-md rounded-xl p-8 text-center flex flex-col items-center w-full md:w-[28%]">
                    <span className="mb-3">{contacts[3].icon}</span>
                    <h3 className="text-[#222] font-serif text-lg font-normal mb-2">{contacts[3].heading}</h3>
                    <pre className="whitespace-pre-wrap text-[#6b6552] text-[1rem] font-serif opacity-90">{contacts[3].details}</pre>
                </div>
            </div>
        </div>
    );
}
