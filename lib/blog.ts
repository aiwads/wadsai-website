export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-receptionist-real-estate-agents',
    title: 'Why Every Real Estate Agent Needs an AI Receptionist in 2026',
    description: 'Real estate agents miss 67% of their calls. Here\'s how an AI receptionist fixes that and what it means for your bottom line.',
    date: '2026-02-28',
    category: 'AI Receptionist',
    readTime: '5 min read',
    content: `
## The Problem Every Real Estate Agent Has

You're showing a home at 6pm. Your phone rings. You can't answer. The buyer leaves a voicemail — or more likely, hangs up and calls the next agent on their list.

According to the National Association of Realtors, **67% of calls to real estate agents go unanswered**. And here's what makes that painful: **78% of buyers work with the first agent who responds**.

That's not a lead problem. That's a response problem.

## What an AI Receptionist Actually Does

An AI receptionist isn't a voicemail system with a better message. It's a voice agent that:

- **Answers every call instantly** — nights, weekends, during showings, during lunch
- **Has a real conversation** — asks the right qualifying questions before you ever pick up
- **Sends you an instant summary** — name, number, property interest, and buyer/seller status, delivered to your phone in seconds
- **Speaks English and Spanish** — capturing leads your competitors might miss

It doesn't replace you. It works before you. Every lead that calls gets a response. You decide who to call back first.

## The Math

The average missed lead costs a real estate agent $7,500. If you're missing just 10 calls a month, that's $75,000 a year quietly walking out the door.

An AI receptionist from Wads AI costs $297/month. One captured lead that closes more than pays for the entire year.

## How to Get Started

Getting set up takes 48 hours. We build a custom agent trained on your business — your name, your market, your qualifying questions. You review it, approve it, and go live.

No contracts. No tech headaches. Cancel anytime.

[Book a free 10-minute demo](/contact) and see exactly how it would work for your business.
    `,
  },
  {
    slug: 'missed-calls-real-estate-cost',
    title: 'How Much Are Missed Calls Actually Costing Your Real Estate Business?',
    description: 'The numbers are worse than you think. Here\'s a breakdown of what every unanswered call costs the average real estate agent.',
    date: '2026-02-20',
    category: 'Real Estate',
    readTime: '4 min read',
    content: `
## Most Agents Have No Idea

When a call goes to voicemail, most agents think: "They'll call back if they're serious."

Most don't call back. They call someone else.

## The Real Numbers

- **67%** of calls to real estate agents go unanswered (NAR)
- **78%** of buyers work with the first agent who responds
- **$7,500** average value of a missed lead
- **40%** of calls come in after 5pm — when most agents are off the clock

If you're getting 25 calls a month and missing 67% of them, that's roughly 17 missed leads. Even if only 1 in 10 closes, that's 1.7 deals a month — or over 20 deals a year — slipping away.

## Why It Keeps Happening

It's not because agents don't care. It's because real estate doesn't fit a 9-to-5 schedule. You're at showings. You're in negotiations. You're driving between properties. You can't always pick up.

And when you don't, the lead doesn't wait.

## The Fix

An AI receptionist answers every call instantly — no matter what time it is, no matter what you're doing. It qualifies the lead, captures their info, and sends you a summary before you even know the call came in.

The best part: you don't have to change anything about how you work. The agent just fills the gap.

[See how it works →](/services)
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
