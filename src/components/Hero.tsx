import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero({
  title = '',
  headline = '',
  subtitle = '',
  buttonText = '',
  styles = '',
  steps = [] as any,
}) {
  let stepHTML = null
  if (steps) {
    stepHTML = steps.map((step: any, index: number) => (
      <p
        key={index}
        className="flex items-center justify-center text-base font-medium text-gray-900"
      >
        {step.icon}
        {step.text}
      </p>
    ))
  }

  return (
    <Container className={`pb-5 pt-5 text-center lg:pt-5 ${styles}`}>
      {title ? (
        <h1 className="mx-auto max-w-4xl font-display text-2xl font-medium tracking-tight text-gray-900 sm:text-6xl">
          {title}
        </h1>
      ) : null}
      {headline ? (
        <p className="mx-auto mt-6 max-w-2xl text-xl tracking-tight text-gray-500">
          {headline}
        </p>
      ) : null}
      {subtitle ? (
        <p className="mx-auto mt-6 max-w-2xl text-xl tracking-tight text-gray-900 font-semibold">
          {subtitle}
        </p>
      ) : null}
      {stepHTML ? (
        <div className="mx-auto mt-8 max-w-lg text-center ">{stepHTML}</div>
      ) : (
        ''
      )}
      {buttonText ? (
        <div className="mt-10 mb-5 flex justify-center gap-x-6">
          <Button color="blue">{buttonText}</Button>
        </div>
      ) : null}
    </Container>
  )
}
