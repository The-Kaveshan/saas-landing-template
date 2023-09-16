import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero({
  title = '',
  headline = '',
  subtitle = '',
  buttonText = '',
  styles = '',
}) {
  return (
    <Container className={`pb-16 pt-5 text-center lg:pt-5 ${styles}`}>
      {title ? (
        <h1
          className='mx-auto max-w-4xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-6xl'
        >
          {title}
        </h1>
      ) : null}
      {headline ? (
        <p className="mx-auto mt-6 max-w-2xl text-xl tracking-tight text-slate-900">
          {headline}
        </p>
      ) : null}
      {subtitle ? (
        <p className="mx-auto mt-6 max-w-2xl text-xl tracking-tight text-slate-900">
          {subtitle}
        </p>
      ) : null}
      {buttonText ? (
        <div className="mt-10 flex justify-center gap-x-6">
          <Button color="blue">{buttonText}</Button>
        </div>
      ) : null}
    </Container>
  )
}
