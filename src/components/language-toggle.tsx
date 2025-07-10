'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/lib/language-context'
import { Language } from '@/lib/translations'

const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'ar' as Language, name: 'العربية', flag: '🇸🇦' },
  { code: 'tr' as Language, name: 'Türkçe', flag: '🇹🇷' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center gap-x-1.5 rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
          <GlobeAltIcon className="-ml-0.5 h-4 w-4" aria-hidden="true" />
          <span className="sr-only sm:not-sr-only">{currentLanguage.flag}</span>
          <ChevronDownIcon className="-mr-1 h-4 w-4 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 rtl:right-auto rtl:left-0 z-10 mt-2 w-32 origin-top-right rtl:origin-top-left rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 focus:outline-none">
          <div className="py-1">
            {languages.map((lang) => (
              <Menu.Item key={lang.code}>
                {({ active }) => (
                  <button
                    onClick={() => setLanguage(lang.code)}
                    className={classNames(
                      active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100' : 'text-gray-700 dark:text-gray-300',
                      language === lang.code ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' : '',
                      'group flex w-full items-center px-4 py-2 text-sm'
                    )}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
