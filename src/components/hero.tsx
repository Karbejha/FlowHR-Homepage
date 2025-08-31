'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    // Throttle mouse move events for better performance
    let mouseTimeoutId: NodeJS.Timeout
    const throttledMouseMove = (e: MouseEvent) => {
      if (mouseTimeoutId) clearTimeout(mouseTimeoutId)
      mouseTimeoutId = setTimeout(() => handleMouseMove(e), 16) // ~60fps
    }

    // Throttle scroll events
    let scrollTimeoutId: NodeJS.Timeout
    const throttledScroll = () => {
      if (scrollTimeoutId) clearTimeout(scrollTimeoutId)
      scrollTimeoutId = setTimeout(handleScroll, 10)
    }

    window.addEventListener('mousemove', throttledMouseMove)
    window.addEventListener('scroll', throttledScroll, { passive: true })
    setIsLoaded(true)
    
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove)
      window.removeEventListener('scroll', throttledScroll)
      if (mouseTimeoutId) clearTimeout(mouseTimeoutId)
      if (scrollTimeoutId) clearTimeout(scrollTimeoutId)
    }
  }, [handleMouseMove, handleScroll])

  const images = useMemo(() => [
    {
      src: 'https://res.cloudinary.com/dvx4plaef/image/upload/v1756646083/Gemini_Generated_Image_wicoadwicoadwico_bqjbm7.png',
      alt: 'HR Dashboard Interface',
      className: 'animate-float-slow',
      priority: true
    },
    {
      src: 'https://res.cloudinary.com/dvx4plaef/image/upload/v1756646082/Gemini_Generated_Image_2jsp7r2jsp7r2jsp_wufzgr.png',
      alt: 'Employee Management System',
      className: 'animate-float-medium',
      priority: true
    },
    {
      src: 'https://res.cloudinary.com/dvx4plaef/image/upload/v1756646083/Gemini_Generated_Image_34jul634jul634ju_kazofg.png',
      alt: 'Analytics Dashboard',
      className: 'animate-float-fast',
      priority: false
    },
    {
      src: 'https://res.cloudinary.com/dvx4plaef/image/upload/v1756646084/Gemini_Generated_Image_ts394wts394wts39_oqnk66.png',
      alt: 'Team Collaboration',
      className: 'animate-float-slow',
      priority: false
    },
    {
      src: 'https://res.cloudinary.com/dvx4plaef/image/upload/v1756645695/ChatGPT_Image_Aug_31_2025_01_20_56_AM_tkr9hd.png',
      alt: 'HR Workflow',
      className: 'animate-float-medium',
      priority: false
    }
  ], [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" itemScope itemType="https://schema.org/SoftwareApplication">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/80"></div>
        
        {/* Floating Images */}
        <div className="absolute inset-0 overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute opacity-25 hover:opacity-40 transition-all duration-1000 ${image.className} ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
              style={{
                left: `${10 + (index * 20)}%`,
                top: `${15 + (index * 15)}%`,
                transform: isLoaded 
                  ? `translate(${mousePosition.x * 0.01 * (index + 1)}px, ${mousePosition.y * 0.01 * (index + 1) + scrollY * 0.1 * (index + 1)}px)` 
                  : 'translate(0, 0)',
                animationDelay: `${index * 0.2}s`
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover rounded-2xl shadow-2xl blur-sm hover:blur-none transition-all duration-500"
                loading={image.priority ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {useMemo(() => 
            [...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 md:w-2 md:h-2 bg-white/20 rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            )), []
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen py-16 sm:py-24 lg:py-32 text-center">
          
          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-6 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/20 animate-fade-in-up">
              <span className="mr-2">🚀</span>
              Revolutionizing HR Management
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 animate-fade-in-up animation-delay-200" itemProp="name">
              <span className="block" itemProp="applicationCategory">HR Management</span>
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Reinvented
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-xl md:text-2xl leading-relaxed text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-400" itemProp="description">
              Streamline your HR operations with our comprehensive management system. From employee onboarding to performance tracking, FlowHR simplifies every aspect of human resources.
            </p>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400 animate-fade-in-up animation-delay-600">
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Trusted by 1000+ companies</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>99.9% Uptime</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up animation-delay-800">
              <a
                href="#pricing"
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-full shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105"
                aria-label="Start your free trial of FlowHR"
              >
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
              </a>
              <a
                href="#features"
                className="group flex items-center px-8 py-4 text-white font-semibold bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300"
                aria-label="Learn more about FlowHR features"
              >
                <span>Learn More</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Feature Cards */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animation-delay-1000">
              {[
                { icon: '👥', title: 'Employee Management', desc: 'Comprehensive employee profiles' },
                { icon: '📊', title: 'Analytics & Reports', desc: 'Real-time HR insights' },
                { icon: '⏰', title: 'Time Tracking', desc: 'Automated attendance system' },
                { icon: '💰', title: 'Payroll Management', desc: 'Streamlined payroll processing' }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  )
}
