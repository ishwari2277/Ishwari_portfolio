import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";
import { socialMedia } from "@/data";

export const Footer = () => {
  return (
    <footer id="contact" className="relative mb-[100px] w-full pb-10 md:mb-auto">
      {/* Background Grid */}
      <div className="absolute -bottom-72 left-0 min-h-96 w-full -z-10">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
        />
      </div>

      {/* Top Heading and Message */}
      <div className="flex flex-col items-center px-4">
        <h1 className="heading text-center lg:max-w-[45vw]">
          Let’s <span className="text-purple">collaborate</span> and make something great!
        </h1>

        <p className="my-5 text-center text-white-200 md:mt-6 max-w-xl">
          Feel free to reach out for exciting opportunities or just to say hi — I’d love to hear from you!
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/movlqgeo"
          method="POST"
          className="flex flex-col gap-4 items-center mt-6 w-full max-w-md"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md border border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md border border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-2 rounded-md border border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-purple text-white font-bold hover:bg-purple-700 transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Bottom Section with Copyright and Social */}
      <div className="relative z-[999] mt-16 flex flex-col items-center justify-between px-4 md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal text-white">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link
            href="https://sangleishwari.me"
            target="_blank"
            rel="noreferrer noopener"
            className="text-purple"
          >
            Ishwari Sangle
          </Link>{" "}
          |{" "}
          <Link href={links.sourceCode} className="underline" target="_blank">
            Source Code
          </Link>
        </p>

        <div className="flex items-center gap-6 md:gap-3 mt-4 md:mt-0">
          {socialMedia.map((profile) => (
            <Link
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer noopener"
              className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
              title={profile.name}
            >
              <Image
                src={profile.img}
                alt={`profile-${profile.name}`}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
