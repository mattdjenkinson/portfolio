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
      "A fast, scalable e-commerce platform built from the ground up with a custom CMS.",
    description: `
CarVeto is a full-stack e-commerce rebuild designed to replace an outdated Wordpress setup with a faster, more secure, and fully custom platform.

## Key Features

- **Queue-based Architecture**: Emails, PDFs, and notifications are handled through a queue system for reliability and scalability.
- **Responsive Design**: Seamless experience across all devices.
- **Real-time API**: Live vehicle data fetched from DVLA and other third-party APIs.
- **Secure Payments**: Integrated with Braintree for smooth, secure transactions.
- **Custom CMS**: Content and customers managed easily through Payload CMS.
- **Fully Editable UI**: Every section of the site is client-editable through the dashboard.

Optimized for performance and flexibility, the site uses static generation with revalidation and selective server-side rendering for dynamic content.
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
      "A sleek, easy-to-manage photography portfolio with a custom CMS and intuitive admin tools.",
    description: `
Ivy & Pine Photography is a modern portfolio site built to help busy photographers showcase their work beautifully — without the stress of managing complex systems.

## Key Features

- **Custom CMS**: Fully editable content via Payload CMS.
- **Clean, Responsive Design**: Optimized for showcasing high-quality photography.
- **Dynamic Contact Form**: Built for events and wedding fairs to capture client enquiries.

Designed for simplicity and speed, the site is statically generated with revalidation for new content and minimal server rendering for dynamic sections.
    `.trim(),
    techStack: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
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
      "A bold, performance-focused site for a local weightlifting club, powered by a custom CMS.",
    description: `
A statically generated website for Resilience Weightlifting, designed to highlight their coaches and training ethos through a fast, modern frontend.

## Key Features

- **Static Generation**: Blazing fast load times with on-demand revalidation.
- **Custom CMS**: Content management powered by Directus.
- **Editable Layouts**: Coaches and pages easily updated via the dashboard.
    `.trim(),
    techStack: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
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
    id: "icescape",
    title: "Icescape",
    shortDescription:
      "Sleek, easy-to-manage marketing sites for a national ice rink chain. Built with Nextjs and Tailwind CSS.",
    description: `
Icescape is a modern marketing site built to help the national ice rink chain showcase their locations and services. The build was designed in a way that allows them to deploy new locations quickly and easily.

## Key Features

- **Static Generation**: Blazing fast load times with on-demand revalidation.
- **Custom CMS**: Fully editable content via Hygraph CMS.
- **Multi-location**: One codebase for multiple locations.

    `.trim(),
    techStack: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
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
      mobile: "/projects/icescape_mobile.jpg",
      fullscreen: "/projects/icescape_desktop.jpg",
    },
    url: "https://www.icescapetrinitypark.com",
    featured: true,
  },
  {
    id: "kcd",
    title: "Kings County Distillery",
    shortDescription:
      "A clean, modern Shopify storefront for Brooklyn’s oldest whiskey distillery.",
    description: `
A Shopify-powered e-commerce store for Kings County Distillery — built to capture the brand’s craftsmanship through a simple, elegant shopping experience.

## Key Features

- **Custom Shopify Theme**: Built from scratch for flexibility and performance.
- **Client-Friendly CMS**: Fully editable via Shopify’s dashboard.
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
    featured: false,
  },
  {
    id: "rossella",
    title: "Rossella Restaurant",
    shortDescription:
      "A contemporary restaurant site and online shop built with Shopify.",
    description: `
Rossella’s new site brings their North London restaurant online — blending a welcoming aesthetic with a straightforward e-commerce experience.

## Key Features

- **Custom Shopify Theme**: Clean, modern design built for flexibility.
- **Client Control**: Easy updates through Shopify’s native admin tools.
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
      "An elegant Shopify e-commerce site for the UK-based alcohol brand Windrush 1027.",
    description: `
An e-commerce site for Windrush 1027 — designed to balance refined branding with a seamless buying experience.

## Key Features

- **Custom Shopify Theme**: Purpose-built to match brand identity.
- **Fully Editable**: Managed entirely through the Shopify dashboard.
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
    id: "local-bristol",
    title: "Local Bristol",
    shortDescription: "A modern, content-driven site for Local Bristol.",
    description: `
A statically generated website for Local Bristol — an independent bar and restaurant in Bedminster that champions local breweries, distilleries, and suppliers. The site provides a modern platform to showcase their seasonal menus, events, and community-focused dining experience.

## Key Features

- **Static Generation**: Ultra-fast pages with revalidation for new content.
- **Hygraph CMS**: Content managed effortlessly through a clean interface.
- **Custom Layouts**: Fully adjustable and easy to update.
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
      mobile: "/projects/local_mobile.jpg",
      fullscreen: "/projects/local_desktop.jpg",
    },
    url: "https://www.localbristol.co.uk",
    featured: false,
  },
  {
    id: "laura-bennett",
    title: "Laura Bennett",
    shortDescription:
      "A minimal, content-driven portfolio site for freelance copywriter Laura Bennett.",
    description: `
A statically generated website for freelance copywriter Laura Bennett — giving her a simple, professional space to showcase her writing and services.

## Key Features

- **Static Generation**: Ultra-fast pages with revalidation for new content.
- **Hygraph CMS**: Content managed effortlessly through a clean interface.
- **Custom Layouts**: Fully adjustable and easy to update.
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
