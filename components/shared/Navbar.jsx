"use client";
import { useState } from "react";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setopen] = useState(false);
  const session = true;
  const isAdmin = true;
  const pathName = usePathname();
  return (
    <div className="flex items-center justify-between h-24">
      <Link href="/" className=" text-3xl font-bold">
        LOGO
      </Link>

      <div>
        <div className="hidden md:flex items-center gap-3 mt-2">
          {NavLinks.map((link) => (
            <Link
              href={link.url}
              key={link.title}
              className={`min-w-[100px] p-3 rounded-3xl font-[500] text-center ${
                pathName === link.url && "bg-[--text] text-[--bg]"
              }`}
            >
              {link.title}
            </Link>
          ))}
          {session ? (
            <>
              {isAdmin && <Link href="/admin">admin</Link>}
              <button className="p-3 cursor-pointer font-bold bg-[--bgSoft] rounded">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>

        {/* Mobile */}
        <button
          className="block md:hidden"
          onClick={() => setopen((prev) => !prev)}
        >
          Menu
        </button>
        {open && (
          <div className="absolute top-24 right-0 w-2/4 h-screen bg-[--bg] flex md:hidden flex-col items-center justify-center gap-3">
            {NavLinks.map((link) => (
              <Link
                href={link.url}
                key={link.title}
                className={`min-w-[100px] p-3 rounded-3xl font-[500] text-center ${
                  pathName === link.url && "bg-[--text] text-[--bg]"
                }`}
              >
                {link.title}
              </Link>
            ))}
            {/* {session ? (
              <>
                {isAdmin && <Link href="/admin">admin</Link>}
                <button className="p-3 cursor-pointer font-bold bg-[--bgSoft] rounded">
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login">Login</Link>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
