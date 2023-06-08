import React, { FC } from 'react'

type Props = {}

const Contact: FC<Props> = (): JSX.Element => {
  return (
    <section className="section-sm lg:pt-[250px]">
      <div className="container mx-auto">
        <div className="flex min-h-[600px] flex-col bg-contact bg-cover bg-no-repeat lg:flex-row lg:gap-x-[74px]">
          {/* text */}
          <div className="flex flex-1 flex-col justify-center pl-8">
            <h2 className="h2 mb-3lg:mb-7">Get in Touch With Us for Yoga Course.</h2>
            <p className="mb-7 lg:mb-0">
              Get in touch with use for any kind of help. We are here to give you the best and also
              here to help you to find your yoga course.
            </p>
          </div>
          {/* form */}
          <form className="flex max-h-[600px] flex-1 flex-col gap-y-5 rounded-[20px] bg-white p-5 text-white shadow-primary lg:-mt-20">
            <input
              className="form-control"
              placeholder="First name"
              required
              name="user_firstname"
              type="text"
            />
            <input
              className="form-control"
              placeholder="Last name"
              required
              name="user_lastname"
              type="text"
            />
            <input
              className="form-control"
              placeholder="Email"
              required
              name="email"
              type="email"
            />
            <textarea
              name="message"
              id=""
              cols={30}
              rows={10}
              className="form-control h-[165px] resize-none py-5"
              placeholder="Message"
            ></textarea>
            <button className="btn btn-lg bg-orange">Send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
