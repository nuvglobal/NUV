# Deployment Guide for NUV Growth Website

## Render.com Deployment

1. **Sign up at [Render.com](https://render.com)**
2. **Connect your GitHub repository**
3. **Create a new Static Site**
4. **Render will automatically detect `render.yaml`**
5. **Your site will be live at**: `https://nuv-growth.onrender.com`

### Manual Configuration (if needed):
- Build Command: `yarn install && yarn build`
- Publish Directory: `dist`
- Environment Variables: Already hardcoded in `vite.config.ts`

---

## Fleek.co Deployment

1. **Sign up at [Fleek.co](https://fleek.co)**
2. **Connect your GitHub repository**
3. **Fleek will automatically detect `fleek.json`**
4. **Your site will be deployed on IPFS and available via Fleek's CDN**

### Manual Configuration (if needed):
- Framework: Vite
- Build Command: `yarn install && yarn build`
- Publish Directory: `dist`
- Node Version: 18

---

## Important Notes

- **Environment Variables**: All required environment variables (`VITE_CONVEX_URL`, `VITE_VLY_APP_ID`, `VITE_VLY_MONITORING_URL`) are hardcoded in `vite.config.ts` for static hosting.
- **PWA Support**: Both platforms support PWA features with the configured service worker.
- **Custom Domains**: Both platforms support custom domain configuration in their dashboards.
- **HashRouter**: The site uses HashRouter for client-side routing, which works perfectly on all static hosting platforms.

---

## Build Locally Before Deploying

To test your build locally before deploying: