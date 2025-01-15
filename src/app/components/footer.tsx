import React from 'react'
import style from '@/global-styles/template.module.css'
import SocialMediaBar from './social-media-bar'
import { footerLinks } from '@/constants'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={`${style.footer}`}>
      <div className={`${style.navbarContainer} responsive-width-wider p-1 m-auto`}>
        <SocialMediaBar styleClassName='frosted-steel' />
        <div className={`${style.footerContent} flex-end py-1`}>
          {footerLinks.map((item, index) => 
            <Link key={index} href={item.path}>{item.label}</ Link> 
          )}
        </div>
      </div>
    </footer>
  )
}

