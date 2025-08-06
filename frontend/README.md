Front End
---------------------------------------------------------------------
Folder Structure
---------------------------------------------------------------------

./ (Project Root)
- Contains core configuration and environment files:
  - package.json
  - tailwind.config.js
  - .gitignore
  - .env.local (for environment variables)

./public/
- Contains public assets served directly:
  - ./public/fonts/         -> Custom fonts used in the app
  - ./public/images/        -> Images
  - ./public/icons/         -> SVGs, icons, etc.

./src/lib/
- Utility files and API clients:
  - ./src/lib/sanity/client.ts             -> Preconfigured Sanity client using environment variables
  - ./src/lib/sanity/getTestimonials.ts    -> Fetches the "testimonial" schema from Sanity

./src/app/
- Main application directory:
  - page.tsx           -> Homepage
  - layout.tsx         -> Root layout, metadata, font and color setup
  - globals.css        -> Global styles and Tailwind base layer

./src/app/components/
- Component organization:
  - ./components/home/     -> Components specific to the landing page
  - ./components/ui/       -> Reusable UI components (buttons, carousel, etc.)

./src/app/(pages)/
- Route segments:
  - Includes secondary pages like the About or Projects page

---------------------------------------------------------------------
Getting Started
---------------------------------------------------------------------

1. Installation

Install dependencies:
    npm install

Start the development server:
    npm run dev

Visit in your browser:
    http://localhost:3000

---------------------------------------------------------------------
Sanity CMS Integration
---------------------------------------------------------------------

1. Install Required Packages:
    npm install --legacy-peer-deps next-sanity @sanity/image-url

2. Set Up Environment Variables:

Create a file `.env.local` in the root directory with the following content:

    NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_ID
    NEXT_PUBLIC_SANITY_DATASET=production

You can find your project ID in:
    ./sanity/sanity.config.ts
