'use client';
import { useState, useEffect } from 'react';
import { PhoneOff } from 'lucide-react';
import { subscribe, stopWebCall } from './CallButton';

type CallState = 'idle' | 'connecting' | 'active';

export default function FloatingEndCall() {
  const [callState, setCallState] = useState<CallState>('idle');

  useEffect(() => subscribe(setCallState), []);

  if (callState === 'idle') return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '32px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 9999,
      animation: 'floatIn 0.3s ease',
    }}>
      <style>{`
        @keyframes floatIn {
          from { opacity: 0; transform: translateX(-50%) translateY(12px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes endCallPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(220,38,38,0.4), 0 8px 32px rgba(220,38,38,0.3); }
          50%       { box-shadow: 0 0 0 8px rgba(220,38,38,0), 0 8px 32px rgba(220,38,38,0.5); }
        }
      `}</style>
      <button
        onClick={stopWebCall}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '14px 28px',
          borderRadius: '100px',
          background: '#DC2626',
          color: '#ffffff',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-inter)',
          fontWeight: 600,
          fontSize: '0.95rem',
          letterSpacing: '0.01em',
          animation: 'endCallPulse 2s ease-in-out infinite',
        }}
      >
        <PhoneOff size={17} />
        End Call
      </button>
    </div>
  );
}
