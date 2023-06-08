import React from 'react'
import CountUp from 'react-countup'

import { facts } from '~/data/mock'

const Facts: React.FC = (): JSX.Element => {
  const Image = '/img/john-cena.png'

  return (
    <section className="section-sm lg:section-lg">
      <div className="container mx-auto flex flex-col lg:flex-row lg:gap-x-[30px]">
        <div className="flex flex-1 flex-wrap gap-x-[5%] gap-y-[35px]" data-aos="fade-up">
          {facts.map((item, index) => {
            const { startNumber, endNumber, unit, title, desc } = item
            return (
              <div className="w-[45%]" key={index}>
                <h2 className="h2 mb-2 lg:mb-4">
                  <CountUp start={startNumber} end={endNumber} duration={2} enableScrollSpy />
                  {unit}+
                </h2>
                <div className="mb-3 text-xl font-bold text-heading">{title}</div>
                <p className="max-w-[240px]">{desc}</p>
              </div>
            )
          })}
        </div>
        <div className="-order-1 flex-1 lg:order-none">
          <div className="flex h-full flex-col justify-center lg:pl-[100px]">
            <h2
              className="h2 mb-12 max-w-[295px] md:max-w-none"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Relax And Enjoy a Personalized Day Yoga With Us.
            </h2>
            <div className="mb-2" data-aos="fade-down" data-aos-delay="600">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={Image} alt="" />
            </div>
            <div
              className="mb-6 text-lg font-bold text-heading"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              John Cena
              <span className="text-base font-normal text-paragraph">/Founder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facts
