// components/CollectionGrid.tsx
"use client"
import { useState } from "react";
import Image from "next/image";

const FILTERS = [
    { key: "all", label: "All Products" },
    { key: "necklace", label: "Gold Necklaces" },
    { key: "ring", label: "Gold Rings" },
    { key: "diamond", label: "Diamond Jewelry" },
    { key: "silver", label: "Silver Items" },
    { key: "bracelet", label: "Bracelets" },
    { key: "earrings", label: "Earrings" },
];

// Each product now has category keys matching filter keys above.
const products = [
    { name: 'Royal Gold Chain', category: "necklace", price: '₹1,25,000', desc: '22K gold chain with intricate design, perfect for special occasions', img: '/images/chain.jpeg', label: '22K' },
    { name: 'Classic Temple Necklace', category: "necklace", price: '₹1,85,000', desc: 'Traditional temple design gold necklace, handcrafted by artisans', img: '/images/necklace.jpeg', label: '22K' },
    { name: 'Diamond Solitaire Ring', category: "diamond", price: '₹2,45,000', desc: '18K white gold ring with 1 carat diamond solitaire', img: '/images/ring.jpeg', label: '18K' },
    { name: 'Antique Gold Ring', category: "ring", price: '₹45,000', desc: '22K gold ring with antique finish and ruby stone', img: '/images/bracelet.jpeg', label: '22K' },
    // add more, specify the correct category
];

export default function CollectionGrid() {
    const [active, setActive] = useState("all");

    // Filtering function
    const filteredProducts =
        active === "all"
            ? products
            : products.filter((prod) => prod.category === active);

    return (
        <section className="py-12 bg-[#F6F3EC]">
            <div className="max-w-[1450px] mx-auto">
                <div className="text-center mb-1">
                    <h2 className="font-serif text-[2.05rem] md:text-[2.5rem] text-black mb-2 tracking-tight">
                        Our Collection
                    </h2>
                    <p className="mt-[0.2rem] text-[#72644a] text-xl font-serif tracking-normal font-normal">
                        Explore our exquisite range of gold, silver, and diamond jewelry
                    </p>
                </div>

                {/* Filter buttons */}
                <div className="flex flex-wrap mb-8 justify-start sm:justify-center gap-2 mt-7 px-1">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter.key}
                            className={`px-5 py-[6px] font-serif text-[1rem] rounded-full shadow 
                ${active === filter.key
                                    ? "bg-[#C2A669] text-white font-bold"
                                    : "bg-white border border-[#C2A669] text-[#C2A669] font-semibold hover:bg-[#f8ecd6]"} 
                transition`}
                            onClick={() => setActive(filter.key)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-0 md:px-2">
                    {filteredProducts.map((product, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-md border border-[#ede5d3] overflow-hidden flex flex-col min-h-[360px] hover:shadow-lg transition-all duration-200"
                        >
                            <div className="h-96 relative">
                                <Image src={product.img} alt={product.name} fill className="object-cover" />
                            </div>
                            <div className="p-4 pb-3 flex flex-col justify-between flex-1">
                                <h3 className="text-[#674B24] font-serif font-medium text-[1.09rem] mb-[0.2rem] leading-tight">
                                    {product.name}
                                </h3>
                                <p className="text-[#72644a] text-[0.98rem] font-serif font-normal mt-1 mb-0 leading-[1.55]">
                                    {product.desc}
                                </p>
                                <div className="flex items-center justify-between mt-3 mb-0">
                                    <span className="text-[#C2A669] text-xl md:text-2xl font-bold">{product.price}</span>
                                    <span className="bg-[#F6F3EC] border border-[#d8ccb1] text-[#a99e71] text-[0.91rem] px-2 py-[2px] rounded font-semibold ml-2">
                                        {product.label}
                                    </span>
                                </div>
                                <button className="mt-3 border border-[#C2A669] text-[#674B24] px-2 py-2 rounded-full font-serif font-medium text-[1rem] hover:bg-[#f8ecd6] transition w-full">
                                    View Details →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
