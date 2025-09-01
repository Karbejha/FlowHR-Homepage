import Logo from "./logo";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div>
              <h3 className="text-4xl font-bold text-white">
                <Logo />
              </h3>
              <p className="mt-6 text-base text-gray-300 max-w-sm">
                Transforming HR management with modern technology. 
                Built for the future of work.
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Product</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a href="#features" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      API Reference
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a href="https://flow-hr-seven.vercel.app/help-center" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:mohamad.karbejha@gmail.com"
                      className="text-base text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Status
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Live Chat
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      Compliance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
