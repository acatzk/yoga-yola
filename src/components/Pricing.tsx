import React, { useState } from 'react'

import { pricing } from '~/data/mock'

const Pricing: React.FC = (): JSX.Element => {
  const [index, setIndex] = useState(0)

  return (
    <section className="section-sm lg:section-lg bg-section">
      <div className="container mx-auto">
        <div className="mb-7 text-center lg:mb-[70px]">
          <h2 className="h2 mb-3 lg:mb-[18px]" data-aos="fade-up" data-aos-delay="600">
            Pick a Pricing Plan
          </h2>
          <p className="mx-auto max-w-[398px]" data-aos="fade-up" data-aos-delay="700">
            Pick a pricing plan and get started your journey with us for build your body and mind
          </p>
        </div>
        {/* pricing cards */}
        <div className="mx-auto flex flex-col items-center gap-y-5 lg:flex-row lg:gap-x-[33px]">
          {pricing.map((card, currentIndex) => {
            const { title, price, list, ButtonIcon, buttonText, delay } = card
            return (
              <div
                onClick={() => setIndex(currentIndex)}
                className="relative h-full min-h-[668px] w-full max-w-[368px] cursor-pointer bg-white"
                key={currentIndex}
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-delay={delay}
              >
                {/* card top */}
                <div
                  className={`${
                    index === currentIndex ? 'bg-orange text-white' : 'bg-white text-heading'
                  } border-b border-stroke-3 pb-[34px] pt-[70px] text-center transition`}
                >
                  <div className="mb-[10px] text-[24px] font-medium">{title}</div>
                  <div className="text-[34px] font-semibold">{price}</div>
                </div>
                <div className="px-[30px] pt-[18px] pb-[30px]">
                  <p className="mb-6 text-center text-sm">Discover your favorite class!</p>
                  {/* card list */}
                  <ul className="mb-10 flex flex-col gap-3">
                    {list.map((item, index) => {
                      const { Icon, name } = item
                      return (
                        <li
                          className="flex items-center gap-4 rounded-md border border-stroke-3 p-4"
                          key={index}
                        >
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-2xl text-green-300">
                            <Icon />
                          </div>
                          {name}
                        </li>
                      )
                    })}
                  </ul>
                  {/* btn */}
                  <div className="absolute bottom-[30px] left-0 right-0 w-full px-[30px]">
                    <button
                      className={`${
                        index === currentIndex ? ' bg-orange text-white' : ' border-orange'
                      } relative flex h-[50px] w-full items-center justify-center rounded border border-orange font-medium text-orange transition`}
                    >
                      {buttonText}
                      <div
                        className={`${
                          index === currentIndex ? 'bg-orange-200' : 'bg-orange'
                        } absolute right-0 flex h-[50px] w-[50px] items-center justify-center rounded text-white`}
                      >
                        <ButtonIcon />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Pricing
