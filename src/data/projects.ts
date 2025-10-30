export interface TechStackItem {
  name: string;
  icon?: string; // URL or path to icon/logo
}

export interface Project {
  id: string;
  title: string;
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
    id: "project-1",
    title: "E-Commerce Platform",
    description: `
# E-Commerce Platform

A modern, full-stack e-commerce platform built with the latest web technologies.

## Key Features

- **Responsive Design**: Fully responsive across all devices
- **Real-time Updates**: Live inventory and order tracking
- **Secure Payments**: Integrated with Stripe for secure transactions
- **Admin Dashboard**: Comprehensive analytics and management tools

Built with performance and user experience in mind.
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
        name: "Shopify",
        icon: "/shopify-logo.svg",
      },
    ],
    images: {
      mobile: "/projects/kcd-mobile.png",
      fullscreen: "/projects/kcd-desktop.png",
    },
    url: "https://kcd.app",
    featured: true,
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: `
# Task Management Application

A collaborative task management tool for teams.

## Features

- Drag-and-drop interface
- Real-time collaboration
- Custom workflows
- Mobile apps for iOS and Android

Perfect for agile teams looking to streamline their workflow.
    `.trim(),
    techStack: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Shopify",
        icon: "/shopify-logo.svg",
      },
    ],
    images: {
      mobile: "/projects/kcd-mobile.png",
      fullscreen: "/projects/kcd-desktop.png",
    },
    url: "https://example-taskapp.com",
    featured: true,
  },
  {
    id: "project-3",
    title: "Analytics Dashboard",
    description: `
# Analytics Dashboard

Real-time analytics platform with beautiful visualizations.

## Highlights

- **Real-time Data**: Live updates with WebSocket connections
- **Custom Reports**: Build your own reports and dashboards
- **Data Export**: Export to CSV, PDF, and Excel
- **API Access**: Full REST API for integrations

Designed for data-driven decision making.
    `.trim(),
    techStack: [
      {
        name: "Vue.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Django",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
    ],
    images: {
      mobile: "/projects/kcd-mobile.png",
      fullscreen: "/projects/kcd-desktop.png",
    },
    url: "https://example-analytics.com",
    featured: true,
  },
  {
    id: "project-4",
    title: "Social Media Platform",
    description: `
# Social Media Platform

A modern social networking platform connecting people worldwide.

## Core Features

- User profiles and connections
- Real-time messaging
- Media sharing (photos, videos)
- Stories and live streaming
- Advanced privacy controls

Built with scalability and security as top priorities.
    `.trim(),
    techStack: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "GraphQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
      },
    ],
    images: {
      mobile: "/projects/kcd-mobile.png",
      fullscreen: "/projects/kcd-desktop.png",
    },
    url: "https://example-social.com",
    featured: true,
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
      (tech) => tech.name.toLowerCase() === techName.toLowerCase()
    )
  );
}
