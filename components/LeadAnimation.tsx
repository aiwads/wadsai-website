'use client';
import { useEffect, useState } from 'react';

const steps = [
  { id: 1, icon: '📞', label: 'INCOMING CALL', sub: '9:47 PM — Phoenix, AZ', color: 'text-yellow-400', border: 'border-yellow-900/50', bg: 'bg-yellow-950/20' },
  { id: 2, icon: '🤖', label: 'AI ANSWERED', sub: 'Qualifying lead now...', color: 'text-violet-400', border: 'border-violet-900/50', bg: 'bg-violet-950/20' },
  { id: 3, icon: '✓', label: 'LEAD CAPTURED', sub: 'Sarah M. — Buyer, 3BR, $450K', color: 'text-green-400', border: 'border-green-900/50', bg: 'bg-green-950/20' },
  { id: 4, icon: '⚡', label: 'SENT TO YOU', sub: 'Instant summary delivered', color: 'text-blue-400', border: 'border-blue-900/50', bg: 'bg-blue-950/20' },
];

export default function LeadAnimation() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % steps.length;
        if (next === 0) {
          setTimeout(() => setVisible([]), 300);
        }
        return next;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!visible.includes(active)) {
      setVisible((prev) => [...prev, active]);
    }
  }, [active, visible]);

  return (
    <div className="relative flex flex-col items-center justify-center h-full min-h-[500px]">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-violet-700/10 blur-3xl" />
      </div>

      {/* Phone frame */}
      <div className="relative w-72 border border-zinc-800 bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl shadow-violet-950/30">
        {/* Phone top bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
          <span className="text-xs text-zinc-500 tracking-widest uppercase">Wads AI</span>
          <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
        </div>

        {/* Steps */}
        <div className="px-4 py-5 flex flex-col gap-3 min-h-[280px]">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className={`flex items-start gap-3 border rounded-xl px-4 py-3 transition-all duration-500 ${step.border} ${step.bg} ${
                visible.includes(i)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="text-lg leading-none mt-0.5">{step.icon}</span>
              <div>
                <div className={`text-xs font-bold tracking-widest uppercase ${step.color}`}>{step.label}</div>
                <div className="text-zinc-500 text-xs mt-0.5">{step.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800 px-5 py-3 flex items-center justify-between">
          <span className="text-zinc-600 text-xs">While you were showing a home</span>
        </div>
      </div>

      {/* Floating stat */}
      <div className="mt-6 border border-zinc-800 bg-zinc-950 rounded-xl px-6 py-4 text-center w-72">
        <div className="text-3xl font-black text-violet-400">$15,000</div>
        <div className="text-zinc-600 text-xs tracking-widest uppercase mt-1">Commission Protected</div>
      </div>
    </div>
  );
}
