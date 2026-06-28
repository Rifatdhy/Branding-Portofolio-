# Design Spec — Rifat Dhiya Ul Lail Portfolio v2

## Overview
Rebuild portfolio dari static HTML ke Next.js 15 (App Router) dengan palet monokrom warm gray, dark mode otomatis, ditambah blog, CV online, testimoni, filter proyek, lightbox, contact form backend, dan analytics.

## Design Read
Portfolio developer untuk recruiter technical & freelance client, dengan bahasa monokrom warm-gray editorial, desain tanpa accent color — hierarki dibawa oleh tipografi, spacing, dan kontras.

## Tech Stack
| Layer | Pilihan |
|-------|---------|
| Framework | Next.js 15 + TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Motion (motion/react) |
| Icons | @phosphor-icons/react |
| Blog | next-mdx-remote + MDX |
| Email | Resend SDK |
| Analytics | Vercel Analytics |
| Dark Mode | prefers-color-scheme via CSS variables |
| Fonts | next/font (Outfit, DM Sans, JetBrains Mono) |

## Three Dials
- DESIGN_VARIANCE: 6
- MOTION_INTENSITY: 5
- VISUAL_DENSITY: 4

## Color Tokens (Warm Gray Monochrome)

### Light Mode
| Token | Value |
|-------|-------|
| --surface | #FAF9F7 |
| --surface-alt | #F0EFED |
| --surface-card | #FFFFFF |
| --border | #E5E3E0 |
| --border-hover | #D4D2CE |
| --text-primary | #1A1918 |
| --text-secondary | #8A8782 |
| --text-muted | #B8B5B0 |

### Dark Mode
| Token | Value |
|-------|-------|
| --surface | #1A1918 |
| --surface-alt | #2E2C2A |
| --surface-card | #2E2C2A |
| --border | #4A4845 |
| --border-hover | #6B6864 |
| --text-primary | #FAF9F7 |
| --text-secondary | #B8B5B0 |
| --text-muted | #8A8782 |

Zero accent color. Hierarki visual dari weight, scale, spacing, dan contrast.

## Route Structure
| Route | File | Konten |
|-------|------|--------|
| `/` | app/page.tsx | Hero -> About -> Projects -> Testimonials -> Skills -> Contact |
| `/blog` | app/blog/page.tsx | List blog posts |
| `/blog/[slug]` | app/blog/[slug]/page.tsx | Single blog post (MDX) |
| `/proyek` | app/proyek/page.tsx | Full project list + filter |
| `/cv` | app/cv/page.tsx | Online CV |
| `/api/contact` | app/api/contact/route.ts | Form -> Resend |
| `/api/views` | app/api/views/route.ts | Visitor counter |

## Homepage Sections
1. Hero - Asymmetric split: text + SVG network nodes (monokrom)
2. About - Split layout + stat counters + quote + edukasi timeline
3. Projects - Bento grid + tech filter bar
4. Testimonials - Horizontal scroll-snap cards
5. Skills - Grid per kategori
6. Contact - Cards + form + social links
7. Footer

## Motion
- Scroll reveal: opacity/translateY stagger, 0.6s, ease-out
- Hover cards: translateY(-3px), 0.35s
- Hover buttons: translateY(-2px), 0.25s
- Active press: scale(0.97), 0.15s
- Nav scroll: backdrop-blur transition 0.4s
- prefers-reduced-motion: collapse to static

## Data Flow
- Blog: MDX files in content/, fs read at build time
- Projects: static array data
- Testimonials: static array data
- Contact: POST -> API Route -> Resend SDK
- Filter proyek: client-side useState

## Brand Assets to Preserve
- Monogram "RD" - redesign tanpa biru (warm gray bg)
- Logo favicon - update ke warm gray
- CV PDF
- Existing project data dan deskripsi
