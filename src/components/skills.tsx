import {
  SiGit,
  SiGraphql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export function Skills() {
  return (
    <section id="skills" className="pt-20">
      <h2 className="text-center text-xl font-bold">Skills</h2>
      <ul className="mt-4 flex list-inside flex-wrap justify-center gap-2 font-semibold md:mx-auto md:max-w-2xl">
        <li className="rounded-lg border-2 border-slate-900 px-4 py-2 dark:border-slate-200">
          <SiReact className="mr-1 inline-block h-8 w-8" /> React
        </li>
        <li className="rounded-lg border-2 border-slate-900 px-4  py-2 dark:border-slate-200">
          <SiTypescript className="mr-1 inline-block h-8 w-8" /> Typescript
        </li>
        <li className="rounded-lg border-2 border-slate-900 px-4 py-2 dark:border-slate-200">
          <SiNextdotjs className="mr-1 inline-block h-8 w-8" /> NextJS
        </li>
        <li className="rounded-lg border-2 border-slate-900 px-4 py-2 dark:border-slate-200">
          <SiNodedotjs className="mr-1 inline-block h-8 w-8" /> NodeJS
        </li>
        <li className="rounded-lg border-2 border-slate-900 px-4 py-2 dark:border-slate-200">
          <SiTailwindcss className="mr-1 inline-block h-8 w-8" /> Tailwind
        </li>
        <li className="rounded-lg border-2 border-slate-900 px-4 py-2 dark:border-slate-200">
          <SiPostgresql className="mr-1 inline-block h-8 w-8" /> Postgres
        </li>
        <li className="flex items-center rounded-lg border-2 border-slate-900 px-4 py-2 dark:border-slate-200">
          <SiGit className="mr-1 inline-block h-8 w-8" /> Git
        </li>
        <li className="rounded-lg border-2 border-slate-900 px-4 py-2 dark:border-slate-200">
          <SiGraphql className="mr-1 inline-block h-8 w-8" /> GraphQL / REST
        </li>
      </ul>
    </section>
  );
}
