import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
type HeroTriangleProps = {
  borderWidth?: number;
  children?: ReactNode;
  scale?: number;
  effect?: number;
  zIndex?: number;
  delay?: number;
  disableShadow?:boolean;
};
export default function HeroTriangle({
  borderWidth = 0.5,
  children,
  scale = 1,
  effect,
  zIndex = 0,
  delay = 1,
  disableShadow=false,
}: HeroTriangleProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }} // Başlangıçta görünmez ve 100px aşağıda
        animate={{ opacity: 1, scaleX: scale }} // Animasyonla görünür hale gelir ve yukarı kayar
        transition={{
          delay: delay,
          duration: 1,
          ease: "easeOut", // Daha doğal bir hareket için
        }}
        className="absolute inset-0 flex justify-center items-center h-dvh w-full transition-all duration-500 "
        style={{
          zIndex: zIndex,
        }}
      >
        <div
          className={clsx(
            "relative backdrop-blur-[3px]",
            disableShadow?"rotated-square-middle":"rotated-square"
          )}
          style={{
            boxShadow:disableShadow ? "0 0 0px rgba(0,0,0,0)": "0 0 30px rgba(0,0,0,.2)",
            borderWidth: borderWidth * 2,
          }}
        >
          {effect && (
            <motion.div
              initial={{ top:480}} // Başlangıçta görünmez ve 100px aşağıda
              animate={{ top:40}} // Animasyonla görünür hale gelir ve yukarı kayar
              transition={{
                delay: 2,
                duration: 2,
                ease: "easeOut",
              }}
              className="absolute w-[2px] bg-gradient-to-t from-transparent via-white to-transparent h-26 right-0"
            ></motion.div>
          )}
          {effect && (
            <motion.div 
            initial={{ left:480}} // Başlangıçta görünmez ve 100px aşağıda
              animate={{ left:40}} // Animasyonla görünür hale gelir ve yukarı kayar
              transition={{
                delay: 2.1,
                duration: 2,
                ease: "easeOut",
              }}
            className="absolute left-10  h-[2px] bg-gradient-to-r from-transparent via-white to-transparent  w-26 bottom-0"></motion.div>
          )}
        </div>
      </motion.div>
      <div
        className="absolute inset-0 "
        style={{
          zIndex: zIndex - 1,
        }}
      >
        {children}
      </div>
    </>
  );
}
