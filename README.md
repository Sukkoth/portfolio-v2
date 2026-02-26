# Modern Portfolio

A clean, minimalist portfolio website built with React, TypeScript, and Tailwind CSS. Features sharp corners, smooth transitions, and a modern aesthetic.

## Features

- Modern, minimal design with sharp corners
- Fully responsive layout
- Dark/Light theme toggle
- Smooth scroll navigation
- TypeScript for type safety
- Fast performance with Vite

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS 4
- Vite
- Lucide Icons

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
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, ThemeToggle
│   └── sections/        # Hero, About, Experience, Projects, etc.
├── lib/                 # Utility functions
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles & theme variables
```

## Customization

Update the color scheme in `src/index.css`:

```css
:root {
  --primary: #0066ff;
  --accent: #00d4ff;
  /* ... other variables */
}
```

## License

MIT
