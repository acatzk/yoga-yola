import React from 'react'
import { Parallax } from 'react-parallax'

import Header from './Header'
import { classNames } from '~/utils/classNames'

const Hero: React.FC = (): JSX.Element => {
  const Image = '/img/hero/guy.png'

  return (
    <section
      className={classNames(
        'min-h-[618px] pt-9 lg:min-h-[815px] lg:bg-circle',
        'lg:bg-right-top lg:bg-no-repeat'
      )}
    >
      <div className="container mx-auto">
        <Header />
        <div className="flex flex-col items-center pt-32 lg:flex-row lg:items-start">
          <div className="flex-1 lg:mt-12">
            <h1 className="h1 mb-3 lg:mb-[22px]">
              Yoga to <br /> Realease Stress
            </h1>
            <p className="mb-6 max-w-[480px] lg:mb-12 lg:text-lg">
              Yoga is away of life, rather than chore. Counteract the stresses of modern life by
              becoming more mindful and compassionate.
            </p>
            <div className="mb-12 space-x-4">
              <button className="btn btn-sm lg:btn-lg btn-orange">Get Started</button>
              <button
                className={classNames(
                  'btn btn-sm lg:btn-lg border bg-transparent text-heading',
                  'border-stroke-1 px-4 transition hover:bg-stroke-3'
                )}
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="w-full bg-circle bg-cover lg:w-auto lg:bg-none">
            <div className="flex flex-1 justify-center lg:justify-end">
              <div className="h-[234px] w-[234px] lg:mt-0 lg:h-[744px] lg:w-[504px]">
                <Parallax
                  className="h-full w-full p-28 lg:p-16"
                  bgImage={Image}
                  bgImageAlt="Guy Image"
                  strength={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
