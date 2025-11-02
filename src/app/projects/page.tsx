import { projects } from "@/data/projects";
import ContentContainer from "@/components/content-container";
import { ProjectPageHeader } from "./_components/project-page-header";
import { ProjectCard } from "./_components/project-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "My most recent projects",
  openGraph: {
    images: [
      {
        url: "/api/og?title=Matthew Jenkinson - Projects&description=My most recent projects&theme=dark",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const ProjectsPage = () => {
  return (
    <ContentContainer className="py-20">
      <ProjectPageHeader
        title="All Projects"
        description="A collection of recent projects"
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </ContentContainer>
  );
};

export default ProjectsPage;
