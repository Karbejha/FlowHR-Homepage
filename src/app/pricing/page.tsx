import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FlowHR Pricing - Affordable HR Management Plans for Every Business',
  description: 'Simple, transparent pricing for FlowHR. Choose from Basic ($9/month), Pro ($29/month), or Enterprise ($99/month) plans. All plans include 14-day free trial. No credit card required.',
  keywords: [
    'hr software pricing',
    'hr management cost',
    'employee management pricing',
    'leave tracking software price',
    'hr system cost',
    'business hr plans',
    'workforce management pricing'
  ],
  openGraph: {
    title: 'FlowHR Pricing - Affordable HR Management for Every Business',
    description: 'Simple, transparent pricing starting at $9/month. 14-day free trial included.',
    type: 'website',
  },
}

export default function PricingPage() {
  const plans = [
    {
      name: 'Basic',
      price: '$9',
      description: 'Perfect for small teams and startups getting started with HR management.',
      features: [
        'Up to 25 employees',
        'Basic employee management',
        'Leave tracking',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'Advanced features for growing companies with comprehensive HR needs.',
      features: [
        'Up to 100 employees',
        'Advanced employee management',
        'Leave & attendance tracking',
        'Analytics & reporting',
        'Role-based access control',
        'Priority support',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      description: 'Enterprise-grade solution with unlimited scale and premium support.',
      features: [
        'Unlimited employees',
        'Complete HR suite',
        'Advanced analytics',
        'Custom workflows',
        'SSO integration',
        'Dedicated support',
        'On-premise deployment',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Choose the perfect plan for your organization. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border ${
                plan.popular 
                  ? 'border-indigo-600 dark:border-indigo-400 shadow-lg' 
                  : 'border-gray-200 dark:border-gray-700'
              } bg-white dark:bg-gray-800 p-8 hover:shadow-lg transition-shadow duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 ml-1">
                    /month
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                }`}
              >
                Get Started Today
              </button>
            </div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Compare All Features
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Core Features
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>✓ Employee Management</li>
                  <li>✓ Leave Tracking</li>
                  <li>✓ Attendance Monitoring</li>
                  <li>✓ Mobile Access</li>
                  <li>✓ Basic Reporting</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Advanced Features
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>✓ Advanced Analytics</li>
                  <li>✓ Role-based Access</li>
                  <li>✓ API Integration</li>
                  <li>✓ Custom Workflows</li>
                  <li>✓ Priority Support</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Enterprise Features
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>✓ SSO Integration</li>
                  <li>✓ On-premise Deployment</li>
                  <li>✓ Custom Development</li>
                  <li>✓ Dedicated Support</li>
                  <li>✓ SLA Guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
