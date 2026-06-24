// app/components/BayesWidget.tsx
"use client";

import { useState, useEffect } from "react";

export default function BayesWidget() {
  // P(A) = Prior Probability of an event occurring (e.g., Email is Spam)
  const [priorA, setPriorA] = useState<number>(0.3);
  // P(B|A) = Likelihood of feature given event is True (e.g., Contains keyword "money" given it IS Spam)
  const [likelihoodBA, setLikelihoodBA] = useState<number>(0.9);
  // P(B|not A) = False Positive Rate (e.g., Contains keyword "money" given it is NOT Spam)
  const [likelihoodBNotA, setLikelihoodBNotA] = useState<number>(0.2);
  
  // P(A|B) = Posterior Probability to be computed dynamically via Bayes' Rule
  const [posterior, setPosterior] = useState<number>(0);

  useEffect(() => {
    // 1. Calculate P(not A)
    const priorNotA = 1 - priorA;
    // 2. Compute Marginal Probability P(B) using the Total Probability Theorem
    const marginalB = (likelihoodBA * priorA) + (likelihoodBNotA * priorNotA);
    
    // 3. Apply Bayes' Theorem formula: P(A|B) = [P(B|A) * P(A)] / P(B)
    if (marginalB === 0) {
      setPosterior(0);
    } else {
      const result = (likelihoodBA * priorA) / marginalB;
      setPosterior(parseFloat(result.toFixed(4)));
    }
  }, [priorA, likelihoodBA, likelihoodBNotA]);

  return (
    <section className="py-10 border-b border-slate-900/60 last:border-b-0">
      {/* Signature Section Header */}
      <div className="space-y-1 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Mathematical Simulator
        </h2>
        <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest">
          Interactive Inference Machine // Bayes' Theorem
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 items-start">
        {/* Left Side: Controls Sliders Container (2/3 width) */}
        <div className="lg:col-span-2 space-y-6 rounded-2xl border border-slate-900 bg-slate-950/20 p-6">
          <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider border-b border-slate-900 pb-3">
            Hyperparameter Input Nodes
          </h3>

          {/* Slider 1: Prior P(A) */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Prior Probability P(Event A)</span>
              <span className="text-blue-400 font-bold">{(priorA * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="0.99"
              step="0.01"
              value={priorA}
              onChange={(e) => setPriorA(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          {/* Slider 2: Likelihood P(B|A) */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">True Positive Likelihood P(Feature B | Event A)</span>
              <span className="text-emerald-400 font-bold">{(likelihoodBA * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="0.99"
              step="0.01"
              value={likelihoodBA}
              onChange={(e) => setLikelihoodBA(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          {/* Slider 3: False Positive P(B|Not A) */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">False Positive Likelihood P(Feature B | Not Event A)</span>
              <span className="text-red-400 font-bold">{(likelihoodBNotA * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="0.99"
              step="0.01"
              value={likelihoodBNotA}
              onChange={(e) => setLikelihoodBNotA(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-red-500"
            />
          </div>
        </div>

        {/* Right Side: Visual Output Computation Matrix (1/3 width) */}
        <div className="rounded-2xl border border-slate-900 bg-slate-950/40 p-6 flex flex-col justify-between h-full space-y-6">
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-900 pb-2">
              Posterior Output Matrix
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-mono">
              P(A|B) = [P(B|A) * P(A)] / P(B)
            </p>
          </div>

          <div className="text-center py-6">
            <span className="text-xs font-mono text-slate-500 block mb-1 uppercase tracking-wider">
              Computed Posterior P(A|B)
            </span>
            <div className="text-5xl sm:text-6xl font-black text-blue-500 tracking-tighter">
              {(posterior * 100).toFixed(2)}%
            </div>
          </div>

          <div className="rounded-xl bg-slate-900/50 p-3 text-[11px] font-mono text-slate-400 border border-slate-800/40 text-center">
            Probabilistic Inference Updated Live
          </div>
        </div>
      </div>
    </section>
  );
}
