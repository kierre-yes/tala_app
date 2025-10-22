import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo/applogo.png'
import dogoImage from '../../../assets/freepics/dogo.png'
import { ArrowRight, Star } from 'lucide-react'
import Button from '@/components/common/Button'

const CTASection: React.FC = () => {
  return (
    <section className="bg-primary-600 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">

          <div className="flex-1 text-center lg:text-left">

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Learn Baybayin?
            </h2>

            <p className="text-xl text-primary-100 mb-8 max-w-2xl">
              Join proud Filipinos learning Baybayin.
              Start today - completely free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="cta"
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-50"
              >
                Start Learning Now
              </Button>

              <Button
                variant="cta"
                size="lg"
                className=" text-gray-800 bg-white hover:bg-gray-50"
              >
                Learn More
              </Button>
            </div>

            <p className="text-primary-200 text-sm mt-6">
             • You can start for free • Learn anywhere
            </p>
          </div>

          <div className="flex-shrink-0">
            <img
              src={dogoImage}
              alt="Dogo"
              className="w-48 h-48 lg:w-64 lg:h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
