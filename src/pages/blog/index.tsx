import { icons } from "@/components/icons";
import { Post } from "@/utils/types";
import { GetStaticProps } from "next";
import Link from "next/link";

export default function BlogListPage({ posts }: { posts: Post[] }) {
  return (
    <div className="my-8 flex flex-col gap-4 text-zinc-700">
      <div className="-mb-3 flex items-center justify-between">
        <h1 className="text-lg uppercase tracking-widest">Blog</h1>
        <span className="text-zinc-900/70">
          {posts.length} article{posts.length > 1 ? "s" : ""} found
        </span>
      </div>
      <div className="-mx-3 flex flex-row flex-wrap">
        {posts
          .sort((a, b) => {
            if (parseInt(a.created_at) < parseInt(b.created_at)) return -1;
            if (parseInt(a.created_at) > parseInt(b.created_at)) return 1;
            return 0;
          })
          .map((i) => {
            const link = "/blog/" + i.page;
            const Icon = icons[i.tag];
            return (
              <Link
                href={link}
                key={i.page}
                className="w-full p-3 md:w-6/12 lg:w-4/12"
              >
                <div className="flex flex-col gap-2 rounded-2xl border border-zinc-900 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-1">
                  {i.tag && (
                    <div className="relative mb-2 h-36 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-900/80">
                      <p className="mx-4 my-3 text-sm uppercase tracking-wider text-amber-50">
                        {i.tag}
                      </p>
                      <div className="absolute bottom-0 right-0 h-40 w-40 translate-x-[10%] translate-y-[20%]">
                        <Icon />
                      </div>
                    </div>
                  )}
                  <h2 className="text-xl font-semibold">{i.title}</h2>
                  <p className="line-clamp-3">{i.summary}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data: Post[] = require("@/data/blogpages.json");
  return { props: { posts: data } };
};
