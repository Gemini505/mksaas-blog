'use client';

import { websiteConfig } from '@/config/website';
import { motion } from 'motion/react';
import { DiscordIcon } from '../icons/discord';
import { HeaderSection } from '../layout/header-section';
import { Button } from '../ui/button';

const sectionVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      bounce: 0.25,
      duration: 0.8,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      bounce: 0.2,
      duration: 0.6,
    },
  },
};

export default function HomeDiscordSection() {
  return (
    <motion.section
      id="community"
      className="p-16 rounded-lg bg-muted/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={sectionVariants}
    >
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Header */}
        <motion.div variants={itemVariants}>
          <HeaderSection
            title="Community"
            subtitle="Join the Discord community"
            description="2700+ excellent indie makers are cooking here"
            className="text-center"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            variant="default"
            size="lg"
            className="cursor-pointer"
            asChild
          >
            <a
              href={websiteConfig.metadata.social?.discord}
              target="_blank"
              rel="noreferrer"
            >
              <DiscordIcon className="w-4 h-4" />
              Join Discord server for free
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
