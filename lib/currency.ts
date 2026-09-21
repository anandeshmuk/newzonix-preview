/**
 * Display-only currency localization for marketing pricing.
 *
 * IMPORTANT: NewZonix's canonical prices are INR (see pricingPlans in
 * lib/data.ts). The app's actual Razorpay checkout is INR-only today -
 * the plan/price catalog schema supports other currencies for the
 * future, but real multi-currency CHECKOUT is explicitly deferred
 * elsewhere (see apps/backend-core's PaymentService docstring: "the
 * only currency Razorpay is actually wired for real multi-currency
 * CHECKOUT" is INR). Everything in this file is an APPROXIMATE,
 * indicative conversion for a visitor browsing this marketing site - it
 * is never transmitted anywhere, never used for billing/KYC/tax/identity,
 * and never implies a guaranteed charge in that currency. The app always
 * settles in INR via Razorpay.
 *
 * Detection below reads only the browser's own reported language/region
 * (Intl/navigator.language) - never IP-based geolocation, never a
 * network lookup. It only ever changes which currency a price is shown
 * converted into.
 */

export type CurrencyCode = "INR" | "USD" | "GBP" | "EUR" | "AED";

export const SUPPORTED_CURRENCY_CODES: CurrencyCode[] = ["INR", "USD", "GBP", "EUR", "AED"];

export const CURRENCIES: Record<CurrencyCode, { symbol: string; label: string }> = {
  INR: { symbol: "₹", label: "Indian Rupee (INR)" },
  USD: { symbol: "$", label: "US Dollar (USD)" },
  GBP: { symbol: "£", label: "British Pound (GBP)" },
  EUR: { symbol: "€", label: "Euro (EUR)" },
  AED: { symbol: "AED", label: "UAE Dirham (AED)" },
};

/**
 * Approximate INR -> currency rates, for DISPLAY ONLY. Not live/real-time.
 * Source: set manually from published spot rates as of 2026-01, rounded.
 * There is no automated FX feed anywhere in this project - adding one
 * for a purely indicative marketing display was judged unnecessary
 * infrastructure (see task notes). Update this table by hand if rates
 * drift meaningfully; each entry is "1 INR = N <currency>".
 */
const INR_TO: Record<Exclude<CurrencyCode, "INR">, number> = {
  USD: 0.012,
  GBP: 0.0094,
  EUR: 0.011,
  AED: 0.044,
};

// Region code -> best-guess display currency. Only the common/likely
// countries for each currency are listed; anything unrecognized falls
// back to INR (the safe, canonical default).
const REGION_TO_CURRENCY: Record<string, CurrencyCode> = {
  IN: "INR",
  US: "USD",
  GB: "GBP",
  AE: "AED",
  // Eurozone - common member states, non-exhaustive.
  DE: "EUR",
  FR: "EUR",
  ES: "EUR",
  IT: "EUR",
  NL: "EUR",
  IE: "EUR",
  PT: "EUR",
  BE: "EUR",
  AT: "EUR",
  FI: "EUR",
  GR: "EUR",
};

/**
 * Best-guess display currency from the browser's own locale. Always
 * returns a SUPPORTED_CURRENCY_CODES member; falls back to "INR" for
 * server-side rendering, an unavailable Intl API, an unrecognized
 * region, or any unexpected error - detection must never break the page
 * or default to anything other than the canonical currency.
 */
export function detectLikelyCurrency(): CurrencyCode {
  if (typeof navigator === "undefined") return "INR";

  try {
    const locale =
      typeof Intl !== "undefined" && typeof Intl.NumberFormat === "function"
        ? Intl.NumberFormat().resolvedOptions().locale
        : navigator.language;

    const region = locale?.split("-")[1]?.toUpperCase();
    if (region && region in REGION_TO_CURRENCY) {
      return REGION_TO_CURRENCY[region];
    }
  } catch {
    // Fall through to the safe default below.
  }

  return "INR";
}

export function convertFromINR(amountINR: number, currency: CurrencyCode): number {
  if (currency === "INR") return amountINR;
  return amountINR * INR_TO[currency];
}

export function formatCurrency(amount: number, currency: CurrencyCode): string {
  try {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency,
      maximumFractionDigits: currency === "INR" ? 0 : 2,
    }).format(amount);
  } catch {
    const { symbol } = CURRENCIES[currency];
    return `${symbol}${amount.toFixed(currency === "INR" ? 0 : 2)}`;
  }
}
