'use client';

import { Ripple } from '@/components/magicui/ripple';
import { AnimatedGroup } from '@/components/tailark/motion/animated-group';
import { TextEffect } from '@/components/tailark/motion/text-effect';
import { Button } from '@/components/ui/button';
import { websiteConfig } from '@/config/website';
import { LocaleLink } from '@/i18n/navigation';
import { Routes } from '@/routes';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import { CustomHighlightText } from '../custom/highlight';
import { CustomTextEffect } from '../custom/text-effect';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      y: 12,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HomeHeroSection() {
  const t = useTranslations('HomePage.hero');
  const linkPrimary = websiteConfig.metadata.social?.twitter || '';
  const linkSecondary = Routes.Blog;

  return (
    <>
      <section id="hero" className="overflow-hidden pb-16">
        {/* background, light shadows on top of the hero section */}
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,oklch(0.85_0.04_55/.12)_0,oklch(0.7_0.02_45/.04)_50%,transparent_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,oklch(0.88_0.05_38/.1)_0,oklch(0.6_0.02_38/.03)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,oklch(0.9_0.03_65/.08)_0,oklch(0.65_0.015_50/.03)_80%,transparent_100%)]" />
        </div>

        <section>
          <div className="relative pt-12">
            <div className="mx-auto max-w-7xl px-6">
              {/* <Ripple /> */}

              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                {/* introduction */}
                {/* <AnimatedGroup variants={transitionVariants}>
                  <LocaleLink
                    href={linkIntroduction}
                    className="hover:bg-primary/5 group mx-auto flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.03] p-1 pl-4"
                  >
                    <span className="text-sm text-foreground font-medium">
                      {t('introduction')}
                    </span>

                    <div className="size-6 overflow-hidden rounded-full bg-primary/10 duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3 text-primary" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3 text-primary" />
                        </span>
                      </div>
                    </div>
                  </LocaleLink>
                </AnimatedGroup> */}

                {/* title */}
                <CustomTextEffect
                  per="word"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 text-balance font-bricolage-grotesque lg:mt-16 text-5xl xl:text-[5rem]"
                >
                  {[
                    '👋',
                    'Hi,',
                    'I',
                    'am',
                    <CustomHighlightText
                      key="fox"
                      text="Fox"
                      className="mx-1 py-0.5"
                    />,
                  ].map((word, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && ' '}
                      {word}
                    </React.Fragment>
                  ))}
                </CustomTextEffect>

                {/* description */}
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-4xl text-balance text-lg text-muted-foreground"
                >
                  {t('intro')}
                </TextEffect>

                {/* action buttons */}
                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-row items-center justify-center gap-4"
                >
                  <div key={1} className="bg-foreground/10 rounded-xl">
                    <Button
                      asChild
                      size="lg"
                      className="h-10.5 rounded-xl px-5 text-base"
                    >
                      <LocaleLink href={linkPrimary} target="_blank">
                        <span className="text-nowrap">{t('follow')}</span>
                      </LocaleLink>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-10.5 rounded-xl px-5"
                  >
                    <LocaleLink href={linkSecondary}>
                      <span className="text-nowrap">{t('read')}</span>
                    </LocaleLink>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            {/* images */}
            {/* <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <Image
                    className="bg-background relative hidden rounded-2xl dark:block"
                    src="/blocks/music.png"
                    alt="app screen"
                    width={2796}
                    height={2008}
                  />
                  <Image
                    className="z-2 border-border/25 relative rounded-2xl border dark:hidden"
                    src="/blocks/music-light.png"
                    alt="app screen"
                    width={2796}
                    height={2008}
                  />
                </div>
              </div>
            </AnimatedGroup> */}
          </div>
        </section>
      </section>
    </>
  );
}
