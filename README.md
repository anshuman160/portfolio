# ☁️ Anshuman Yadav — Senior Cloud Engineer Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Site-anshuman160.github.io%2Fportfolio-38bdf8?style=for-the-badge&logo=githubpages&logoColor=white)](https://anshuman160.github.io/portfolio/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/anshuman160/portfolio/actions)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge)](LICENSE)

A high-performance, cyber-cloud themed portfolio website engineered for **Anshuman Yadav**, Senior Cloud Engineer specializing in GCP, Azure, Microsoft 365, Python, Linux Administration, and CI/CD Automation.

🌐 **Live Website**: [https://anshuman160.github.io/portfolio/](https://anshuman160.github.io/portfolio/)

---

## ✨ Key Features & Architecture

### 🖥️ 1. Interactive Cloud CLI Terminal Shell (`anshuman@cloud-shell:~$`)
* Functional embedded terminal emulator allowing visitors to interactively query profile details.
* Interactive keyboard commands & quick buttons:
  * `whoami` — Role summary and specialization.
  * `experience` — Detailed career timeline at **Concentrix** & **Teleperformance**.
  * `skills` — Core cloud, networking, Linux, & development stack.
  * `projects` — Production web platforms and deployed cloud apps.
  * `certs` — Professional credentials from Google & Microsoft.
  * `contact` — Phone and email contact details.
  * `clear` — Clear shell screen.

### 🎨 2. Cyber-Cloud Glassmorphic UI/UX
* Deep dark slate palette (`#0b0f19`) with ambient radial glow aura backgrounds (`#38bdf8`, `#6366f1`).
* Glassmorphism cards with smooth hover physics and typography powered by Google Fonts (*Outfit*, *Inter*, *JetBrains Mono*).

### 🛠️ 3. Categorized Technical Skills Matrix
* Filterable skill pills (`Cloud & DevOps`, `Networking & Systems`, `Development & AI`).
* Showcases Azure, M365, Render Cloud, GitHub CI/CD, Linux CLI (Debian/Ubuntu), NGINX, SSL, TCP/IP, DNS, OSPF, Python, Flask, Tailwind CSS, and Root Cause Analysis (RCA).

### 💼 4. Deployed Projects Showcase
* **Interactive Cloud Infrastructure Portfolio** ([Live Site](https://anshuman160.github.io/my-portfolio/)) — Next.js, GitHub Actions CI/CD, Edge Deployment.
* **Grandmaster Web Chess & Minimax AI** ([Play Live](https://anshuman160.github.io/chess-game/)) — Vanilla JS (ES6+), Minimax Engine, Alpha-Beta Pruning, Web Audio API.
* **IAESCON 2026 Official Web Portal** — Responsive conference portal built for the 27th Annual Conference of IAES (*Classified as per client request*).
* **Sharda Foundation Website Deployment** ([Live Site](https://sharda-foundation.onrender.com/)) — Tailwind CSS static web app deployed on Render with GitHub build triggers.
* **Cancer Awareness Medical Bot** ([Live Site](https://medical-bot-on8l.onrender.com)) — Python & Flask conversational AI tool with custom NLP logic layer.

### ✉️ 5. Real-Time Contact Form Integration
* Integrated FormSubmit AJAX API delivering visitor messages directly to `yadavanshoo123@gmail.com` with a fail-safe `mailto:` client fallback.

### 🚀 6. Zero-Downtime GitHub Actions CI/CD Pipeline
* Automated build & deployment pipeline configured in `.github/workflows/deploy.yml` that compiles the Vite production bundle and deploys to GitHub Pages on every `git push main`.

---

## 📁 Repository Structure

```
anshuman-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml       # Automated GitHub Pages Deployment Workflow
├── dist/                    # Compiled production build output
├── src/
│   └── main.js              # CLI terminal logic, skill filters, & contact handler
├── index.html               # Main HTML5 page & layout grid
├── style.css                # Cyber-Cloud CSS design system & glassmorphism
├── vite.config.js           # Vite bundler & relative asset path configuration
├── package.json             # NPM dependencies & build scripts
└── README.md                # Project documentation
```

---

## 🛠️ Local Development & Installation

To run this project locally on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anshuman160/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<p align="center">
  Crafted with ❤️ by <strong>Anshuman Yadav</strong> • Senior Cloud Engineer
</p>
