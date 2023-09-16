import Banner from '@/components/Banner'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HeroImage } from '@/components/HeroImage'
import { HeroCompanies } from '@/components/HeroCompanies'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Banner text={'Designed, tested and written by Kavi'} close={false} />
      <Header />
      <main>
        <Hero
          title="How To Get [RESULT] Without [Problem/Objection]"
          headline="This is the universal headline formula to grab their attention. The point of this section it's NOT to try to explain the product as much as possible but to create curiosity to keep scrolling"
          subtitle="Reduce the commitment of your CTA"
          buttonText="Explain Your CTA here"
        />
        <HeroImage />
        <HeroCompanies />
        <Hero
          title="Honestly Now, Is This The Way
          To [Fix Problem/Get Result]?"
          headline="The only reason we are starting with the problem is to trigger an
          investment mindset BEFORE you even show your product. This
          will remind your visitors of how painful the problem is and why
          they want to fix it asap"
          subtitle="Show them they can try your product instead"
          buttonText="Explain Your CTA here"
        />

        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
