"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "motion/react";

const menuLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

const NavMenu = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname.includes(path.replace("/", ""));

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-4 left-4 z-20 h-12 rounded-full md:top-4 md:right-4 md:bottom-auto md:left-auto"
    >
      <NavigationMenu
        className="bg-foreground text-background rounded-full px-1 py-1 shadow"
        orientation="horizontal"
      >
        <NavigationMenuList className="flex flex-row items-center justify-center">
          <NavigationMenuItem>
            <NavigationMenuLink asChild className="rounded-full">
              <Link href={"/"}>
                <Home />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {menuLinks.map((link) => (
            <NavigationMenuItem key={link.href} className="">
              <NavigationMenuLink
                data-active={isActive(link.href)}
                asChild
                className="rounded-full px-4"
              >
                <Link href={link.href}>{link.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </motion.header>
  );
};

export default NavMenu;
