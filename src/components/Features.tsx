import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { BsPlayCircleFill } from 'react-icons/bs'

import { classNames } from '~/utils/classNames'

const Features: React.FC = (): JSX.Element => {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <section className="mt-[120px] min-h-[428px] bg-section pt-8 pb-[38px] lg:mt-[130px] lg:pb-[150px]">
      <div className="container mx-auto">
        <div
          className={classNames(
            'h-[310px] w-full bg-video bg-cover bg-center bg-no-repeat lg:h-[622px]',
            '-mt-[150px] mb-[28px] flex items-center justify-center rounded-md lg:mb-20'
          )}
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="500"
        >
          {/* play btn */}
          <div
            onClick={() => setOpen(!isOpen)}
            className="cursor-pointer text-6xl text-orange transition hover:scale-110 lg:text-[120px]"
          >
            <BsPlayCircleFill />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-8">
          <div className="flex-1" data-aos="fade-right">
            <div className="mb-2 h-[2px] w-9 rounded-full bg-orange lg:w-[70px]"></div>
            <h2 className="h2 mb-3 lg:mb-0">
              The Better Way to <br /> Start Yoga
            </h2>
          </div>
          <div className="flex-1" data-aos="fade-left">
            <p className="mb-[18px] max-w-[360px] lg:mb-[38px]">
              Practice anywhere, anytime. Explore a new way to exercise and learn more about
              yourself. We are providing the best.
            </p>
            <button className="btn btn-sm btn-orange">Get started</button>
          </div>
        </div>
      </div>
      {/* video */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="klmBssEYkdU"
        onClose={() => setOpen(false)}
      />
    </section>
  )
}

export default Features
