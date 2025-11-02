import ContentContainer from "@/components/content-container";
import { ProjectPageHeader } from "../_components/project-page-header";
import { projects } from "@/data/projects";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { TechStackList } from "@/components/tech-stack-list";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import { getProjectById } from "@/data/projects";
import { Metadata } from "next";
import BackToProjectsButton from "../_components/back-to-projects";

export async function generateStaticParams() {
  const projectsData = projects;

  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const project = getProjectById(id as string);

  return {
    title: project?.title || "",
    description: project?.shortDescription || "",
    openGraph: {
      images: [
        {
          url: `/api/og?title=${project?.title} - Projects&theme=dark`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const project = getProjectById(id);

  return (
    <>
      <ContentContainer className="relative py-20 pb-40">
        <ProjectPageHeader title={project?.title || ""} />
        <TechStackList techStack={project?.techStack || []} maxItems={100} />

        <div className="relative mx-auto mt-12 mb-18 flex w-full items-center justify-center">
          {/* Desktop/Laptop View - Background */}
          <div className="relative w-full">
            <Image
              src={project?.images.fullscreen || ""}
              alt={`${project?.title} desktop view`}
              width={1200}
              height={675}
              className="w-full rounded-xl object-cover shadow-2xl"
              priority
            />
          </div>

          {/* Mobile View - Overlapping on the right */}
          <div className="absolute right-0 -bottom-8 z-10 w-1/3 max-w-[300px] sm:right-8 sm:-bottom-12 md:right-16">
            <Image
              src={project?.images.mobile || ""}
              alt={`${project?.title} mobile view`}
              width={300}
              height={650}
              className="w-full rounded-xl shadow-2xl"
              priority
            />
          </div>
        </div>

        <div className="prose dark:prose-invert mt-12 mb-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {project?.description || ""}
          </ReactMarkdown>
        </div>

        {project?.url && (
          <a href={project?.url} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="">
              <ExternalLinkIcon className="size-4" />
              View live site
            </Button>
          </a>
        )}
      </ContentContainer>
      <BackToProjectsButton />
    </>
  );
};

export default ProjectPage;
