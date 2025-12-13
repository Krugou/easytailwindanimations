#!/bin/bash

# Deploy script for Easy Tailwind Animations to GitHub Pages
# This script builds the Next.js app and prepares it for GitHub Pages deployment

set -e  # Exit on error

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project root?"
    exit 1
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf out .next

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run linting
echo "🔍 Running linter..."
npm run lint || echo "⚠️  Linting completed with warnings"

# Build the project
echo "🔨 Building for production..."
NODE_ENV=production npm run build

# Check if build was successful
if [ ! -d "out" ]; then
    echo "❌ Error: Build failed - 'out' directory not found"
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📂 Static files are in the 'out' directory"
echo ""
echo "Next steps:"
echo "1. The GitHub Actions workflow will automatically deploy on push to main"
echo "2. Or manually trigger deployment from the Actions tab"
echo "3. Files are ready in the 'out' directory for manual deployment if needed"
echo ""
echo "🎉 Deployment preparation complete!"
