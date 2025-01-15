'use client'
import React, { useState } from "react"
import { navigation } from "@/constants"
import Link from "next/link"
import style from '@/global-styles/template.module.css'

export default function HamburgerNav() {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)
  const toggleMenu = () => setHamburgerIsOpen(!hamburgerIsOpen)
  const hamburgerBarsClassName = hamburgerIsOpen 
    ? style.hamburgerBarsCross 
    : style.hamburgerBarsClosed
  const menuClassName = hamburgerIsOpen 
    ? `${style.menuOpen} flex p-1` 
    : style.menuClosed
  
  return (
    <div className={`${style.hamburgerNav} flex`} onClick={toggleMenu}>
      <div className={`${hamburgerBarsClassName} flex`}>
        <div className={`${style.bar} ${style.bar1}`}></div>
        <div className={`${style.bar} ${style.bar2}`}></div>
      </div>
      <div className={menuClassName}>
        {navigation.map((item, index) => {
          return <Link key={index} href={item.path}>
            {item.label}
          </ Link>
        })}
      </div>
    </div>
  )
}
