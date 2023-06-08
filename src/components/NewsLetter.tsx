import React, { FC } from 'react'
import { MdMail } from 'react-icons/md'

type Props = {}

const NewsLetter: FC<Props> = (): JSX.Element => {
  return (
    <section className="section-sm lg:section-lg min-h-[520px] bg-green">
      <div className="container mx-auto">
        {/* text */}
        <div className="rounded-lg border-[8px] border-green-300 pt-[70px] pb-12 text-center">
          <h4 className="mb-[14px] text-[26px] font-bold text-white">Subscribe Our Newsletter</h4>
          <p className="mb-12 text-green-200">
            Subscribe our newsletter for further updates about us
          </p>
          {/* form */}
          <form className="relative mx-auto flex max-w-[752px] flex-col gap-y-6 gap-x-4 p-4 lg:flex-row lg:p-0">
            <div className="relative flex w-full">
              {/* icon */}
              <div className="absolute left-2 flex h-full w-12 items-center justify-center text-2xl text-green-300">
                <MdMail />
              </div>
              <input
                type="email"
                className="form-control w-full border border-green-300 bg-transparent pl-[60px] text-white outline-none placeholder:text-green-200"
                placeholder="Enter your email address"
              />
            </div>
            {/* button */}
            <button
              type="button"
              className="btn btn-lg btn-orange w-full text-white lg:max-w-[180px]"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter
