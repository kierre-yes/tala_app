import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo/applogo.png'
import { Copyright } from 'lucide-react'
import Button from "@/components/common/Button";


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          
          <div className="order-last col-span-1 flex flex-col gap-4 p-8 md:order-first md:rounded-b-3xl">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} className="h-12 w-12" alt="Tala logo" />
            </Link>
            
            <div className="flex items-center gap-1 font-semibold">
              <Copyright className="h-4 w-4 text-gray-600" />
              <p className="text-sm text-gray-600">2025</p>
              <p className="text-sm text-gray-600">Tala.</p>
            </div>
          </div>

          <div className="col-span-2 flex flex-col content-start gap-4 rounded-3xl bg-primary-50 p-8">
            <h2 className="font-semibold text-gray-900">Quick Access</h2>
            <div className="flex flex-wrap gap-2">
              <Link to="/translator" className="bg-primary-600/20 text-gray-900 hover:bg-primary-600/50 h-12 rounded-xl px-4 text-sm flex items-center justify-center font-medium transition-colors duration-300">
                Translator
              </Link>
              <Link to="/learn" className="bg-primary-600/20 text-gray-900 hover:bg-primary-600/50 h-12 rounded-xl px-4 text-sm flex items-center justify-center font-medium transition-colors duration-300">
                Learn
              </Link>
              <Link to="/privacy" className="bg-primary-600/20 text-gray-900 hover:bg-primary-600/50 h-12 rounded-xl px-4 text-sm flex items-center justify-center font-medium transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="bg-primary-600/20 text-gray-900 hover:bg-primary-600/50 h-12 rounded-xl px-4 text-sm flex items-center justify-center font-medium transition-colors duration-300">
                Terms
              </Link>
              <Link to="/contact" className="bg-primary-600/20 text-gray-900 hover:bg-primary-600/50 h-12 rounded-xl px-4 text-sm flex items-center justify-center font-medium transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>

          <div className="col-span-2 flex flex-col gap-4 rounded-3xl bg-primary-50 p-8">
            <h2 className="font-semibold text-gray-900">Stay Connected</h2>
            <p className="text-base text-gray-700">
              Join our community to learn Baybayin and preserve Filipino heritage together!
            </p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                className="flex w-full rounded-xl border border-gray-300 bg-white px-3 py-1 text-gray-900 transition-colors placeholder:text-gray-500 focus-visible:border-primary-500 focus-visible:outline-none h-12" 
                required 
                placeholder="Your email" 
                name="email"
              />
              <Button
              variant="outline"
              size="lg"
                className="bg-primary-600 text-white hover:bg-primary-700 h-12 rounded-xl px-4 text-sm font-medium transition-colors duration-300 flex items-center justify-center" 
            >
              Subscribe
            </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
