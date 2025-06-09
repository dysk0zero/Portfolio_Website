# My Portfolio Website
## Structure
### Repository Structure
The site uses app routing and the latest version of Next.js, as well as TailwindCSS for consistent styling. The repository structure is fairly complex, but it follows the typical modern Next.js approach, which is extremely modular and allows for easier
debugging and reuse of modules. 

-  './' root: This is where we find most configuration files, i.e. .json files, tailwind.config.js --to configure Tailwind--, and the gitfiles.
-  '/lib/' : This is where the sanity.js file can be found.
-  '/public/': It includes all public assets like images, svg files, etc.
-  '/src/app/': This is the main directory of our app. It contains the main layout.tsx and page.tsx files, as well as the file globals.css (largely replaced by Tailwind).
-  '/src/app/components/': This is where all website components can be found, including the header, landing page sections, hero section, and other modules.
-  '/src/app/pages/': This is where the other pages are located, including about us page and projects page.

## Getting Started

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Vercel Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
