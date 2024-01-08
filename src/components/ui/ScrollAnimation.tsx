"use client"
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';

const ScrollAnimation = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.95 }
  };

  // Only set initial to "hidden" if on the client side
  const initial = typeof window === 'undefined' ? {} : 'hidden';

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={initial}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
