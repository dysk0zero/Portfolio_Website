# My Portfolio Website
## Structure
### General Routing and Structure
The repository structure follows the typical modern Next.js approach, which is extremely modular and allows for easier debugging and reuse of modules. 

-  '.' root: This is where we find most configuration files, i.e. .json files, tailwind.config.js --to configure Tailwind--, and the gitfiles.
-  './lib' : This is where the sanity files and hooks are located.
-  './public': It includes all public assets like images, svg files, etc.
-  './src/app': This is the main directory of our app. It contains the main layout.tsx and page.tsx files, as well as the file globals.css (largely replaced by Tailwind).
-  './src/app/components': This is where all website components can be found, including the header, landing page sections, hero section, and other modules.
-  './src/app/pages': This is where the other pages are located, including about us page and projects page.

### './src/lib'
- './src/lib/sanity/client.ts': Connects to the sanity client using the environment variables 'projectId' and 'dataset' through the API.
- './src/lib/sanity/getTestimonials.ts': Fetches the Sanity schema "testimonial".

### './public'
- './public/fonts': Stores the fonts used in this project.

### './src/app'
- './src/app/page.tsx': Landing page.
- './src/app/layout.tsx': Website layout page. Includes metadata, preloads local fonts, defines using Montserrat for <body> and the text color.
- './src/app/globals.css': File containing all CSS and TailwindCSS configuration.
- './src/app/components/home/': Folder containing all components for the landing page.
- './src/app/components/ui/': Folder containing all reusable UI global components.

---

## Getting Started
### Setting Up
First run 

```npm install```

To run the development server:

```npm run dev```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Connect to Sanity
Run 

```npm install --legacy-peer-deps next-sanity @sanity/image-url```

Then create a '.env.local' file in the '.' directory with the following code:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_ID
NEXT_PUBLIC_SANITY_DATASET=production
```

You can find your ID in '/sanity/sanity.config.ts'.