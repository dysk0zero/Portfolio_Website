#  Portfolio Website v0.3.4
## A personal portfolio built with Next.js, TailwindCSS, and Sanity.

---

### Abstract
The porpuse of this project is to showcase my skills in **web design**,**front-end development**, and **digital product architecture**. The entire site was **designed from scratch in Figma** and **developed using Next.js 15 with the App Router and TailwindCSS v4**.

The backend is powered by **Sanity**, a headless CMS that allows for dynamic content rendering and live editing.  
The site is **deployed on Vercel (frontend)** and **Sanity (backend)** — with no Dockerfile needed.

---

### Tech Stack
- **Languages:** HTML, CSS, TypeScript  
- **Frameworks:** React (via Next.js 15), TailwindCSS v4  
- **Runtime:** Node.js  
- **CMS:** Sanity.io  
- **Hosting:** Vercel (frontend), Sanity Studio (backend)

---

### Design
This project explores the idea of **Depth of Field** and **2D/3D layering** through:
- Overlapping containers and **z-index manipulation**
- Experimental use of **glassmorphism**, gradients, and **gridded visual structures**
- Brutalist/minimalist aesthetic influenced by **Bauhaus** and **De Stijl** principles

Key design decisions:
- **Dark mode only** — with intentional light/dark section contrast
- **No images** on the landing page — focusing on typography and structure
- Layouts designed in Figma, and then translated into **pixel-perfect TailwindCSS code**

---

### Front-End Structure
- Built using the **Next.js 15 App Router**
- Uses **TypeScript** for typed component safety
- Fully modular file structure (`/components`, `/app`, etc.)
- **Client-side interactivity** using modern DOM patterns
- **Accessible and SEO-friendly structure** with custom metadata

See the `frontend/README.md` for a detailed breakdown of the route structure and component logic.

---

### Back-End Structure
The backend is handled by **Sanity** using structured content models for:
- Projects
- Testimonials
- Contact information
- Future blog posts (via Portable Text)

Queries are written in GROQ and resolved client-side during page rendering.

See `sanity/README.md` for schema details and content structure.

---

### Deployment
- **Frontend:** Deployed with Vercel (CI/CD configured on push to `main`)  
- **Backend (Sanity Studio):** Deployed via Sanity CLI  
- **No Dockerfile required** due to serverless deployment stack  
- Lighthouse score: **100/100** across all categories

---

### Repository Overview

```bash
├── frontend/        # Next.js + TailwindCSS app
├── sanity/          # Sanity schemas and studio config
└── README.md        # (This file)
```

---

For personal/educational use only. See LICENSE.md for details.
