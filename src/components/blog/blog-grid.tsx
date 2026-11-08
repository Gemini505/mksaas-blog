import BlogCard, { BlogCardSkeleton } from '@/components/blog/blog-card';
import { websiteConfig } from '@/config/website';
import type { BlogType } from '@/lib/source';
import {
  AnimatedGridContainer,
  AnimatedGridItem,
} from './blog-grid-animated';

interface BlogGridProps {
  locale: string;
  posts: BlogType[];
}

export default function BlogGrid({ locale, posts }: BlogGridProps) {
  return (
    <div>
      {posts?.length > 0 && (
        <AnimatedGridContainer>
          {posts.map((post) => (
            <AnimatedGridItem key={post.slugs.join('/')}>
              <BlogCard locale={locale} post={post} />
            </AnimatedGridItem>
          ))}
        </AnimatedGridContainer>
      )}
    </div>
  );
}

export function BlogGridSkeleton({
  count = websiteConfig.blog.paginationSize,
}: {
  count?: number;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(count)].map((_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
    </div>
  );
}
