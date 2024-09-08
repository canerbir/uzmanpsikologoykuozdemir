"use client";

import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "anasayfa",
    path: "/",
  },
  {
    name: "hakkımda",
    path: "/about",
  },
  {
    name: "alanlar & ugulamalar",
    path: "/work",
  },
  {
    name: "eğitim",
    path: "/education",
  },
  {
    name: "randevu",
    path: "/meeting",
  },
  {
    name: "iletişim",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-purple-500" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-xl font-semibold flex flex-col text-center">
              Öykü Özdemir <br />
              <span className="text-base text-gray-400">Uzman Psikolog</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-purple-500 border-b-2 border-purple-500"
                } capitalize font-medium hover:text-purple-500 transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
