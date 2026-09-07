# 📡 RouterGuide - High-Performance Router Login & Setup Directory

A modern, lightning-fast static directory and knowledgebase for default router gateway IPs, default credentials, ISP configurations, and setup guides built with **Astro** and **Tailwind CSS**.

---

## 🚀 Key Features

- **⚡ Zero Client-Side JavaScript by default**: 100/100 Lighthouse score for top Google search ranking.
- **🌐 Flat Root Routing**: Clean URLs like `/192-168-1-1`, `/tp-link`, `/netgear`, `/jio`, `/airtel` without deep nested folders.
- **🔍 Instant Live Search**: Search across router models, default IPs, and brands.
- **📊 Master Password Database**: Master list of default usernames and passwords across top manufacturers.
- **🛠️ Tools Included**: Live Public IP detection and local gateway detection guide (`/what-is-my-ip`).
- **📈 Built-in SEO**: XML Sitemap (`sitemap-index.xml`), `robots.txt`, and Schema.org JSON-LD structured data.
- **🔄 Google Sheets Headless CMS**: Built-in Apps Script for 1-click publishing from Google Sheets to Cloudflare Pages or Netlify.

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Sitemap**: `@astrojs/sitemap`

---

## 📦 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```
Open `http://localhost:4321` in your browser.

### 3. Build for Production
```bash
npm run build
```
Static production output will be generated inside the `dist/` directory.

---

## ☁️ Deployment (Cloudflare Pages / Netlify)

### Cloudflare Pages
1. Create a new project in [Cloudflare Pages](https://dash.cloudflare.com/).
2. Connect your GitHub repository `Atulscript/routerapp`.
3. Set the following build settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Deploy!
