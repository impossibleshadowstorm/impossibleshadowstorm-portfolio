# Impossible Shadow Storm Portfolio

This is my personal portfolio built with **Next.js** using the **App Router** feature and **Tailwind CSS** for styling.
It includes various sections such as About, Blogs, Contact, Education, Experience, and Projects.
The website is deployed using Vercel and employs GitHub Actions for CI/CD on the main branch.

### Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express.js (for the API)
- **Database**: Prisma (with PostgreSQL)
- **Deployment**: Vercel
- **Containerization**: Docker
- **Version Control**: GitHub
- **Other Packages**:
  - @next/mdx
  - nodemailer
  - react-toastify
  - framer-motion
  - dotenv
  - axios
  - sharp

## Project Structure

The project consists of the following routes:

- **Home**: Landing page with an overview of my work.
- **About**: Information about me.
- **Blogs**: Articles I have written about technology and development.
- **Contact**: Form for contacting me.
- **Education**: Overview of my educational background.
- **Experience**: Summary of my work experience.
- **Projects**: Showcase of my projects.

## Project URL

[Portfolio Website](https://impossibleshadowstorm.vercel.app/)

## Project Repository

[GitHub Repository](https://github.com/impossibleshadowstorm/impossibleshadowstorm-portfolio)

## Running the Project

### Requirements

- Node.js
- Yarn or Docker (if using Docker, it must be installed previously)

### Method 1: Using Yarn

1. **Install dependencies:**

   ```bash
   yarn
   ```

2. **Run the development server:**

   ```bash
   yarn dev
   ```

3. Access the app at [localhost:3000](http://localhost:3000).

### Method 2: Using Docker

1. **Ensure Docker is installed.**
2. **Build the Docker images:**
   ```bash
   docker compose build
   ```
3. **Start the Docker containers:**
   ```bash
   docker compose up
   ```
4. Access the app at [localhost](http://localhost).

## Technologies & Libraries Used

- **Framework**: [Next.js 13](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography), [Tailwind Merge](https://github.com/dcastil/tailwind-merge)
- **Markdown & Syntax Highlighting**: [@mdx-js/loader](https://mdxjs.com/), [@mapbox/rehype-prism](https://github.com/mapbox/rehype-prism), [prismjs](https://prismjs.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Tabler Icons](https://tablericons.com/), [Lucide Icons](https://lucide.dev/)
- **Forms**: [Nodemailer](https://nodemailer.com/) for contact API, [React Toastify](https://fkhadra.github.io/react-toastify/) for notifications
- **Environment Management**: [dotenv](https://github.com/motdotla/dotenv), [dotenv-cli](https://github.com/entropitor/dotenv-cli)
- **Database**: [Prisma](https://www.prisma.io/) with migrations managed through GitHub Actions and deployed on Vercel
- **TypeScript**: Types are provided for TypeScript safety
- **Linting**: ESLint for code quality
- **UI Components**: [Aceternity UI](https://ui.aceternity.com/)

## GitHub Actions and Deployment

- **CI/CD**: Configured GitHub Actions on the main branch to trigger deployment to Vercel.

## Author

This project was created and maintained by [impossibleshadowstorm](https://github.com/impossibleshadowstorm).
