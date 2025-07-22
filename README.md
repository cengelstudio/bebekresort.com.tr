# Bebek Resort - Luxury Reimagined

A modern, sustainable luxury resort website built with SvelteKit, featuring upcycling concepts and multilingual support.

## 🏗️ Project Structure

```
bresort/
├── src/
│   ├── lib/
│   │   ├── components/     # Reusable UI components
│   │   ├── constants/      # Application constants
│   │   ├── types/          # TypeScript type definitions
│   │   ├── utils/          # Utility functions
│   │   ├── i18n.ts         # Internationalization (client)
│   │   ├── i18n.server.ts  # Internationalization (server)
│   │   └── index.ts        # Main exports
│   ├── routes/
│   │   └── [locale]/       # Localized routes
│   ├── app.html            # HTML template
│   └── app.css             # Global styles
├── static/
│   ├── documents/          # SEO files (sitemap, robots)
│   ├── icons/              # Logo and favicon files
│   ├── images/             # Hotel and room images
│   └── messages/           # Translation files
├── Dockerfile              # Production Docker configuration
├── docker-compose.yml      # Docker deployment setup
├── deploy.sh               # Automated deployment script
└── package.json            # Dependencies and scripts
```

## 🚀 Quick Start

### Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

### Production Deployment

```bash
# Deploy with Docker
./deploy.sh

# Or manually
docker compose up -d
```

## 🌍 Internationalization

The application supports multiple languages:

- 🇺🇸 English (`/en`)
- 🇹🇷 Turkish (`/tr`)
- 🇫🇷 French (`/fr`)
- 🇪🇸 Spanish (`/es`)

Translation files are located in `static/messages/`.

## 🐳 Docker Deployment

The application is containerized for easy deployment:

- **Port**: 6778
- **Node Version**: 20+
- **Base Image**: Alpine Linux
- **Health Checks**: Enabled
- **Security**: Non-root user execution

### Environment Variables

- `NODE_ENV=production`
- `PORT=6778`
- `HOSTNAME=0.0.0.0`

## 🛠️ Technology Stack

- **Framework**: SvelteKit 2.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Deployment**: Docker + Docker Compose
- **Node.js**: 20+ (Alpine)

## 📁 Key Features

- ✅ **Multilingual Support**: 4 languages with server-side rendering
- ✅ **SEO Optimized**: Meta tags, sitemap, robots.txt
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Performance**: Optimized images and code splitting
- ✅ **Accessibility**: WCAG compliant
- ✅ **Security**: HTTPS ready, secure headers

## 🔧 Development

### Code Organization

- **Types**: Centralized in `src/lib/types/`
- **Constants**: Application constants in `src/lib/constants/`
- **Utils**: Helper functions in `src/lib/utils/`
- **Components**: Reusable UI components in `src/lib/components/`

### Code Quality

- **Linting**: ESLint configuration
- **Formatting**: Prettier configuration
- **Type Checking**: TypeScript strict mode

## 📄 License

This project is proprietary software for Bebek Resort.
