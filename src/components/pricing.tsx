'use client'

import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import ContactModal from './contact-modal'

const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '#',
    priceMonthly: '$9',
    description: 'Perfect for small teams and startups getting started with HR management.',
    features: [
      'Up to 25 employees',
      'Basic employee management',
      'Leave tracking',
      'Email support',
      'Mobile app access',
    ],
    mostPopular: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    priceMonthly: '$29',
    description: 'Advanced features for growing companies with comprehensive HR needs.',
    features: [
      'Up to 100 employees',
      'Advanced employee management',
      'Leave & attendance tracking',
      'Analytics & reporting',
      'Role-based access control',
      'Priority support',
      'API access',
      'Custom integrations',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
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
      'SLA guarantee',
    ],
    mostPopular: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <>
    <section id="pricing" className="bg-gray-50 dark:bg-gray-800 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Choose the perfect plan for your organization. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'lg:z-10 lg:rounded-b-none border-2 border-indigo-600 dark:border-indigo-400'
                  : 'lg:mt-8 border border-gray-200 dark:border-gray-600',
                'flex flex-col justify-between rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-xl lg:p-10'
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular 
                        ? 'text-indigo-600 dark:text-indigo-400' 
                        : 'text-gray-900 dark:text-white',
                      'text-lg font-semibold leading-8'
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-indigo-600/10 dark:bg-indigo-400/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600 dark:text-indigo-400">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {tier.priceMonthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                    /month
                  </span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                    : 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 ring-1 ring-inset ring-indigo-200 dark:ring-indigo-600 hover:ring-indigo-300 dark:hover:ring-indigo-500',
                  'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 w-full'
                )}
              >
                Get started today
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ContactModal 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
    />
    </>
  )
}
