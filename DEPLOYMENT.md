# GitHub Pages Deployment Guide

## Quick Setup (Easiest Method)

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site

### 3. Your site will be available at:
`https://yourusername.github.io/vibecode-portfolio`

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
npm run build
npm run export

# The 'out' folder contains your static files
# You can upload these to any static hosting service
```

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Enable custom domain in GitHub Pages settings

## Troubleshooting

- Make sure your repository is public (required for free GitHub Pages)
- Check the Actions tab for deployment logs
- The first deployment might take a few minutes
