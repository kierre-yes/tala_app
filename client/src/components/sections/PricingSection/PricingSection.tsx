import React from 'react'
import { Check, Star } from 'lucide-react'
import Button from '@/components/common/Button'
import billImage from '../../../assets/freepics/bill.png'

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Free Forever',
      price: 'Free',
      period: '',
      description: 'Perfect to start your Baybayin journey!',
      features: [
        'All basic lessons',
        'Name translator',
        'Practice exercises',
        'Community access',
        'Progress tracking'
      ],
      buttonText: 'Start Free Now',
      variant: 'outline' as const,
      popular: false
    },
    {
      name: 'Premium',
      price: '₱249',
      period: 'month',
      description: 'Faster learning with advanced features! Most Popular!',
      features: [
        'Everything in Free',
        'Advanced lessons',
        'Unlimited translations',
        'Offline learning',
        'Filipino history stories',
        'Priority help',
        'Export your work'
      ],
      buttonText: 'Go Premium',
      variant: 'primary' as const,
      popular: true
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full mb-6">
            <span className="text-primary-600 text-sm font-medium">Choose Your Plan</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start Learning
            <br />
            <span className="text-primary-600">Today</span>
          </h2>
          
          <p className="text-xl text-gray-600">
            Begin free or unlock premium features. Learn at your own pace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl p-8 shadow-lg border ${
                plan.popular ? 'border-primary-200 ring-2 ring-primary-100' : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <img
                    src={billImage}
                    alt="Most Popular"
                    className="h-10 w-10"
                  />
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600">
                      / {plan.period}
                    </span>
                  )}
                </div>
                
                <Button 
                  variant={plan.variant} 
                  className="w-full py-3 text-lg"
                >
                  {plan.buttonText}
                </Button>
              </div>
              
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            No hidden fees • Cancel anytime 
          </p>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
