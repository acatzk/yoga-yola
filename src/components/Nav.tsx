import React from 'react'

const Nav: React.FC = (): JSX.Element => {
  return (
    <nav className='ml-[70px]'>
      <ul className='flex gap-x-[42px]'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Classes</a>
        </li>
        <li>
          <a href='#'>Features</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
