import React from "react";
import Link from "next/link";
import { Bug } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="flex items-center gap-6 border-b border-gray-800 py-4">
      <Link href="/" className="flex gap-0.5 items-center font-bold">
        <Bug />
        VA ISSUE
      </Link>

      <ul className="flex items-center gap-4">
        <li>
          <Link
            href="/"
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard"
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/issues"
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            Issues
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
