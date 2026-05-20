
```markdown
# Youth Vanguard: Stability & Progress Campaign

A modern, full-stack web platform built for civic advocacy, political critique, and public awareness. This repository features a "Glassmorphism" dark-mode UI, an SEO-interception strategy, and a secure MongoDB backend designed to operate behind US-based reverse proxies for contributor protection.

## 🚀 Features

- **SEO Interception Strategy:** HTML meta tags and headings are optimized to capture search traffic for specific keywords (e.g., "How to join CJP"), redirecting users to educational counter-narratives.
- **Advanced UI/UX:** Built with pure HTML/CSS/JS featuring frosted glass effects (Glassmorphism), glowing background orbs, and scroll-triggered animations.
- **Secure Drop Box:** A fully functional submission form connected to a MongoDB backend to securely collect tips, evidence, and suggestions.
- **Dynamic Contact Links:** Floating WhatsApp and Telegram buttons that fetch their URLs dynamically from the server's `.env` file—allowing admins to change group links without altering frontend code.
- **IP Tracing & Security:** Backend middleware configured to extract and log IPs safely when routed through reverse proxies (like Cloudflare).

## 📂 Repository Structure

```text
youth-stability-campaign/
├── public/                 # Frontend Website
│   ├── index.html          # Main landing page & SEO tags
│   ├── styles.css          # Glassmorphism UI & responsive design
│   └── script.js           # Scroll animations & API fetch logic
└── server/                 # Backend Node.js/Express API
    ├── package.json        # Node dependencies
    ├── .env                # Secret keys and dynamic links (Create this!)
    ├── config.js           # MongoDB connection logic
    ├── models.js           # Database schemas
    └── server.js           # Main Express server & routes

```
## 🛠️ Tech Stack
 * **Frontend:** HTML5, CSS3, Vanilla JavaScript, FontAwesome (Icons)
 * **Backend:** Node.js, Express.js
 * **Database:** MongoDB (via Mongoose)
 * **Security:** CORS, Environment Variables, Proxy-Trust configurations
## 💻 Local Setup & Installation
### Prerequisites
 1. Node.js installed on your machine.
 2. A free MongoDB Atlas account and a connection string.
### 1. Setup the Backend
Navigate to the server directory, install dependencies, and set up your environment variables.
```bash
cd server
npm install

```
Create a .env file inside the server/ folder and add the following:
```env
PORT=5000
MONGODB_URI=mongodb+srv://<your_username>:<your_password>@cluster0.mongodb.net/campaign_db?retryWrites=true&w=majority
ADMIN_SECRET_KEY=Create_A_Very_Long_Secret_Password_Here

# Social Links (Update these to change where the floating icons point)
WHATSAPP_LINK=[https://wa.me/1234567890](https://wa.me/1234567890)
TELEGRAM_LINK=[https://t.me/your_telegram_channel](https://t.me/your_telegram_channel)

```
Start the backend server:
```bash
npm start

```
*You should see a message saying "Infrastructure active on port 5000" and "Database Status: Connected".*
### 2. Setup the Frontend
Since the frontend is pure HTML/CSS/JS, you don't need to install anything.
Simply open public/index.html in your web browser, or use a tool like VS Code's **Live Server** extension.
*(Note: If you deploy the backend to a live server, remember to change http://localhost:5000 in public/script.js to your new live backend URL).*
## 🌍 Deployment Guide for Maximum Security
To properly shield this application and utilize the IP routing, deploy the two halves separately:
### Step 1: Deploy the Backend (Offshore/VPS)
Host the server/ folder on a Node.js hosting provider (like Render, Heroku, or an offshore Linux VPS).
 * Ensure you add your .env variables to the host's environment settings.
 * Note your live API URL (e.g., https://api.yourdomain.com).
### Step 2: Connect Frontend to Live API
Open public/script.js and change the fetch URLs from http://localhost:5000/... to your new live backend URL.
### Step 3: Deploy Frontend & Shield with Cloudflare
Host the public/ folder on a static host like **Vercel**, **Netlify**, or **GitHub Pages**.
 * Register a custom domain.
 * Route your domain through **Cloudflare**.
 * Turn on the "Orange Cloud" (Proxied) setting in Cloudflare to hide your server's true IP and enforce US-based routing for DMCA protection.
## ⚖️ Legal & Copyright Notice
**Fair Use Notice:**
This software and associated website operate under Section 107 of the US Copyright Act. The materials and structural critiques provided are for the purposes of political commentary, news reporting, and public education.
**Open Source:**
