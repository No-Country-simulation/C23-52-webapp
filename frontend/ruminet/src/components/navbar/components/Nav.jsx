"use client";
import Link from "next/link";

import CustomButton from "@/components/CustomButton";
import { useUser } from "@auth0/nextjs-auth0/client";
import SideBar from "./Hamburguer";
import Avatar from "./Avatar";

const NavLinks = () => {
  const { user } = useUser();
  return (
    <>
      <Link className="hover:text-slate-200" href="/creators">
        Creadores
      </Link>
      <Link className="hover:text-slate-200" href="/readers">
        Lectores
      </Link>
      <Link className="hover:text-slate-200" href="/contact">
        Contacto
      </Link>
      <Link className="hover:text-slate-200" href="/accessibility">
        Accesibilidad
      </Link>
      {!user ? (
        <>
        <CustomButton text={"Comienza a crear"}/>
          <Link
            className="bg-[#E10D0D] hover:bg-[#B00B0B] p-2 rounded-lg"
            href="/api/auth/login"
          >
            Registrar
          </Link>
        </>
      ) : (
        <Avatar/>
      )}
    </>
  );
};

export default function Nav() {
  return (
    <nav>
      <div className="hidden text-md lg:text-xl  font-semibold  items-center md:flex md:gap-14 lg:gap-20">
        <NavLinks />
      </div>
      <div className="md:hidden">
        <SideBar />
      </div>
    </nav>
  );
}
