"use client"
import Image from "next/image";
import Container from "./container";
import SpecialButton from "./special-button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {motion} from "framer-motion"


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
  const firstSegment = pathname?.split('/').filter(Boolean)[0] || null;
  console.log('--',firstSegment)
  return (
    <ul className="flex justify-center items-center gap-10 ">
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
            <Link href={item.link} className="flex text-[#C2C7DE]  tracking-wider text-[15px]">
              {item.name}
              <div className={clsx(
                "absolute bottom-1 w-0 h-[1.5px] bg-white rounded-xs group-hover:w-full left-1/2 -translate-x-1/2 transition-all duration-300",
           
                `/${firstSegment}`===item.link && "w-3",
                firstSegment === null && index===0 && "w-3"
              )}></div>
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
        <div className="w-[150px]">
          <Image
            src="/logo.svg"
            height={40}
            width={150}
            alt={"Taskflow Dashboard Screen"}
            className="object-cover object-top rounded-xl z-10"
          />
        </div>
        <Navbar />
        <div className="w-[150px] flex justify-end">
          <SpecialButton light>Sign In</SpecialButton>
        </div>
      </Container>
    </header>
  );
}
