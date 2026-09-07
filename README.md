# Portfolio — Next.js Static Site

A personal portfolio template built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to be forked, customized, and deployed on **GitHub Pages** for free.

## Features

- **Static export** — fully client-rendered, no server needed
- **Dark-neutral theme** — warm beige palette with sage-green accents
- **Smooth animations** — scroll-triggered reveals, hover effects, cursor glow
- **Responsive** — mobile-first layout with collapsible nav drawer
- **SEO metadata** — Open Graph, Twitter Cards, and `robots` configured
- **Auto-deploy** — GitHub Actions builds and publishes on every push

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind base + theme colors
│   ├── layout.tsx         # Root layout, metadata, fonts
│   └── page.tsx           # Page composition (sections only)
├── components/
│   ├── Navbar.tsx         # Sticky nav with mobile drawer + resume link
│   ├── Footer.tsx         # Social links (GitHub, LinkedIn, Mail)
│   ├── PageTransition.tsx # Fade-in wrapper
│   └── ui/
│       └── container.tsx  # Max-width layout wrapper
├── sections/
│   ├── Hero.tsx           # Headline, subtitle, CTA buttons, cursor glow
│   ├── About.tsx          # Profile image + bio + "Currently exploring" tags
│   ├── Skills.tsx         # Categorized skill cards (4 groups)
│   ├── FeaturedProject.tsx# Highlighted project card
│   ├── Projects.tsx       # Project grid (3 cards)
│   └── Contact.tsx        # Contact form (UI only) + social links
└── lib/
    └── basePath.ts        # Asset URL helper for GitHub Pages sub-path
public/
├── profile.png            # Your profile photo (replace this)
└── resume.pdf             # Your resume (replace this)
.github/workflows/
└── deploy.yml             # GitHub Actions → GitHub Pages
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm
- A [GitHub](https://github.com) account

### 1. Fork the repository

Click the **Fork** button at the top of the repo page, or clone manually:

```bash
git clone https://github.com/YOUR_USERNAME/git-portfolio.git
cd git-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal info

Update these files with your own details:

```bash
src/app/layout.tsx          # Title, description, metadataBase URL, OG image
src/sections/Hero.tsx       # Name, headline, subtitle, stats, CTA links
src/sections/About.tsx      # Bio text, tags
src/sections/Skills.tsx     # Skill categories, names, icons
src/sections/Projects.tsx   # Project list, URLs, descriptions
src/sections/FeaturedProject.tsx  # Featured project content + links
src/sections/Contact.tsx    # Email, GitHub, LinkedIn URLs
src/components/Navbar.tsx   # Nav links, resume path
src/components/Footer.tsx   # Social links, copyright year
```

### Assets

```bash
public/profile.png          # Replace with your photo (square, ~500×500)
public/resume.pdf           # Replace with your resume PDF
```

### Theme colors

Edit `tailwind.config.ts` and `src/app/globals.css`:

```ts
// tailwind.config.ts
colors: {
  background: "#EDEAE2",   // Page background
  foreground: "#1A1A1A",   // Text color
  accent: "#5C7A5C",       // Sage green accent
  "accent-light": "#8AA88A",
  muted: "#A39C8E",
}
```

```css
/* src/app/globals.css */
::selection {
  background-color: #5C7A5C;
}
```

## Deploy to GitHub Pages

### 1. Enable GitHub Pages

1. Go to your repo **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. No need to choose a branch — the workflow handles it

### 2. Update the base path

Edit next.config.mjs:

```js
basePath: "/YOUR_REPO_NAME",    // e.g. "/git-portfolio"
```

Edit the deploy workflow at `.github/workflows/deploy.yml`:

```yaml
- run: npm run build
  env:
    NEXT_PUBLIC_BASE_PATH: /YOUR_REPO_NAME    # e.g. /git-portfolio
```

### 3. Push to main

```bash
git add -A
git commit -m "Customize portfolio"
git push origin main
```

The GitHub Actions workflow will build and deploy automatically. Your site will be live at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

### Manual re-deploy

Trigger the workflow from the **Actions** tab in your repo, or push another commit.

## Build locally

To preview the production build:

```bash
npm run build
npx serve@latest out
```

The static output is written to the `out/` directory.

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | Static site generation |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Scroll + hover animations |
| Lucide React | Icons |
| clsx | Class name utility |
| GitHub Actions | CI/CD → Pages |
