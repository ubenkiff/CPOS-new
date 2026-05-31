import { fetchWPPostBySlug } from '@/lib/wordpress';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await fetchWPPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Header */}
      <div className="relative h-[50vh] min-h-[400px] flex items-end">
        {post.image && (
          <div className="absolute inset-0 z-0">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>
        )}
        <div className="container mx-auto px-4 py-12 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 mb-6 font-medium transition-colors">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <span className="inline-block px-3 py-1 bg-amber-500 text-black text-sm font-semibold rounded-full mb-4">
            {post.category || 'Article'}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {new Date(post.date).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div 
            className="text-gray-800 dark:text-gray-300 leading-relaxed font-sans space-y-6 text-lg"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>
      </div>
    </article>
  );
}
