import Link from "next/link";
import { Button } from "@/components/ui/button";

import Logo from "./Logo";
import NavBar from "./NavBar";
import Drawer from "./Drawer";
import LangSwitcher from "./LangSwitcher";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <div className="hidden xl:flex ml-10 mr-auto">
          <NavBar />
        </div>
        <div className="flex gap-10 items-center ">
          <div className="hidden lg:flex gap-10 items-center ">
            <Button
              asChild
              variant="link"
              className="underline hover:no-underline"
            >
              <Link href="/">Download menu</Link>
            </Button>
            <Button
              asChild
              className="btn-main hover:bg-cstm-secondary hover:text-main transition bg-main text-white "
            >
              <Link href="/">Book free testing</Link>
            </Button>
          </div>
          <div className="flex gap-2 items-center">
            <LangSwitcher />
            <div className="lg:hidden">
              <Drawer />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
