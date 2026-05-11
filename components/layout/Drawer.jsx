"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

import Logo from "./Logo";
import NavBar from "./NavBar";

import { MenuIcon } from "lucide-react";

function Drawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>

        <MenuIcon className="w-5 h-5" title="menu"/>

      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <div className="my-4 flex flex-col gap-3">
            <NavBar direction="col" />
          </div>
        </SheetHeader>
        <SheetFooter className="grid gap-4">
          <SheetClose asChild>
            <Link href="/" className="underline hover:no-underline">
              Download menu
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/" className="btn-main bg-main text-white hover:bg-cstm-secondary hover:text-main transition">
              Book free testing
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default Drawer;
