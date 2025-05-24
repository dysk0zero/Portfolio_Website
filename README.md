#  Portfolio Website
## NextJS + TailwindCSS app with Sanity deployed in Vercel. 

### Abstract
The porpuse of this project is to showcase my skills in web design and front-end development. The design of the website was done in Figma, and then it was reproduced from scracth using the framework Next.js and TailwindCSS. The backend is built on
top of Sanity, which allows for fast deployment and a quick connection to the front end. The deployment is done quickly in Vercel and Sanity, therefore a Dockerfile is not needed.

### Front-End Structure
The site uses app routing and the latest version of Next.js, as well as TailwindCSS for consistent styling. The repository structure is fairly complex, but it follows the typical modern Next.js approach, which is extremely modular and allows for easier
debugging and reuse of modules.

-  */.* root: This is where we find most configuration files, i.e. .json files, tailwind.config.js --to configure Tailwind--, and the gitfiles.
-  /lib/ : Here can be found the sanity.js file.
-  /public/: It includes all public assets like images, svg files, etc.
-  /src/app/: Here is the main directory of our app. It contains the main layout.tsx and page.tsx files, as well as the file globals.css (largely replaced by Tailwind).
-  /src/app/components/: Here is where all website components can be found, including the header, landing page sections, hero section, and other modules.
-  /src/app/pages/: Here is where the other pages are saved, including about us page and projects page.

--root
    |
    |--lib
    |--public
    |--scr/app
          |
          |--components
          |--pages
