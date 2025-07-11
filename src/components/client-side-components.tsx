'use client'

import dynamic from 'next/dynamic'

export const Analytics = dynamic(() => import('@/components/analytics'), { ssr: false })
export const PerformanceOptimizer = dynamic(
  () => import('@/components/performance-optimizer'),
  { ssr: false }
) 