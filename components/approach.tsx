"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { MagicButton } from "@/components/ui/magic-button";

export const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">Interests & Hobbies</span>
      </h1>

      <div className="my-20 flex flex-col items-center justify-center gap-4 lg:flex-row">
        <Card
          title="Cricket Enthusiast"
          icon={<MagicButton title="Team Player" asChild />}
          description="Passionate about cricket – it has taught me teamwork, strategy, and discipline, both on and off the field."
        >
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-green-800"
          />
        </Card>

        <Card
          title="Cooking Explorer"
          icon={<MagicButton title="Creative Cook" asChild />}
          description="I love experimenting in the kitchen. Cooking is my creative outlet and a way to express joy through flavors."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-orange-700"
            colors={[[255, 193, 7], [255, 152, 0]]}
          />
        </Card>

      <Card
  title="Writer on Medium"
  icon={<MagicButton title="View My Work" asChild />}
  description={
    <>
      Writing helps me reflect and share ideas. I post on Medium. <br />
      <a
        href="https://medium.com/@sangleishwari1977"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 underline hover:text-blue-500 transition-all"
      >
        Visit my Medium profile
      </a>
    </>
  }
>
  <CanvasRevealEffect
    animationSpeed={3}
    containerClassName="bg-indigo-800"
    colors={[[99, 102, 241], [129, 140, 248]]}
  />
</Card>

      </div>
    </section>
  );
};

// Card component
type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
};

const Card = ({ title, description, icon, children }: CardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-black/[0.2] p-4 dark:border-white/[0.2] lg:h-[35rem]"
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute left-[50%] top-[50%] mx-auto flex w-full -translate-x-[50%] -translate-y-[50%] items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>

        <h2 className="relative z-10 mt-4 text-3xl font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
          {title}
        </h2>

        <p
          className="relative z-10 mt-4 text-sm font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white"
          style={{
            color: "#e4ecff",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

// Corner icon
export const Icon = ({ className, ...props }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
