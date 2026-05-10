"use client";
import { useState } from "react";
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
        <Button variant="outline" size="icon">
          <MenuIcon className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="my-4 flex flex-col gap-3">
            <NavBar direction="col" />
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild className="grid gap-4">
            <Button
              asChild
              variant="link"
              className="underline hover:no-underline"
            >
              <Link href="/">Download menu</Link>
            </Button>
            <Button asChild className="btn-main">
              <Link href="/">Book free testing</Link>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default Drawer;
