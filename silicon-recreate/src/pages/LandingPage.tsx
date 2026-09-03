import HeroSection from '../sections/HeroSection'
import SponsorSection from '../sections/SponsorSection'
import FeaturesSection from '../sections/FeaturesSection'
import HowItWorksSection from '../sections/HowItWorksSection'
import TestimonialSection from '../sections/TestimonialSection'
import FaqSection from '../sections/FaqSection'
import NewsletterSection from '../sections/NewsletterSection'

const LandingPage = () => {
  return (
    <div className='container flex flex-col'>
      <HeroSection />
      <SponsorSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialSection />
      <FaqSection />
      <NewsletterSection />
    </div>
  )
}

export default LandingPage
