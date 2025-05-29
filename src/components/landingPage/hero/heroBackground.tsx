import clsx from "clsx";
import IconBox from "./IconBox";
import CheckIcon from "@/components/icons/CheckIcon";
import BoltIcon from "@/components/icons/BoltIcon";
import ChatIcon from "@/components/icons/ChatIcon";
import TimeIcon from "@/components/icons/TimeIcon";
import HeroTriangle from "./heroTriangle";
import { motion } from "framer-motion";
import FloatingBox from "../floating-box";
import Container from "../container";
import { useIsMobile } from "@/hooks/useIsMobile";
const HeroBackground = () => {
  const isMobile = useIsMobile();
  return (
    <div
      className={clsx(
        "h-full w-full overflow-y-hidden relative",
        "bg-linear-to-b from-primary-dark to-primary-light"
      )}
    >
      <HeroTriangle borderWidth={0.4} scale={isMobile?.45:1} zIndex={1} delay={0.5} />
      <HeroTriangle borderWidth={0.4} scale={isMobile?.35:0.85} zIndex={2} delay={0.6}>
        <Container className="h-full">
          <div className="h-full w-full flex  justify-between">
            <motion.div
              initial={{ opacity: 0 }} // Başlangıçta görünmez ve 100px aşağıda
              animate={{ opacity: 1 }} // Animasyonla görünür hale gelir ve yukarı kayar
              transition={{
                delay: 1.2,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="2xl:translate-x-[-10px] xl:translate-x-[-10px] lg:translate-x-[-80px] md:translate-x-[-50px] translate-x-[0px] 2xl:translate-y-[200px] lg:translate-y-[150px] md:translate-y-[80px] translate-y-[320px] -rotate-25 origin-top"
            >
              <FloatingBox>
                <IconBox>
                  <CheckIcon className="2xl:size-[30px] size-[24px]"/>
                </IconBox>
              </FloatingBox>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} // Başlangıçta görünmez ve 100px aşağıda
              animate={{ opacity: 1 }} // Animasyonla görünür hale gelir ve yukarı kayar
              transition={{
                delay: 1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="2xl:translate-x-[-10px] xl:translate-x-[-10px] lg:translate-x-[80px] md:translate-x-[50px] translate-x-[0px] 2xl:translate-y-[200px] lg:translate-y-[150px] md:translate-y-[80px] translate-y-[320px] rotate-15 origin-top"
            >
              <FloatingBox>
                <IconBox>
                  <ChatIcon className="2xl:size-[30px] size-[24px]"/>
                </IconBox>
              </FloatingBox>
            </motion.div>
          </div>
        </Container>
      </HeroTriangle>

      <HeroTriangle borderWidth={0.4} scale={isMobile?.3:0.62} zIndex={3} delay={0.7}>
        <Container className="h-full">
          <div className="h-full w-full flex  justify-between">
            <motion.div
              initial={{ opacity: 0 }} // Başlangıçta görünmez ve 100px aşağıda
              animate={{ opacity: 1 }} // Animasyonla görünür hale gelir ve yukarı kayar
              transition={{
                delay: 1.5,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="2xl:translate-x-[240px] xl:translate-x-[210px] lg:translate-x-[70px] md:translate-x-[50px] translate-x-[40px] 2xl:translate-y-[380px] xl:translate-y-[320px] lg:translate-y-[310px] md:translate-y-[220px] translate-y-[420px] -rotate-25 origin-top"
            >
              <FloatingBox>
                <IconBox>
                  <BoltIcon className="2xl:size-[30px] size-[28px]"/>
                </IconBox>
              </FloatingBox>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} // Başlangıçta görünmez ve 100px aşağıda
              animate={{ opacity: 1 }} // Animasyonla görünür hale gelir ve yukarı kayar
              transition={{
                delay: 2,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="2xl:translate-x-[-245px] xl:translate-x-[-205px] lg:translate-x-[-70px] md:translate-x-[-70px] translate-x-[-40px]  2xl:translate-y-[380px] lg:translate-y-[310px] md:translate-y-[220px] translate-y-[420px] rotate-13 origin-top"
            >
              <FloatingBox>
                <IconBox>
                  <TimeIcon className="2xl:size-[30px] size-[28px]"/>
                </IconBox>
              </FloatingBox>
            </motion.div>
          </div>
        </Container>
      </HeroTriangle>

      <HeroTriangle
        borderWidth={0.5}
        scale={isMobile?.25:0.28}
        effect={5}
        zIndex={5}
        delay={0.9}
      />
      <HeroTriangle
        disableShadow
        borderWidth={3}
        scale={isMobile?.14:0.1}
        zIndex={6}
        delay={1}
      />
    </div>
  );
};

export default HeroBackground;
