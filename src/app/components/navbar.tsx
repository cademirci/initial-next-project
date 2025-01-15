import React from 'react'
import style from '@/global-styles/template.module.css'
import { navigation } from '@/constants'
import Link from 'next/link'
import HamburgerMenu from './hamburger-nav'

export default function Navbar() {
  return (
    <nav className={`${style.navbar}`}>
      <div className={`${style.navbarContainer} responsive-width-wider p-1 m-auto flex-between`}>
        <div>LOGO</div>
        <div className={`${style.navbarTabs} flex`}>
          {navigation.map((item, index) => 
            <Link key={index} href={item.path}>{item.label}</ Link> 
          )}
        </div>
        <HamburgerMenu />
      </div>
    </nav>
  )
}
