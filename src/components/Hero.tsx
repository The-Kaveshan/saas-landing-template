import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero({
  title = '',
  headline = '',
  subtitle = '',
  buttonText = '',
}) {
  return (
    <Container className="pb-16 pt-5 text-center lg:pt-5">
      <h1 className="mx-auto max-w-4xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-6xl">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        {headline}
      </p>
      <p className="mx-auto mt-6 max-w-2xl text-xl tracking-tight text-slate-900">
        {subtitle}
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button color="blue">{buttonText}</Button>
      </div>
    </Container>
  )
}
