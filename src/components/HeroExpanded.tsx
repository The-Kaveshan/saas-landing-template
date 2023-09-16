import { Hero } from '@/components/Hero'

const posts = [
  {
    id: 1,
    title: 'We Improve X Metric By 120% In [Short Period Of Time]',
    author: {
      name: 'Someones Name',
      role: 'Title - Some Company',
      imageUrl: '',
    },
  },
  {
    id: 2,
    title: 'Mentions one of your USPs so other people know',
    author: {
      name: 'Someones Name',
      role: 'Title - Some Company',
      imageUrl: '',
    },
  },
]

export function HeroExpanded() {
  const imgBlock = (
    <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-12 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
      <div className="relative mx-auto w-full rounded-lg shadow-lg">
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
    <div className="relative overflow-hidden border-2 border-solid border-slate-400 bg-slate-50">
      <div className={`relative pb-10 pt-1 sm:pb-10 lg:pb-10 `}>
        <Hero
          title="How To Get [RESULT] Without [Problem/Objection]"
          headline="This is the universal headline formula to grab their attention. The point of this section it's NOT to try to explain the product as much as possible but to create curiosity to keep scrolling"
          subtitle="Reduce the commitment of your CTA"
          buttonText="Explain Your CTA here"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col justify-between lg:col-span-6"
              >
                {imgBlock}
                <div className="group relative  items-start">
                  {/* className='mx-auto max-w-4xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-6xl' */}
                  <h2 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {post.title}
                  </h2>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  {post.author.imageUrl ? (
                    <img
                      src={post.author.imageUrl}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                  ) : (
                    <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                  )}

                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
