# Como Foreign Exchange Website Document

This document serves as the master specification for rebuilding the **comoforeignexchange.com** website as a high-performance, static Next.js 16 project. It contains the complete architecture, design tokens, content copy, and component definitions required for implementation.

---

## 1. Introduction & General Requirements

### Core Constraints
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Type:** Static Website (Static Site Generation - SSG)
- **Login/Register:** External links to `https://client.comoforeignexchange.com/` (No internal auth).
- **Contact Form:** Post to `/api/contact`, integrated with Mailgun.
- **Images:** Placeholder strategy initially, mapping to `/public/uploads/` later.

---

## 2. Typography System

The system uses **Montserrat** for headers and **Source Sans Pro** for body text.

| Token Name | Font Family | Weight | Size (px) | Usage |
| :--- | :--- | :--- | :--- | :--- |
| `heading-xl` | Montserrat | Semi Bold (600) | 46px | Page Titles, Hero |
| `heading-md` | Montserrat | Semi Bold (600) | 24px | Section Titles |
| `text-lead` | Montserrat | Medium (500) | 16px | Lead Text |
| `text-body` | Source Sans Pro | Normal (400) | 16px | Body Content |
| `text-small` | Source Sans Pro | Normal (400) | 13px | Utility/Footer |

---

## 3. Color System

| Semantic Name | Hex Value | Primary Usage |
| :--- | :--- | :--- |
| `primary` | `#328096` | Branding, Main Buttons |
| `secondary` | `#9e9e9e` | Muted Text |
| `accent-dark` | `#113d49` | Headers/Footers |
| `background` | `#ffffff` | Page BG |
| `text-main` | `#514949` | Body Text |
| `highlight` | `#965832` | CTAs (Investment) |
| `warning` | `#d6d62c` | Accents |

---

## 4. Information Architecture & Routing

| Path                                     | Page Title           | Description |
|:-----------------------------------------|:---------------------| :--- |
| `/`                                      | Home                 | Overview, Market Ticker, Tiers |
| `/corporate/como-trade`                  | Co-Mo Trade          | 100-year history |
| `/corporate/vision-mission`              | Vision & Mission     | Company Culture |
| `/corporate/values`                      | Our Values           | Service & Inspiration |
| `/corporate/license-and-regulation`      | License & Regulation | ASIC & FINTRAC |
| `/education/fundamental-analysis`        | Fundamental Analysis | Macroeconomic Indicators |
| `/education/technical-analysis`          | Technical Analysis   | Chart Reading |
| `/education/psychology`                  | Psychology           | Behavioral Finance |
| `/education/advanced-technical-analysis` | Advanced Technical   | Algorithmic Trading |
| `/partnership`                           | Partnership          | Master IB, IB, Affiliate |
| `/contact`                               | Contact Us           | Office locations & Form |
| `/faq`                                   | FAQ                  | Frequently Asked Questions |
| `/legal-documents`                       | Legal Documents      | Disclaimers & Policies |

---

## 5. Layout & Shared Components

### Global Layout
- **Header:** Sticky with Logo, Navigation (Corporate, Education, Partnership, Support), and Register/Login buttons linking to CRM.
- **Footer:** 4 columns (Corporate, Education, Partners, Support), Legal menu, Social (Twitter), and Copyright.

### Components
- `HeroSection`: Page header with breadcrumbs (except home).
- `SectionHeader`: Title (Montserrat 24px) + optional subtitle.
- `FeatureCard`: Icon + Title + Description.
- `LeverageTabs`: 5 tabs (Parities, Indices, Energies, Metals, Crypto) with data tables.
- `FAQAccordion`: shadcn-based accordion for FAQs.
- `AwardCard`: Badge + Title + Year + Description.

---

## 6. Page Specifications (Selected)

### Home Page (`/`)
- **Sections:**
  - **Global Markets:** Intro text about 150,000+ investors.
  - **Ticker:** Real-time prices placeholder.
  - **Leverages:** Tabbed table of contract sizes.
  - **Account Tiers:** Discovery of new account types.
  - **Security:** ASIC and MSB regulation details.

### Corporate: CM Globals (`/corporate/cmglobals`)
- **Copy:** "CM Globals is a subsidiary of Cortez Morgan Family Company which has a long history of 100 years..."
- **Awards:** Inclusion of "Most Transparent Broker", "Best Customer Service", "Most User-Friendly".

### Contact Page (`/contact`)
- **Offices:** Melbourne (Russell St & Little Lonsdale St), Ottawa (Laurier Ave), Sydney (George St).
- **Form:** see Section 7.

---

## 7. Contact Form & Mailgun Integration

### Fields
- `Full Name*`: text
- `Email Address*`: email
- `Phone number`: tel
- `Subject*`: text
- `How can we help?*`: textarea

### Integration
- **Endpoint:** `POST /api/contact`
- **Mailgun:** Use `mg.messages.create` to send data to `info@cmglobals.com`.
- **Payload:** `{"name": "...", "email": "...", "phone": "...", "subject": "...", "message": "..."}`

---

## 8. Image Placeholder Strategy

Map following IDs to `/public/uploads/...`
- `img-home-hero`: Hero background.
- `img-group-history`: 1921 Group photo placeholder.
- `img-award-bg`: Award section decoration.
- `img-contact-map`: Office location illustration.

---

## 9. Future Integration
- **Site Sitemap:** `/page-sitemap.xml`.
- **Media:** Copy WordPress `uploads/` folder.
- **Styling:** Use CSS variables for the color system in Tailwind v4.
