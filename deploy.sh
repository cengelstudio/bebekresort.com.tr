#!/bin/bash

# Bebek Resort Deployment Script
# This script builds and deploys the application using Docker

set -e

echo "🚀 Starting deployment of Bebek Resort..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    print_error "Docker is not running. Please start Docker and try again."
    exit 1
fi

# Stop and remove existing containers
print_status "Stopping existing containers..."
docker-compose down --remove-orphans

# Build the application
print_status "Building the application..."
docker-compose build --no-cache

# Start the application
print_status "Starting the application..."
docker-compose up -d

# Wait for the application to be ready
print_status "Waiting for the application to be ready..."
sleep 15

# Check if the application is running
if curl -f http://localhost/ > /dev/null 2>&1; then
    print_status "✅ Application is running successfully!"
    print_status "🌐 Access the application at: http://localhost"
    print_status "🔧 Direct Node.js access at: http://localhost:6778"
else
    print_error "❌ Application failed to start properly"
    print_status "Checking container logs..."
    docker-compose logs
    exit 1
fi

print_status "🎉 Deployment completed successfully!"
