"use client";

import { useEffect, useState } from "react";

export default function RatesGrid() {
    const [rates, setRates] = useState<any>(null);

    useEffect(() => {
        async function loadRates() {
            try {
                const res = await fetch("/api/metal-routes", { cache: "no-store" });
                const data = await res.json();
                setRates(data);
            } catch (e) {
                console.log("Rate fetch error:", e);
            }
        }

        loadRates();
        const interval = setInterval(loadRates, 300000);
        return () => clearInterval(interval);
    }, []);

    const goldRates = rates ? [
        { carat: '24K', rate: `₹${rates.gold.gram24}` },
        { carat: '22K', rate: `₹${rates.gold.gram22}` },
        { carat: '18K', rate: `₹${rates.gold.gram18}` },
    ] : [];

    const silverRates = rates ? [
        { type: '99.9%', rate: `₹${rates.silver.g999}` },
        { type: '92.5%', rate: `₹${rates.silver.g925}` },
    ] : [];

    const platinumRates = rates ? [
        { type: '95%', rate: `₹${rates.platinum.g95}` },
    ] : [];

    return (
        <section className="bg-[#F6F3EC] px-4 py-8">

            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif text-center text-[2rem] md:text-[2.4rem] font-normal mb-1 mt-4 text-[#222]">
                    Today's Metal Rates
                </h2>
                <p className="text-center text-[1rem] text-[#6b6552] mb-7 font-serif opacity-75">
                    Live rates for gold, silver, and platinum - Updated regularly
                </p>

                {/* GOLD */}
                <h3 className="text-[1.22rem] font-serif font-normal mb-7 mt-5 text-[#222] flex items-center">
                    <span className="border-l-2 border-[#C2A669] mr-2 h-[22px]"></span>Gold
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-9">
                    {rates ? goldRates.map(rate => (
                        <div
                            key={rate.carat}
                            className="bg-white shadow-md rounded-2xl px-7 pt-7 pb-6 flex flex-col gap-2 border border-[#f2ecda]"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="bg-[#F6F3EC] border border-[#d8ccb1] text-[#a99e71] text-[0.97rem] px-3 py-1 rounded font-semibold">{rate.carat}</span>
                            </div>
                            <div className="text-[#C2A669] text-[2rem] font-semibold font-serif">
                                {rate.rate}
                            </div>
                            <span className="text-sm text-[#857148] block mt-1 font-serif">per gram</span>
                        </div>
                    )) : "Loading..."}
                </div>

                {/* SILVER */}
                <h3 className="text-[1.22rem] font-serif font-normal mb-7 mt-2 text-[#222] flex items-center">
                    <span className="border-l-2 border-[#C2A669] mr-2 h-[22px]"></span>Silver
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-9">
                    {rates ? silverRates.map(rate => (
                        <div
                            key={rate.type}
                            className="bg-white shadow-md rounded-2xl px-7 pt-7 pb-6 flex flex-col gap-2 border border-[#f2ecda]"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="bg-[#F6F3EC] border border-[#d8ccb1] text-[#a99e71] text-[0.97rem] px-3 py-1 rounded font-semibold">{rate.type}</span>
                            </div>
                            <div className="text-[#C2A669] text-[2rem] font-semibold font-serif">{rate.rate}</div>
                            <span className="text-sm text-[#857148] block mt-1 font-serif">per gram</span>
                        </div>
                    )) : "Loading..."}
                </div>

                {/* PLATINUM */}
                <h3 className="text-[1.22rem] font-serif font-normal mb-7 mt-2 text-[#222] flex items-center">
                    <span className="border-l-2 border-[#C2A669] mr-2 h-[22px]"></span>Platinum
                </h3>

                <div className="grid grid-cols-1 gap-6 mb-9">
                    {rates ? platinumRates.map(rate => (
                        <div
                            key={rate.type}
                            className="bg-white shadow-md rounded-2xl px-7 pt-7 pb-6 flex flex-col gap-2 border border-[#f2ecda]"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="bg-[#F6F3EC] border border-[#d8ccb1] text-[#a99e71] text-[0.97rem] px-3 py-1 rounded font-semibold">{rate.type}</span>
                            </div>
                            <div className="text-[#C2A669] text-[2rem] font-semibold font-serif">{rate.rate}</div>
                            <span className="text-sm text-[#857148] block mt-1 font-serif">per gram</span>
                        </div>
                    )) : "Loading..."}
                </div>
            </div>
        </section>
    );
}
