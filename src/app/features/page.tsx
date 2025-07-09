import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FlowHR Features - Complete HR Management Solution',
  description: 'Discover FlowHR\'s powerful features: employee management, leave tracking, attendance monitoring, analytics & reports, and role-based access control. Transform your HR operations today.',
  keywords: [
    'hr management features',
    'employee management system',
    'leave tracking software',
    'attendance monitoring',
    'hr analytics dashboard',
    'role-based access control',
    'workforce management tools'
  ],
  openGraph: {
    title: 'FlowHR Features - Complete HR Management Solution',
    description: 'Powerful HR features including employee management, leave tracking, attendance monitoring, and advanced analytics.',
    type: 'website',
  },
}

export default function FeaturesPage() {
  const features = [
    {
      title: 'Employee Management',
      description: 'Comprehensive employee profiles, role management, and organizational structure visualization.',
      icon: '👥',
      details: [
        'Complete employee profiles with personal and professional information',
        'Organizational chart visualization',
        'Role and department management',
        'Employee onboarding workflows',
        'Document management and storage',
        'Performance tracking and reviews'
      ]
    },
    {
      title: 'Leave Tracking',
      description: 'Streamlined leave application, approval workflow, and balance tracking system.',
      icon: '📅',
      details: [
        'Easy leave request submission',
        'Automated approval workflows',
        'Real-time leave balance tracking',
        'Multiple leave types configuration',
        'Holiday calendar management',
        'Leave policy enforcement'
      ]
    },
    {
      title: 'Analytics & Reports',
      description: 'Real-time attendance monitoring, productivity insights, and comprehensive reporting dashboard.',
      icon: '📊',
      details: [
        'Real-time attendance tracking',
        'Productivity analytics and insights',
        'Customizable report generation',
        'Key performance indicators (KPIs)',
        'Data visualization dashboards',
        'Export capabilities for compliance'
      ]
    },
    {
      title: 'Role-Based Access',
      description: 'Secure role-based permissions ensuring data privacy and controlled access across departments.',
      icon: '🔒',
      details: [
        'Granular permission controls',
        'Department-specific access',
        'Admin and user role management',
        'Data privacy compliance',
        'Audit trails and logs',
        'Single sign-on (SSO) integration'
      ]
    }
  ]

  const benefits = [
    {
      title: 'Increased Productivity',
      description: 'Automate routine HR tasks and free up time for strategic initiatives.',
      percentage: '60%'
    },
    {
      title: 'Reduced Errors',
      description: 'Eliminate manual data entry errors with automated workflows.',
      percentage: '85%'
    },
    {
      title: 'Cost Savings',
      description: 'Reduce HR administrative costs with streamlined processes.',
      percentage: '40%'
    },
    {
      title: 'Employee Satisfaction',
      description: 'Improve employee experience with self-service capabilities.',
      percentage: '75%'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Powerful Features for Modern HR
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage your workforce efficiently and effectively. 
              Transform your HR operations with our comprehensive suite of tools.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{feature.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {feature.description}
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Proven Results for Your Business
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              See how FlowHR transforms HR operations across organizations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  {benefit.percentage}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Seamless Integrations
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Connect FlowHR with your favorite tools and platforms
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Communication Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Slack, Microsoft Teams, Google Workspace
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
          <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Payroll Systems
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              QuickBooks, ADP, Paychex, Gusto
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
          <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Development Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              REST API, Webhooks, Custom Integrations
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 dark:bg-indigo-700">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your HR?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies using FlowHR to streamline their workforce management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
