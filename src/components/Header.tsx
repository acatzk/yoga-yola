import React, { useEffect, useState } from 'react'

import Nav from './Nav'
import NavMobile from './NavMobile'
import { classNames } from '~/utils/classNames'

const Header: React.FC = (): JSX.Element => {
  const [header, setHeader] = useState<boolean>(false)
  const Logo = '/img/logo.png'

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false)
    })
  }, [header])

  return (
    <header
      className={classNames(
        header ? 'top-0' : 'top-9',
        'fixed w-full max-w-[90vw] bg-white lg:max-w-[1170px]',
        'rouned-md z-20 mx-auto h-[90px] px-4 shadow-primary lg:px-8',
        'flex items-center justify-between transition-all duration-500'
      )}
    >
      <div className="flex items-center">
        {/* Logo */}
        <a href="#">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={Logo} alt="" />
        </a>
        {/* nav */}
        <div className="hidden lg:flex">
          <Nav />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex gap-x-4 lg:gap-x-9">
          <button className="text-sm font-medium text-heading transition hover:text-orange lg:text-base">
            Sign In
          </button>
          <button
            className={classNames(
              'btn btn-md border border-orange bg-orange-100 text-orange lg:px-[30px]',
              'text-sm font-medium transition hover:bg-orange-200 hover:text-white lg:text-base'
            )}
          >
            Sign Up
          </button>
        </div>
        {/* nav mobile */}
        <NavMobile />
      </div>
    </header>
  )
}

export default Header
