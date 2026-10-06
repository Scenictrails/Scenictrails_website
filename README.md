# Scenic Trails

Scenic Trails is a boutique travel and hiking landing page for Ella, Sri Lanka. The site promotes two guided experiences: an early-morning Ella Rock sunrise hike and a flexible full-day Ella city tour. It is designed to feel premium, local, and conversion-focused, with pricing, stop selection, and booking-friendly interactions built directly into the experience.

## Overview

This project is a React + TypeScript + Vite application built for showcasing tour packages and helping visitors quickly choose a trip, date, and group size. The interface includes:

- a premium hero section and navigation
- guided package highlights and feature cards
- pricing options for sunrise hikes
- interactive stop selection for city tours
- responsive layout for desktop and mobile devices
- booking state managed through a context provider

## Features

- Modern single-page tourism landing experience
- Two tour offerings: Ella Rock and Ella City Tour
- Group-based pricing and per-stop pricing models
- Customizable copy and pricing in a central configuration file
- Tailwind-based styling with a warm, outdoors-inspired palette
- Local business branding and contact details for Scenic Trails

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- lucide-react
- @icons-pack/react-simple-icons

## Project Structure

```bash
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── images/
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── components/
│   ├── contexts/
│   ├── data/
│   └── ...
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

The application will start in development mode and typically be available at:

```bash
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

## Configuration

The main site content, pricing, package details, and contact information are centralized in:

- [src/data/siteConfig.ts](src/data/siteConfig.ts)

This file contains all the copy and configuration for:

- brand information
- navigation links
- hero text
- tour packages
- pricing options
- stop selection data
- footer content

If you want to update the website copy, pricing, or tour details, this is the primary place to do so.

## Customization Notes

### Update tour content

Edit the `siteConfig` object in [src/data/siteConfig.ts](src/data/siteConfig.ts) to change:

- tour names
- descriptions
- prices
- stop lists
- social links
- contact information

### Styling

The visual design is driven by Tailwind. You can adjust the theme and layout in:

- [src/index.css](src/index.css)
- [tailwind.config.js](tailwind.config.js)

## Deployment

This app is static and can be deployed to any modern hosting platform, including:

- Vercel
- Netlify
- GitHub Pages
- Azure Static Web Apps

For deployment, run the production build and serve the generated `dist` folder.

## License

This project is for demonstration and portfolio use unless otherwise specified by the project owner.

## Contact

Scenic Trails

- Email: hello@scenictrails.lk
- Phone: +94 77 124 4422
- Location: Ella, Sri Lanka

