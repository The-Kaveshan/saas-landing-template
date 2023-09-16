import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Banner({ text = '', close = true }) {
  return (
    <div className="flex items-center gap-x-6 bg-indigo-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm leading-6 text-white">{text}</p>
      <div className="flex flex-1 justify-end">
        {close ? (
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        ) : null}
      </div>
    </div>
  )
}
