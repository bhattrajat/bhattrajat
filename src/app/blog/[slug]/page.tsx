import { getAllPostMeta, getPostBySlug } from "@/lib/mdx";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import { unstable_ViewTransition as ViewTransition } from "react";

export const generateStaticParams = async () => {
  const blogMeta = await getAllPostMeta();
  return blogMeta.map((blog) => ({ slug: blog.slug }));
};

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);
  return { title: post?.meta.title };
};

const PostPage = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="prose prose-slate dark:prose-invert prose-code:before:hidden prose-code:after:hidden mx-auto max-w-xl lg:max-w-3xl">
      <div className="prose-headings:mb-1 mb-8">
        <ViewTransition name={params.slug}>
          <h1 className="text-2xl font-bold">{post.meta.title}</h1>
        </ViewTransition>
        <ViewTransition name={`date-${params.slug}`}>
          <time
            dateTime={post.meta.date.toISOString()}
            className="text-xs dark:text-slate-200"
          >
            {format(post.meta.date as Date, "LLLL d, yyyy")}
          </time>
        </ViewTransition>
      </div>
      {post.content}
    </article>
  );
};

export default PostPage;
