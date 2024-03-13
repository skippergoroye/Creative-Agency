import { Button } from "@/components";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mx-auto container px-6 lg:px-20 py-5 lg:py-16 flex items-center justify-between">
      <Link href="/">
        <Image
          src="/SVG/creative-agency.svg"
          alt="creative-logo"
          width={120}
          height={40}
          className="hidden md:block" // show on desktop
        />
        <Image
          src="/SVG/creative-agency.svg" 
          alt="creative-logo"
          width={91}
          height={40}
          className="md:hidden" // show on mobile
        />
      </Link>


      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key}>
            {link.label }
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex">
        <Button type="button" title="Contact us"  variant="border-blue-400 border font-quicksand"/>
      </div>

      <Image src="/SVG/menu.svg" alt="menu-svg" width={29} height={25} className="lg:hidden cursor-pointer inline-block" />
    </nav>
  );
};

export default Navbar;
