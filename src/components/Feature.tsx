import { Button } from '@/components/Button'
interface Reason {
  icon: React.ReactNode // You can use a more specific type if needed
  text: string
}

interface Props {
  reasons: Reason[]
}

function buildTextBlock(textData: {
  step?: '' | undefined,
  title?: '' | undefined,
  subtitle?: '' | undefined,
  reasons?: [] | undefined,
  headline?: '' | undefined,
  buttonText?: '' | undefined,
  styles?: '' | undefined
}) {
  const { step='', title = '', subtitle = '', reasons = [], headline = '', buttonText ='', styles='' } = textData
  let reasonHTML = null

  if (reasons) {
    reasonHTML = reasons.map((reason: Reason, index: number) => (
      <p
        key={index}
        className="flex items-center text-base font-medium text-gray-900"
      >
        {reason.icon}
        {reason.text}
      </p>
    ))
  }

  const textBlock = (
    <div className={`sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left ${styles}`}>
      {step ? (
        <p className="flex items-center text-base font-medium text-red-600">
          {step}
        </p>
      ) : null}
      <h1>
        <span className="text-4lg xl:text-6lg mt-1 block font-bold tracking-tight sm:text-5xl">
          <span className="block text-gray-900">{title}</span>
        </span>
      </h1>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        {headline}
      </p>
      {reasonHTML ? (
        <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
          {reasonHTML}
        </div>
      ) : null}
      {subtitle ? (
        <p className="flex items-center text-base font-medium text-gray-900">
          {subtitle}
        </p>
      ) : null}
      {buttonText ? (
        <div className="mt-10 flex justify-center gap-x-6">
        <Button color="blue">{buttonText}</Button>
      </div>
      ) : null}

    </div>
  )

  return textBlock
}

export function Feature({ textPosition = 'left', textData = {}, styles='' }) {
  const imgBlock = (
    <div className="relative mt-1 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
      <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
        <button
          type="button"
          className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </button>
      </div>
    </div>
  )

  return (
    <div className="relative overflow-hidden bg-white">
      <div className={`relative pb-10 pt-10 ${styles}`}>
        <main className="mx-auto mt-0 max-w-7xl px-4 px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {textPosition === 'left' ? (
              <>
                {buildTextBlock(textData)}
                {imgBlock}
              </>
            ) : (
              <>
                {imgBlock}
                {buildTextBlock(textData)}
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
