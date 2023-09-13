import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h3 className="text-xl">
        <Link href={post.url} className="dark:hover:text-slate-300">
          {post.title}
        </Link>
      </h3>
      <time
        dateTime={post.date}
        className="mb-2 block text-sm dark:text-slate-400"
      >
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="mx-auto max-w-xl px-4 py-8">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Read my blog posts
      </h2>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
