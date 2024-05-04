"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const activePath = usePathname();
  return (
    <div>
      <Link
        href="/add-post"
        className={`mr-5 ${
          activePath.startsWith("/add-post") ? "font-bold" : undefined
        }`}
      >
        Add post
      </Link>
      <Link
        href="/about"
        className={`mr-5 ${
          activePath.startsWith("/about") ? "font-bold" : undefined
        }`}
      >
        About
      </Link>
    </div>
  );
};

export default Navbar;
