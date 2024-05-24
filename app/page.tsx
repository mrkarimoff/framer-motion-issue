"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <motion.div style={{ display: "flex", gap: "30px" }} layout>
        <AnimatePresence mode="sync">
          <motion.div
            layout
            initial={{ opacity: 0, y: "50rem" }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { delay: 0 },
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: { duration: 0.4 },
            }}
          >
            <h1>Node 1</h1>
          </motion.div>

          <motion.div
            layout
            initial={{ opacity: 0, y: "50rem" }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { delay: 0.05 },
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: { duration: 0.4 },
            }}
          >
            <h1>Node 2</h1>
          </motion.div>

          <motion.div
            layout
            initial={{ opacity: 0, y: "50rem" }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { delay: 0.1 },
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: { duration: 0.4 },
            }}
          >
            <h1>Node 3</h1>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
