# TanStack + Vite + Tailwind + ShadCN Starter

A modern, full-featured starter template for building React applications with TanStack Router, Vite, Tailwind CSS, and ShadCN UI.

## Tech Stack

- **[React](https://react.dev/)** - Latest React with modern features
- **[TanStack Router](https://tanstack.com/router/latest)** - Type-safe routing with automatic code splitting
- **[Vite 7](https://vite.dev)** - Fast build tool and dev server
- **[Tailwind CSS v4.x](https://www.typescriptlang.org/docs/)** - Utility-first CSS framework
- **[ShadCN UI](https://ui.shadcn.com/)** - Accessible, customizable components
- **[TypeScript](https://www.typescriptlang.org/docs/)** - Full type safety
- **[Biome](https://biomejs.dev/)** - Fast linting and formatting

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Format code
pnpm format
```

## Project Structure

```
src/
├── main.tsx           # App entry point with router setup
├── styles.css         # Global styles and CSS variables
├── routeTree.gen.ts   # Auto-generated route tree
├── components/
│   ├── theme-provider.tsx  # Theme context provider
│   ├── mode-toggle.tsx     # Dark/light mode toggle
│   └── ui/                 # ShadCN UI components
├── lib/
│   └── utils.ts       # Utility functions (cn helper)
├── routes/
│   ├── __root.tsx     # Root layout with navigation
│   ├── index.tsx      # Home page (/)
│   ├── about.tsx      # About page (/about)
│   └── main.tsx       # Main page (/main)
└── assets/
    └── react.svg      # Static assets
```

## Features

- File-based routing with TanStack Router
- Automatic route code splitting
- Route preloading on hover/focus
- Scroll restoration
- Dark/light/system theme toggle with localStorage persistence
- CSS variables for theming (OKLCH color space)
- Path aliases (`@/*` maps to `src/*`)
- Router DevTools in development

## Adding New Routes

Create a new file in `src/routes/`:

```tsx
// src/routes/contact.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return <div>Contact Page</div>;
}
```

The route will be automatically registered.

## Adding ShadCN Components

```bash
pnpm dlx shadcn@latest add button
```

## License

MIT
