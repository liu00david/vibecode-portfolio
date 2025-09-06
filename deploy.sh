#!/bin/bash

echo "🚀 Deploying portfolio to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ ! -d "out" ]; then
    echo "❌ Build failed! No 'out' directory found."
    exit 1
fi

echo "✅ Build successful!"

# Create a temporary directory for clean deployment
echo "🧹 Creating clean deployment directory..."
TEMP_DIR=$(mktemp -d)
cp -r out/* "$TEMP_DIR/"

# Create a completely clean gh-pages branch
echo "🔄 Creating clean gh-pages branch..."

# Delete the gh-pages branch if it exists
if git show-ref --verify --quiet refs/heads/gh-pages; then
    git branch -D gh-pages
fi

# Delete remote gh-pages branch if it exists
if git ls-remote --heads origin gh-pages | grep -q gh-pages; then
    git push origin --delete gh-pages
fi

# Create a new orphan branch (no history)
git checkout --orphan gh-pages

# Remove all files
git rm -rf . 2>/dev/null || true

# Copy only the built files from temp directory
echo "📋 Copying built files..."
cp -r "$TEMP_DIR"/* .

# Clean up temp directory
rm -rf "$TEMP_DIR"

# Add all files to git
git add .

# Create initial commit
git commit -m "Deploy portfolio to GitHub Pages"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin gh-pages

# Switch back to main
git checkout main

echo "🎉 Deployment complete!"
echo "Your site will be available at: https://liu00david.github.io/vibecode-portfolio"
echo "It may take a few minutes for GitHub Pages to update."
