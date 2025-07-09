import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HR Management Blog - Expert Insights & Best Practices',
  description: 'Stay updated with the latest HR trends, best practices, and expert insights. Learn how to improve your HR processes and boost employee engagement.',
  keywords: [
    'HR blog',
    'human resources articles',
    'HR best practices',
    'employee management tips',
    'HR trends',
    'workforce management',
    'employee engagement',
    'HR strategy'
  ],
  openGraph: {
    title: 'HR Management Blog - Expert Insights & Best Practices',
    description: 'Stay updated with the latest HR trends, best practices, and expert insights.',
    type: 'website',
  },
}

const blogPosts = [
  {
    id: 1,
    title: '10 Essential HR Metrics Every Manager Should Track',
    excerpt: 'Discover the key performance indicators that will help you measure and improve your HR effectiveness.',
    date: '2024-12-01',
    readTime: '5 min read',
    category: 'Analytics',
    slug: 'essential-hr-metrics'
  },
  {
    id: 2,
    title: 'The Complete Guide to Employee Onboarding',
    excerpt: 'Learn how to create an onboarding process that sets new hires up for success from day one.',
    date: '2024-11-28',
    readTime: '8 min read',
    category: 'Onboarding',
    slug: 'employee-onboarding-guide'
  },
  {
    id: 3,
    title: 'Remote Work HR Challenges and Solutions',
    excerpt: 'Navigate the complexities of managing remote teams with these proven strategies and tools.',
    date: '2024-11-25',
    readTime: '6 min read',
    category: 'Remote Work',
    slug: 'remote-work-hr-challenges'
  },
  {
    id: 4,
    title: 'Building a Strong Company Culture in 2024',
    excerpt: 'Actionable strategies to create and maintain a positive workplace culture that attracts top talent.',
    date: '2024-11-22',
    readTime: '7 min read',
    category: 'Culture',
    slug: 'building-company-culture'
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              HR Management Blog
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Expert insights, best practices, and the latest trends in human resources
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-900/70 transition-shadow duration-300"
            >
              <div className="flex-1 p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium text-sm"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
