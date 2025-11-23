// components/Features.tsx
const features = [
    {
        title: 'Premium Quality',
        desc: 'Certified gold and diamond jewelry.',
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <path d="M16 6L20.09 14.26L29 15.27L22 21.14L23.82 30L16 25.77L8.18 30L10 21.14L3 15.27L11.91 14.26L16 6Z" fill="#C2A669" />
            </svg>
        )
    },
    {
        title: 'Trusted Brand',
        desc: 'Three generations of excellence in jewelry craftsmanship',
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <circle cx="16" cy="12" r="8" fill="#C2A669" />
                <rect x="13" y="20" width="6" height="8" rx="2" fill="#C2A669" />
            </svg>
        )
    },
    {
        title: 'Best Prices',
        desc: 'Competitive rates with transparent pricing policy',
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <rect x="8" y="8" width="16" height="16" rx="5" fill="#C2A669" />
                <circle cx="20" cy="20" r="2" fill="#fff" />
            </svg>
        )
    },
    {
        title: 'Custom Designs',
        desc: 'Bespoke jewelry tailored to your unique preferences',
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <polygon points="16,6 28,12 22,26 10,26 4,12" fill="#C2A669" />
                <polygon points="16,6 10,26 22,26" fill="#efd9b8" />
            </svg>
        )
    }
];

export default function Features() {
    return (
        <section className="w-full bg-white py-14 px-4 md:px-24">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                {features.map((item) => (
                    <div
                        key={item.title}
                        className="
              bg-white
              shadow
              border border-[#f0e6d9]
              rounded-xl
              w-full
              max-w-[290px]
              min-h-[210px]
              px-8 py-8
              flex flex-col items-center text-center
              transition
              hover:shadow-lg
              hover:-translate-y-1
              hover:scale-[1.04]
              duration-200
            "
                    >
                        <span className="mb-3">{item.icon}</span>
                        <h3 className="text-[#C2A669] text-[1.18rem] font-medium font-serif mb-2">
                            {item.title}
                        </h3>
                        <p className="text-[#5F4A31] text-[1rem] leading-[1.65] font-serif">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
