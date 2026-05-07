import { motion } from "framer-motion";

const MotionDiv = motion.div;

export function SectionHeader({ eyebrow, title, children }) {
  return (
    <MotionDiv
      className="mx-auto mb-10 max-w-[17rem] text-center sm:max-w-3xl"
      initial={{ opacity: 0.92, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <p className="font-mono text-sm uppercase text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 break-words font-mono text-xl font-black text-white sm:text-3xl md:text-5xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 break-words text-sm leading-7 text-zinc-300 sm:text-base md:text-lg">
          {children}
        </p>
      ) : null}
    </MotionDiv>
  );
}
