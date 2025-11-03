"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mx-auto flex min-h-80 max-w-7xl flex-col items-start justify-center px-6 pt-10 pb-10 lg:px-8">
      <h1 className="text-2xl font-semibold">404 - Page Not Found</h1>
      <p className="mb-8">The page you are looking for does not exist.</p>
      <Link href="/" className="">
        <Button>
          <ArrowLeftIcon /> Go home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
