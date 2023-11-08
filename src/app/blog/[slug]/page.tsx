import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { title: post?.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    return notFound();
  }

  const Content = getMDXComponent(post.body.code);

  return (
    <article className="prose prose-slate mx-auto max-w-xl dark:prose-invert prose-code:before:hidden prose-code:after:hidden lg:max-w-3xl">
      <div className="not-prose mb-8">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <time dateTime={post.date} className="text-xs dark:text-slate-200">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
      <Content />
    </article>
  );
};

export default PostLayout;
