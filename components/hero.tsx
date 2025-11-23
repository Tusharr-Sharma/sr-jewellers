// components/Hero.tsx
import Link from "next/link";
export default function Hero() {
    return (
        <section className="w-full flex flex-col items-center justify-center pt-4 pb-16 bg-[#F6F3EC]">
            <h1 className="text-[2.8rem] md:text-[5rem] font-serif font-normal text-[#292019] text-center leading-[1.13] tracking-normal mb-1"
                style={{ fontWeight: 500, letterSpacing: '0' }}>
                Timeless Elegance in <br />
                <span className="block text-[#C2A669] font-serif font-normal mt-4 mb-4 text-[2.5rem] md:text-[4.5rem] leading-[1.1]">
                    Gold & Diamonds
                </span>
            </h1><p
                className="max-w-3xl text-center text-[#72644a] mt-1 mb-12 text-[1.2rem] md:text-[1.4rem] font-serif leading-[2.2rem]"
                style={{ fontWeight: 400 }}
            >
                Discover our exquisite collection of handcrafted jewelry that celebrates life&apos;s precious moments with unmatched brilliance
            </p>

            <div className="mt-3 flex gap-6">
                <button className="bg-[#866B45] text-white px-12 py-4 rounded-full font-semibold shadow hover:bg-[#9b8357] transition text-[1.25rem]">
                    <Link href="/products">
                        Explore Collection
                    </Link>
                </button>
                <button className="bg-transparent border-2 border-[#866B45] text-[#674B24] px-12 py-4 rounded-full font-semibold hover:bg-[#f7ece1] transition text-[1.25rem]">
                    <Link href="/metal-rates">
                        View Prices
                    </Link>
                </button>
            </div>


        </section>
    );
}
