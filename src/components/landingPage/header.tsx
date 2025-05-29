"use client";
import Image from "next/image";
import Container from "./container";
import SpecialButton from "./special-button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Features",
    link: "/feautres",
  },
  {
    name: "Pricing",
    link: "/",
  },
  {
    name: "Blogs",
    link: "/",
  },
  {
    name: "Docs",
    link: "/",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  // İlk segmenti al (örnek: "/about/mission" → "about")
  const firstSegment = pathname?.split("/").filter(Boolean)[0] || null;
  return (
    <ul className="justify-center items-center xl:gap-10 lg:gap-5 lg:flex hidden ">
      {navItems.map((item, index) => {
        return (
          <motion.li
            key={item.name + index}
            className="group h-[40px] relative flex justify-center items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.15, // 🔥 Sırayla animasyon
              ease: "easeOut",
            }}
          >
            <Link
              href={item.link}
              className="flex text-[#C2C7DE]  tracking-wider 2xl:text-[15px] text-[14px]"
            >
              {item.name}
              <div
                className={clsx(
                  "absolute bottom-1 w-0 h-[1.5px] bg-white rounded-xs group-hover:w-full left-1/2 -translate-x-1/2 transition-all duration-300",

                  `/${firstSegment}` === item.link && "w-3",
                  firstSegment === null && index === 0 && "w-3"
                )}
              ></div>
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default function Header() {
  return (
    <header className="absolute left-0 top-0 right-0 z-30 h-[40px] pt-6 bg-linear-to-b from-primary-dark to-transparent">
      <Container className="flex justify-between items-center">
        <div className="text-white gap-4 flex justify-center items-center">
          <div className="lg:hidden flex ">
            <Menu size={24} />
          </div>
          <div className="xl:w-[150px] w-[130px]">
            <Image
              src="/logo.svg"
              height={40}
              width={150}
              alt={"Taskflow Dashboard Screen"}
              className="object-cover object-top rounded-xl z-10"
              unoptimized
            />
          </div>
        </div>
        <Navbar />
        <div className="w-[150px] xl:flex lg:hidden flex justify-end">
          <SpecialButton light>Sign In</SpecialButton>
        </div>
      </Container>
    </header>
  );
}
