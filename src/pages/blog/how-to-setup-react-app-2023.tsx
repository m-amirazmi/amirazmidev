import { formatDate } from "@/utils/formatDate";
import { Post } from "@/utils/types";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

// PAGE: how-to-setup-react-app-2023
export default function HowToSetupReactApp2023Page({ post }: { post: Post }) {
  const { day, month, minutes, hour, year } = formatDate(+post.created_at);
  const today = new Date();

  const postedOnString = `${day} ${month} ${
    +today.getFullYear() !== year ? year : ""
  }`;

  return (
    <article className="my-8 text-lg">
      <div className="mb-4">
        <h1 className="mb-1 text-4xl font-bold">{post.title}</h1>
        <span className="text-sm text-zinc-700">
          Posted On {postedOnString} | {hour}:{minutes}
        </span>
      </div>
      <h2 className="mb-3 text-2xl font-semibold">Introduction</h2>
      <p className="mb-3">
        The new{" "}
        <Link
          className="text-zinc-700 underline"
          href="https://react.dev/"
          target="_blank"
        >
          React documentation
        </Link>{" "}
        has been released which compiles all the latest React updates and remove
        all the deprecated features in React like Class Component, higher order
        components and Create React App. Now, the Function Component together
        with React Hooks are the common way to write React Application.
      </p>
      <p className="mb-3">
        There are a lot of ways to start a React application from scratch. From
        deprecated Create React App (CRA) to modern Vite app to full fledge full
        stack React application with server side capability with Next and Remix.
      </p>
      <p className="mb-3">
        Based on the official React documentation, React team recommends the
        developer to use React meta frameworks which are, Next, Remix and Gatsby
        to start a new React project. These meta frameworks are great for real
        world production apps. However, these are not a great way to learn basic
        React because these framework already hide the complexity of building
        React application.
      </p>
      <p className="mb-3">
        In this article, we will show you how to build a React application using
        Vite which enable us to create a simple Single Page Application with
        React.
      </p>
    </article>
  );
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const data: Post[] = require("@/data/blogpages.json");
  const post = data.find((i) => i.page === "how-to-setup-react-app-2023");
  return { props: { post } };
};
