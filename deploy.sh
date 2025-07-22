#!/bin/bash

# B Resort Production Deployment Script
echo "🚀 Starting Bebek Resort Hotel Website production deployment..."

# Build and start the Docker container
echo "📦 Building Docker image..."
docker compose build

echo "🔄 Starting services..."
docker compose up -d

echo "⏳ Waiting for service to be ready..."
sleep 10

# Check if the service is running
if curl -f http://localhost:6778/ > /dev/null 2>&1; then
    echo "✅ Deployment successful! Application is running on http://localhost:6778"
else
    echo "❌ Deployment failed. Check logs with: docker compose logs"
    exit 1
fi

echo "📊 Container status:"
docker compose ps

echo "📝 To view logs: docker compose logs -f"
echo "🛑 To stop: docker compose down"
