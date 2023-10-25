'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

const Navbar = () => {

  const currentPath = usePathname(); // this hook access browser api's so convert this to client side using 'use client'
  console.log(currentPath);
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b  mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links?.map((link,i) => (
          <li key={i}>
            <Link
            // change the color of label according to the page which is now shown.
              className={classnames({
                'text-zinc-900' : link.href===currentPath, // only render this class if the link is active.,
                'text-zinc-500':link.href !== currentPath,
                'text-zinc-500 hover:text-zinc-800 transition-colors':true, // render each time.
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
