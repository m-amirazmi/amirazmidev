import { Props } from "@/utils/types";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Navbar from "./navbar";
import Head from "next/head";

const font = Inter({ subsets: ["latin"] });

export default function Layout({ children }: Props) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>Amir Azmi | Welcome</title>
      </Head>
      <main className={`${font.className} min-h-screen bg-amber-50/20`}>
        <div className="mx-auto max-w-6xl p-6">
          {pathname !== "/" && <Navbar />}
          {children}
        </div>
      </main>
    </>
  );
}
