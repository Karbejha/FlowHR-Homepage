'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    // SSR fallback - neutral styling that works in both themes
    return (
      <Link href="/" className={`flex items-center hover:opacity-90 transition-opacity ${className}`}>
        <div className="px-3 py-1.5 rounded-md bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="flex items-center">
            <div className="relative mr-2">
              <div className="relative w-6 h-6">
                <div className="absolute inset-x-0 top-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full opacity-70"></div>
                <div className="absolute inset-x-0 top-3 h-1 bg-blue-400 dark:bg-blue-300 rounded-full opacity-80"></div>
                <div className="absolute inset-x-0 top-5 h-1 bg-blue-300 dark:bg-blue-200 rounded-full"></div>
                <div className="absolute -right-0.5 -bottom-0.5 w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-300"></div>
              </div>
            </div>
            <div className="text-gray-800 dark:text-white text-lg font-bold tracking-wide select-none flex items-center">
              <span className="text-blue-500 dark:text-blue-300 mr-0.5">Flow</span>
              <span className="text-gray-800 dark:text-white">HR</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }  
  
  return (
    <Link href="/" className={`flex items-center hover:opacity-90 transition-opacity ${className}`}>
      <div className={`px-3 py-1.5 rounded-md transition-all duration-200 ${
        isDark 
          ? 'bg-gradient-to-r from-gray-800 to-gray-900 border-gray-600 shadow-lg shadow-gray-900/20' 
          : 'bg-gradient-to-r from-indigo-50 to-blue-50 border-gray-200 shadow-lg shadow-blue-900/10'
      } border`}>
        <div className="flex items-center">
          {/* Custom FlowHR wave logo */}
          <div className="relative mr-2">
            <div className="relative w-6 h-6">
              {/* First wave */}
              <div className={`absolute inset-x-0 top-1 h-1 ${
                isDark ? 'bg-blue-400' : 'bg-blue-600'
              } rounded-full opacity-70 transition-colors duration-200`}></div>
              
              {/* Second wave */}
              <div className={`absolute inset-x-0 top-3 h-1 ${
                isDark ? 'bg-blue-300' : 'bg-blue-500'
              } rounded-full opacity-80 transition-colors duration-200`}></div>
              
              {/* Third wave */}
              <div className={`absolute inset-x-0 top-5 h-1 ${
                isDark ? 'bg-blue-200' : 'bg-blue-400'
              } rounded-full transition-colors duration-200`}></div>
              
              {/* Animated dot */}
              <div className={`absolute -right-0.5 -bottom-0.5 w-2 h-2 rounded-full ${
                isDark ? 'bg-blue-300' : 'bg-blue-500'
              } animate-pulse transition-colors duration-200`}></div>
            </div>
          </div>
          
          <div className={`text-lg font-bold tracking-wide select-none flex items-center transition-colors duration-200 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            <span className={`mr-0.5 transition-colors duration-200 ${
              isDark ? 'text-blue-300' : 'text-blue-600'
            }`}>Flow</span>
            <span className={isDark ? 'text-white' : 'text-gray-800'}>HR</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
