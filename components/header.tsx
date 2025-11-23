// components/Header.tsx
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/products', label: 'Products' },
        { href: '/metal-rates', label: 'Metal Rates' },
        // { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="sticky top-0 z-30 bg-[#FAF8F5] shadow-[0_2px_8px_0px_rgba(200,176,108,0.05)]">
            {/* Main Header: content boxed */}
            <div className="border-b border-[#ede3d2] bg-[#FAF8F5]">
                <div className="max-w-[1450px] mx-auto flex items-center justify-between px-6 py-6 md:px-20">
                    <div className="flex items-center gap-3">
                        <span className="bg-[#C2A669] rounded-full p-1">
                            {/* Logo Icon */}
                            <svg width="20" height="20" fill="none">
                                <circle cx="10" cy="10" r="10" fill="#C2A669" />
                            </svg>
                        </span>
                        <div className="flex flex-col leading-none">
                            <span className="font-mono font-medium text-xl md:text-2xl text-[#674B24] tracking-tight">
                                SR Jewellers
                            </span>
                        </div>
                    </div>
                    <nav className="hidden md:flex gap-8 text-[#674B24] font-serif text-lg font-stretch-expanded">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`hover:text-[#C2A669] hover:underline underline-offset-4 transition-colors duration-150
                  ${pathname === link.href ? 'text-[#C2A669] underline' : ''}
                `}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
            {/* Rates Bar - Centered, not boxed */}
            <div className="bg-[#725B3B] w-full text-white px-6 py-3 md:px-20 border-b border-[#a88e60] flex justify-center items-center" style={{ fontFamily: "inherit" }}>
                <span className="flex items-center gap-2 font-medium text-[#e3c267] text-base mr-6">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="inline" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 12L7 7L11 11L18 4" stroke="#e3c267" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Today's Rates:
                </span>
                <span className="mx-7 text-base font-medium flex items-center">
                    <span className="text-white font-bold">Gold 22K:</span>
                    <span className="text-[#e3c267] font-bold ml-2">₹6,280/g</span>
                </span>
                <span className="text-base font-medium flex items-center">
                    <span className="text-white font-bold">Silver 92.5%:</span>
                    <span className="text-[#e3c267] font-bold ml-2">₹78/g</span>
                </span>
            </div>
        </header>
    );
}
