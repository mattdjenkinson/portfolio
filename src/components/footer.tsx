import { Suspense } from "react";
import Copyright from "./copyright";
import ContentContainer from "./content-container";
import SpotifyWrapper from "./spotify-wrapper";
import { File, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground pb-18 md:pb-4">
      {/* Contact */}
      <ContentContainer id="contact">
        <h2 className="text-2xl font-semibold">Let&apos;s Chat</h2>
        <a
          href="mailto:contact@matthewjenkinson.dev"
          className="hover:text-primary mt-8 flex w-fit items-center justify-start gap-2 transition-colors duration-300"
        >
          <Mail className="h-4 w-4" />
          <span>contact@matthewjenkinson.dev</span>
        </a>

        <a
          href="https://github.com/mattdjenkinson"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary mt-4 flex w-fit items-center justify-start gap-2 transition-colors duration-300"
        >
          <Github className="h-4 w-4" />
          <span>GitHub</span>
        </a>
      </ContentContainer>

      {/* Spotify */}
      <ContentContainer className="pt-0 pb-0" margin="0px">
        <h3 className="text-md pb-2 font-semibold">
          What I&apos;m Listening To
        </h3>
        <Suspense>
          <SpotifyWrapper />
        </Suspense>
      </ContentContainer>

      {/* Copyright */}
      <ContentContainer className="" margin="0px">
        <Suspense>
          <Copyright />
        </Suspense>

        <div className="text-muted-foreground mt-2 flex items-center gap-2">
          <a
            href="https://sturdy.build"
            target="_blank"
            className="hover:text-primary text-xs transition-colors duration-300"
          >
            sturdy.build
          </a>
          <span>|</span>
          <a
            href="https://bristol.dev"
            target="_blank"
            className="hover:text-primary text-xs transition-colors duration-300"
          >
            bristol.dev
          </a>
        </div>
      </ContentContainer>
    </footer>
  );
};

export default Footer;
