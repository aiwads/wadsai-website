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

export function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
}

export async function startWebCall() {
  if (globalState !== 'idle') return;
  setGlobal('connecting');
  try {
    const res = await fetch('/api/retell', { method: 'POST' });
    const { accessToken, error } = await res.json();
    if (!accessToken) throw new Error(error ?? 'No access token');

    retellClient = new RetellWebClient();
    retellClient.on('call_ended', () => { retellClient = null; setGlobal('idle'); });
    retellClient.on('error', () => { retellClient = null; setGlobal('idle'); });
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

  const style: React.CSSProperties = {
    ...idleStyle,
    ...(callState !== 'idle' ? activeStyle : {}),
    cursor: callState === 'connecting' ? 'default' : 'pointer',
    transition: 'background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
  };

  function handleClick() {
    if (callState === 'active') { stopWebCall(); return; }
    if (callState === 'connecting') return;
    if (isMobileDevice()) { window.location.href = MOBILE_TEL; return; }
    startWebCall();
  }

  return (
    <button
      onClick={handleClick}
      style={{ ...style, border: 'none' }}
      className={className}
    >
      {callState === 'idle' && <Phone size={phoneSize} />}
      {' '}{label}
      {callState === 'idle' && showArrow && <span style={{ marginLeft: 4 }}>→</span>}
    </button>
  );
}
