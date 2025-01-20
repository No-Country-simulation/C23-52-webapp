"use client";

import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { useState } from "react";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  {
    title: "Services",
    submenu: [
      { title: "Readers", href: "/readers" },
      { title: "Writers", href: "/writers" },
    ],
  },
  { title: "Contact", href: "/contact" },
  { title: "Sign In", href: "/sign-in" },
  { title: "Sign Up", href: "/sign-up" },
];

const Hamburguer = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.submenu) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button
            className={cn(
              "flex w-full items-center justify-between py-2 text-lg font-medium transition-colors hover:text-primary",
              depth > 0 && "pl-4"
            )}
          >
            {item.title}
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {item.submenu.map((subItem) => (
            <Hamburguer key={subItem.title} item={subItem} depth={depth + 1} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <a
      href={item.href}
      className={cn(
        "block py-2 text-lg font-medium transition-colors hover:text-primary",
        depth > 0 && "pl-4",
        item.href === "/" && "text-primary"
      )}
    >
      {item.title}
    </a>
  );
};

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="hover:bg-transparent rounded-md">
          <Menu className="h-7 w-7" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <SheetHeader>
          <SheetTitle>
            <span className="sr-only">Menu</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <Hamburguer key={item.title} item={item} />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
