// app/components/BollingerWidget.tsx
"use client";

import { useState, useEffect } from "react";

export default function BollingerWidget() {
  // 1. Hydration Safety Buffer: Prevents server/client pseudo-random number mismatches
  const [prices, setPrices] = useState<number[]>([]);
  const [windowSize] = useState<number>(5); 
  const [multiplier, setMultiplier] = useState<number>(2.0);

  // 2. Generates simulated time-series numbers only safely after mounting on browser client
  useEffect(() => {
    const generatedPrices = Array.from({ length: 30 }, (_, idx) => 
      100 + Math.sin(idx / 5) * 10 + Math.random() * 5
    );
    setPrices(generatedPrices);
  }, []);

  // Core Quantitative Mathematical Function Loops
  const calculateBands = () => {
    return prices.map((price, idx) => {
      if (idx < windowSize - 1) {
        return { price, sma: price, upper: price, lower: price };
      }
      
      const slice = prices.slice(idx - windowSize + 1, idx + 1);
      const sma = slice.reduce((sum, p) => sum + p, 0) / windowSize;
      
      const variance = slice.reduce((sum, p) => sum + Math.pow(p - sma, 2), 0) / windowSize;
      const sigma = Math.sqrt(variance);
      
      return {
        price,
        sma: parseFloat(sma.toFixed(2)),
        upper: parseFloat((sma + multiplier * sigma).toFixed(2)),
        lower: parseFloat((sma - multiplier * sigma).toFixed(2)),
      };
    });
  };

  const dataPoints = calculateBands();
  
  // 3. SSR Safe Boundaries: Standardises default geometry dimensions before array loading
  const minVal = dataPoints.length ? Math.min(...dataPoints.map(d => d.lower)) - 2 : 80;
  const maxVal = dataPoints.length ? Math.max(...dataPoints.map(d => d.upper)) + 2 : 120;
  const range = maxVal - minVal;
  
  const mapY = (val: number) => {
    return 200 - ((val - minVal) / range) * 160; 
  };

  return (
    // Replaced hardcoded text/borders with native theme tokens
    <section className="py-10 border-b border-slate-200 dark:border-slate-900 last:border-b-0">
      <div className="space-y-1 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Time-Series Analytics
        </h2>
        <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest">
          Volatility Mapping Matrix // Bollinger Bands
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 items-start">
        {/* Isolated card wrappers using standard theme background vectors */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-900 bg-slate-50 dark:bg-slate-950/20 p-4 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-900 pb-2">
            <span className="text-xs font-mono text-slate-400">Live Mathematical SVG Canvas</span>
            <div className="flex gap-4 text-[10px] font-mono">
              <span className="text-blue-500">● Price</span>
              <span className="text-slate-400 dark:text-slate-500">── SMA</span>
              <span className="text-purple-500/60">── Envelopes</span>
            </div>
          </div>

          <div className="relative w-full h-56 bg-white dark:bg-slate-950/80 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-900">
            <svg viewBox="0 0 400 200" className="w-full h-full p-2 overflow-visible">
              {dataPoints.length > 0 && (
                <>
                  <polygon
                    points={dataPoints.map((d, i) => `${(i / (dataPoints.length - 1)) * 400},${mapY(d.upper)}`).join(" ") + " " + 
                            dataPoints.map((d, i) => `${((dataPoints.length - 1 - i) / (dataPoints.length - 1)) * 400},${mapY(dataPoints[dataPoints.length - 1 - i].lower)}`).join(" ")}
                    className="fill-purple-500/5 stroke-none"
                  />
                  <polyline points={dataPoints.map((d, i) => `${(i / (dataPoints.length - 1)) * 400},${mapY(d.lower)}`).join(" ")} className="stroke-purple-500/40 fill-none stroke-[1.5]" strokeDasharray="3,3" />
                  <polyline points={dataPoints.map((d, i) => `${(i / (dataPoints.length - 1)) * 400},${mapY(d.upper)}`).join(" ")} className="stroke-purple-500/40 fill-none stroke-[1.5]" strokeDasharray="3,3" />
                  <polyline points={dataPoints.map((d, i) => `${(i / (dataPoints.length - 1)) * 400},${mapY(d.sma)}`).join(" ")} className="stroke-slate-300 dark:stroke-slate-700 fill-none stroke-[1.5]" />
                  
                  {dataPoints.map((d, i) => (
                    <g key={i}>
                      <circle cx={(i / (dataPoints.length - 1)) * 400} cy={mapY(d.price)} r="3" className="fill-blue-500 hover:fill-blue-400 transition cursor-pointer" />
                    </g>
                  ))}
                </>
              )}
            </svg>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-900 bg-slate-50 dark:bg-slate-950/40 p-6 space-y-6 h-full flex flex-col justify-between">
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest border-b border-slate-200 dark:border-slate-900 pb-2">
              Sigma Envelope Standard
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed font-mono">Upper/Lower = SMA ± (K × σ)</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-500 dark:text-slate-400">Standard Deviation Multiplier ($K$)</span>
              <span className="text-purple-500 dark:text-purple-400 font-bold">{multiplier.toFixed(1)}σ</span>
            </div>
            <input
              type="range" min="1.0" max="3.0" step="0.1" value={multiplier}
              onChange={(e) => setMultiplier(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-200 dark:bg-slate-900 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="rounded-xl bg-white dark:bg-slate-900/50 p-3 text-[11px] font-mono text-slate-400 border border-slate-200 dark:border-slate-800/40 text-center">
            Expanding metrics adjusts volatility bounds dynamically.
          </div>
        </div>
      </div>
    </section>
  );
}
