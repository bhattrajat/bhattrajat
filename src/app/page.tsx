import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { Header } from "@/components/header";
import Experience from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { ContactMe } from "@/components/contactMe";
export default function Home() {
  return (
    <>
      <Header />
      <main className="p-4 md:p-8">
        <section className="flex flex-col items-center justify-center py-20 text-center">
          <Image
            src="/profile-gray.png"
            className="mb-3 rounded-full"
            alt="profile"
            width={150}
            height={150}
          />
          <h1 className="flex flex-col gap-1 font-bold leading-loose text-slate-800">
            Hello, I am <span className="text-2xl text-black">Rajat Bhatt</span>
            Full stack web developer
          </h1>
          <div className="mt-4 flex gap-4 text-sm">
            <a
              type="button"
              className="flex items-center rounded-full border-2 border-slate-800 px-4 py-2"
              target="blank"
              href="/Rajat_Bhatt_s_CV_web_dev.pdf"
              download
            >
              Download CV
            </a>
            <a
              type="button"
              href="#contactme"
              className="flex items-center rounded-full bg-slate-800 px-4 py-2 text-white"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-4 flex gap-4">
            <a
              href="http://github.com/bhattrajat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Github</span>
              <FaGithub className="h-8 w-8" />
            </a>
            <a
              href="http://linkedin.com/in/rajat-bhatt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Linkedin</span>
              <FaLinkedin className="h-8 w-8" />
            </a>
          </div>
        </section>
        <Experience />
        <Skills />
        <Projects />
        <ContactMe />
      </main>
    </>
  );
}
