import React from 'react'
import Layout from '@/components/layout/Layout'
import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import PricingSection from '@/components/sections/PricingSection'
import CTASection from '@/components/sections/CTASection'

const Landing: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
    </Layout>
  )
}

export default Landing
