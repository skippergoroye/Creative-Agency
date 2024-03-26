import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS } from "@/constants";
import link from 'next/link';


const Footer = () => {
  return (
    <footer className="mx-auto max-w-[1440px] px-6 lg:px-20 py-5 lg:py-16 lg:mt-20 bg-footercolor">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image
              src="/SVG/Footer-Logo.svg"
              alt="footer-logo"
              width={140}
              height={40}
            />
          </Link>
        </div>

        <div className="flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap">
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold font-quicksand text-xl leading-normal mb-6 text-white">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li className="mt-3 font-quicksand font-extralight text-sm leading-normal text-white hover:text-slate-500">
                    <Link href={link.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div></div>
    </footer>
  );
};

export default Footer;
