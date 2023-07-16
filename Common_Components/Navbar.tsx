"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={`xl:max-w-[85.375rem] w-full flex justify-center items-center py-6`}
    >
      <nav className={`w-full flex justify-between items-center`}>
        <Link
          href="/"
          className={`font-ObjectSans text-PrimaryBlack xs:text-[34px] text-[30px] font-bold italic xs:leading-10 leading-8 hover:text-PrimaryBlue`}
        >
          chill.
        </Link>
        <ul className="xs:flex hidden items-center list-none justify-between gap-10 font-ObjectSans text-xl font-normal italic">
          <li>
            <Link href="/works" className=" hover:text-PrimaryBlue">
              works
            </Link>
          </li>
          <li>
            <Link href="/about" className=" hover:text-PrimaryBlue">
              about
            </Link>
          </li>
          <li>
            <Link href="/contact" className=" hover:text-PrimaryBlue">
              contact
            </Link>
          </li>
        </ul>
        <section className={`flex flex-1 items-center justify-end xs:hidden`}>
          <label className="burger" htmlFor="burger">
            <input
              type="checkbox"
              id="burger"
              onClick={() => setToggle((prev) => !prev)}
            />
            <span />
            <span />
            <span />
          </label>
          <section
            className={` ${
              toggle ? "flex" : "hidden"
            } absolute p-6 top-20 right-1 mx-2 my-2 rounded-xl bg-PrimaryPink font-ObjectSans text-[20px] font-normal italic`}
          >
            <ul
              className={`${styles.flexCenter} flex-col list-none gap-y-4 relative`}
            >
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
