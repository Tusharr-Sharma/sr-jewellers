// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-[#2f2212] pt-16 pb-8 text-[#efd9b8]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-4 px-8 md:px-16">
                {/* Brand + Desc + Social */}
                <div>
                    <div className="flex items-center mb-5">
                        <span className="bg-[#C2A669] rounded-lg p-[6px] flex items-center justify-center">
                            {/* Diamond SVG Icon (example, can replace with your own) */}
                            <svg width="24" height="24" fill="none"><path d="M12 2L22 8l-10 14L2 8z" stroke="#fff" strokeWidth="2" /></svg>
                        </span>
                        <span className="ml-3 font-mono text-xl text-[#fff3d6] tracking-normal">SR Jewellers</span>
                    </div>
                    <p className="text-[1.06rem] leading-[1.6] text-[#e9dab3] mb-4 font-serif">
                        Your trusted destination for exquisite gold, silver, and diamond jewelry.<br />
                        Crafting timeless elegance since generations.
                    </p>
                    <div className="flex gap-2 mt-2">
                        {/* Social Icons - replace href with actual links */}
                        <a href="#" className="bg-[#C2A669] rounded-md p-2 transition hover:bg-[#ad8a34]" aria-label="Facebook">
                            {/* Facebook */}
                            <svg width="18" height="18" fill="none"><path d="M13 9h-2v6H8V9H6V7h2V6c0-1.1.9-2 2-2h2v2h-2v1h2v2z" fill="#fff" /></svg>
                        </a>
                        <a href="#" className="bg-[#C2A669] rounded-md p-2 transition hover:bg-[#ad8a34]" aria-label="Instagram">
                            {/* Instagram */}
                            <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="7" stroke="#fff" strokeWidth="2" /><circle cx="9" cy="9" r="3" fill="#fff" /></svg>
                        </a>
                        <a href="#" className="bg-[#C2A669] rounded-md p-2 transition hover:bg-[#ad8a34]" aria-label="Twitter">
                            {/* Twitter */}
                            <svg width="18" height="18" fill="none"><path d="M16 4.7a6.5 6.5 0 01-2 1.3C14 5.1 14.2 4.3 14 3.5a6.5 6.5 0 01-2.1.9 3.27 3.27 0 00-5.6 2.9A9.32 9.32 0 013 4.2S1.7 6.7 4.2 7.8c-.7.2-1.4.1-2.1-.2.4 1.7 2 3 3.9 3a6.5 6.5 0 01-4 1.4c.4.3 2.1 1.1 4.1 1.1A9.3 9.3 0 0016 4.7z" fill="#fff" /></svg>
                        </a>
                    </div>
                </div>
                {/* Quick Links */}
                <div>
                    <h4 className="font-serif text-lg text-[#fff3d6] font-normal mb-5 mt-1">Quick Links</h4>
                    <ul className="text-[1.07rem]">
                        <li className="mb-3"><a href="/" className="hover:text-[#C2A669] transition-colors">Home</a></li>
                        <li className="mb-3"><a href="/products" className="hover:text-[#C2A669] transition-colors">Products</a></li>
                        <li className="mb-3"><a href="/metal-rates" className="hover:text-[#C2A669] transition-colors">Metal Rates</a></li>
                        <li><a href="/contact" className="hover:text-[#C2A669] transition-colors">Contact</a></li>
                    </ul>
                </div>
                {/* Contact Us */}
                <div>
                    <h4 className="font-serif text-lg text-[#fff3d6] font-normal mb-5 mt-1">Contact Us</h4>
                    <ul className="text-[1.07rem]">
                        <li className="mb-3 flex items-center">
                            <span className="mr-2"><svg width="18" height="18" fill="none"><circle cx="9" cy="6" r="2" stroke="#fff3d6" /><rect x="6" y="12" width="6" height="3" stroke="#fff3d6" /></svg></span>
                            Tanda Ujjain
                        </li>
                        <li className="mb-3 ml-5 text-[#e9dab3]">Kashipur, Uttarakhand 244713</li>
                        <li className="mb-3 flex items-center">
                            <span className="mr-2"><svg width="18" height="18" fill="none"><rect x="3" y="7" width="12" height="7" stroke="#fff3d6" /></svg></span>
                            +91 98765 43210
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2"><svg width="18" height="18" fill="none"><rect x="2" y="4" width="14" height="10" stroke="#fff3d6" /></svg></span>
                            info@jewelystore.com
                        </li>
                    </ul>
                </div>
                {/* Working Hours */}
                <div>
                    <h4 className="font-serif text-lg text-[#fff3d6] font-normal mb-5 mt-1">Working Hours</h4>
                    <ul className="text-[1.07rem]">
                        <li>
                            <span className="font-semibold text-[#fff3d6]">Monday – Saturday</span><br />
                            <span className="text-[#e9dab3]">10:00 AM – 8:00 PM</span>
                        </li>
                        <li className="mt-5">
                            <span className="font-semibold text-[#fff3d6]">Sunday</span><br />
                            <span className="text-[#e9dab3]">11:00 AM – 6:00 PM</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-[#857148] mt-10 pt-5 text-center text-base text-[#e9dab3] opacity-80 font-serif">
                © 2025 SR Jewellers. All rights reserved.
            </div>
        </footer>
    );
}
