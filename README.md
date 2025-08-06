#  Portfolio Website v0.3.3
## A NextJS + TailwindCSS app with Sanity deployed in Vercel.

### Abstract
The porpuse of this project is to showcase my skills in web design and front-end development. The design of the website was done in Figma, and then it was reproduced from scracth using the framework Next.js and TailwindCSS. The backend is built on top of Sanity, which allows for fast deployment and a quick connection to the front end. The deployment is done quickly in Vercel and Sanity, therefore a Dockerfile is not needed.

### Architecture
- Languages: HTML, CSS, TypeScript.
- Frameworks: Node.js (React), TailwindCSS (CSS).
- JS DOM: Node.js as JavaScript runtime environment.
- CMS: Sanity.
- Front-End Deployment: Vercel.
- Back-End Deployment: Sanity.

### Design
The main design theme to explore on this project was Depth of Field and 2D/3D styled sheets. For that the pages included sections with variable depth (z-index), overlapping lines and boxes, and overlapped gradients (glassmorphism). The design choice was one of "brutalist" nature, exposing the underlaying grid of the website and the original wireframes, with simple straight lines and a structured approach, but breaking that with animations and movement of the lines. This aligns deeply with the modernist and minimalist artistic trends of the early-to-mid 20th century that inspire me, such as the german *Bauhaus* or the dutch *De Stijl* movements.

Some design choices include the use of only a dark theme --there is no light mode available-- and using a light background at times. Also, there are mostly no pictures, specially in the landing page. All of those are intentional design and technical decisions.

From a technical and documenting standpoint, the mockups and wireframes were previously done in Figma. Later they were styled in CSS using the framekwork TailwindCSS for ease of use, maintainability, and project consistency; as well as, obviously, HTML as markup text of choice.

### Front-End Structure
The site uses app routing and the latest version of Next.js, as well as TailwindCSS for consistent styling. Thus this project uses TypeScript and the DOM heavily to create an interactive experience for the user and dynamically modify and edit the page in real time, also client side. The repository structure is fairly complex for those unfamiliar, but it follows the typical modern Next.js approach, which is extremely modular and allows for easier debugging and reuse of modules. A more detailed look of the routing and structure can be found inside the 'nextjs/' folder README.txt file. 

### Back-End Structure

### Deployment
