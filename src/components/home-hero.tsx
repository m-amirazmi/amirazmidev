import Link from "next/link";
import NavbarLinks from "./navbar-links";

export default function HomeHero() {
  return (
    <header className="flex h-60 items-center justify-center rounded-2xl border border-zinc-900 p-4 text-zinc-700">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl uppercase">Amir Azmi</h1>
        <p className="text-center uppercase tracking-wider">
          Front End Developer
        </p>
        <NavbarLinks className="mt-4" />
      </div>
    </header>
  );
}
