'use client';

const items = [
  '📞 AI ANSWERED · 9:47PM · PHOENIX AZ',
  '✓ LEAD CAPTURED · SARAH M. · BUYER · 3BR · $450K',
  '⚡ SENT TO AGENT · INSTANTLY',
  '📞 AI ANSWERED · 11:22PM · SCOTTSDALE AZ',
  '✓ LEAD CAPTURED · JAMES R. · SELLER · 4BR',
  '⚡ COMMISSION PROTECTED · $18,000',
  '📞 AI ANSWERED · 7:14PM · TEMPE AZ',
  '✓ LEAD CAPTURED · MARIA L. · BUYER · SPANISH',
  '⚡ SENT TO AGENT · INSTANTLY',
  '📞 AI ANSWERED · 6:58PM · MESA AZ',
  '✓ LEAD CAPTURED · DAVID K. · BUYER · 2BR · $320K',
  '⚡ COMMISSION PROTECTED · $12,000',
];

export default function Ticker() {
  return (
    <div className="overflow-hidden border-y border-zinc-900 py-4 bg-black relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex gap-12 animate-ticker whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-xs tracking-[0.2em] text-zinc-500 uppercase shrink-0">
            {item}
            <span className="text-zinc-800 mx-6">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
