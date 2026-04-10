import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, phone, business, message } = await req.json();

  const { error } = await resend.emails.send({
    from: 'Wads AI <onboarding@resend.dev>',
    to: 'evan@wadsai.com',
    subject: `New Lead: ${name}`,
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Business Type:</strong> ${business || 'Not provided'}</p>
      <p><strong>Message:</strong> ${message || 'Not provided'}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
