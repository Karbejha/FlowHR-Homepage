'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What is FlowHR and how does it help businesses?",
    answer:
      "FlowHR is a comprehensive HR management system that streamlines all aspects of human resources operations. It helps businesses manage employee data, track attendance, process leave requests, generate payroll, monitor performance, and provide detailed analytics - all in one integrated platform.",
  },
  {
    question: "Can I manage multiple teams and departments with FlowHR?",
    answer:
      "Yes, FlowHR supports unlimited teams and departments. You can organize employees into different teams, set team-specific permissions, track performance across all departments, and manage complex organizational structures with our comprehensive team management features.",
  },
  {
    question: "How does FlowHR's leave management system work?",
    answer:
      "Our leave management system allows employees to request time off through a user-friendly portal, managers can approve or deny requests with workflow automation, and the system automatically tracks leave balances, accruals, and generates reports for compliance and planning purposes.",
  },
  {
    question: "Is FlowHR suitable for small businesses?",
    answer:
      "Absolutely! FlowHR is designed to scale with your business. We offer affordable plans starting at $29/month for small businesses, with all the essential HR features you need. As your company grows, you can easily upgrade to access more advanced features.",
  },
  {
    question: "How secure is employee data in FlowHR?",
    answer:
      "Security is our top priority. FlowHR uses enterprise-grade encryption, role-based access control, and follows SOC 2 compliance standards. All data is encrypted both in transit and at rest, with regular security audits, GDPR compliance, and strict data privacy controls.",
  },
  {
    question: "What integrations does FlowHR support?",
    answer:
      "FlowHR integrates with popular tools like Slack, Microsoft Teams, Google Workspace, QuickBooks, ADP, and many payroll systems. We also provide a comprehensive REST API for custom integrations with your existing business tools and third-party applications.",
  },
  {
    question: "Do you offer mobile access for employees?",
    answer:
      "Yes, we offer native mobile apps for both iOS and Android, plus a fully responsive web interface. Employees can clock in/out, request leave, view schedules, access pay stubs, update personal information, and receive notifications from anywhere.",
  },
  {
    question: "What kind of HR analytics and reporting does FlowHR provide?",
    answer:
      "FlowHR provides comprehensive analytics including employee turnover rates, attendance patterns, leave trends, performance metrics, cost per hire, time-to-fill positions, and custom reports. All data can be exported and visualized through interactive dashboards.",
  },
  {
    question: "How long does it take to implement FlowHR?",
    answer:
      "Implementation typically takes 1-2 weeks for small to medium businesses. This includes data migration, system configuration, user training, and testing. Our onboarding team provides dedicated support throughout the process to ensure a smooth transition.",
  },
  {
    question: "What support options are available?",
    answer:
      "We provide comprehensive support including email support for all plans, priority support for Pro users, dedicated account managers for Enterprise customers, extensive documentation, video tutorials, live chat assistance, and free onboarding training sessions.",
  },
]

export default function FAQ() {
  return (
    <section className="bg-white dark:bg-gray-900 py-24" itemScope itemType="https://schema.org/FAQPage">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-100/10">
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">
            Frequently Asked Questions About FlowHR
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
            Get answers to common questions about our HR management system, features, pricing, and implementation.
          </p>
          <div className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-100/10">
            {faqs.map((faq, index) => (
              <Disclosure as="div" key={faq.question} className="pt-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                {({ open }) => (
                  <>
                    <div>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 dark:text-white group">
                        <span className="text-base font-semibold leading-7" itemProp="name">{faq.question}</span>
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
                    <Disclosure.Panel as="div" className="mt-2 pr-12" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-base leading-7 text-gray-600 dark:text-gray-300" itemProp="text">{faq.answer}</p>
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
