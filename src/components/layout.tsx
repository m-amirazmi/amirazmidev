import { Props } from "@/utils/types";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Navbar from "./navbar";

const font = Inter({ subsets: ["latin"] });

export default function Layout({ children }: Props) {
  const { pathname } = useRouter();

  console.log(pathname);

  return (
    <main
      className={`${font.className} min-h-screen w-screen bg-gradient-to-b from-amber-50 to-amber-50/20`}
    >
      <div className="mx-auto max-w-6xl p-6">
        {pathname !== "/" && <Navbar />}
        {children}
      </div>
    </main>
  );
}
