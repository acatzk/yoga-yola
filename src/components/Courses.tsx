import React from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

import { courses } from '~/data/mock'
import { classNames } from '~/utils/classNames'

const Courses: React.FC = (): JSX.Element => {
  return (
    <section className="section-sm lg:section-lg">
      <div className="container mx-auto">
        {/* text */}
        <div className="mb-16 text-center lg:mb-32">
          <h2 className="h2 mb-3 lg:mb-[18px]" data-aos="fade-down" data-aos-delay="200">
            Popular Courses
          </h2>
          <p className="mx-auto max-w-[480px]" data-aos="fade-down" data-aos-delay="300">
            Practice anywhere, anytime. Explore a new way to exercise and learn more about yourself.
            We are providing the best.
          </p>
        </div>
        {/* course list */}
        <div className="mb-7 flex flex-col gap-y-24 lg:mb-14 lg:flex-row lg:gap-x-[33px]">
          {courses.map((item, index) => {
            const { image, title, desc, link, delay } = item
            return (
              <div
                className={classNames(
                  'w-full max-w-[368px] bg-white px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px]',
                  'mx-auto flex flex-col rounded-[14px] transition hover:shadow-primary'
                )}
                data-aos="fade-up"
                data-aos-delay={delay}
                key={index}
              >
                <div className="-mt-[38px] mb-4 lg:-mt-12 lg:mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image} alt="" />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold lg:mb-4 lg:text-xl">{title}</h4>
                  <p>{desc}</p>
                </div>
                <div className="mt-8 mb-2 flex items-center justify-between lg:mb-0">
                  {/* stars */}
                  <div className="flex gap-x-2 text-orange">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  <a className="font-medium" href="#">
                    {link}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex justify-center">
          <button className="btn btn-sm btn-orange" data-aos="fade-up" data-aos-delay="600">
            Browse all
          </button>
        </div>
      </div>
    </section>
  )
}

export default Courses
