import type { Metadata } from 'next';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';

export const metadata: Metadata = {
  title: 'Book a Demo — Wads AI',
  description: 'Book a free 10-minute demo and see exactly how an AI voice agent would work for your real estate business.',
};

export default function Contact() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">See It Live in 10 Minutes</h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Book a free demo and we&apos;ll show you exactly how an AI receptionist would work for your business — using your real info.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Cal.com embed */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-zinc-800">
              <h2 className="text-white font-semibold text-lg">Book Your Free Demo</h2>
              <p className="text-zinc-400 text-sm mt-1">Pick a time that works for you. 10 minutes, no pressure.</p>
            </div>
            <iframe
              src="https://cal.com/wadsai/10min"
              width="100%"
              height="600"
              frameBorder="0"
              title="Book a Demo with Wads AI"
            />
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-8">
            {/* AI Voice Demo */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-white font-semibold text-lg mb-2">Talk to Our AI Agent</h2>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                Hear exactly what your clients would experience. Click the widget below and have a real conversation with our AI receptionist demo.
              </p>
              <ElevenLabsWidget />
            </div>

            {/* What to expect */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h2 className="text-white font-semibold text-lg mb-6">What to expect on the demo</h2>
              <div className="flex flex-col gap-4">
                {[
                  { step: '1', text: 'We show you a live demo using your business name and market' },
                  { step: '2', text: 'You hear exactly what your callers would experience' },
                  { step: '3', text: 'We walk through setup, pricing, and integration' },
                  { step: '4', text: 'No commitment — just a clear picture of what\'s possible' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-violet-900/50 border border-violet-700/40 flex items-center justify-center shrink-0">
                      <span className="text-violet-400 text-xs font-bold">{item.step}</span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-violet-950/20 border border-violet-800/30 rounded-2xl p-6">
              <div className="text-violet-400 font-semibold mb-2">30-Day Guarantee</div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                If your AI receptionist doesn&apos;t capture leads in the first 30 days, walk away. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
