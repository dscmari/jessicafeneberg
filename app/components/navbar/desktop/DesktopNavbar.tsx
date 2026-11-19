"use client";
import Link from "next/link";

import Image from "next/image";
import { usePathname } from "next/navigation";
import ContactBtn from "../../btn/ContactBtn";

type Props = {
  className?: string;
};

export default function DesktopNavbar({ className }: Props) {
  const pathname = usePathname();
  return (
    <nav
      className={`relative z-100 mx-auto pb-4 px-4 xl:px-8 2xl:px-16 dark:bg-darkblue dark:text-stone-light ${className}`}
    >
      <div className="flex items-center justify-around pt-4 lg:pt-8 xl:pt-12">
        <Link
          className={`font-semibold !font-lora text-xl 2xl:self-center nav-link ${pathname === "/" ? "active" : ""}`}
          href={"/"}
        >
          <Image
            src={"/jessi_logo.jpeg"}
            width={200}
            height={100}
            alt="Logo Jessica Feneberg"
          />
        </Link>
        {/* <ShiftingDropDown /> */}
     
          <div className="flex gap-4 xl:gap-8 2xl:gap-16">
                   <Link
              className={`nav-link ${pathname === "/" ? "active font-semibold" : ""}`}
              href={"/"}
            >
              Start
            </Link>
            <Link
              className={`nav-link ${pathname === "/leistungen/" ? "active" : ""}`}
              href={"/leistungen/"}
            >
              Leistungen
            </Link>
            <Link
              className={`nav-link ${pathname === "/ueber-mich/" ? "active" : ""}`}
              href={"/ueber-mich/"}
            >
              Über mich
            </Link>
            <Link
              className={`nav-link ${pathname === "/referenzen/" ? "active" : ""}`}
              href={"/referenzen/"}
            >
             Referenzen
            </Link>
    
        </div>
        <div className="flex items-center gap-8">
          <ContactBtn />
        </div>
      </div>
    </nav>
  );
}
