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
}) {
  const { step='', title = '', subtitle = '', reasons = [], headline = '' } = textData
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
    <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
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
    </div>
  )

  return textBlock
}

export function Feature({ textPosition = 'left', textData = {}, styles='' }) {
  const imgBlock = (
    <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
      <svg
        className="absolute left-1/2 top-0 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
        width={640}
        height={784}
        fill="none"
        viewBox="0 0 640 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
            x={118}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          y={72}
          width={640}
          height={640}
          className="text-gray-50"
          fill="currentColor"
        />
        <rect
          x={118}
          width={404}
          height={784}
          fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
        />
      </svg>
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
      <div className={`relative pb-10 pt-1 sm:pb-10 lg:pb-10 ${styles}`}>
        <main className="mx-auto mt-16 max-w-7xl px-4 px-6 sm:mt-24 lg:mt-32">
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
