import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'

const NavMobile: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="ml-[10px] cursor-pointer text-4xl text-heading lg:hidden"
      >
        <BiMenu />
      </div>
      <ul
        className={`${
          isOpen ? 'max-h-60 p-8' : 'max-h-0 p-0'
        } absolute top-24 left-0 flex w-full flex-col space-y-6 overflow-hidden rounded-md bg-white shadow-primary transition-all`}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Classes</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavMobile
