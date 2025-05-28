import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect } from "react";

const getRandomPosition = () => ({
  x: Math.random() * 20 - 10, // -100 ile +100 px arası
  y: Math.random() * 20 - 10,
});

type FloatingBoxProps = {
  children?: ReactNode;
};

const FloatingBox = ({ children }: FloatingBoxProps) => {
  const controls = useAnimation();

  const animateRandom = async () => {
    while (true) {
      await controls.start({
        ...getRandomPosition(),
        transition: {
          duration: 1.5,
          ease: "easeInOut",
        },
      });
    }
  };

  useEffect(() => {
    animateRandom();
  }, []);

  return <motion.div animate={controls}>{children}</motion.div>;
};

export default FloatingBox