'use client';
import Script from 'next/script';

export default function ElevenLabsWidget() {
  return (
    <>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="lazyOnload"
      />
      {/* @ts-expect-error custom web component */}
      <elevenlabs-convai agent-id="ocmDwQ3LI0mNFGF2bldQ"></elevenlabs-convai>
    </>
  );
}
