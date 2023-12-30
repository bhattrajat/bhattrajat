import { getAllPostMeta, getPostBySlug } from "@/lib/mdx";
import { format } from "date-fns";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const blogMeta = await getAllPostMeta();
  console.log({ blogMeta });
  return blogMeta.map((blog) => ({ slug: blog.url }));
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post = await getPostBySlug(params.slug);
  return { title: post?.meta.title };
};

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="prose prose-slate mx-auto max-w-xl dark:prose-invert prose-code:before:hidden prose-code:after:hidden lg:max-w-3xl">
      <div className="not-prose mb-8">
        <h1 className="text-2xl font-bold">{post.meta.title}</h1>
        <time
          dateTime={post.meta.date.toISOString()}
          className="text-xs dark:text-slate-200"
        >
          {format(post.meta.date as Date, "LLLL d, yyyy")}
        </time>
      </div>
      {post.content}
    </article>
  );
};

export default PostPage;
