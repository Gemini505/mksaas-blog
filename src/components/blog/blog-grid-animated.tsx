'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      bounce: 0.25,
      duration: 0.8,
    },
  },
};

export function AnimatedGridContainer({
  children,
}: { children: ReactNode }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedGridItem({
  children,
}: { children: ReactNode }) {
  return <motion.div variants={cardVariants}>{children}</motion.div>;
}
