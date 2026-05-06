import { motion } from "framer-motion";

const MotionDiv = motion.div;

export function GlassCard({ children, className = "", delay = 0 }) {
  return (
    <MotionDiv
      className={`glass-panel rounded-lg ${className}`}
      initial={{ opacity: 0.92, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </MotionDiv>
  );
}
