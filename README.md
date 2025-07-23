# Bebek Resort - Sustainable Tourism Website

A modern, responsive website for Bebek Resort, showcasing unique accommodations including vintage minivan rooms and luxury suites in Assos, Turkey.

## 🏗️ Project Structure

```
bebekresort/
├── app/                    # Svelte application
│   ├── src/               # Source code
│   ├── static/            # Static assets
│   ├── package.json       # Dependencies
│   └── ...
├── nginx/                 # Nginx configuration
├── docs/                  # Documentation
├── Dockerfile            # Multi-stage Docker build
├── docker-compose.yml    # Docker orchestration
└── deploy.sh             # Deployment script
```

## 🚀 Quick Start

### Prerequisites

- Docker and Docker Compose
- Node.js 18+ (for development)

### Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bresort
   ```

2. **Install dependencies**
   ```bash
   cd app
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Production Deployment

1. **Build and deploy with Docker**
   ```bash
   ./deploy.sh
   ```

2. **Or manually**
   ```bash
   docker-compose build
   docker-compose up -d
   ```

3. **Access the application**
   ```
   http://localhost
   ```

## 🐳 Docker

### Multi-stage Build

The Dockerfile uses a multi-stage build process:

1. **Builder stage**: Compiles the Svelte application
2. **Production stage**: Serves static files with Nginx

### Benefits

- ✅ Optimized image size
- ✅ Fast builds with layer caching
- ✅ Production-ready Nginx configuration
- ✅ Health checks and monitoring
- ✅ Security headers and compression

## 🌐 Features

- **Multi-language Support**: Turkish, English, French, Spanish
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags, sitemap, robots.txt
- **Performance**: Optimized images, lazy loading, caching
- **Accessibility**: WCAG compliant
- **Modern UI**: Beautiful animations and transitions

## 📁 Key Directories

### `/app`
Contains the Svelte application:
- `src/` - Source code and components
- `static/` - Images, icons, and static assets
- `package.json` - Dependencies and scripts

### `/nginx`
Nginx configuration files:
- `nginx.conf` - Main nginx configuration
- `default.conf` - Server block configuration

### `/docs`
Project documentation and guides.

## 🔧 Configuration

### Environment Variables

Create `.env` file in the `app/` directory:

```env
NODE_ENV=production
```

### Nginx Configuration

The nginx configuration includes:
- Gzip compression
- Security headers
- Static file caching
- SPA routing support
- Health check endpoint

### Logs

View application logs:
```bash
docker-compose logs -f
```

## 🚀 Deployment

### Production

1. **Build and deploy**
   ```bash
   ./deploy.sh
   ```

2. **Update deployment**
   ```bash
   docker-compose down
   docker-compose build --no-cache
   docker-compose up -d
   ```

### Development

1. **Start development server**
   ```bash
   cd app
   yarn dev
   ```

2. **Build for production**
   ```bash
   cd app
   yarn build
   ```

## 🛠️ Development

### Available Scripts

```bash
cd app
yarn dev          # Start development server
yarn build        # Build for production
yarn preview      # Preview production build
yarn lint         # Run ESLint
yarn format       # Format code with Prettier
```

