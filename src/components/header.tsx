'use client'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeToggle from './theme-toggle'
import Image from 'next/image';
import LanguageToggle from './language-toggle';
import { useLanguage } from '@/lib/language-context';

export default function Header() {
  const { t } = useLanguage()
  
  const navigation = [
    { name: t.home, href: '#', current: true },
    { name: t.features, href: '#features', current: false },
    { name: t.pricing, href: '#pricing', current: false },
    { name: t.contact, href: '#contact', current: false },
  ]

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <Disclosure as="nav" className="bg-white dark:bg-gray-900">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center mt-2">
                    <Image
                      src="/logo.png"
                      alt="FlowHR Logo"
                      width={210}
                      height={84}
                      className="h-14 w-auto"
                      priority
                    />
                  </div>
                  <div className="hidden sm:-my-px sm:ml-10 sm:rtl:mr-10 sm:rtl:ml-0 sm:flex sm:space-x-8 sm:rtl:space-x-reverse">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'border-indigo-500 text-gray-900 dark:text-white'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200',
                          'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:rtl:mr-6 sm:rtl:ml-0 sm:flex sm:items-center sm:space-x-4 sm:rtl:space-x-reverse">
                  <LanguageToggle />
                  <ThemeToggle />
                  <a
                    href="https://flow-hr-seven.vercel.app/"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200 text-sm font-medium"
                  >
                    {t.login}
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                  >
                    {t.getStarted}
                  </a>
                </div>
                <div className="-mr-2 -rtl:mr-0 -rtl:ml-2 flex items-center sm:hidden">
                  <div className="mr-2 rtl:mr-0 rtl:ml-2 flex space-x-2 rtl:space-x-reverse">
                    <LanguageToggle />
                    <ThemeToggle />
                  </div>
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white dark:bg-gray-800 p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset">
                    <span className="sr-only">{t.menu}</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300'
                        : 'border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-gray-200',
                      'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-4 space-x-3 rtl:space-x-reverse">
                  <a
                    href="https://flow-hr-seven.vercel.app/"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200 text-sm font-medium"
                  >
                    {t.login}
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-md bg-indigo-600 dark:bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-400"
                  >
                    {t.getStarted}
                  </a>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  )
}
