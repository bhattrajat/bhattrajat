import Image from "next/image";
import { SiGithub, SiVercel, SiPython } from "react-icons/si";
const PROJECTDATA = [
  {
    imageUrl: "/projects/short-it.png",
    name: "Short It",
    hostedOnIcon: SiVercel,
    hostedUrl: "https://short-it-rajat.vercel.app/",
    codeUrl: "https://github.com/bhattrajat/short-it",
    description: (
      <ul className="list-disc text-left">
        <li>It is a url shortener application like bitly & dub.sh.</li>
        <li>
          Created using Next.js 14, React Server components and Server actions.
        </li>
        <li>
          Uses Redis (Vercel KV) to store the urls. Since It is an in memory
          database it queries data much faster than Disk based databases.
        </li>
        <li>
          Uses Next auth & github Oauth to implement authentication. It has also
          implemented protected routes so anonymous user can&apos;t access it.
        </li>{" "}
        <li>
          It also uses Next.js dynamic routes & route handlers to implement the
          redirect logic
        </li>
      </ul>
    ),
  },
  {
    imageUrl: "/projects/ecommerce.png",
    name: "The chocolate shop",
    hostedOnIcon: SiVercel,
    hostedUrl: "https://tonyschocolonely.vercel.app/",
    codeUrl: "https://github.com/bhattrajat/tonyschocolonely/",
    description: (
      <ul className="list-disc text-left">
        <li>
          An e-commerce application created using Next.js 13, PostgreSQL,
          Tailwind CSS and Stripe checkout.
        </li>
        <li>Used React server components for better SEO and performance</li>
        <li>Added Persistent shopping cart using localStorage</li>
        <li>Added Stripe checkout for payment and shipping info</li>
        <li>
          Used Supabase for storing product data in Postgres db and image
          storage using supabase buckets
        </li>
      </ul>
    ),
  },
  {
    imageUrl: "/projects/type-challenges.png",
    name: "Type Challenges Progress Tracker",
    hostedOnIcon: SiVercel,
    codeUrl: "https://github.com/bhattrajat/type-challenges",
    hostedUrl: "https://type-challenges.vercel.app/",
    description: (
      <ul className="list-disc text-left">
        <li className="my-4 max-w-2xl">
          This is a companion app for the popular{" "}
          <a
            className="text-blue-700 underline dark:text-blue-500"
            href="https://github.com/type-challenges/type-challenges"
          >
            Type challenges
          </a>{" "}
          repository. Since the original repo does not provide a good way to
          track the progress, I made this to keep track of my progress while
          solving typescript challenges.
        </li>
        <li>It uses local storage to store the progress.</li>
        <li>
          Implemented filters using query parameters in the URL as a best
          practice
        </li>
        <li>Created with Next.js 14 & Tailwind CSS. Also added dark mode</li>
      </ul>
    ),
  },
  {
    imageUrl: "/projects/next-starter.png",
    name: "Next.js Starter kit for production apps",
    codeUrl: "https://github.com/bhattrajat/nextjs-boilerplate",
    description: (
      <ul className="list-disc text-left">
        <li>
          Created personalized Next.js starter kit for setting up common quality
          of life improvements on top of standard create-next-app installation.
        </li>
        <li>Added Prettier tailwind plugin for automatic class sorting</li>
        <li>
          Extended eslint with eslint:recommended, typescript-eslint, react,
          react-hooks & typescript-sort-keys
        </li>
        <li>
          Add automatic import sorting plugin in prettier to sort all the
          imports alphabetically
        </li>
        <li>
          Updated project specific settings.json for vscode to enable more
          settings (Mentioned in readme){" "}
        </li>
      </ul>
    ),
  },
  {
    imageUrl: "/projects/countries-api.webp",
    name: "Country Finder",
    hostedOnIcon: SiVercel,
    hostedUrl: "https://rajat-country-finder.vercel.app/countries",
    codeUrl: "https://github.com/bhattrajat/country-finder",
    description: (
      <ul className="list-disc text-left">
        <li>
          A Web app which shows countries data using Rest Countries API to fetch
          data of all the countries in the world.
        </li>
        <li>Implemented skeleton loader using suspense and next routing</li>
        <li>Added dark mode</li>
        <li>
          Since the third party Rest countries API does not provide pagination,
          it uses Intersection Observer to add client-side infinite scrolling
        </li>
      </ul>
    ),
  },
  {
    imageUrl: "/projects/image-classifier.png",
    name: "Handwritten digit recognizer",
    hostedOnIcon: SiPython,
    hostedUrl: "https://rajatbhatt.pythonanywhere.com/",
    codeUrl: "https://github.com/bhattrajat/Handwritten-digit-recognizer",
    description: (
      <ul className="list-disc text-left">
        <li>
          A Web app which uses pretrained Convolutional Neural Network model
          using tensorflowjs to predict handwritten digits
        </li>
        <li>Implemented drawing feature using HTML canvas and Javascript </li>
        <li>Used flask to implement simple server in python</li>
      </ul>
    ),
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
          Personal Projects
        </span>
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTDATA.map((project) => (
          <div
            key={project.name}
            className="flex flex-col gap-4 rounded-lg border-2 border-slate-900 p-4 dark:border-slate-200"
          >
            <Image
              src={project.imageUrl}
              alt={project.name}
              width={300}
              className="aspect-video h-auto w-auto object-contain"
              height={300}
              quality={100}
            />
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <div className="px-4">{project.description}</div>
            <div className="mt-auto flex justify-around">
              {project.hostedUrl && (
                <a
                  target="_blank"
                  className="flex items-center rounded-full border-2 border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-white dark:border-slate-200"
                  href={project.hostedUrl}
                  rel="noreferrer"
                >
                  {/* <SiVercel className="mr-1 inline-block h-5 w-5" /> */}
                  {project.hostedOnIcon && (
                    <project.hostedOnIcon
                      title="project host"
                      className="mr-1 inline-block h-5 w-5"
                    />
                  )}
                  Live Demo
                </a>
              )}
              <a
                target="_blank"
                className="flex items-center rounded-full border-2 border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-white dark:border-slate-200"
                href={project.codeUrl}
                rel="noreferrer"
              >
                <SiGithub
                  title="Github"
                  className="mr-1 inline-block h-5 w-5"
                />
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
