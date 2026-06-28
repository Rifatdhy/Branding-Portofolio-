# Brand Guidelines — Rifat Dhiya Ul Lail

## Brand Overview

| Atribut | Nilai |
|---------|-------|
| Nama | Rifat Dhiya Ul Lail |
| Monogram | RD |
| Title | Web & Network Engineer |
| Tagline | Nulis kode, ngulik jaringan |
| Audience | Technical recruiters, hiring managers, freelance clients |
| Tone | Profesional, hangat, percaya diri |

## Brand Voice

| Dimensi | Karakter |
|---------|----------|
| Tone | Profesional tapi approachable |
| Language | Indonesia (utama), Inggris (tech terms) |
| Register | Conversational, no jargon-jargon kaku |
| Kepribadian | Teknikal, curious, straightforward |

**Do:** "Buat saya, coding bukan cuma nulis function, tapi soal bikin sesuatu yang benar-benar dipakai orang."
**Don't:** Gunakan hiperbola marketing atau buzzwords kosong.

## Color Palette

### Primary Palette (Light Mode Only)

```css
/* Neutral */
--neutral-50:  #F9F8F6;  /* Page background — warm off-white */
--neutral-100: #F0EFED;  /* Section alt background */
--neutral-200: #E5E3E0;  /* Borders, dividers */
--neutral-300: #D4D2CE;  /* Subtle borders */
--neutral-400: #A8A5A0;  /* Placeholder text */
--neutral-500: #737373;  /* Body text secondary */
--neutral-900: #1A1A1A;  /* Body text primary */

/* Brand */
--brand-500:  #2563EB;   /* Primary accent — Blue */
--brand-600:  #1D4ED8;   /* Hover state */
--brand-50:   rgba(37,99,235,0.07);  /* Badge bg */

/* Utility */
--white:      #FFFFFF;
--success:    #25D366;    /* WhatsApp green */
--danger:     #EA4335;    /* Email red */
```

### Color Usage Rules

| Elemen | Token |
|--------|-------|
| Page background | `#F9F8F6` |
| Section alt bg | `#F0EFED` |
| Card/surface bg | `#FFFFFF` |
| Primary text | `#1A1A1A` |
| Secondary text | `#737373` |
| Accent (links, CTAs) | `#2563EB` |
| Accent hover | `#1D4ED8` |
| Borders | `#E5E3E0` |
| Focus ring | `#2563EB` |

**No dark mode.** Palette is light-only throughout.

## Typography

| Role | Font | Weight | Fallback | Source |
|------|------|--------|----------|--------|
| Display/Headline | Outfit | 700, 800 | sans-serif | Google Fonts |
| Body | DM Sans | 400, 500, 600, 700 | sans-serif | Google Fonts |
| Mono/Code | JetBrains Mono | 400, 500 | monospace | Google Fonts |

### Type Scale

| Level | Size (clamp) | Weight | Line Height | Font |
|-------|-------------|--------|-------------|------|
| Hero H1 | `clamp(2.5rem,7vw,5rem)` | 800 | 0.92 | Outfit |
| Section H2 | `text-3xl md:text-4xl lg:text-5xl` | 700 | 1.1 | Outfit |
| Section H3 | `text-2xl md:text-3xl` | 700 | 1.2 | Outfit |
| Card Title | `text-xl md:text-2xl` | 700 | 1.2 | Outfit |
| Body | `1.0625rem` | 400 | 1.65 | DM Sans |
| Body Small | `text-sm` | 400 | 1.5 | DM Sans |
| Mono Label | `0.6875rem` | 400 | 1 | JetBrains Mono |
| Badge | `0.75rem` | 500 | 1 | DM Sans |
| Button | `0.875rem` | 600 | 1 | DM Sans |

## Logo & Monogram

**Monogram:** "RD" in a rounded square (`border-radius: 8px`) with brand blue background.

### Usage
- Always on brand blue `#2563EB` background with white text
- Minimum size: 28px
- Clear space: minimum 8px on all sides
- Do not rotate, recolor, or place on busy backgrounds

## Spacing System

| Token | Value |
|-------|-------|
| `space-xs` | 4px |
| `space-sm` | 8px |
| `space-md` | 16px |
| `space-lg` | 24px |
| `space-xl` | 32px |
| `space-2xl` | 48px |
| `section-py` | `py-24 md:py-32` |
| `section-gap` | `gap-10 md:gap-16` |

## Border Radius Scale

| Level | Value | Usage |
|-------|-------|-------|
| Sharp | 0 | — |
| Soft | 8px | Inputs, nav items |
| Rounded | 12px | Cards, buttons |
| Pill | 999px | Badges, dividers |

## Component Tokens

### Button Primary
| State | Background | Text | Shadow |
|-------|-----------|------|--------|
| Default | `#2563EB` | `#FFFFFF` | none |
| Hover | `#1D4ED8` | `#FFFFFF` | `0 8px 20px rgba(37,99,235,0.15)` |
| Active | `scale(0.97)` | — | — |

### Button Outline
| State | Background | Border | Text |
|-------|-----------|--------|------|
| Default | transparent | `#E5E3E0` | `#1A1A1A` |
| Hover | transparent | `#2563EB` | `#2563EB` |
| Active | `scale(0.97)` | — | — |

### Card (Project / Skill)
| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border | `1px solid #E5E3E0` |
| Radius | `12px` |
| Hover | translateY(-3px) + `0 12px 32px rgba(0,0,0,0.04)` |

### Form Input
| State | Border | Shadow |
|-------|--------|--------|
| Default | `1.5px solid #E5E3E0` | none |
| Hover | `1.5px solid #CCCAC5` | none |
| Focus | `1.5px solid #2563EB` | `0 0 0 3px rgba(37,99,235,0.1)` |

## Motion Guidelines

| Elemen | Tipe | Durasi | Easing |
|--------|------|--------|--------|
| Scroll reveal | opacity + translateY | 0.45s | `cubic-bezier(0.12,0,0.3,1)` |
| Hover card | translateY | 0.35s | `cubic-bezier(0.22,1,0.36,1)` |
| Hover button | translateY + shadow | 0.25s | ease |
| Active press | scale | 0.15s | ease |
| Nav scroll | backdrop + shadow | 0.4s | ease |
| Mobile menu | max-height + opacity | 0.4s | `cubic-bezier(0.22,1,0.36,1)` |

## Accessibility Standards

- WCAG AA contrast minimum (4.5:1 body, 3:1 large text)
- Focus-visible rings on all interactive elements
- Skip navigation link
- Touch targets minimum 44px
- Reduced motion support (prefers-reduced-motion: reduce)
- Print stylesheet
