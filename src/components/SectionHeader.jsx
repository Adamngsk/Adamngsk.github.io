import { motion } from "framer-motion";

const MotionDiv = motion.div;

export function SectionHeader({ eyebrow, title, children }) {
  return (
    <MotionDiv
      className="mx-auto mb-10 max-w-3xl text-center"
      initial={{ opacity: 0.92, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <p className="font-mono text-sm uppercase text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 font-mono text-3xl font-black text-white md:text-5xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-7 text-zinc-300 md:text-lg">
          {children}
        </p>
      ) : null}
    </MotionDiv>
  );
}
