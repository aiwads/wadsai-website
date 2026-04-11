'use client';
import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { RetellWebClient } from 'retell-client-js-sdk';

const MOBILE_TEL = 'tel:+13103612756';

/* ── Module-level singleton so all buttons stay in sync ── */
type CallState = 'idle' | 'connecting' | 'active';
let globalState: CallState = 'idle';
let retellClient: RetellWebClient | null = null;
const listeners = new Set<(s: CallState) => void>();

function setGlobal(s: CallState) {
  globalState = s;
  listeners.forEach(fn => fn(s));
}

export function subscribe(fn: (s: CallState) => void): () => void {
  fn(globalState);
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/* ── Mobile detection ── */
export function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  // ontouchstart is the most reliable cross-browser touch signal
  if ('ontouchstart' in window) return true;
  if (window.matchMedia('(pointer: coarse)').matches) return true;
  if (window.innerWidth < 768) return true;
  return false;
}

/* ── Token pre-fetch cache ── */
// Pre-fetching the token lets startCall() be invoked synchronously within
// the click gesture, satisfying Safari's user-gesture requirement.
let cachedToken: string | null = null;
let prefetchPromise: Promise<void> | null = null;

export function prefetchToken(): void {
  if (cachedToken || prefetchPromise) return;
  prefetchPromise = fetch('/api/retell', { method: 'POST' })
    .then(r => r.json())
    .then(({ accessToken }) => { if (accessToken) cachedToken = accessToken; })
    .catch(() => { /* ignore — will fall back to inline fetch */ })
    .finally(() => { prefetchPromise = null; });
}

/* ── Call lifecycle ── */
export async function startWebCall() {
  if (globalState !== 'idle') return;
  setGlobal('connecting');

  retellClient = new RetellWebClient();
  retellClient.on('call_ended', () => { retellClient = null; setGlobal('idle'); });
  retellClient.on('error',      () => { retellClient = null; setGlobal('idle'); });

  const token = cachedToken;
  cachedToken = null;

  if (token) {
    // Token already available — startCall() invoked synchronously within
    // the user gesture, no await before it. Safari compliant.
    retellClient.startCall({ accessToken: token })
      .then(() => setGlobal('active'))
      .catch(() => { retellClient = null; setGlobal('idle'); });
    return;
  }

  // Fallback: fetch token inline (may hit Safari gesture-chain restriction)
  try {
    const res = await fetch('/api/retell', { method: 'POST' });
    const { accessToken, error } = await res.json();
    if (!accessToken) throw new Error(error ?? 'No access token');
    await retellClient.startCall({ accessToken });
    setGlobal('active');
  } catch {
    retellClient = null;
    setGlobal('idle');
  }
}

export function stopWebCall() {
  retellClient?.stopCall();
}

/* ── Component ── */
interface CallButtonProps {
  defaultText: string;
  phoneSize?: number;
  showArrow?: boolean;
  idleStyle: React.CSSProperties;
  className?: string;
}

export default function CallButton({
  defaultText,
  phoneSize = 15,
  showArrow = false,
  idleStyle,
  className,
}: CallButtonProps) {
  const [callState, setCallState] = useState<CallState>(globalState);

  useEffect(() => {
    listeners.add(setCallState);
    return () => { listeners.delete(setCallState); };
  }, []);

  const label =
    callState === 'connecting' ? 'Connecting...' :
    callState === 'active'     ? 'End Call' :
    defaultText;

  const activeStyle: React.CSSProperties = {
    background: '#DC2626',
    color: '#ffffff',
    border: 'none',
    boxShadow: '0 4px 20px rgba(220,38,38,0.35)',
  };

  const baseStyle: React.CSSProperties = {
    ...idleStyle,
    ...(callState !== 'idle' ? activeStyle : {}),
    cursor: callState === 'connecting' ? 'default' : 'pointer',
    transition: 'background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
  };

  const inner = (
    <>
      {callState === 'idle' && <Phone size={phoneSize} />}
      {' '}{label}
      {callState === 'idle' && showArrow && <span style={{ marginLeft: 4 }}>→</span>}
    </>
  );

  return (
    <>
      {/* Mobile: pure native tel: link — zero JS in the tap path */}
      <a
        href={MOBILE_TEL}
        className={`md:hidden ${className ?? ''}`}
        style={{ ...baseStyle, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
      >
        {inner}
      </a>
      {/* Desktop: web call button */}
      <button
        onMouseEnter={prefetchToken}
        onClick={() => {
          if (callState === 'active') { stopWebCall(); return; }
          if (callState === 'connecting') return;
          startWebCall();
        }}
        className={`hidden md:inline-flex ${className ?? ''}`}
        style={{ ...baseStyle, border: 'none', alignItems: 'center' }}
      >
        {inner}
      </button>
    </>
  );
}
