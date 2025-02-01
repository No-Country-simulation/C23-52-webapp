"use client";
import Link from "next/link";

import SideBar from "./Hamburguer";
import { useUser } from "@auth0/nextjs-auth0/client";
import CustomButton from "@/components/CustomButton";

const NavLinks = () => {
  const { user } = useUser();
  return (
    <>
      <Link className="hover:text-slate-200" href="/creators">
        Creators
      </Link>
      <Link className="hover:text-slate-200" href="/readers">
        Readers
      </Link>
      <Link className="hover:text-slate-200" href="/contact">
        Contact
      </Link>
      <Link className="hover:text-slate-200" href="/accessibility">
        Accessibility
      </Link>
      {!user ? (
        <>
        <CustomButton text={"Comienza a crear"}/>
          <Link
            className="bg-[#E10D0D] hover:bg-[#B00B0B] p-2 rounded-lg"
            href="/api/auth/login"
          >
            Sign Up
          </Link>
          <CustomButton text={"Comienza a crear"}/>
        </>
      ) : (
        <p>UserLogo</p>
      )}
    </>
  );
};

export default function Nav() {
  return (
    <nav>
      <div className="hidden text-md lg:text-xl  font-semibold  items-center md:flex md:gap-14 lg:gap-24">
        <NavLinks />
      </div>
      <div className="md:hidden">
        <SideBar />
      </div>
    </nav>
  );
}
