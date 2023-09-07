import Image from "next/image";
const PROJECTDATA = [
  {
    imageUrl: "/projects/countries-api.webp",
    name: "Country Finder",
    hostedUrl: "https://rajat-country-finder.vercel.app/countries",
    codeUrl: "https://github.com/bhattrajat/country-finder",
  },
  {
    imageUrl: "/projects/todo-app.webp",
    name: "Todo App with Dark mode",
    hostedUrl: "https://next-server-actions-todo-app.vercel.app/",
    codeUrl: "https://github.com/bhattrajat/next-server-actions-todo-app",
  },
  {
    imageUrl: "/projects/image-classifier.png",
    name: "Handwritten digit recognizer",
    hostedUrl: "https://rajatbhatt.pythonanywhere.com/",
    codeUrl: "https://github.com/bhattrajat/Handwritten-digit-recognizer",
  },
  {
    imageUrl: "/projects/space-tourism.webp",
    name: "Space tourism site",
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
      <h2 className="flex flex-col text-center text-slate-900">
        Browse my <span className="text-xl font-bold text-black">Projects</span>
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {PROJECTDATA.map((project) => (
          <div
            key={project.name}
            className="flex flex-col gap-4 rounded-3xl border-2 border-slate-900 p-4"
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
                className="rounded-full border-2 border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-white"
                href={project.hostedUrl}
              >
                Live Demo
              </a>
              <a
                target="_blank"
                className="rounded-full border-2 border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-white"
                href={project.codeUrl}
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
