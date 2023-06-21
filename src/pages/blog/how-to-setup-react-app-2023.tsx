import { formatDate } from "@/utils/formatDate";
import { Post } from "@/utils/types";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

// PAGE: how-to-setup-react-app-2023
export default function HowToSetupReactApp2023Page({ post }: { post: Post }) {
  const { day, month, minutes, hour, year } = formatDate(+post.created_at);
  const today = new Date();

  const postedOnString = `${day} ${month} ${
    +today.getFullYear() !== year ? year : ""
  }`;

  return (
    <article className="my-8">
      <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
      <div>
        <span className="text-sm text-zinc-700">
          Posted On {postedOnString} | {hour}:{minutes}
        </span>
      </div>
    </article>
  );
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const data: Post[] = require("@/data/blogpages.json");
  const post = data.find((i) => i.page === "how-to-setup-react-app-2023");
  return { props: { post } };
};
