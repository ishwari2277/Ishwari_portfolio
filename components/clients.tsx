"use client";
import Image from "next/image";
import { companies, testimonials } from "@/data"; // keep as is for now

export const Clients = () => {
  return (
    <section id="education" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Education</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* Static education list */}
        <div className="flex flex-col gap-6 w-full max-w-4xl p-4">
          {testimonials.map(({ quote, name, title }, index) => (
            <div
              key={index}
              className="rounded-xl border border-zinc-700 bg-zinc-800/40 p-6 text-white shadow transition-all hover:scale-[1.02] hover:bg-zinc-800/70"
            >
              <p className="text-lg font-semibold mb-1">{quote}</p>
              <p className="text-sm text-zinc-400">{name}</p>
              <p className="text-sm mt-1">{title}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
          {companies.map(({ id, img, name }) => (
            <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
              <Image
                height={60}
                width={75}
                src={img}
                alt={`${name}'s logo`}
                className="w-5 md:w-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
