import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-4 xl:py-8 text-black top-0 sticky z-50 bg-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <h1 className="text-xl font-semibold flex flex-col text-center">
            Öykü Özdemir <br />
            <span className="text-base text-gray-400">Uzman Psikolog</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>İletişim</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
