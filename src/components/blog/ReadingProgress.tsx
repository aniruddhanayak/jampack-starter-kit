import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-background/50"
    >
      <motion.div
        className="h-full bg-gradient-primary origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.div>
  );
};
