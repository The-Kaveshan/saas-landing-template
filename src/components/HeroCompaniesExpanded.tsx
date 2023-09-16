import { CheckIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { Hero } from '@/components/Hero'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function HeroCompaniesExpanded() {
  const steps = [
    {
      icon: (
        <CheckIcon className="mr-1 h-5 w-5 text-green-600" aria-hidden="true" />
      ),
      text: `i.e. Monthly contracts, Cancel at any time`,
    },
    {
      icon: (
        <CheckIcon className="mr-1 h-5 w-5 text-green-600" aria-hidden="true" />
      ),
      text: `i.e. Book a FREE demo with our team`,
    },
    {
      icon: (
        <CheckIcon className="mr-1 h-5 w-5 text-green-600" aria-hidden="true" />
      ),
      text: `i.e. We’ll do the setup for you`,
    }
  ]


  return (
    <Container className="pb-16 pt-5 text-center lg:pt-5">
      <div className="mt-10 lg:mt-12">
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Transistor', logo: logoTransistor },
              { name: 'Tuple', logo: logoTuple },
              { name: 'StaticKit', logo: logoStaticKit },
            ],
            [
              { name: 'Mirage', logo: logoMirage },
              { name: 'Laravel', logo: logoLaravel },
              { name: 'Statamic', logo: logoStatamic },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <Hero
          title="These Companies Are Already Getting [RESULT], When Will You?"
          headline="We use this headline to create urgency. Other companies (maybe their competitors) are already getting the result they want and they don’t want to miss out, do they?"
          subtitle="Break down what the next steps are/ Apply Risk Reversal"
          buttonText="Explain Your CTA here"
          steps={steps}
        />
      </div>
    </Container>
  )
}
