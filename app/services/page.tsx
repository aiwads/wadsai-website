import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Agent Services & Pricing — Wads AI',
  description: 'Custom AI voice agents for real estate agents. AI Receptionist, Reactivation Agent, Google Review Agent, and Text-Based Agent. Transparent pricing, no contracts.',
};

const services = [
  {
    name: 'AI Receptionist',
    tagline: 'Answer every call. Capture every lead.',
    description: 'A custom-built AI voice receptionist that answers calls 24/7, qualifies buyers and sellers in English and Spanish, captures contact info, and sends you instant lead summaries with name, number, and property interest.',
    features: [
      'Answers calls 24/7 — nights, weekends, showings',
      'Qualifies leads in English and Spanish',
      'Instant lead summaries sent to your phone',
      'Integrates with your CRM',
      'Custom script built around your business',
      'Full call recordings available',
    ],
    setup: '$1,500–$3,000',
    monthly: '$297/mo',
    highlight: true,
  },
  {
    name: 'AI Reactivation Agent',
    tagline: 'Turn your cold database into warm conversations.',
    description: 'An AI-powered outbound calling agent that re-engages dead leads and pitches past clients on repeat services. Turns a list of cold contacts into booked callbacks for your team.',
    features: [
      'Custom outbound script for your business',
      'Lead list integration',
      'Campaign execution and reporting',
      'Discounted repeat campaigns',
      'Ideal for past client re-engagement',
    ],
    setup: null,
    monthly: '$1,500–$3,000 per campaign',
    highlight: false,
  },
  {
    name: 'Google Review Agent',
    tagline: 'More 5-star reviews. Fewer public complaints.',
    description: 'AI-powered reputation management that follows up after calls or transactions, filters sentiment, routes happy clients to leave a Google review, and flags unhappy ones for personal follow-up before they go public.',
    features: [
      'Automatic post-transaction follow-up',
      'Sentiment filtering',
      'Routes happy clients to Google review',
      'Flags unhappy clients privately',
      'Protects and grows your online reputation',
    ],
    setup: '$750–$1,500',
    monthly: '$147/mo',
    highlight: false,
  },
  {
    name: 'Text-Based AI Agent',
    tagline: 'Never leave a text unanswered.',
    description: 'An AI-powered SMS agent that handles inbound messages, qualifies leads, and responds instantly on your behalf. Keeps leads warm while you focus on closing.',
    features: [
      'Instant SMS response 24/7',
      'Qualifies leads via text conversation',
      'Custom responses for your business',
      'Lead capture and notification',
      'Works alongside your AI Receptionist',
    ],
    setup: '$1,000–$2,000',
    monthly: '$197/mo',
    highlight: false,
  },
];

export default function Services() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Agents Built for Your Business</h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Every agent is custom-built. No off-the-shelf bots. Transparent pricing, no contracts.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-8">
          {services.map((s) => (
            <div
              key={s.name}
              className={`rounded-2xl border p-8 md:p-10 ${
                s.highlight
                  ? 'border-violet-700/60 bg-violet-950/20'
                  : 'border-zinc-800 bg-zinc-900/30'
              }`}
            >
              {s.highlight && (
                <div className="inline-block text-xs font-semibold text-violet-300 bg-violet-900/50 border border-violet-700/40 rounded-full px-3 py-1 mb-4">
                  Most Popular
                </div>
              )}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">{s.name}</h2>
                  <p className="text-violet-400 text-sm mt-1">{s.tagline}</p>
                </div>
                <div className="text-right shrink-0">
                  {s.setup && <div className="text-zinc-400 text-sm">Setup: {s.setup}</div>}
                  <div className="text-white font-bold text-xl">{s.monthly}</div>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-6">{s.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-zinc-300 text-sm">
                    <span className="text-violet-400 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-violet-950/40 to-zinc-900/40 border border-violet-800/30 rounded-3xl p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Not sure which agent is right for you?</h2>
          <p className="text-zinc-400 mb-8">Book a free 10-minute demo and we&apos;ll show you exactly how it would work for your business.</p>
          <Link
            href="/contact"
            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-10 py-4 rounded-xl transition-colors inline-block"
          >
            Book a Free Demo
          </Link>
          <p className="text-zinc-500 text-sm mt-4">No contracts. Cancel anytime.</p>
        </div>
      </div>
    </div>
  );
}
