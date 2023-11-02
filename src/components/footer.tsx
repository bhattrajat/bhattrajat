import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-2 border-t-2 border-t-slate-300 py-2 text-xl">
      Made with{" "}
      <a target="_blank" href="https://nextjs.org/">
        <span className="sr-only">Next.js</span>
        <SiNextdotjs title="Next.js" className="h-6 w-6" />
      </a>{" "}
      and{" "}
      <a target="_blank" href="https://tailwindcss.com/">
        <span className="sr-only">Tailwind CSS</span>
        <SiTailwindcss title="tailwind css" className="h-6 w-6" />
      </a>
      by{" "}
      <a
        target="_blank"
        className="font-bold underline"
        href="https://www.linkedin.com/in/rajat-bhatt/"
      >
        Rajat Bhatt
      </a>
    </footer>
  );
}
