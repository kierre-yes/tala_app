import React from 'react'
import { BookOpen, Brain, Target, Users, Zap, Award } from 'lucide-react'

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Easy Lessons',
      description: 'Learn step-by-step. No rushing. Each lesson is short and simple. Perfect for beginners and busy Filipinos.'
    },
    {
      icon: Brain,
      title: 'Smart Learning',
      description: 'The app remembers what you learned. It helps you practice what you need. No wasted time.'
    },
    {
      icon: Target,
      title: 'Fun Practice',
      description: 'Write, quiz, and play games. Learn your name in Baybayin. Practice makes perfect, and it\'s enjoyable.'
    },
    {
      icon: Users,
      title: 'Filipino Community',
      description: 'Meet other learners. Share your progress. Ask questions. We help each other succeed.'
    },
    {
      icon: Zap,
      title: 'Name Translator',
      description: 'Type any name or word. See it in beautiful Baybayin instantly. Great for tattoos and art projects.'
    },
    {
      icon: Award,
      title: 'Track Progress',
      description: 'See how much you\'ve learned. Earn badges. Celebrate milestones. Stay motivated on your journey.'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full mb-6">
            <span className="text-primary-600 text-sm font-medium">What You Get</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <br />
            <span className="text-primary-600">know about <span className="text-primary-600">Tala.</span></span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tala is made for Filipinos. To learn our ancestors' beautiful writing. 
            Connect with your heritage today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-xl">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
