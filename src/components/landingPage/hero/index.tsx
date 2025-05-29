"use client";
import Image from "next/image";
import Container from "../container";
import HeroBackground from "./heroBackground";
import clsx from "clsx";
import InfoIcon from "@/components/icons/InfoIcon";
import { motion } from "framer-motion";
import RandomStars from "../randomStars";
import SpecialButton from "../special-button";

export default function Hero() {
  return (
    <div className="h-lvh w-full relative">
      <div
        className={clsx(
          "absolute inset-0 flex flex-col justify-center items-center z-20 pb-[350px] pt-20 text-white gap-[18px]"
        )}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: "easeOut",
          }}
          className="relative text-sm h-[30px] w-[120px] rounded-full"
        >
          <div className="border relative h-[30px] w-[120px] justify-center items-center flex rounded-full z-10  bg-primary-light">
            Get It Done
          </div>
          <div className="absolute inset-0 h-[30px] w-[120px] rounded-full -z-10 bg-[#799FFF] top-[2px] opacity-50" />
          <div className="absolute inset-0 h-[30px] w-[120px] rounded-full -z-10 bg-[#799FFF] top-[4px] opacity-20" />
          <div className="absolute inset-0 h-[60px] -translate-x-1/4 w-[240px] rounded-full -z-10 bg-[#8fadf7] -top-[6px] opacity-20 blur-xl" />
          <div className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50px] w-[300px] rounded-full -z-10 opacity-30">
            <RandomStars count={60} width={300} height={30} />
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            delay: 0,
            duration: 1,
            ease: "easeOut",
          }}
          className="text-center font-bold text-[46px] leading-[54px] tracking-wide"
        >
          A Smart Way
          <br />
          <span className="bg-gradient-to-r from-[#C1CBFF] to-[#799FFF] bg-clip-text text-transparent">
            To Do Your Tasks
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeOut",
          }}
          className="max-w-[612px] text-center font-normal text-md"
        >
          Your go-to solution for task management. Collaborate with your team,
          track progress, and manage your projects with ease.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: "easeOut",
          }}
          className="flex justify-center items-center gap-2 px-2 py-1 rounded-xl bg-[#323D73] mt-3"
        >
          <InfoIcon />
          <span className="font-normal text-sm">
            There is also 1 month free trial
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            delay: 0.7,
            duration: 1,
            ease: "easeOut",
          }}
        >
          <SpecialButton>Try it Now!</SpecialButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.7,
          ease: "easeOut",
        }}
        className="absolute bottom-0 left-0 right-0 flex items-center justify-center z-10"
      >
        <Container className="text-white">
          <div className="relative h-[350px] rounded-t-xl pt-[2px] px-[2px] bg-linear-to-b from-[#C1CBFF] to-[#5B6599] shadow-[0_5px_35px_rgba(255,255,255,0.15)]">
            <div className="relative h-full w-full rounded-t-xl z-20 bg-primary-dark">
              <Image
                src="/hero/hero-image.png"
                fill={true}
                alt={"Taskflow Dashboard Screen"}
                className="object-cover object-top rounded-xl z-10"
                unoptimized
              />
              <motion.div
                animate={{ x: [100, -100, 100] }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-20 left-1/2 -ml-40 h-40 w-80 rounded-full z-0 bg-radial from-white from-40% to-blue-600 scale-y-20 blur-[45px]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-light to-60% to-primary-light/0 z-20" />
            </div>
          </div>
        </Container>
      </motion.div>
      <HeroBackground />
    </div>
  );
}
