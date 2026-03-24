"use client";

import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1], // custom cubic-bezier that feels native/springy
      }}
    >
      {children}
    </motion.div>
  );
}
