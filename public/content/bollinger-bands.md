---
title: "Bollinger Bands"
date: "September 2026"
summary: "Using statistical volatility indicators to map financial charts."
---

### Volatility Modeling in Financial Time-Series

Bollinger Bands are a highly useful technical analysis tool used to map an asset's price volatility and identify potential overbought or oversold market conditions. Instead of relying on static support and resistance lines, this model adapts dynamically to changing market regimes.

#### The Statistical Framework

The indicator creates three structural bands mapped over a rolling time-series window:
1. **Middle Band**: A standard 20-period Simple Moving Average (SMA) of the asset's price.
2. **Upper Band**: The Middle Band plus two standard deviations ($+2\sigma$) calculated over the same 20-period window.
3. **Lower Band**: The Middle Band minus two standard deviations ($-2\sigma$) calculated over the same 20-period window.

#### Quantitative Interpretation

Because the bands expand and contract based on standard deviation, they provide a live, visual measurement of statistical variance:
* **The Squeeze**: Low volatility causes the bands to contract tightly, often signaling a massive breakout accumulation phase.
* **The Expansion**: High volatility spreads the bands wide apart, confirming a strong, highly directional momentum trend.
