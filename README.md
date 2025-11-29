# QA Automation Engineer Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, tech-focused aesthetic with dark mode support.
- **Responsive**: Fully responsive layout for mobile, tablet, and desktop.
- **Data-Driven**: Tech stack and projects are defined in JSON/TypeScript files for easy updates.
- **Animations**: Smooth entrance animations using Framer Motion.
- **SEO Friendly**: Built with Next.js for optimal performance and SEO.

## Getting Started

### Prerequisites

- Node.js 18+ installed.

### Installation

1. Clone the repository (if not already done).
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information

Update `src/data/profile.ts` with your name, title, bio, and social links.

### Tech Stack

Update `src/data/techStack.ts` to add or remove skills and categories.

### Projects

Update `src/data/projects.ts` to showcase your own projects.

### GitHub Highlights

Update `src/components/GitHubHighlight.tsx` to pin your best repositories.

## Deployment

The easiest way to deploy is to use [Vercel](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and deploy.

## Project Structure

- `src/app`: Main application pages and layout.
- `src/components`: Reusable UI components (Hero, Navbar, etc.).
- `src/data`: Data files for easy content management.
- `src/lib`: Utility functions.
