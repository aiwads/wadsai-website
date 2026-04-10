'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
});

const faqs = [
  {
    q: 'Can the AI book appointments directly into my calendar?',
    a: 'Yes. Your AI connects directly to your calendar and books appointments in real time during the call. No back and forth, no manual entry. The slot gets filled and you get notified instantly.',
  },
  {
    q: 'Do I need to change my phone number?',
    a: 'No. Your existing number stays exactly as it is. We forward calls to your AI agent and your customers dial the same number they always have. They never know the difference.',
  },
  {
    q: 'What happens if it can\'t answer something?',
    a: 'Your AI is trained specifically on your business so it handles the vast majority of questions. If something falls outside what it knows, it collects the caller\'s name and number and flags it for you to follow up personally. No call ever just gets dropped.',
  },
  {
    q: 'Does the AI actually sound like a real person?',
    a: 'Yes. We use the latest conversational AI voice technology. It\'s natural, human-sounding, and responds dynamically to what callers say. Most callers don\'t realize they\'re speaking with an AI until they\'re told.',
  },
  {
    q: 'How fast can you get my AI live?',
    a: 'We can have your AI answering calls and messages within 1 week of your onboarding call. We handle the entire setup: scripting, training, integration, and testing. You don\'t need any technical knowledge.',
  },
  {
    q: 'What happens when a caller wants to speak to a real person?',
    a: 'You set the rules. The AI can warm-transfer to you or a team member, take a message for callback, or schedule a specific time. Whatever works best for your business.',
  },
  {
    q: 'What channels does the AI handle besides phone calls?',
    a: 'Your AI handles inbound and outbound across phone, SMS/text, website chat, email, WhatsApp, and social DMs. One AI, every channel, so no lead slips through regardless of how they reach out.',
  },
  {
    q: 'Is there a contract? Can I cancel?',
    a: 'No contracts. No lock-in. All plans are month-to-month. If it\'s not working for you, cancel anytime. Though in our experience, once the calls start getting answered, nobody wants to go back.',
  },
];

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div style={{
      borderBottom: '1px solid rgba(26,26,22,0.09)',
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: '16px',
          padding: '24px 0', background: 'none', border: 'none',
          cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-jakarta)', fontWeight: 700,
          fontSize: '1rem', color: '#1A1A16', lineHeight: 1.4,
        }}>
          {q}
        </span>
        <span style={{
          flexShrink: 0, width: '28px', height: '28px', borderRadius: '50%',
          background: 'rgba(26,26,22,0.07)', border: '1px solid rgba(26,26,22,0.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s ease',
        }}>
          {open
            ? <Minus size={13} color="#1A1A16" strokeWidth={2.5} />
            : <Plus size={13} color="#1A1A16" strokeWidth={2.5} />
          }
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '0.925rem',
              color: 'rgba(26,26,22,0.58)', lineHeight: 1.75,
              paddingBottom: '24px', margin: 0,
            }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section style={{ background: '#DEDAD3', padding: '100px 0' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            display: 'inline-block',
            padding: '6px 16px', borderRadius: '100px',
            background: 'rgba(26,26,22,0.07)', border: '1px solid rgba(26,26,22,0.15)',
            fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6A6A62',
            marginBottom: '20px',
          }}>
            FAQ
          </span>
          <h2 style={{
            fontFamily: 'var(--font-jakarta)', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#1A1A16', lineHeight: 1.1,
          }}>
            Common questions, answered.
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          {...fadeUp(0.1)}
          style={{
            maxWidth: '720px', margin: '0 auto',
            borderTop: '1px solid rgba(26,26,22,0.09)',
          }}
        >
          {faqs.map((faq, i) => (
            <Item
              key={i}
              q={faq.q}
              a={faq.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
