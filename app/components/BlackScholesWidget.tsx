// app/components/BlackScholesWidget.tsx
"use client";

import { useState, useEffect } from "react";

export default function BlackScholesWidget() {
  // Inputs
  const [stockPrice, setStockPrice] = useState<number>(100);
  const [strikePrice, setStrikePrice] = useState<number>(95);
  const [volatility, setVolatility] = useState<number>(25); // input as whole % (e.g. 25 = 25%)
  const [riskFreeRate, setRiskFreeRate] = useState<number>(5.0); // input as whole % (e.g. 5 = 5%)
  
  // Date Handling (Default to 6 months out)
  const getFutureDateStr = (months: number) => {
    const d = new Date();
    d.setMonth(d.getMonth() + months);
    return d.toISOString().split("T")[0];
  };
  const [expiryDate, setExpiryDate] = useState<string>(getFutureDateStr(6));
  const [timeToMaturity, setTimeToMaturity] = useState<number>(0.5);

  // Computed Prices & Internal Calculation States
  const [callPrice, setCallPrice] = useState<number>(0);
  const [putPrice, setPutPrice] = useState<number>(0);
  const [validationError, setValidationError] = useState<string>("");

  // Cumulative Normal Distribution N(x) Approximation
  const cnd = (x: number): number => {
    const a1 = 0.319381530; const a2 = -0.356563782; const a3 = 1.781477937;
    const a4 = -1.821255978; const a5 = 1.330274429;
    const L = Math.abs(x);
    const K = 1.0 / (1.0 + 0.2316419 * L);
    let d = 1.0 - 1.0 / Math.sqrt(2 * Math.PI) * Math.exp(-L * L / 2) * (a1 * K + a2 * Math.pow(K, 2) + a3 * Math.pow(K, 3) + a4 * Math.pow(K, 4) + a5 * Math.pow(K, 5));
    return x < 0 ? 1.0 - d : d;
  };

  // 1. Hook to track calendar parameters and compute Day Count Fraction (T)
  useEffect(() => {
    const today = new Date();
    today.setHours(0,0,0,0);
    const target = new Date(expiryDate);
    target.setHours(0,0,0,0);
    
    const diffTime = target.getTime() - today.getTime();
    const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    const years = parseFloat((diffDays / 365).toFixed(4));
    setTimeToMaturity(years);
  }, [expiryDate]);

  // 2. Black-Scholes Model Evaluation Loop with Strict Validations
  useEffect(() => {
    if (stockPrice <= 0 || strikePrice <= 0 || volatility <= 0 || timeToMaturity <= 0) {
      setValidationError("Inputs must be positive operational integers.");
      return;
    }
    setValidationError("");

    const S = stockPrice;
    const K = strikePrice;
    const T = timeToMaturity;
    const sigma = volatility / 100;
    const r = riskFreeRate / 100;

    const d1 = (Math.log(S / K) + (r + (sigma * sigma) / 2) * T) / (sigma * Math.sqrt(T));
    const d2 = d1 - sigma * Math.sqrt(T);

    const call = S * cnd(d1) - K * Math.exp(-r * T) * cnd(d2);
    const put = K * Math.exp(-r * T) * cnd(-d2) - S * cnd(-d1);

    setCallPrice(isNaN(call) ? 0 : parseFloat(Math.max(0, call).toFixed(2)));
    setPutPrice(isNaN(put) ? 0 : parseFloat(Math.max(0, put).toFixed(2)));
  }, [stockPrice, strikePrice, volatility, riskFreeRate, timeToMaturity]);

  // 3. Dynamic Export Tooling: Compiles parameters into a client-side CSV file download
  const handleExportCSV = () => {
    const headers = ["Parameter", "Value Description", "Calculated Metric"];
    const rows = [
      ["Underlying Stock Price (S)", `$${stockPrice}`, ""],
      ["Exercise Strike Price (K)", `$${strikePrice}`, ""],
      ["Implied Asset Volatility (sigma)", `${volatility}%`, ""],
      ["Risk-Free Interest Rate (r)", `${riskFreeRate}%`, ""],
      ["Maturity Target Date", expiryDate, ""],
      ["Time Fraction (T in Years)", `${timeToMaturity} Yrs`, ""],
      ["Calculated European Call Value", "", `$${callPrice}`],
      ["Calculated European Put Value", "", `$${putPrice}`],
    ];

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `black_scholes_pricing_matrix.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        {/* Input Parameters Form (2/3 width) */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-900 bg-slate-950/20 p-6 space-y-4">
          <div className="flex justify-between items-center border-b border-slate-900 pb-3">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
              Numeric Parameter Console
            </h3>
            {validationError && (
              <span className="text-[11px] font-mono font-semibold text-red-400 bg-red-950/20 px-2 py-0.5 rounded border border-red-900/30">
                {validationError}
              </span>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Spot Stock Price */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400 block">Stock Spot Price ($S$)</label>
              <input type="number" value={stockPrice} min="1" onChange={(e) => setStockPrice(Math.max(0, parseFloat(e.target.value) || 0))} className="w-full bg-slate-900 text-sm border border-slate-800 rounded-xl px-3 py-2 text-white font-mono focus:border-blue-500 focus:outline-none" />
            </div>

            {/* Strike Target Price */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400 block">Strike Price ($K$)</label>
              <input type="number" value={strikePrice} min="1" onChange={(e) => setStrikePrice(Math.max(0, parseFloat(e.target.value) || 0))} className="w-full bg-slate-900 text-sm border border-slate-800 rounded-xl px-3 py-2 text-white font-mono focus:border-indigo-500 focus:outline-none" />
            </div>

            {/* Asset Volatility */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400 block">Asset Volatility ($\sigma$ %)</label>
              <input type="number" value={volatility} min="0.1" step="0.1" onChange={(e) => setVolatility(Math.max(0, parseFloat(e.target.value) || 0))} className="w-full bg-slate-900 text-sm border border-slate-800 rounded-xl px-3 py-2 text-white font-mono focus:border-amber-500 focus:outline-none" />
            </div>

            {/* Risk Free Yield Rate */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400 block">Risk-Free Rate ($r$ %)</label>
              <input type="number" value={riskFreeRate} min="0" step="0.1" onChange={(e) => setRiskFreeRate(parseFloat(e.target.value) || 0)} className="w-full bg-slate-900 text-sm border border-slate-800 rounded-xl px-3 py-2 text-white font-mono focus:border-purple-500 focus:outline-none" />
            </div>

            {/* Calendar Expiry Picker */}
            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-mono text-slate-400 block">Option Expiration Target Date</label>
              <input type="date" value={expiryDate} min={new Date().toISOString().split("T")[0]} onChange={(e) => setExpiryDate(e.target.value)} className="w-full bg-slate-900 text-sm border border-slate-800 rounded-xl px-3 py-2 text-white font-mono focus:border-emerald-500 focus:outline-none inverted-calendar-picker" />
              <span className="text-[10px] font-mono text-slate-500 block mt-1">Computed Time Fraction ($T$): {timeToMaturity} Years to execution date.</span>
            </div>
          </div>
        </div>

        {/* Evaluation Dashboard & Data Exporter (1/3 width) */}
        <div className="grid gap-4 h-full">
          <div className="rounded-2xl border border-slate-900 bg-slate-950/40 p-5 flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-slate-900 pb-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">European Call</h4>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-900/40 px-1.5 py-0.5 rounded">Call Asset</span>
            </div>
            <div className="text-4xl font-black text-white tracking-tight py-3">${callPrice}</div>
          </div>

          <div className="rounded-2xl border border-slate-900 bg-slate-950/40 p-5 flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-slate-900 pb-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">European Put</h4>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-950/30 border border-amber-900/40 px-1.5 py-0.5 rounded">Put Asset</span>
            </div>
            <div className="text-4xl font-black text-white tracking-tight py-3">${putPrice}</div>
          </div>

          {/* Action Button Element for Exporting */}
          <button 
            onClick={handleExportCSV}
            className="w-full text-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold uppercase tracking-wider py-3 shadow-md transition duration-200"
          >
            Export Pricing Matrix (.CSV)
          </button>
        </div>
      </div>
    </section>
  );
}
