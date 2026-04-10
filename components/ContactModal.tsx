'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

/* ── Global open function ── */
type Listener = () => void;
const listeners: Listener[] = [];

export function openContactModal() {
  listeners.forEach((fn) => fn());
}

/* ── Modal ── */
export default function ContactModal() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [business, setBusiness] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const open = () => setVisible(true);
    listeners.push(open);
    return () => {
      const idx = listeners.indexOf(open);
      if (idx !== -1) listeners.splice(idx, 1);
    };
  }, []);

  function close() {
    setVisible(false);
    setTimeout(() => {
      setSubmitted(false);
      setName(''); setPhone(''); setBusiness(''); setMessage('');
    }, 300);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, business, message }),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (!visible) return null;

  return (
    <div
      onClick={close}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(26,26,22,0.55)',
        backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#E4E4DE',
          borderRadius: '20px',
          border: '1px solid rgba(26,26,22,0.10)',
          boxShadow: '0 24px 80px rgba(26,26,22,0.22)',
          width: '100%', maxWidth: '480px',
          padding: '40px',
          position: 'relative',
        }}
      >
        {/* Close */}
        <button
          onClick={close}
          style={{
            position: 'absolute', top: '16px', right: '16px',
            background: 'rgba(26,26,22,0.07)', border: '1px solid rgba(26,26,22,0.12)',
            borderRadius: '50%', width: '32px', height: '32px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={14} color="#1A1A16" strokeWidth={2.5} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{ fontSize: '2rem', marginBottom: '16px' }}>✓</div>
            <h2 style={{
              fontFamily: 'var(--font-jakarta)', fontWeight: 800,
              fontSize: '1.4rem', color: '#1A1A16', marginBottom: '10px',
            }}>
              We'll be in touch.
            </h2>
            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '0.9rem',
              color: 'rgba(26,26,22,0.55)', lineHeight: 1.65,
            }}>
              Thanks for reaching out. Expect a call or text from us shortly.
            </p>
          </div>
        ) : (
          <>
            <h2 style={{
              fontFamily: 'var(--font-jakarta)', fontWeight: 800,
              fontSize: '1.5rem', color: '#1A1A16',
              marginBottom: '6px',
            }}>
              Get in touch
            </h2>
            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '0.875rem',
              color: 'rgba(26,26,22,0.50)', lineHeight: 1.6,
              marginBottom: '28px',
            }}>
              Tell us about your business and we'll reach out within one business day.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'Your Name', value: name, onChange: setName, placeholder: 'Jane Smith', type: 'text', required: true },
                { label: 'Phone Number', value: phone, onChange: setPhone, placeholder: '(555) 000-0000', type: 'tel', required: true },
                { label: 'Business Type', value: business, onChange: setBusiness, placeholder: 'e.g. HVAC, Real Estate, Roofing…', type: 'text', required: false },
              ].map(({ label, value, onChange, placeholder, type, required }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{
                    fontFamily: 'var(--font-inter)', fontSize: '0.78rem', fontWeight: 600,
                    color: 'rgba(26,26,22,0.55)', letterSpacing: '0.04em',
                  }}>
                    {label}{required && <span style={{ color: '#1A1A16' }}> *</span>}
                  </label>
                  <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    required={required}
                    style={{
                      fontFamily: 'var(--font-inter)', fontSize: '0.9rem',
                      color: '#1A1A16', background: 'rgba(255,255,255,0.70)',
                      border: '1px solid rgba(26,26,22,0.14)',
                      borderRadius: '10px', padding: '11px 14px',
                      outline: 'none',
                    }}
                  />
                </div>
              ))}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{
                  fontFamily: 'var(--font-inter)', fontSize: '0.78rem', fontWeight: 600,
                  color: 'rgba(26,26,22,0.55)', letterSpacing: '0.04em',
                }}>
                  What do you need help with?
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us a bit about your situation…"
                  rows={3}
                  style={{
                    fontFamily: 'var(--font-inter)', fontSize: '0.9rem',
                    color: '#1A1A16', background: 'rgba(255,255,255,0.70)',
                    border: '1px solid rgba(26,26,22,0.14)',
                    borderRadius: '10px', padding: '11px 14px',
                    outline: 'none', resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                style={{
                  marginTop: '6px',
                  background: '#1A1A16', color: '#E4E4DE',
                  fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '0.9rem',
                  padding: '13px 24px', borderRadius: '100px',
                  border: 'none', cursor: submitting ? 'not-allowed' : 'pointer',
                  opacity: submitting ? 0.6 : 1,
                  transition: 'opacity 0.2s ease',
                  boxShadow: '0 4px 20px rgba(26,26,22,0.18)',
                }}
              >
                {submitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
