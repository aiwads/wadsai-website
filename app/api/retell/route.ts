import { NextResponse } from 'next/server';

const AGENT_ID = 'agent_7a8480f7fd2c3b6ad4005ebf91';

export async function POST() {
  const apiKey = process.env.RETELL_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'RETELL_API_KEY not set' }, { status: 500 });
  }

  const response = await fetch('https://api.retellai.com/v2/create-web-call', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ agent_id: AGENT_ID }),
  });

  if (!response.ok) {
    const error = await response.text();
    return NextResponse.json({ error }, { status: response.status });
  }

  const data = await response.json();
  return NextResponse.json({ accessToken: data.access_token });
}
