"use client";

import ContentContainer from "@/components/content-container";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <ContentContainer className="min-h-80">
      <h1 className="text-2xl font-semibold">404 - Page Not Found</h1>
      <p className="mb-8">The page you are looking for does not exist.</p>
      <Link href="/" className="">
        <Button>
          <ArrowLeftIcon /> Go home
        </Button>
      </Link>
    </ContentContainer>
  );
};

export default NotFound;
