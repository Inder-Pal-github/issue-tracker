"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import classnames from "classnames";
import useDarkMode from "./customHooks/useDarkMode";

const Navbar = () => {
  const currentPath = usePathname(); // this hook access browser api's so convert this to client side using 'use client'
  // console.log(currentPath);

  const [colorTheme, setTheme] = useDarkMode();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex border-b  mb-5 px-5 h-14 items-center justify-between">
      <div className="flex justify-between items-center space-x-6 ">
        <Link href="/">
          <AiFillBug />
        </Link>
        <ul className="flex space-x-6">
          {links?.map((link, i) => (
            <li key={i}>
              <Link
                // change the color of label according to the page which is now shown.
                className={classnames({
                  "text-zinc-900": link.href === currentPath, // only render this class if the link is active.,
                  "text-zinc-500 dark:text-zinc-500": link.href !== currentPath,
                  "text-zinc-500 hover:text-zinc-800 transition-colors dark:text-zinc-200 dark:hover:text-zinc-600":
                    true, // render each time.
                })}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="float-right cursor-pointer">
        {colorTheme === "dark" ? (
          <FiMoon onClick={() => setTheme("dark")} />
        ) : (
          <FiSun onClick={() => setTheme("light")} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
