#!/bin/bash

# B Resort Production Deployment Script
echo "🚀 Starting Bebek Resort Hotel Website production deployment..."

# Build and start the Docker containers
echo "📦 Building Docker images..."
docker compose build

echo "🔄 Starting services..."
docker compose up -d

echo "⏳ Waiting for services to be ready..."
sleep 15

# Check if the nginx service is running
if curl -f http://localhost/ > /dev/null 2>&1; then
    echo "✅ Deployment successful! Application is running on http://bebekresort.com.tr"
    echo "🌐 Nginx is serving the application on port 80"
else
    echo "❌ Deployment failed. Check logs with: docker compose logs"
    exit 1
fi

echo "📊 Container status:"
docker compose ps

echo "📝 To view logs: docker compose logs -f"
echo "📝 To view nginx logs: docker compose logs nginx"
echo "📝 To view app logs: docker compose logs bresort"
echo "🛑 To stop: docker compose down"
