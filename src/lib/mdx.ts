import fs from "node:fs/promises";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import rehypePrettyCode from "rehype-pretty-code";

export type PostMeta = {
  date: Date;
  title: string;
};

const blogDirectory = path.join(process.cwd(), "src", "blog");

export async function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), "src", "blog", `${slug}.mdx`);

  try {
    const fileContent = await fs.readFile(filePath, { encoding: "utf-8" });

    const { frontmatter, content } = await compileMDX<PostMeta>({
      source: fileContent,
      options: {
        parseFrontmatter: true,
        mdxOptions: { rehypePlugins: [rehypePrettyCode] },
      },
      components: mdxComponents,
    });
    return { meta: { ...frontmatter }, slug, content };
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function getAllPostMeta() {
  const files = await fs.readdir(blogDirectory);
  const postMetas = [];
  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "");
    const post = await getPostBySlug(slug);
    postMetas.push({ ...(post?.meta ?? {}), url: `/blog/${slug}` });
  }
  return postMetas;
}
