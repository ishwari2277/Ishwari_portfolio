"use client";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";

export const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
<div className="absolute inset-0 h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }}>
  <div className="absolute inset-0 bg-black/60" /> {/* Optional dark overlay */}
</div>


      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Next-Gen Web Tech
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Crafting intelligent and user-centric digital solutions"
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Hi, I&apos;m {links.ownerName}, Software Engineer and Data Science student from India.
          </p>

          <Link href="#about" className="md:mt-10">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
