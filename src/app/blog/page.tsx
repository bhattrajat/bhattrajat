import Link from "next/link";
import { compareDesc, format } from "date-fns";
import { getAllPostMeta } from "@/lib/mdx";

function PostCard(post: { date: Date; title: string; url: string }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg">
        <Link href={post.url} className="dark:hover:text-slate-300">
          {post.title}
        </Link>
      </h3>
      <time
        dateTime={post.date.toISOString()}
        className="mb-2 block text-sm dark:text-slate-400"
      >
        {format(post.date, "LLLL d, yyyy")}
      </time>
    </div>
  );
}

export default async function Home() {
  let posts = await getAllPostMeta();
  posts = posts.sort((a, b) =>
    compareDesc(new Date(a.date!), new Date(b.date!)),
  );
  return (
    <div className="mx-auto min-h-[calc(100vh-12rem)] max-w-xl py-8">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Read my blog posts
      </h2>

      {posts.map((post, idx) => (
        <PostCard
          key={idx}
          date={post.date!}
          title={post.title!}
          url={post.url!}
        />
      ))}
    </div>
  );
}
