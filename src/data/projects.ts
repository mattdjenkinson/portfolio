export interface TechStackItem {
  name: string;
  icon?: string; // URL or path to icon/logo
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string; // Short plain text description
  description: string; // Markdown supported
  techStack: TechStackItem[];
  images: {
    mobile: string; // Mobile size image
    fullscreen: string; // Full screen image
  };
  url: string; // URL to the project
  featured?: boolean; // Optional: to highlight certain projects
}

export const projects: Project[] = [
  {
    id: "carveto",
    title: "CarVeto",
    shortDescription:
      "A modern, full-stack e-commerce platform with custom CMS.",
    description: `
A modern, full-stack e-commerce platform built with the latest web technologies. The goal of this project was to replace an old Wordpress site with a modern, fast, secure and fully customisable e-commerce platform.

## Key Features

- **Queue-based architecture**: Emails, PDFs and customer notifications are generated and sent using a queue-based architecture to ensure reliability and scalability.
- **Responsive Design**: Fully responsive across all devices
- **Real-time API**: Real time retrival of vehicle data from the DVLA API and other third party APIs.
- **Secure Payments**: Integrated with Braintree for secure transactions
- **Admin Dashboard**: Admin dashboard for managing content and customers using Payload CMS
- **Fully Customisable UI**: Fully customisable by the client via the admin dashboard.

Built with performance and user experience in mind. Pages are staticly generated and revalidated when new content is published via the admin dashboard with only small pockets of server side rendering for dynamic content.
    `.trim(),
    techStack: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Upstash",
        icon: "/upstash-icon-dark-bg.svg",
      },
    ],
    images: {
      mobile: "/projects/carveto_mobile.jpg",
      fullscreen: "/projects/carveto_desktop.jpg",
    },
    url: "https://www.carveto.co.uk",
    featured: true,
  },
  {
    id: "iap-photography",
    title: "Ivy & Pine Photography",
    shortDescription:
      "A modern, fully customisable photography portfolio website with a custom CMS. Using the latest Next.js and React features.",
    description: `
A modern, fully customisable photography portfolio website with a custom CMS. The goal of this project was to give the client a clean portfolio website to showcare their portfolio but also keep it simple and easy to manage given their busy schedule

## Key Features

- **Fully Customisable UI**: Fully customisable by the client via the admin dashboard.
- **Admin Dashboard**: Admin dashboard for managing content using Payload CMS

Built with performance and user experience in mind. Pages are staticly generated and revalidated when new content is published via the admin dashboard with only small pockets of server side rendering for dynamic content.

Along side this build I created a dynamic form that the client can use at wedding fayres and events to collect contact details and enquiries from potential clients.
    `.trim(),
    techStack: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
    images: {
      mobile: "/projects/iap_mobile.jpg",
      fullscreen: "/projects/iap_desktop.jpg",
    },
    url: "https://www.ivyandpinephotography.com",
    featured: true,
  },
  {
    id: "rw-weightlifting",
    title: "Resilience Weightlifting",
    shortDescription:
      "A Next.js statically generated weightlifting website with a custom CMS.",
    description: `
A Next.js statically generated weightlifting website with a custom CMS. The goal of this project was to create a place to showcase the weightlifting club and its coaches.

## Key Features

- **Statically Generated**: Pages are staticly generated and revalidated when new content is published via the admin dashboard with only small pockets of server side rendering for dynamic content.
- **Fully Customisable UI**: Fully customisable by the client via the admin dashboard.
- **Admin Dashboard**: Admin dashboard for managing content using Directus CMS

    `.trim(),
    techStack: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "GraphQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
    ],
    images: {
      mobile: "/projects/rw_mobile.jpg",
      fullscreen: "/projects/rw_desktop.jpg",
    },
    url: "https://www.resilienceweightlifting.com",
    featured: true,
  },
  {
    id: "kcd",
    title: "Kings County Distillery",
    shortDescription:
      "A Shopify e-commerce store for US whiskey brand Kings County Distillery.",
    description: `
A Shopify e-commerce store for US whiskey brand Kings County Distillery. The goal of this project was to create a clean, modern and mobile friendly e-commerce store with a custom theme that the client could easily manage and update.

## Key Features

- **Fully Customisable UI**: Fully customisable by the client via the Shopify admin dashboard.



    `.trim(),
    techStack: [
      {
        name: "Shopify",
        icon: "/shopify-logo.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
    images: {
      mobile: "/projects/kcd_mobile.jpg",
      fullscreen: "/projects/kcd_desktop.jpg",
    },
    url: "https://www.kingscountydistillery.com",
    featured: true,
  },
  {
    id: "rossella",
    title: "Rossella Restaurant",
    shortDescription:
      "A Shopify e-commerce store for Italian restaurant Rossella.",
    description: `
A Shopify e-commerce store for Italian restaurant Rossella. The goal of this project was to create a clean, modern and mobile friendly restaurant website with a custom theme that the client could easily manage and update.

## Key Features

- **Fully Customisable UI**: Fully customisable by the client via the Shopify admin dashboard.


    `.trim(),
    techStack: [
      {
        name: "Shopify",
        icon: "/shopify-logo.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
    images: {
      mobile: "/projects/rossella_mobile.jpg",
      fullscreen: "/projects/rossella_desktop.jpg",
    },
    url: "https://www.rossella.co.uk",
    featured: false,
  },
  {
    id: "windrush1027",
    title: "Windrush 1027",
    shortDescription:
      "A Shopify e-commerce store for UK based alcohol brand Windrush 1027.",
    description: `
A Shopify e-commerce store for UK based alcohol brand Windrush 1027. The goal of this project was to create a clean, modern and mobile friendly e-commerce store with a custom theme that the client could easily manage and update.

## Key Features

- **Fully Customisable UI**: Fully customisable by the client via the Shopify admin dashboard.


    `.trim(),
    techStack: [
      {
        name: "Shopify",
        icon: "/shopify-logo.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
    images: {
      mobile: "/projects/windrush1027_mobile.jpg",
      fullscreen: "/projects/windrush1027_desktop.jpg",
    },
    url: "https://www.windrush1027.com",
    featured: false,
  },
  {
    id: "laura-bennett",
    title: "Laura Bennett",
    shortDescription:
      "A Next.js statically generated website for Laura Bennett, a freelance copywriter.",
    description: `
A Next.js statically generated website for Laura Bennett, a freelance copywriter. The goal of this project was to give Laura a place to showcase her work and services to potential clients.

## Key Features

- **Statically Generated**: Pages are staticly generated and revalidated when new content is published via the admin dashboard with only small pockets of server side rendering for dynamic content.
- **Fully Customisable UI**: Fully customisable by the client via the admin dashboard.
- **Admin Dashboard**: Admin dashboard for managing content using Hygraph CMS

    `.trim(),
    techStack: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "GraphQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
    ],
    images: {
      mobile: "/projects/lb_mobile.jpg",
      fullscreen: "/projects/lb_desktop.jpg",
    },
    url: "https://www.laurabennettwrites.com",
    featured: false,
  },
];

// Helper functions
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectsByTech(techName: string): Project[] {
  return projects.filter((project) =>
    project.techStack.some(
      (tech) => tech.name.toLowerCase() === techName.toLowerCase(),
    ),
  );
}
