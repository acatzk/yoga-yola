/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Cards: React.FC = (): JSX.Element => {
  const cardImage1 = '/img/cards/card-1.png'
  const cardImage2 = '/img/cards/card-2.png'
  const cardImage3 = '/img/cards/card-3.png'

  return (
    <section
      className="min-h-[260px] bg-cardsBg pb-[55px] lg:-mt-24"
      data-aos="fade-up"
      data-aos-delay="800"
      data-aos-duration="1600"
    >
      <div className="container mx-auto flex flex-col gap-x-[32px] lg:flex-row">
        {/* card group */}
        <div className="z-10 mx-auto -mt-[38px] flex flex-1 gap-x-[15px] lg:-mt-[77px] lg:gap-x-[32px]">
          {/* card 1 */}
          <div
            className="max-h-[282px] w-full max-w-[282px] rounded-md bg-white p-[14px] shadow-2xl lg:p-[26px]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="mb-[18px] flex items-center lg:mb-[28px]">
              <h4 className="mr-8 text-lg font-bold text-heading lg:text-2xl lg:leading-7">
                Make Your Own Plan For Yoga.
              </h4>
              <h2 className="h2 text-stroke-2">1</h2>
            </div>
            <div>
              <img src={cardImage1} alt="" />
            </div>
          </div>
          {/* card 2 */}
          <div
            className="w-full max-w-[282px] rounded-md bg-white p-[14px] shadow-2xl lg:p-[26px]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="mb-[18px] flex items-center lg:mb-[28px]">
              <h4 className="mr-8 text-lg font-bold text-heading lg:text-2xl lg:leading-7">
                Find a Yoga Mentor For You.
              </h4>
              <h2 className="h2 text-stroke-2">2</h2>
            </div>
            <div>
              <img src={cardImage2} alt="" />
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div
          className="z-10 mx-auto mt-4 flex w-full max-w-[542px] items-start justify-between rounded-md bg-white p-[14px] shadow-2xl lg:-mt-[77px] lg:p-[26px]"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="max-w-[240px]">
            <div className="mb-4 flex items-center lg:mb-8">
              <h4 className="mr-8 text-lg font-bold text-heading lg:text-2xl lg:leading-7">
                Every-Day Open Master Classes.
              </h4>
              <h2 className="h2 text-stroke-2">3</h2>
            </div>
            <p className="mb-4 lg:mb-3">
              We&apos;re boosting online yoga by enabling anyone in the world to learn from the best
            </p>
            <a className="text-xs font-bold uppercase text-heading lg:text-sm" href="#">
              Read more
            </a>
          </div>
          <div>
            <img src={cardImage3} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards
