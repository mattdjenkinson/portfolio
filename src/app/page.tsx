import ContentContainer from "@/components/content-container";
import FeaturedProjectBentoGrid from "@/components/featured-projects-bento";
import HomeHero from "@/components/home-hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HomeHero />
      {/* Featured Projects */}
      <ContentContainer className="-mt-[400px]" id="projects">
        <h2 className="relative z-30 text-2xl font-semibold">
          Recent Projects
        </h2>
        <FeaturedProjectBentoGrid />
        <div className="mt-4 flex justify-end">
          <Link href="/projects">
            <Button variant="link">View All Projects</Button>
          </Link>
        </div>
      </ContentContainer>
      {/* About */}
      <ContentContainer id="about" className="flex flex-col gap-4">
        <h2 className="pb-6 text-2xl font-semibold">About</h2>
        <p className="max-w-2xl">
          Hey, I&apos;m Matt, a full-stack developer based in Bristol who loves
          building things that just feel right. I care about clean interfaces,
          predictable systems, and those little details that make a web app feel
          effortless.
        </p>

        <p className="max-w-2xl">
          These days I&apos;m focused on creating thoughtful, reliable products,
          the kind that work beautifully behind the scenes and feel seamless up
          front. I like turning tricky problems into simple, satisfying
          solutions that make sense to both users and developers.
        </p>

        <p className="max-w-2xl">
          When I&apos;m not coding, you&apos;ll probably find me with music
          playing far too loud or watching Aston Villa test my emotional
          stability for ninety minutes 😒.
        </p>
      </ContentContainer>
    </>
  );
}
