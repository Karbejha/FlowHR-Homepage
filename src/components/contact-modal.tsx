'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, CheckCircleIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({
    name: false,
    surname: false,
    email: false
  })

  // Validation function
  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      surname: formData.surname.trim() === '',
      email: formData.email.trim() === '' || !isValidEmail(formData.email.trim())
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error)
  }

  // Email validation helper
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  // Check if form is valid
  const isFormValid = formData.name.trim() !== '' && 
                     formData.surname.trim() !== '' && 
                     formData.email.trim() !== '' && 
                     isValidEmail(formData.email.trim())

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form before submission
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit request')
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after 4 seconds and close modal
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', surname: '', email: '' })
        onClose()
      }, 4000)

    } catch (error: any) {
      console.error('Form submission error:', error)
      setIsSubmitting(false)
      
      // Show user-friendly error message
      const errorMessage = error.message?.includes('Email service is not configured') 
        ? 'Our email service is temporarily unavailable. Please contact us directly at mohamad.karbejha@gmail.com'
        : 'Failed to submit your request. Please try again or contact us directly at mohamad.karbejha@gmail.com'
      
      alert(errorMessage)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }))
    }
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/90 to-black/80 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 translate-y-8 sm:translate-y-0 sm:scale-90"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-8 sm:translate-y-0 sm:scale-90"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 px-6 pb-6 pt-8 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-8 hover:shadow-3xl"
                style={{
                  backgroundImage: 'radial-gradient(circle at top right, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(circle at bottom left, rgba(168, 85, 247, 0.05) 0%, transparent 50%)'
                }}
              >
                <div className="absolute right-0 top-0 pr-6 pt-6">
                  <button
                    type="button"
                    className="group rounded-full bg-gray-100/80 dark:bg-gray-800/80 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200 hover:scale-105"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-5 w-5 transition-transform duration-200 group-hover:rotate-90" aria-hidden="true" />
                  </button>
                </div>

                {!isSubmitted ? (
                  <div className="w-full">
                    <div className="text-center mb-8">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mb-4">
                        <EnvelopeIcon className="h-8 w-8 text-white" aria-hidden="true" />
                      </div>
                      <Dialog.Title as="h3" className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3">
                        Get Started with FlowHR
                      </Dialog.Title>
                      <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm mx-auto">
                        Fill out the form below and we&apos;ll contact you within 24 hours to help you get started.
                      </p>
                    </div>
                    <div className="mt-6">
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="group">
                            <div className="relative">
                              <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className={`peer w-full px-4 py-3 bg-gray-50/50 dark:bg-gray-800/50 border-2 rounded-xl text-gray-900 dark:text-white placeholder-transparent focus:outline-none transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600 ${
                                  errors.name 
                                    ? 'border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/20' 
                                    : 'border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20'
                                }`}
                                placeholder="Enter your first name"
                              />
                              <label
                                htmlFor="name"
                                className={`absolute left-4 -top-2.5 bg-white dark:bg-gray-900 px-2 text-sm font-medium transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-sm peer-focus:bg-white dark:peer-focus:bg-gray-900 ${
                                  errors.name
                                    ? 'text-red-600 dark:text-red-400 peer-placeholder-shown:text-red-400 peer-focus:text-red-600 dark:peer-focus:text-red-400'
                                    : 'text-gray-600 dark:text-gray-400 peer-placeholder-shown:text-gray-400 peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400'
                                }`}
                              >
                                Name *
                              </label>
                              <UserIcon className={`absolute right-3 top-3 h-5 w-5 transition-colors duration-200 ${
                                errors.name 
                                  ? 'text-red-400 peer-focus:text-red-500' 
                                  : 'text-gray-400 peer-focus:text-indigo-500'
                              }`} />
                              {errors.name && (
                                <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center">
                                  <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                  </svg>
                                  Name is required
                                </p>
                              )}
                            </div>
                          </div>
                          
                          <div className="group">
                            <div className="relative">
                              <input
                                type="text"
                                name="surname"
                                id="surname"
                                required
                                value={formData.surname}
                                onChange={handleChange}
                                className={`peer w-full px-4 py-3 bg-gray-50/50 dark:bg-gray-800/50 border-2 rounded-xl text-gray-900 dark:text-white placeholder-transparent focus:outline-none transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600 ${
                                  errors.surname 
                                    ? 'border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/20' 
                                    : 'border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20'
                                }`}
                                placeholder="Enter your last name"
                              />
                              <label
                                htmlFor="surname"
                                className={`absolute left-4 -top-2.5 bg-white dark:bg-gray-900 px-2 text-sm font-medium transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-sm peer-focus:bg-white dark:peer-focus:bg-gray-900 ${
                                  errors.surname
                                    ? 'text-red-600 dark:text-red-400 peer-placeholder-shown:text-red-400 peer-focus:text-red-600 dark:peer-focus:text-red-400'
                                    : 'text-gray-600 dark:text-gray-400 peer-placeholder-shown:text-gray-400 peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400'
                                }`}
                              >
                                Surname *
                              </label>
                              <UserIcon className={`absolute right-3 top-3 h-5 w-5 transition-colors duration-200 ${
                                errors.surname 
                                  ? 'text-red-400 peer-focus:text-red-500' 
                                  : 'text-gray-400 peer-focus:text-indigo-500'
                              }`} />
                              {errors.surname && (
                                <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center">
                                  <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                  </svg>
                                  Surname is required
                                </p>
                              )}
                            </div>
                          </div>
                          
                          <div className="group">
                            <div className="relative">
                              <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className={`peer w-full px-4 py-3 bg-gray-50/50 dark:bg-gray-800/50 border-2 rounded-xl text-gray-900 dark:text-white placeholder-transparent focus:outline-none transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600 ${
                                  errors.email 
                                    ? 'border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/20' 
                                    : 'border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20'
                                }`}
                                placeholder="Enter your email address"
                              />
                              <label
                                htmlFor="email"
                                className={`absolute left-4 -top-2.5 bg-white dark:bg-gray-900 px-2 text-sm font-medium transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-sm peer-focus:bg-white dark:peer-focus:bg-gray-900 ${
                                  errors.email
                                    ? 'text-red-600 dark:text-red-400 peer-placeholder-shown:text-red-400 peer-focus:text-red-600 dark:peer-focus:text-red-400'
                                    : 'text-gray-600 dark:text-gray-400 peer-placeholder-shown:text-gray-400 peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400'
                                }`}
                              >
                                Email *
                              </label>
                              <EnvelopeIcon className={`absolute right-3 top-3 h-5 w-5 transition-colors duration-200 ${
                                errors.email 
                                  ? 'text-red-400 peer-focus:text-red-500' 
                                  : 'text-gray-400 peer-focus:text-indigo-500'
                              }`} />
                              {errors.email && (
                                <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center">
                                  <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                  </svg>
                                  {formData.email.trim() === '' ? 'Email is required' : 'Please enter a valid email address'}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                            <button
                              type="button"
                              className="group inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-gray-500/20 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                              onClick={onClose}
                              disabled={isSubmitting}
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className={`group inline-flex items-center justify-center px-8 py-3 text-sm font-semibold rounded-xl shadow-lg focus:outline-none focus:ring-4 transition-all duration-200 min-w-[140px] ${
                                !isFormValid || isSubmitting
                                  ? 'text-gray-400 dark:text-gray-500 bg-gray-200 dark:bg-gray-700 cursor-not-allowed opacity-50'
                                  : 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl focus:ring-indigo-500/50 hover:scale-105'
                              }`}
                              disabled={!isFormValid || isSubmitting}
                            >
                              {isSubmitting ? (
                                <div className="flex items-center">
                                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Submitting...
                                </div>
                              ) : !isFormValid ? (
                                <>
                                  Fill Required Fields
                                  <svg className="ml-2 h-4 w-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                                  </svg>
                                </>
                              ) : (
                                <>
                                  Submit Request
                                  <svg className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                  </svg>
                                </>
                              )}
                            </button>
                          </div>
                        </form>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="mx-auto mb-6">
                      <div className="relative">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600 animate-pulse">
                          <CheckCircleIcon className="h-10 w-10 text-white animate-bounce" />
                        </div>
                        <div className="absolute inset-0 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600 opacity-20 animate-ping"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Dialog.Title as="h3" className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        Request Submitted Successfully!
                      </Dialog.Title>
                      <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm mx-auto">
                        Thank you for your interest in FlowHR! We&apos;ll contact you within 24 hours to help you get started.
                      </p>
                      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.236 4.53L8.23 10.661a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                          </svg>
                          <span>This modal will close automatically</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
