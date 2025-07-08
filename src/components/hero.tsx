export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-16 sm:py-24 lg:py-32">
          {/* Content */}
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              HR Management{' '}
              <span className="text-indigo-600 dark:text-indigo-400">
                Reinvented
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Streamline your HR operations with our comprehensive management system. From employee onboarding to performance tracking, FlowHR simplifies every aspect of human resources.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 dark:bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="lg:w-1/2 mt-16 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl dark:shadow-gray-900/50 p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Dashboard Preview */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Employee Dashboard</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Real-time HR insights</p>
                    </div>
                  </div>

                  {/* Feature indicators */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full mb-2"></div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Leave Management</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full mb-2"></div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Attendance Tracking</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full mb-2"></div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Role Management</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full mb-2"></div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Analytics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
