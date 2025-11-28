import { NextResponse } from "next/server";

async function fetchYahoo(symbol: string) {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1m`;

    const res = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0" },
        cache: "no-store"
    });

    const data = await res.json();
    if (!data?.chart?.result) return null;

    return data.chart.result[0].meta.regularMarketPrice;
}

export async function GET() {
    try {
        const [goldUSD, silverUSD, platinumUSD, usdInr] = await Promise.all([
            fetchYahoo("GC=F"),  // Gold
            fetchYahoo("SI=F"),  // Silver
            fetchYahoo("PL=F"),  // Platinum
            fetchYahoo("INR=X"), // USD to INR
        ]);

        if (!goldUSD || !silverUSD || !platinumUSD || !usdInr) {
            return NextResponse.json(
                { error: "Failed to fetch metal data" },
                { status: 500 }
            );
        }

        const OUNCE_TO_GRAM = 31.1034768;

        // GOLD
        const gold24 = (goldUSD * usdInr) / OUNCE_TO_GRAM;
        const gold22 = gold24 * 0.916;
        const gold18 = gold24 * 0.75;

        // SILVER
        const silverPerGram = (silverUSD * usdInr) / OUNCE_TO_GRAM;
        const silver925 = silverPerGram * 0.925;

        // PLATINUM
        const platinumPerGram = (platinumUSD * usdInr) / OUNCE_TO_GRAM;
        const platinum95 = platinumPerGram * 0.95;

        return NextResponse.json({
            gold: {
                gram24: Math.round(gold24),
                gram22: Math.round(gold22),
                gram18: Math.round(gold18),
            },
            silver: {
                g999: Math.round(silverPerGram),
                g925: Math.round(silver925),
            },
            platinum: {
                g95: Math.round(platinum95),
            },

            // ❗ Rounded values (no decimals)
            gold_22k_per_10g: Math.round(gold22 * 10),
            silver_per_kg: Math.round(silverPerGram * 1000),
        });

    } catch (err: any) {
        return NextResponse.json(
            { error: err.message },
            { status: 500 }
        );
    }
}
