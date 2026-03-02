# RedDep — Reducing Dependencies

**Removing obstacles so people can move under their own power.**

RedDep is David Drake's AI research and consulting practice. This repo contains the source code for [reddep.com](https://reddep.com) — a single-page marketing and booking site built with the Progress Pride flag as its design DNA.

## What RedDep Does

- **AI Research** — Narrative compression, cognitive architecture, bridging theory and practice
- **Architecture Advisory** — Technical evaluation, model selection, prompt engineering, pipeline architecture
- **Responsible AI Strategy** — Prosthetic-vs-therapeutic framework, bias auditing, AI governance

## Tech Stack

- [Next.js](https://nextjs.org) 16 with App Router
- [Tailwind CSS](https://tailwindcss.com) 4.1
- [React](https://react.dev) 19
- [Stripe](https://stripe.com) for payments
- [Cal.com](https://cal.com) for scheduling
- Deployed on [Vercel](https://vercel.com)

## Getting Started

```bash
npm install
cp .env.example .env.local  # fill in your keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://reddep.com`) |
| `NEXT_PUBLIC_CAL_USERNAME` | Cal.com username |
| `NEXT_PUBLIC_CAL_SLUG_30` | Cal.com event slug for 30-min sessions |
| `NEXT_PUBLIC_CAL_SLUG_60` | Cal.com event slug for 60-min sessions |

## Project Structure

```
src/
  app/             # Next.js pages and API routes
  components/      # React components
    about/         # About page components
    booking/       # Stripe/Cal.com booking flow
    brand/         # Wordmark, Pride gradient bar
    layout/        # Header, Footer, SkipNav
    sections/      # Home page sections
    ui/            # Shared UI primitives
  lib/             # Stripe client, constants
  types/           # TypeScript type definitions
public/            # Static assets, sitemap, robots.txt
```

## Accessibility

Every component meets WCAG 2.1 Level AA. This includes proper color contrast, keyboard navigation, screen reader support, reduced motion respect, and semantic HTML throughout.

## License

All rights reserved. Source is public for transparency, not for reuse.

## About David Drake

AI researcher, former YC-backed CTO, published author (3 languages). Based in Portland, OR.

Because everyone deserves a clear path.
