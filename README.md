# Workspace Builder | monis.rent

A high-fidelity, desktop-first web application designed for monis.rent, a Bali-based office equipment and workspace rental service catering to digital nomads, remote engineers, and distributed startups across Canggu, Ubud, Seminyak, Uluwatu, and Sanur.

---

## Short Write-Up

### 1. Approach
- **Atomic Design Architecture**: Built with strict hierarchy (`atoms`, `molecules`, `organisms`, `templates`). UI presentation is strictly decoupled from business logic and data processing.
- **Purity & Separation of Concerns**: Core calculations are isolated in dedicated utilities (`utils/pricing.ts` for duration discounts and delivery fees, `utils/date.ts` for calendar math and past date prevention, `utils/phone.ts` for phone sanitization). Complex application state is handled in `hooks/use-workspace-builder.ts`.
- **Dual Visual Mode (2D Stage & 3D Studio)**: Features both a front-facing 2D flat illustration stage and a Three.js WebGL 3D Studio. An adaptive layout engine calculates dynamic offsets to ensure equipment (monitors, arc lamps, laptop stands, and espresso machines) never collide, regardless of whether single, dual, or ultrawide setups are configured.
- **Strict Input Validation & Optimization**: Phone number fields enforce numeric-only input. The custom datepicker prevents selection of past dates. Real-time catalog search and filter inputs are debounced (300ms) to eliminate redundant re-renders. Every file adheres to a strict limit of under 300 lines.

### 2. Tech Choices
- **Next.js 16 (App Router) & React 19**: Modern server-first architecture. Client component directives (`'use client'`) are strictly restricted to leaf interactive components, ensuring optimal bundle efficiency.
- **TypeScript (Strict Mode)**: Zero usage of `any` or `unknown`. Descriptive, explicit interfaces and discriminating unions (`WorkspaceItem`, `WorkspaceSetup`, `RentalPricing`, `DeliveryArea`, `StageVisualMode`) are maintained across the application.
- **Tailwind CSS**: Utility-first styling utilizing a curated Bali aesthetic palette (emerald teal `#0F766E`, terracotta coral `#FF6B4A`, sacred gold `#F59E0B`, warm sand neutral `#FAF7F2`).
- **Three.js (WebGL)**: Modular procedural 3D model builders for desks (motorized standing desk, teak wood, executive L-desk), ergonomic chairs with 5-star caster bases, monitors with code editor canvas screens, custom aerodynamic surfboards, and barista espresso machines.
- **Pure Vector Graphics (SVG)**: High-resolution inline vector illustrations for 2D stage elements, catalog preview cards, and brand logos without external asset overhead.

### 3. What Could Be Improved With More Time
- **Direct WhatsApp Concierge Dispatch**: Generate an instant WhatsApp message pre-filled with the selected equipment list, weekly rate breakdown, and villa delivery address for concierge booking confirmation.
- **Export Setup Summary**: Add a client-side canvas snapshot generator allowing nomads to download a high-resolution image card of their designed workspace for expense reporting or social sharing.
- **Expanded Equipment Catalog**: Broaden the equipment roster with standing desk anti-fatigue mats, bamboo footrests, and drawing tablets.
- **Local State Persistence**: Save customized workspace setups to `localStorage` and URL query parameters so users can share their setup link directly with coworkers.
- **Automated Integration Testing**: Implement end-to-end tests validating discount calculations, preset application, and checkout step transitions.

---

## Key Features

- **Dual Visual Stage (2D Stage & 3D Studio)**: Seamless toggle between the 2D flat illustration stage and the interactive Three.js 3D Studio with full orbit rotation and zoom.
- **Authentic Equipment Models**: Procedural 3D assets that mirror catalog specifications (Standing Desk Pro with dual motorized columns, Compact Teak Desk, Ergo Mesh Chair with 5-star caster wheels and lumbar frame, curved 34" Ultrawide monitor, and custom funboard surfboard).
- **Collision-Free Adaptive Layout**: Dynamic coordinate calculation preventing accessories, lamps, and coffee makers from clipping into multi-monitor screens.
- **Custom Bali Datepicker**: Intuitive calendar picker enforcing future-only booking dates with island delivery slot availability.
- **Strict WhatsApp Input Sanitization**: Automatic blocking of non-numeric characters with country code formatting.
- **Dynamic Day/Night Lighting Modes**: Toggle between bright Bali Sun and immersive Bali Night with ambient point lighting and soft contact shadows.
- **Live Ergonomics, Zen & Productivity Scores**: Algorithmic assessment of setup quality based on selected workstation items.
- **Tiered Island Delivery Selector**: Custom selector with tiered delivery fees and speed estimates across Canggu, Seminyak, Ubud, Uluwatu, and Sanur.
- **Complete Checkout Flow**: Detailed weekly rate breakdown, duration discount savings, villa delivery coordinates, and confirmation reference badges.
- **SEO & App Identity**: Comprehensive OpenGraph tags, metadata descriptions, and custom SVG app icon / favicon.

---

## Getting Started

### Prerequisites
- Node.js 18.18+ or Node.js 20+
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone <repository-url>
cd test-code
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```
