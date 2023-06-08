import React, { FC } from 'react'
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa'

type Props = {}

const Footer: FC<Props> = (): JSX.Element => {
  const logo = '/img/logo.png'

  return (
    <footer className="pb-[70px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-5 lg:flex-row">
          {/* logo */}
          <a href="#">
            <img src={logo ?? ''} alt="" />
          </a>
          {/* copyright */}
          <p>&copy; 2023. All rights reserved.</p>
          {/* social icons */}
          <div className="flex gap-x-4 text-lg text-orange">
            <div className=" flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-white shadow-primary transition hover:text-paragraph">
              <FaYoutube />
            </div>
            <div className=" flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-white shadow-primary transition hover:text-paragraph">
              <FaInstagram />
            </div>
            <div className=" flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-white shadow-primary transition hover:text-paragraph">
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
