import React, { useEffect, useState } from 'react'

import Nav from './Nav'
import NavMobile from './NavMobile'
import { classNames } from '~/utils/classNames'

const Header: React.FC = (): JSX.Element => {
  const [header, setHeader] = useState<boolean>(false)
  const Logo = '/img/logo.png'

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false);
    })
  }, [header])

  return (
    <header className={classNames(
      header ? 'top-0' : 'top-9',
      'fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px]',
      'mx-auto rouned-md h-[90px] shadow-primary px-4 lg:px-8 z-20',
      'transition-all duration-500 flex items-center justify-between'
    )}>
      <div className="flex items-center">
        {/* Logo */}
        <a href="#">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={Logo} alt="" />
        </a>
        {/* nav */}
        <div className='hidden lg:flex'>
          <Nav />
        </div>
      </div>
      <div className='flex items-center'>
        <div className='flex gap-x-4 lg:gap-x-9'>
          <button className='text-heading font-medium text-sm lg:text-base hover:text-orange transition'>
            Sign In
          </button>
          <button className={classNames(
            'btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange',
            'font-medium text-sm lg:text-base hover:bg-orange-200 hover:text-white transition'
          )}>
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
