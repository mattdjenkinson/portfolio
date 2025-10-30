import ContentContainer from "@/components/content-container";
import FeaturedProjectBentoGrid from "@/components/featured-projects-bento";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="relative isolate overflow-hidden">
        <svg
          aria-hidden="true"
          className="stroke-muted/50 absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="fill-accent/5 overflow-visible">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div
          aria-hidden="true"
          className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-1108/632 w-277 bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-50 md:opacity-30"
          />
        </div>
        <ContentContainer className="lg:flex lg:py-40">
          <div className="max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
            <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty sm:text-7xl">
              Matthew Jenkinson
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8 md:max-w-lg">
              Full-stack developer in Bristol, UK. <br />
              Crafting modern websites that feel quick, look sharp and just
              work.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <Button>Recent Projects</Button>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-12 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <Image
                alt="App screenshot"
                src="/projects/kcd-desktop.png"
                width={2432}
                height={1442}
                className="ring-muted w-304 rounded-lg bg-gray-50 shadow-xl ring-1"
              />
            </div>
          </div>
        </ContentContainer>
      </div>
      {/* About */}
      <ContentContainer>
        <h2 className="text-2xl font-semibold">Recent Projects</h2>

        <FeaturedProjectBentoGrid />
      </ContentContainer>
      {/* Projects */}
      <ContentContainer>
        <div>
          <h2 className="text-2xl font-semibold">Projects</h2>
        </div>
      </ContentContainer>
      {/* Contact */}
      <ContentContainer>
        <div>
          <h2 className="text-2xl font-semibold">Contact</h2>
        </div>
      </ContentContainer>
    </>
  );
}
