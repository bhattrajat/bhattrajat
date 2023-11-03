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
import { TbApi } from "react-icons/tb";

export function Skills() {
  return (
    <section id="skills" className="pt-20">
      <h2 className="text-center text-xl font-bold">Skills</h2>
      <ul className="mt-4 grid list-inside grid-cols-2 flex-wrap gap-2 font-semibold md:mx-auto md:flex md:max-w-2xl md:justify-center">
        <li className="rounded-lg border-2 border-slate-900 px-4 py-2 dark:border-slate-200">
          <SiReact title="React" className="mr-1 inline-block h-8 w-8" /> React
        </li>
        <li className="rounded-lg border-2 border-slate-900 px-4  py-2 dark:border-slate-200">
          <SiTypescript
            title="Typescript"
            className="mr-1 inline-block h-8 w-8"
          />{" "}
          Typescript
        </li>
        <li className="rounded-lg border-2 border-slate-900 px-4 py-2 dark:border-slate-200">
          <SiNextdotjs title="NextJS" className="mr-1 inline-block h-8 w-8" />{" "}
          NextJS
        </li>
        <li className="rounded-lg border-2 border-slate-900 px-4 py-2 dark:border-slate-200">
          <SiNodedotjs title="NodeJS" className="mr-1 inline-block h-8 w-8" />{" "}
          NodeJS
        </li>
        <li className="rounded-lg border-2 border-slate-900 px-4 py-2 dark:border-slate-200">
          <SiTailwindcss
            title="Tailwind CSS"
            className="mr-1 inline-block h-8 w-8"
          />{" "}
          Tailwind
        </li>
        <li className="rounded-lg border-2 border-slate-900 px-4 py-2 dark:border-slate-200">
          <SiPostgresql
            title="PostgreSQL"
            className="mr-1 inline-block h-8 w-8"
          />{" "}
          Postgres
        </li>
        <li className="flex items-center rounded-lg border-2 border-slate-900 px-4 py-2 dark:border-slate-200">
          <SiGit title="Git" className="mr-1 inline-block h-8 w-8" /> Git
        </li>
        <li className="rounded-lg border-2 border-slate-900 px-4 py-2 dark:border-slate-200">
          <SiGraphql title="GraphQL" className="mr-1 inline-block h-8 w-8" />{" "}
          GraphQL
        </li>
        <li className="flex items-center rounded-lg border-2 border-slate-900 px-4 py-2 dark:border-slate-200">
          REST <TbApi title="API" className="mr-1 inline-block h-8 w-8" />
        </li>
      </ul>
    </section>
  );
}
