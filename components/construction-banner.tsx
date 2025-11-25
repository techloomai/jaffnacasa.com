"use client";

import { motion } from "framer-motion";

export function ConstructionBanner() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky left-0 right-0 top-0 z-50 w-full bg-primary px-2 py-2.5 text-white shadow-md"
    >
      <div className="mx-auto flex w-fit max-w-5xl flex-wrap items-center justify-center gap-x-3 text-xs md:text-sm">
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="text-base"
          >
            🚧
          </motion.span>
          <span className="font-semibold">Website Under Construction</span>
          <span className="hidden sm:inline text-neutral-light">•</span>
          <span className="hidden sm:inline text-neutral-light">
            We&apos;re working on something amazing!
          </span>
        </div>
      </div>
    </motion.div>
  );
}

