import Banner from '@/components/Banner'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HeroImage } from '@/components/HeroImage'
import { HeroCompanies } from '@/components/HeroCompanies'
import { Feature } from '@/components/Feature'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { HeroExpanded } from '@/components/HeroExpanded'


const textFeatureData1 = {
  title: 'Critique Their Current Way of Doing Things',
  headline: `They might be using a spreadsheet or doing everything manually, show them why thats not the way to do it.`,
  reasons: [
    {
      icon: (
        <XMarkIcon className="mr-1 h-5 w-5 text-red-600" aria-hidden="true" />
      ),
      text: `Reason why this SUCKS!`,
    },
    {
      icon: (
        <XMarkIcon className="mr-1 h-5 w-5 text-red-600" aria-hidden="true" />
      ),
      text: `Reason why this SUCKS!`,
    },
  ],
}

const textFeatureData2 = {
  title: 'Critique The Other Solutions On The Market',
  headline: `Your product is not the only solution they are considering so make sure they understand why your competitors are also not ideal.`,
  reasons: [
    {
      icon: (
        <XMarkIcon className="mr-1 h-5 w-5 text-red-600" aria-hidden="true" />
      ),
      text: `Reason why this SUCKS!`,
    },
    {
      icon: (
        <XMarkIcon className="mr-1 h-5 w-5 text-red-600" aria-hidden="true" />
      ),
      text: `Reason why this SUCKS!`,
    },
  ],
}

const textFeatureData3 = {
  title: 'How Much Is This Costing Them?',
  headline: `What’s the cost of not fixing their problem or getting the result they want?`,
  subtitle: `Quantify this as much as possible!`
}

const textFeatureData4 = {
  step: 'Step 1',
  title: 'Explain How They Can Get The Result (In Order) ',
  headline: `What’s the cost of not fixing their problem or getting the result they want?`,
}

const textFeatureData5 = {
  step: 'Step 2',
  title: 'Explain How They Can Get The Result (In Order) ',
  headline: `What’s the cost of not fixing their problem or getting the result they want?`,
}

const textFeatureData6 = {
  step: 'Step 3',
  title: 'Explain How They Can Get The Result (In Order) ',
  headline: `What’s the cost of not fixing their problem or getting the result they want?`,
}

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
          title="Honestly Now, Is This The Way To [Fix Problem/Get Result]?"
          headline="The only reason we are starting with the problem is to trigger an investment mindset BEFORE you even show your product. This will remind your visitors of how painful the problem is and why they want to fix it asap"
          subtitle="Show them they can try your product instead"
          buttonText="Explain Your CTA here"
        />
        <Feature textPosition="right" textData={textFeatureData1} />
        <Feature textPosition="left" textData={textFeatureData2} />
        <Feature textPosition="right" styles={`bg-slate-50 border-solid border-2 border-slate-400`} textData={textFeatureData3} />
        <Hero
          title="This Is How Your Product Can Fix All Of The Problems"
          headline="We don't want to explain the entire product because that overwhelms people and raises unnecessary objections. Instead, show them how they can use your product to get the result they want (this is all they care about anyway)"
          subtitle="Only explain how they can get the result in 3-5 steps (or in a short period of time)"
          buttonText="Explain Your CTA here"
        />
        <Feature textPosition="right" textData={textFeatureData4} />
        <Feature textPosition="left" textData={textFeatureData5} />
        <Feature textPosition="right" textData={textFeatureData6} />
        <HeroExpanded />
      </main>
      <Footer />
    </>
  )
}
