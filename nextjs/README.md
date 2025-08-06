# My Portfolio Website
## Structure
### Routing and Structure
The repository structure follows the typical modern Next.js approach, which is extremely modular and allows for easier debugging and reuse of modules. 

-  './' root: This is where we find most configuration files, i.e. .json files, tailwind.config.js --to configure Tailwind--, and the gitfiles.
-  '/lib/' : This is where the sanity.js file can be found.
-  '/public/': It includes all public assets like images, svg files, etc.
-  '/src/app/': This is the main directory of our app. It contains the main layout.tsx and page.tsx files, as well as the file globals.css (largely replaced by Tailwind).
-  '/src/app/components/': This is where all website components can be found, including the header, landing page sections, hero section, and other modules.
-  '/src/app/pages/': This is where the other pages are located, including about us page and projects page.

## Getting Started

First run 
```npm install```

To run the development server:

```npm run dev```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
