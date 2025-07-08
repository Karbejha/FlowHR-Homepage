'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Can I manage multiple teams with FlowHR?",
    answer:
      "Yes, FlowHR supports unlimited teams and departments. You can organize employees into different teams, set team-specific permissions, and track performance across all departments with our comprehensive team management features.",
  },
  {
    question: "Is there support for dark mode?",
    answer:
      "Absolutely! FlowHR comes with a beautiful dark mode that adapts to your system preferences. You can toggle between light and dark themes or set it to automatically switch based on your device settings.",
  },
  {
    question: "How secure is the platform?",
    answer:
      "Security is our top priority. FlowHR uses enterprise-grade encryption, role-based access control, and follows SOC 2 compliance standards. All data is encrypted both in transit and at rest, with regular security audits and monitoring.",
  },
  {
    question: "What integrations are available?",
    answer:
      "FlowHR integrates with popular tools like Slack, Microsoft Teams, Google Workspace, and many payroll systems. We also provide a comprehensive REST API for custom integrations with your existing business tools.",
  },
  {
    question: "Do you offer mobile apps?",
    answer:
      "Yes, we offer native mobile apps for both iOS and Android. Employees can clock in/out, request leave, view schedules, and access HR information from anywhere with our user-friendly mobile applications.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide comprehensive support including email support for all plans, priority support for Pro users, and dedicated support managers for Enterprise customers. We also offer extensive documentation, video tutorials, and live chat assistance.",
  },
]

export default function FAQ() {
  return (
    <section className="bg-white dark:bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-100/10">
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-100/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <div>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 dark:text-white group">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={`h-6 w-6 transition-transform duration-200 ${
                              open ? 'rotate-180' : 'rotate-0'
                            } group-hover:text-indigo-600 dark:group-hover:text-indigo-400`}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </div>
                    <Disclosure.Panel as="div" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
