import Image from "next/image";
import { SiGithub, SiVercel, SiPython, SiNetlify } from "react-icons/si";
const PROJECTDATA = [
  {
    imageUrl: "/projects/ecommerce.png",
    name: "The chocolate shop",
    hostedOnIcon: SiVercel,
    hostedUrl: "https://tonyschocolonely.vercel.app/",
    codeUrl: "https://github.com/bhattrajat/tonyschocolonely/",
  },
  {
    imageUrl: "/projects/countries-api.webp",
    name: "Country Finder",
    hostedOnIcon: SiVercel,
    hostedUrl: "https://rajat-country-finder.vercel.app/countries",
    codeUrl: "https://github.com/bhattrajat/country-finder",
  },
  {
    imageUrl: "/projects/image-classifier.png",
    name: "Handwritten digit recognizer",
    hostedOnIcon: SiPython,
    hostedUrl: "https://rajatbhatt.pythonanywhere.com/",
    codeUrl: "https://github.com/bhattrajat/Handwritten-digit-recognizer",
  },
  {
    imageUrl: "/projects/space-tourism.webp",
    name: "Space tourism site",
    hostedOnIcon: SiNetlify,
    hostedUrl: "https://space-tourism-rajat.netlify.app/",
    codeUrl: "https://github.com/bhattrajat/space-tourism",
  },
];
export function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center gap-4 pt-20 text-center"
    >
      <h2 className="flex flex-col text-center text-slate-900 dark:text-slate-200">
        Browse my{" "}
        <span className="text-xl font-bold text-black dark:text-white">
          Projects
        </span>
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {PROJECTDATA.map((project) => (
          <div
            key={project.name}
            className="flex flex-col gap-4 rounded-lg border-2 border-slate-900 p-4 dark:border-slate-200"
          >
            <Image
              src={project.imageUrl}
              alt={project.name}
              width={300}
              className="aspect-video h-auto w-auto object-cover"
              height={300}
            />
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <div className="flex justify-around">
              <a
                target="_blank"
                className="flex items-center rounded-full border-2 border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-white dark:border-slate-200"
                href={project.hostedUrl}
                rel="noreferrer"
              >
                {/* <SiVercel className="mr-1 inline-block h-5 w-5" /> */}
                <project.hostedOnIcon className="mr-1 inline-block h-5 w-5" />
                Live Demo
              </a>
              <a
                target="_blank"
                className="flex items-center rounded-full border-2 border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-white dark:border-slate-200"
                href={project.codeUrl}
                rel="noreferrer"
              >
                <SiGithub className="mr-1 inline-block h-5 w-5" />
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
