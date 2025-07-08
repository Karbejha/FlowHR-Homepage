
import Image from 'next/image'
import React from 'react'



const testimonials = [
  {
    content: "FlowHR has completely transformed our HR operations. The intuitive interface and powerful features have made managing our team of 200+ employees incredibly efficient.",
    author: {
      name: 'Sarah Johnson',
      role: 'HR Director',
      company: 'TechCorp Solutions',
      imageUrl: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  },
  {
    content: "The attendance tracking and leave management features are game-changers. We've reduced administrative overhead by 60% since implementing FlowHR.",
    author: {
      name: 'Michael Chen',
      role: 'Operations Manager',
      company: 'Innovation Labs',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
  },
  {
    content: "The role-based access control gives us peace of mind regarding data security. FlowHR's modern interface is loved by both our HR team and employees.",
    author: {
      name: 'Emily Rodriguez',
      role: 'CEO',
      company: 'StartupFlow',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white dark:bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Trusted by industry leaders
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            See how companies are transforming their HR operations with FlowHR
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, testimonialIdx) => (
            <div 
              key={testimonialIdx} 
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <blockquote className="text-gray-900 dark:text-white">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="mt-4 text-lg leading-7">{testimonial.content}</p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-x-4">
                <Image
                  className="h-12 w-12 rounded-full bg-gray-50 object-cover"
                  src={testimonial.author.imageUrl}
                  alt={`${testimonial.author.name} - ${testimonial.author.role}`}
                  width={48}
                  height={48}
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.author.role} at {testimonial.author.company}
                  </div>
                </div>
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
