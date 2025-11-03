"use client";

import { motion } from "motion/react";
import DecryptedText from "./decrypted-text";
import GradientBlinds from "./gradient-blinds";
import { Button } from "./ui/button";
import Link from "next/link";

const HomeHero = () => {
  return (
    <div style={{ width: "100%", height: "800px", position: "relative" }}>
      <GradientBlinds
        gradientColors={["#72e3ad", "#7472E3"]}
        angle={20}
        noise={0.5}
        blindCount={16}
        blindMinWidth={50}
        spotlightRadius={0.5}
        spotlightSoftness={1}
        spotlightOpacity={1}
        mouseDampening={0.7}
        distortAmount={0}
        shineDirection="left"
        mixBlendMode="lighten"
        className="z-0"
      />

      <div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 z-10 mx-auto max-w-7xl px-6 pt-32 lg:px-8">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0, ease: "easeOut" }}
          className="pointer-events-none mt-10 text-5xl font-semibold tracking-tight text-pretty sm:text-7xl"
        >
          <DecryptedText
            speed={100}
            text="Matthew Jenkinson"
            animateOn="view"
            revealDirection="start"
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3, delay: 0, ease: "easeOut" }}
          className="pointer-events-none mt-8 text-lg font-medium text-pretty sm:text-xl/8 md:max-w-lg"
        >
          Full-stack developer in Bristol, UK. <br />
          Crafting modern websites that feel quick, look sharp, and just work.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
          className="mt-8 flex items-center gap-x-6"
        >
          <Link href="#projects">
            <Button className="pointer-events-auto">Recent Projects</Button>
          </Link>
        </motion.div>
      </div>

      {/* Gradient Blur */}
      <div className="pointer-events-none absolute bottom-0 z-20 h-40 w-full">
        <div className="to-background absolute inset-0 bg-gradient-to-b from-transparent" />
      </div>
    </div>
  );
};

export default HomeHero;
