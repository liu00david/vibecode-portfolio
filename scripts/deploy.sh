#!/bin/bash

# Deployment script for GitHub Pages
echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building the project..."
npm run build

# Export static files
echo "📤 Exporting static files..."
npm run export

# Check if out directory exists
if [ -d "out" ]; then
    echo "✅ Build successful! Static files are in the 'out' directory."
    echo "📁 You can now deploy the contents of the 'out' directory to GitHub Pages or any static hosting service."
else
    echo "❌ Build failed! Please check the error messages above."
    exit 1
fi

echo "🎉 Deployment preparation complete!"
