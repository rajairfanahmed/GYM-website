import { Helmet } from 'react-helmet-async'
import Hero from '@/components/sections/Hero/Hero'
import Features from '@/components/sections/Features/Features'
import Stats from '@/components/sections/Stats/Stats'
import Testimonials from '@/components/sections/Testimonials/Testimonials'
import CTA from '@/components/sections/CTA/CTA'
import { features, stats, testimonials } from '@/utils/constants'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>FitZone Pro - Elevate Your Potential</title>
        <meta name="description" content="Transform your body and mind at FitZone Pro. Premium fitness center with expert trainers, cutting-edge facilities, and transformative programs." />
      </Helmet>

      <Hero
        title="Transform Your Body, Transform Your Life"
        subtitle="Join FitZone Pro and discover a fitness community dedicated to your success. Expert trainers, premium facilities, and proven results."
        ctaPrimary={{ text: 'Start Your Journey', to: '/membership' }}
        ctaSecondary={{ text: 'Explore Classes', to: '/classes' }}
        backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
      />

      <Features features={features} />

      <Stats stats={stats} />

      <Testimonials
        testimonials={testimonials}
        title="Success Stories"
        subtitle="Real transformations from real members"
      />

      <CTA
        title="Ready to Elevate Your Potential?"
        description="Join thousands of members who have transformed their lives at FitZone Pro. Start your journey today with a free consultation."
        ctaText="Join Now"
        ctaLink="/membership"
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
      />
    </>
  )
}
