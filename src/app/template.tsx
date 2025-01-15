import React, { ReactNode } from 'react'
import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import style from '@/global-styles/template.module.css'

export default function Template({ children }: { children: ReactNode }) {
  return (
  <div className={style.templateContainer}>
    <Navbar />
    <main className={`${style.mainPageContainer} responsive-width m-auto`}>
      {children}
    </main>
    <Footer />
  </ div>
  )
}
