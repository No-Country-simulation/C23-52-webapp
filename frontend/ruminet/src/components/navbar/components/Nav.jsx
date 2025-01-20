"use client";
import Link from "next/link";

import SideBar from "./Hamburguer";

const NavLinks = () => {
  return (
    <>
      <Link href="/Writers">Writers</Link>
      <Link href="/Readers">Readers</Link>
      <Link href="/Contact">Contact</Link>
      <Link className="bg-[#FF6D00] hover:bg-[#d06514] p-1.5 rounded-xl" href="/sign-up">Sign Up</Link>
      <Link className="bg-[#FF6D00] hover:bg-[#d06514] p-1.5 rounded-xl" href="/sign-in">Sign In</Link>
    </>
  );
};

export default function Nav() {
  return (
    <nav>
      <div className="hidden text-md items-center md:flex md:gap-14 lg:gap-20">
        <NavLinks />
      </div>
      <div className="md:hidden">
        <SideBar />
      </div>
    </nav>
  );
}
