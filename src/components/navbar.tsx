import Link from "next/link";
import NavbarLinks from "./navbar-links";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-zinc-900 px-4 py-6">
      <Link className="text-xl" href="/">
        AMIR AZMI
      </Link>
      <NavbarLinks />
    </div>
  );
}
