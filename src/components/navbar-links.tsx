import Link from "next/link";
import { useRouter } from "next/router";

export default function NavbarLinks({ className }: { className?: string }) {
  const { pathname } = useRouter();

  return (
    <div className={"flex gap-4 " + " " + className}>
      <Link
        className={`relative transition-colors duration-150 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:content-normal after:rounded-xl after:bg-zinc-900 after:transition-all after:duration-200 hover:text-zinc-900 hover:after:w-full hover:after:opacity-100 ${
          pathname.includes("/projects")
            ? "text-zinc-900 after:w-full after:opacity-100"
            : "text-zinc-900/50 after:w-0 after:opacity-0"
        }`}
        href="/projects"
      >
        Projects
      </Link>
      <Link
        className={`relative transition-colors duration-150 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:content-normal after:rounded-xl after:bg-zinc-900 after:transition-all  after:duration-200 hover:text-zinc-900 hover:after:w-full hover:after:opacity-100 ${
          pathname.includes("/blog")
            ? "text-zinc-900 after:w-full after:opacity-100"
            : "text-zinc-900/50 after:w-0 after:opacity-0"
        }`}
        href="/blog"
      >
        Articles
      </Link>
      <Link
        className={`relative transition-colors duration-150 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:content-normal after:rounded-xl after:bg-zinc-900 after:transition-all after:duration-200 hover:text-zinc-900 hover:after:w-full hover:after:opacity-100 ${
          pathname.includes("/connect")
            ? "text-zinc-900 after:w-full after:opacity-100"
            : "text-zinc-900/50 after:w-0 after:opacity-0"
        }`}
        href="/connect"
      >
        Connect
      </Link>
    </div>
  );
}
