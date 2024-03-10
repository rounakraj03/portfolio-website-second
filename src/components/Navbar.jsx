"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'

const links = [
  {url: "/", title: "Home"},
  {url: "/about", title: "About"},
  {url: "/portfolio", title: "Portfolio"},
  {url: "/contact", title: "Contact"},
]


const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      {/* LINKS */}
      <div className='hidden md:flex gap-4 w-1/3'>
        {links.map(link => (
          <NavLink link={link} key={link.title}></NavLink>
        ))}
      </div>
      {/* LOGO */}
      <div className='md:hidden lg:flex xl:justify-center xl:w-1/3'>
        <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
          <span className='text-white mr-1'>Lama</span>
          <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>.dev</span>

        </Link>
      </div>
      {/* SOCIALS */}
      <div className='hidden md:flex gap-4 w-1/3'>
        <Link href="#"><Image src="/github.png" alt="github" height={24} width={24}></Image></Link>
        <Link href="#"><Image src="/instagram.png" alt="instagram" height={24} width={24}></Image></Link>
        <Link href="#"><Image src="/facebook.png" alt="facebook" height={24} width={24}></Image></Link>
        <Link href="#"><Image src="/linkedin.png" alt="linkedin" height={24} width={24}></Image></Link>
        <Link href="#"><Image src="/pinterest.png" alt="pinterest" height={24} width={24}></Image></Link>
        <Link href="#"><Image src="/dribbble.png" alt="dribbble" height={24} width={24}></Image></Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className='md:hidden'>
        {/* MENU BUTTON */}
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => setOpen((prev) => !prev)}>
          <div className='w=10 h-1 bg-white rounded'></div>
          <div className='w=10 h-1 bg-white rounded'></div>
          <div className='w=10 h-1 bg-white rounded'></div>
        </button>
        {/* MENU LIST */}
        {open && (
        <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
          {links.map(link => (
            <Link href={link.url} key={link.title}>{link.title}</Link>
          ))}
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar