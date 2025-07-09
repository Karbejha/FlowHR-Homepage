import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About FlowHR - Revolutionizing HR Management',
  description: 'Learn about FlowHR\'s mission to revolutionize HR management. Founded by HR experts, we\'re committed to simplifying human resources for businesses worldwide.',
  keywords: [
    'about flowhr',
    'hr management company',
    'hr software company',
    'human resources technology',
    'hr innovation',
    'employee management solutions'
  ],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              About FlowHR
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Revolutionizing HR management for modern businesses
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              At FlowHR, we believe that managing human resources should be simple, efficient, and empowering. 
              Our mission is to provide businesses with the tools they need to nurture their most valuable asset - their people.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Founded by HR professionals who understood the pain points of traditional HR management, 
              FlowHR was built to eliminate the complexity and inefficiency that plagues many organizations.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Choose FlowHR?
            </h3>
            <ul className="space-y-3">
              {[
                'Built by HR experts for HR professionals',
                'Trusted by 1000+ companies worldwide',
                'SOC 2 compliant with enterprise security',
                '99.9% uptime guarantee',
                '24/7 customer support',
                'Continuous innovation and updates'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We continuously evolve our platform to meet the changing needs of modern workplaces.',
                icon: '💡'
              },
              {
                title: 'Simplicity',
                description: 'We believe complex problems deserve simple, elegant solutions that anyone can use.',
                icon: '✨'
              },
              {
                title: 'Trust',
                description: 'We handle your most sensitive data with the highest levels of security and privacy.',
                icon: '🔒'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
