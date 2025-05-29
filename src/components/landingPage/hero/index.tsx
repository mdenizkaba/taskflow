"use client";
import "./hero.css";
import Image from "next/image";
import Container from "../container";
import HeroBackground from "./heroBackground";
import clsx from "clsx";
import InfoIcon from "@/components/icons/InfoIcon";
import { motion } from "framer-motion";
import SpecialButton from "../special-button";
import RandomStars from "../random-stars.tsx";

export default function Hero() {
  return (
    <div className="h-dvh  w-full relative overflow-hidden">
      <div
        className={clsx(
          "absolute inset-0 flex flex-col justify-center items-center z-20 xl:pb-[350px] lg:pb-[300px] md:pb-[130px] pb-[200px] 2xl:pt-20 lg:pt-42 md:pt-10 pt-12 text-white 2xl:gap-[18px] lg:gap-[12px] md:gap-[8px] gap-[18px]"
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
          className="relative text-sm 2xl:h-[30px] h-[25px] 2xl:w-[120px] w-[100px] rounded-full"
        >
          <div className="border relative 2xl:h-[30px] h-[25px] 2xl:w-[120px] w-[100px] justify-center items-center flex rounded-full z-10  bg-primary-light 2xl:text-base text-xs">
            Get It Done
          </div>
          <div className="absolute inset-0 2xl:h-[30px] h-[25px] 2xl:w-[120px] w-[100px] rounded-full -z-10 bg-[#799FFF] top-[2px] opacity-50" />
          <div className="absolute inset-0 2xl:h-[30px] h-[25px] 2xl:w-[120px] w-[100px] rounded-full -z-10 bg-[#799FFF] top-[4px] opacity-20" />
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
          className="text-center font-bold 2xl:text-[46px] xl:text-[38px] lg:text-[30px] md:text-[24px] text-[28px] 2xl:leading-[54px] xl:leading-[42px]  lg:leading-[38px] md:leading-[30px] leading-[38px] tracking-wide"
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
          className="2xl:max-w-[612px] max-w-[500px] text-center font-normal 2xl:text-md text-sm px-4"
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
          className="flex justify-center items-center 2xl:gap-2 gap-1 px-2 py-1 rounded-xl bg-[#323D73] lg:mt-3 md:mt-0 mt-3"
        >
          <InfoIcon />
          <span className="font-normal 2xl:text-sm text-xs">
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
          <div className="relative 2xl:h-[350px] xl:h-[240px] lg:h-[200px] md:h-[120px] h-[200px] rounded-t-xl pt-[2px] px-[2px] bg-linear-to-b from-[#C1CBFF] to-[#5B6599] shadow-[0_5px_35px_rgba(255,255,255,0.15)]">
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
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute lg:-top-20 -top-10 left-1/2 lg:-ml-40 -ml-20 lg:h-40 lg:w-80 h-20 w-40 rounded-full z-0 bg-radial from-white from-40% to-blue-600 scale-y-20 blur-[45px]"
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
