"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="z-10 w-full">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between bg-transparent px-6 py-4 sm:px-16">
        <section>
          <h1 className=" font-ObjectSans text-[34px] font-bold italic">
            chill.
          </h1>
        </section>
        <section className="hidden xs:block">
          <ul className="flex items-center list-none justify-between gap-[40px] font-ObjectSans text-[20px] font-normal italic">
            <li>
              <Link href="/works">works</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </section>
        <section className="flex flex-1 items-center justify-end xs:hidden">
          <label className="burger" htmlFor="burger">
            <input type="checkbox" id="burger" onClick={() => setToggle((prev) => !prev)} />
            <span/>
            <span/>
            <span/>
          </label>
          <section className={` ${toggle? 'flex' : 'hidden'} absolute p-6 top-20 right-1 mx-2 my-2 rounded-xl bg-PrimaryPink font-ObjectSans text-[20px] font-normal italic`}>
            <ul className="flex items-center justify-center flex-col list-none gap-y-4 relative">
            <li>
              <Link href="/works">works</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
            </ul>
          </section>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
