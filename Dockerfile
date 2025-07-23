# Multi-stage build for Svelte app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY app/package.json app/yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY app/ ./

# Build the application
RUN yarn build

# Production stage
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 svelte

# Copy built application from builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Copy static assets
COPY --from=builder /app/static ./static

# Set proper permissions
RUN chown -R svelte:nodejs /app

# Switch to non-root user
USER svelte

# Expose port
EXPOSE 6778

# Set environment variables
ENV NODE_ENV=production
ENV PORT=6778
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["node", "build"]
