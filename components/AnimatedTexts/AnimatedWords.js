import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import AnimatedCharacters from "./AnimatedCharacters";
import { useInView } from "react-intersection-observer";

function AnimatedWords({ texts }) {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  return (
    <motion.div ref={ref} initial="hidden" animate={ctrls} variants={container}>
      <div>
        {texts.map((item, index) => {
          return <AnimatedCharacters {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

export default AnimatedWords;
