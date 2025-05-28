import clsx from "clsx";
import IconBox from "./IconBox";
import CheckIcon from "@/components/icons/CheckIcon";
import BoltIcon from "@/components/icons/BoltIcon";
import ChatIcon from "@/components/icons/ChatIcon";
import TimeIcon from "@/components/icons/TimeIcon";
import HeroTriangle from "./heroTriangle";
import { motion } from "framer-motion";
import FloatingBox from "../floating-box";

const HeroBackground = () => {
  return (
    <div
      className={clsx(
        "h-full w-full overflow-y-hidden relative",
        "bg-linear-to-b from-primary-dark to-primary-light"
      )}
    >
      <HeroTriangle borderWidth={0.4} scale={1} zIndex={1} delay={0.5} />
      <HeroTriangle borderWidth={0.4} scale={0.85} zIndex={2} delay={0.6}>
        <motion.div
        initial={{ opacity: 0}} // Başlangıçta görünmez ve 100px aşağıda
        animate={{ opacity: 1}} // Animasyonla görünür hale gelir ve yukarı kayar
        transition={{
          delay:1.2,
          duration: 0.5,
          ease: "easeOut",
        }}
         className="absolute left-[16.2%] top-[23%] -rotate-25">
          <FloatingBox>
            <IconBox>
              <CheckIcon />
            </IconBox>
          </FloatingBox>
        </motion.div>
        <motion.div
        initial={{ opacity: 0}} // Başlangıçta görünmez ve 100px aşağıda
        animate={{ opacity: 1}} // Animasyonla görünür hale gelir ve yukarı kayar
        transition={{
          delay:1,
          duration: 0.5,
          ease: "easeOut",
        }} className="absolute right-[16%] top-[23%] rotate-15">
          <FloatingBox>
            <IconBox>
              <ChatIcon />
            </IconBox>
          </FloatingBox>
        </motion.div>
      </HeroTriangle>

      <HeroTriangle borderWidth={0.4} scale={0.62} zIndex={3} delay={0.7}>
        <motion.div
        initial={{ opacity: 0}} // Başlangıçta görünmez ve 100px aşağıda
        animate={{ opacity: 1}} // Animasyonla görünür hale gelir ve yukarı kayar
        transition={{
          delay:1.5,
          duration: 0.5,
          ease: "easeOut",
        }} className="absolute left-[30%] top-[44%] -rotate-18">
          <FloatingBox>
            <IconBox>
              <BoltIcon />
            </IconBox>
          </FloatingBox>
        </motion.div>
        <motion.div
        initial={{ opacity: 0}} // Başlangıçta görünmez ve 100px aşağıda
        animate={{ opacity: 1}} // Animasyonla görünür hale gelir ve yukarı kayar
        transition={{
         delay:2,
          duration: 0.5,
          ease: "easeOut",
        }} className="absolute right-[30%] top-[44%] -rotate-13">
          <FloatingBox>
            <IconBox>
              <TimeIcon />
            </IconBox>
          </FloatingBox>
        </motion.div>
      </HeroTriangle>

      <HeroTriangle
        borderWidth={0.5}
        scale={0.28}
        effect={5}
        zIndex={5}
        delay={0.9}
      />
      <HeroTriangle borderWidth={3} scale={0.1} zIndex={6} delay={1} />
    </div>
  );
};

export default HeroBackground;
