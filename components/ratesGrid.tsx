// components/RatesGrid.tsx
const goldRates = [
    { carat: '24K', rate: '₹6,850' },
    { carat: '22K', rate: '₹6,280' },
    { carat: '18K', rate: '₹5,140' },
];
const silverRates = [
    { type: '99.9%', rate: '₹85' },
    { type: '92.5%', rate: '₹78' },
];
const platinumRates = [
    { type: '95%', rate: '₹3,200' },
];

export default function RatesGrid() {
    return (
        <section className="bg-[#F6F3EC] px-4 py-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif text-center text-[2rem] md:text-[2.4rem] font-normal mb-1 mt-4 text-[#222]">
                    Today's Metal Rates
                </h2>
                <p className="text-center text-[1rem] text-[#6b6552] mb-7 font-serif opacity-75">
                    Live rates for gold, silver, and platinum - Updated regularly
                </p>

                {/* Gold Section */}
                <h3 className="text-[1.22rem] font-serif font-normal mb-7 mt-5 text-[#222] flex items-center">
                    <span className="border-l-2 border-[#C2A669] mr-2 h-[22px]"></span>Gold
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-9">
                    {goldRates.map((rate, idx) => (
                        <div
                            key={rate.carat}
                            className="bg-white shadow-md rounded-2xl px-7 pt-7 pb-6 flex flex-col gap-2 border border-[#f2ecda]"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="bg-[#F6F3EC] border border-[#d8ccb1] text-[#a99e71] text-[0.97rem] px-3 py-1 rounded font-semibold">{rate.carat}</span>
                                <span>
                                    <svg width="20" height="20" fill="none"><path d="M4 15l5-3 4 2 4-10" stroke="#e3c267" strokeWidth="2" strokeLinecap="round" /></svg>
                                </span>
                            </div>
                            <div className="text-[#C2A669] text-[2rem] font-semibold font-serif">{rate.rate}</div>
                            <span className="text-sm text-[#857148] block mt-1 font-serif">per gram</span>
                            <span className="text-[0.98rem] text-[#c9b892] mt-1 font-serif opacity-80">Updated today</span>
                        </div>
                    ))}
                </div>

                {/* Silver Section */}
                <h3 className="text-[1.22rem] font-serif font-normal mb-7 mt-2 text-[#222] flex items-center">
                    <span className="border-l-2 border-[#C2A669] mr-2 h-[22px]"></span>Silver
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-9">
                    {silverRates.map((rate, idx) => (
                        <div
                            key={rate.type}
                            className="bg-white shadow-md rounded-2xl px-7 pt-7 pb-6 flex flex-col gap-2 border border-[#f2ecda]"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="bg-[#F6F3EC] border border-[#d8ccb1] text-[#a99e71] text-[0.97rem] px-3 py-1 rounded font-semibold">{rate.type}</span>
                                <span>
                                    <svg width="20" height="20" fill="none"><path d="M4 15l5-3 4 2 4-10" stroke="#e3c267" strokeWidth="2" strokeLinecap="round" /></svg>
                                </span>
                            </div>
                            <div className="text-[#C2A669] text-[2rem] font-semibold font-serif">{rate.rate}</div>
                            <span className="text-sm text-[#857148] block mt-1 font-serif">per gram</span>
                            <span className="text-[0.98rem] text-[#c9b892] mt-1 font-serif opacity-80">Updated today</span>
                        </div>
                    ))}
                </div>

                {/* Platinum Section */}
                <h3 className="text-[1.22rem] font-serif font-normal mb-7 mt-2 text-[#222] flex items-center">
                    <span className="border-l-2 border-[#C2A669] mr-2 h-[22px]"></span>Platinum
                </h3>
                <div className="grid grid-cols-1 gap-6 mb-9">
                    {platinumRates.map((rate, idx) => (
                        <div
                            key={rate.type}
                            className="bg-white shadow-md rounded-2xl px-7 pt-7 pb-6 flex flex-col gap-2 border border-[#f2ecda]"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="bg-[#F6F3EC] border border-[#d8ccb1] text-[#a99e71] text-[0.97rem] px-3 py-1 rounded font-semibold">{rate.type}</span>
                                <span>
                                    <svg width="20" height="20" fill="none"><path d="M4 15l5-3 4 2 4-10" stroke="#e3c267" strokeWidth="2" strokeLinecap="round" /></svg>
                                </span>
                            </div>
                            <div className="text-[#C2A669] text-[2rem] font-semibold font-serif">{rate.rate}</div>
                            <span className="text-sm text-[#857148] block mt-1 font-serif">per gram</span>
                            <span className="text-[0.98rem] text-[#c9b892] mt-1 font-serif opacity-80">Updated today</span>
                        </div>
                    ))}
                </div>

                {/* About Pricing */}
                <div className="bg-[#f7f3ea] shadow rounded-2xl p-7 mt-8 mb-4 text-[#674B24] text-[1rem] font-serif border border-[#ecddbc] max-w-3xl mx-auto">
                    <div className="font-semibold mb-2 text-[1.05rem] font-serif">About Our Pricing</div>
                    <div className="text-[0.97rem] text-[#907d5a] leading-[1.7] opacity-90 font-serif">
                        Our prices are competitive and transparent, with no hidden charges. The rates shown include making charges and GST. For the most accurate pricing on specific items, please visit our store or contact us directly. Prices may vary based on design complexity and current market rates.
                    </div>
                </div>
            </div>
        </section>
    );
}
