import Nav from "./components/Nav";
import Logo from "./components/Logo";

export const Navbar = () => {
  return (
    <header className="bg-black flex md:px-10 px-5 text-white sticky w-full mx-auto top-0 p-0 md:py-0 py-5 z-[20] items-center justify-between">
      <Logo />
      <Nav />
    </header>
  );
};
