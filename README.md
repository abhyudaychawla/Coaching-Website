# Change & Clarity Coaching — Website

The official website for **Anjali Raj | Change & Clarity Coaching**. A professional coaching website with lead capture, contact forms, and a lightweight admin dashboard.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.1 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS 4 |
| Database ORM | Prisma 7 (PostgreSQL) |
| Email | Nodemailer |
| Validation | Zod 4 |
| Components | Radix UI + shadcn/ui |
| Fonts | Cormorant Garamond, DM Sans, Great Vibes (Google Fonts) |
| Deployment | Vercel (recommended) |

---

## Prerequisites

- **Node.js** 20.9 or later
- **PostgreSQL** 14 or later (local or hosted, e.g. Neon, Supabase, Railway)
- npm (comes with Node)

---

## Local Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd coaching-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in the required values (see [Environment Variables](#environment-variables) below).

### 4. Set up the database

Generate the Prisma client:

```bash
npx prisma generate
```

Run migrations to create the database schema:

```bash
npx prisma migrate dev --name init
```

### 5. (Optional) Seed sample data

```bash
npx prisma db seed
```

### 6. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The admin dashboard is at [http://localhost:3000/admin](http://localhost:3000/admin).

---

## Environment Variables

Create a `.env.local` file at the project root. All variables are listed below.

```env
# PostgreSQL connection string (required by Prisma 7 adapter-pg)
# If you use Supabase, prefer the session pooler URL from Dashboard -> Connect -> ORMs -> Prisma.
# The direct db.<project-ref>.supabase.co:5432 host is IPv6-only unless the project has the IPv4 add-on.
DATABASE_URL="postgresql://user:password@localhost:5432/coaching_db"

# Public site URL — used for sitemap and Open Graph (no trailing slash)
NEXT_PUBLIC_SITE_URL="https://anjalirajcoaching.com"

# Admin dashboard password — set a long random string
ADMIN_SECRET="replace-with-a-long-random-secret"

# Calendly booking link
NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/your-username/consultation"

# Email sending (Nodemailer SMTP)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your@email.com"
SMTP_PASS="your-app-password"
SMTP_FROM="Anjali Raj Coaching <your@email.com>"
ADMIN_EMAIL="anjali@changeandclarity.com"
```

### Variable Reference

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL connection string (used by `@prisma/adapter-pg`). For Supabase, use the session pooler URL for app runtime. |
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL for sitemap/OG tags |
| `ADMIN_SECRET` | Yes | Password for the `/admin` dashboard |
| `NEXT_PUBLIC_CALENDLY_URL` | No | Your Calendly scheduling link |
| `SMTP_HOST` | Yes | SMTP server hostname |
| `SMTP_PORT` | Yes | SMTP port (587 for TLS, 465 for SSL) |
| `SMTP_USER` | Yes | SMTP username / email address |
| `SMTP_PASS` | Yes | SMTP password or app password |
| `SMTP_FROM` | Yes | Sender name and address for outgoing emails |
| `ADMIN_EMAIL` | Yes | Address that receives lead/contact notifications |

---

## Folder Structure

```
coaching-website/
├── app/
│   ├── layout.tsx          # Root layout (fonts, Navbar, Footer)
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── coaching/           # Services/coaching page
│   ├── contact/            # Contact page
│   ├── process/            # How it works page
│   ├── testimonials/       # Testimonials page
│   ├── admin/
│   │   ├── page.tsx        # Admin dashboard (SSR, cookie-guarded)
│   │   └── login/
│   │       └── page.tsx    # Admin login page
│   ├── api/
│   │   └── admin/login/    # POST — sets admin_token cookie
│   ├── actions/            # Server Actions (form submissions via useActionState)
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   └── robots.ts           # Auto-generated robots.txt
├── components/
│   ├── forms/              # Client form components
│   ├── layout/             # Navbar, Footer
│   └── ui/                 # Shared UI primitives (shadcn/ui)
├── lib/
│   ├── content.ts          # All site copy and configuration
│   ├── prisma.ts           # Prisma client singleton
│   ├── email.ts            # Nodemailer helpers
│   ├── validations.ts      # Zod schemas
│   └── utils.ts            # Utility functions
├── prisma/
│   └── schema.prisma       # Database schema
└── public/                 # Static assets (images, fonts)
```

---

## Deployment

### Vercel (Recommended)

1. Push your repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Add all environment variables from `.env.local` in the Vercel dashboard under **Settings > Environment Variables**.
4. Vercel auto-detects Next.js — no build configuration needed.
5. For the database, use a hosted PostgreSQL provider such as [Neon](https://neon.tech), [Supabase](https://supabase.com), or [Railway](https://railway.app) and set `DATABASE_URL` to the connection string they provide.

After the first deploy, run migrations against the production database:

```bash
DATABASE_URL="<production-url>" npx prisma migrate deploy
```

### Other Platforms

The app is a standard Node.js Next.js application. Any platform that supports Node 20+ and environment variables will work. Run `npm run build` then `npm start`.

---

## Customization Guide

### Updating site copy

All text content — the coach's name, tagline, phone number, services, FAQs, testimonials, process steps, and pillar descriptions — lives in a single file:

```
lib/content.ts
```

Edit the exported constants (`siteConfig`, `services`, `faqs`, `testimonials`, etc.) and the changes propagate across the entire site automatically.

### Updating the Calendly booking URL

In `lib/content.ts`, update the `calendlyUrl` field inside `siteConfig`:

```ts
export const siteConfig = {
  ...
  calendlyUrl: "https://calendly.com/your-username/consultation",
  ...
};
```

### Replacing the coach photo

Drop the new image into `public/` (e.g. `public/anjali-raj.jpg`) and update any `<Image>` `src` props that reference the coach photo. The primary usage is in the About section component.

### Changing the admin password

Set a new value for `ADMIN_SECRET` in your environment variables. The cookie-based session will automatically invalidate all existing sessions because the stored token will no longer match.

### Adding or removing pages from the sitemap

Edit `app/sitemap.ts` and add or remove entries from the returned array.
