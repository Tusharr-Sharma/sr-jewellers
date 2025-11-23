// components/FeaturedProducts.tsx
import Image from 'next/image';
import Link from 'next/link';
const products = [
    { name: 'Royal Gold Chain', price: '₹1,25,000', purity: '22K', desc: '22K gold chain with intricate design.', img: '/images/chain.jpeg' },
    { name: 'Classic Temple Necklace', price: '₹1,85,000', purity: '22K', desc: 'Traditional temple design gold necklace.', img: '/images/necklace.jpeg' },
    { name: 'Diamond Solitaire Ring', price: '₹2,45,000', purity: '18K', desc: '18K white gold ring with diamond.', img: '/images/ring.jpeg' },
    { name: 'Diamond Stud Earrings', price: '₹1,85,000', purity: '18K', desc: '18K gold diamond stud earrings.', img: '/images/earrings.jpeg' },
    { name: 'Diamond Tennis Bracelet', price: '₹3,25,000', purity: '18K', desc: '18K bracelet with line of diamonds.', img: '/images/bracelet.jpeg' },
    { name: 'Diamond Pendant Set', price: '₹2,85,000', purity: '18K', desc: '18K gold pendant with matching earrings.', img: '/images/pendant.jpeg' },
];

export default function FeaturedProducts() {
    return (
        <section className="bg-[#F6F3EC] py-14">
            <div className="text-center mb-10">
                <h2 className="text-[2rem] md:text-[2.5rem] font-serif font-medium text-[#674B24] mb-2">Featured Collection</h2>
                <p className="mt-2 text-[#5F4A31] text-[1.15rem] font-serif">
                    Handpicked pieces that showcase exceptional craftsmanship and timeless beauty
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
                {products.map((product, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col justify-between min-h-[500px] max-h-[520px] hover:shadow-xl transition-all duration-200 w-full"
                        style={{ border: '1px solid #f0e9df' }}
                    >
                        <div className="h-60 relative">
                            <Image src={product.img} alt={product.name} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col justify-between flex-1 px-6 py-6">
                            <h3 className="text-[#674B24] font-semibold text-lg font-serif">{product.name}</h3>
                            <p className="text-[#767065] text-base font-serif mb-1">{product.desc}</p>
                            {/* PRICE + PURITY on a single line */}
                            <div className="flex items-center justify-between mt-2 mb-1">
                                <span className="text-[#C2A669] text-xl md:text-3xl font-bold">{product.price}</span>
                                <span className="bg-[#F6F3EC] text-[#A88E60] text-sm md:text-base font-semibold px-2 py-[2px] rounded">{product.purity}</span>
                            </div>
                            <button className="mt-2 border border-[#C2A669] text-[#674B24] px-4 py-2 rounded-full font-medium hover:bg-[#f8ecd6] transition w-full text-[1.05rem]">
                                View Details →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-12">
                <button className="bg-[#F6F3EC] border-2 border-[#C2A669] text-[#674B24] px-12 py-4 rounded-full font-medium hover:bg-[#f8ecd6] transition font-serif text-[1.13rem]">
                    <Link href="/products">
                        View All Products
                    </Link>
                </button>
            </div>
        </section>
    );
}
