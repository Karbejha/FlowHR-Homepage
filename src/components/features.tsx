'use client'

import { 
  UserGroupIcon, 
  CalendarDaysIcon, 
  ClockIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'
import { useLanguage } from '@/lib/language-context'

export default function Features() {
  const { t } = useLanguage()
  
  const features = [
    {
      name: t.employeeManagement,
      description: t.employeeManagementDesc,
      icon: UserGroupIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      name: t.leaveTracking,
      description: t.leaveTrackingDesc,
      icon: CalendarDaysIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      name: t.analyticsReports,
      description: t.analyticsReportsDesc,
      icon: ClockIcon,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      name: t.securityCompliance,
      description: t.securityComplianceDesc,
      icon: ShieldCheckIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t.featuresTitle}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {t.featuresSubtitle}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-start">
                  <div className={`rounded-lg p-3 ${feature.bgColor} dark:bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 ${feature.color} dark:${feature.color.replace('600', '400')}`} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900 dark:text-white text-lg">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-6">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
