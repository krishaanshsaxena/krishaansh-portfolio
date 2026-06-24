// app/components/BlackScholesWidget.tsx
"use client";

import { useState, useEffect } from "react";

export default function BlackScholesWidget() {
  // Underlying Stock Price (S)
  const [stockPrice, setStockPrice] = useState<number>(100);
  // Strike Price (K)
  const [strikePrice, setStrikePrice] = useState<number>(95);
  // Time to Maturity in Years (T)
  const [timeToMaturity, setTimeToMaturity] = useState<number>(0.5); // 6 months
  // Risk-Free Interest Rate (r)
  const [riskFreeRate, setRiskFreeRate] = useState<number>(0.05); // 5%
  // Volatility / Sigma (σ)
  const [volatility, setVolatility] = useState<number>(0.25); // 25%

  const [callPrice, setCallPrice] = useState<number>(0);
  const [putPrice, setPutPrice] = useState<number>(0);

  // High-accuracy error function approximation for Cumulative Normal Distribution N(x)
  const cnd = (x: number): number => {
    const a1 = 0.319381530;
    const a2 = -0.356563782;
    const a3 = 1.781477937;
    const a4 = -1.821255978;
    const a5 = 1.330274429;
    const L = Math.abs(x);
    const K = 1.0 / (1.0 + 0.2316419 * L);
    let d = 1.0 - 1.0 / Math.sqrt(2 * Math.PI) * Math.exp(-L * L / 2) * (a1 * K + a2 * Math.pow(K, 2) + a3 * Math.pow(K, 3) + a4 * Math.pow(K, 4) + a5 * Math.pow(K, 5));
    
    if (x < 0) {
      return 1.0 - d;
    }
    return d;
  };

  useEffect(() => {
    const S = stockPrice;
    const K = strikePrice;
    const T = timeToMaturity;
    const r = riskFreeRate;
    const v = volatility;

    if (T <= 0 || v <= 0) return;

    // Calculate d1 and d2 mathematical models
    const d1 = (Math.log(S / K) + (r + (v * v) / 2) * T) / (v * Math.sqrt(T));
    const d2 = d1 - v * Math.sqrt(T);

    // Compute Call and Put Prices using the standard Black-Scholes equations
    const call = S * cnd(d1) - K * Math.exp(-r * T) * cnd(d2);
    const put = K * Math.exp(-r * T) * cnd(-d2) - S * cnd(-d1);

    setCallPrice(parseFloat(call.toFixed(2)));
    setPutPrice(parseFloat(put.toFixed(2)));
  }, [stockPrice, strikePrice, timeToMaturity, riskFreeRate, volatility]);

  return (
    <section className="py-10 border-b border-slate-900/60 last:border-b-0">
      <div className="space-y-1 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Quantitative Derivatives Engine
        </h2>
        <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest">
          Computational Finance // Black-Scholes Model
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 items-start">
        {/* Controls Slider Array (2/3 width) */}
        <div className="lg:col-span-2 space-y-5 rounded-2xl border border-slate-900 bg-slate-950/20 p-6">
          <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider border-b border-slate-900 pb-3">
            Market & Derivative Parameters
          </h3>

          {/* Stock Price Slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Underlying Stock Price (S)</span>
              <span className="text-blue-400 font-bold">${stockPrice}</span>
            </div>
            <input type="range" min="10" max="200" step="1" value={stockPrice} onChange={(e) => setStockPrice(parseInt(e.target.value))} className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-blue-500" />
          </div>

          {/* Strike Price Slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Strike Price / Exercise Target (K)</span>
              <span className="text-indigo-400 font-bold">${strikePrice}</span>
            </div>
            <input type="range" min="10" max="200" step="1" value={strikePrice} onChange={(e) => setStrikePrice(parseInt(e.target.value))} className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
          </div>

          {/* Time to Maturity Slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Time to Expiry (T in Years)</span>
              <span className="text-emerald-400 font-bold">{(timeToMaturity * 12).toFixed(1)} Months ({timeToMaturity} Yr)</span>
            </div>
            <input type="range" min="0.1" max="3" step="0.1" value={timeToMaturity} onChange={(e) => setTimeToMaturity(parseFloat(e.target.value))} className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
          </div>

          {/* Volatility Slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Implied Asset Volatility (σ)</span>
              <span className="text-amber-400 font-bold">{(volatility * 100).toFixed(0)}%</span>
            </div>
            <input type="range" min="0.05" max="0.90" step="0.01" value={volatility} onChange={(e) => setVolatility(parseFloat(e.target.value))} className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-500" />
          </div>

          {/* Risk-Free Interest Rate Slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Risk-Free Rate of Interest (r)</span>
              <span className="text-purple-400 font-bold">{(riskFreeRate * 100).toFixed(1)}%</span>
            </div>
            <input type="range" min="0.01" max="0.15" step="0.005" value={riskFreeRate} onChange={(e) => setRiskFreeRate(parseFloat(e.target.value))} className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-purple-500" />
          </div>
        </div>

        {/* Evaluation Output Matrices (1/3 width) */}
        <div className="grid gap-4 h-full">
          {/* Call Output Box */}
          <div className="rounded-2xl border border-slate-900 bg-slate-950/40 p-5 flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-slate-900 pb-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">European Call Value</h4>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-900/40 px-1.5 py-0.5 rounded">Long Call</span>
            </div>
            <div className="text-4xl font-black text-white tracking-tight py-4">${callPrice}</div>
            <p className="text-[10px] font-mono text-slate-500 leading-none">Right to buy asset at specified exercise target.</p>
          </div>

          {/* Put Output Box */}
          <div className="rounded-2xl border border-slate-900 bg-slate-950/40 p-5 flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-slate-900 pb-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">European Put Value</h4>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-950/30 border border-amber-900/40 px-1.5 py-0.5 rounded">Long Put</span>
            </div>
            <div className="text-4xl font-black text-white tracking-tight py-4">${putPrice}</div>
            <p className="text-[10px] font-mono text-slate-500 leading-none">Right to sell asset at specified exercise target.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
