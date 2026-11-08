import HomeDiscordSection from '@/components/home/home-discord';
import { DocsRootProvider } from '@/components/providers/docs-root-provider';
import Container from '@/components/layout/container';
import type { PropsWithChildren } from 'react';

export default function BlogPostLayout({ children }: PropsWithChildren) {
  return (
    <DocsRootProvider>
      <div className="flex flex-col gap-8">
        <Container className="py-8 px-4">{children}</Container>

        {/* discord section */}
        <HomeDiscordSection />
      </div>
    </DocsRootProvider>
  );
}
