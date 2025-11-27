'use client'

import React from 'react'
import HomePageNav from './HomePageNav'
import { usePathname } from 'next/navigation'
import InvestNav from './InvestNav'
import PortfolioNav from './PortfolioNav'
import InboxNav from './InboxNav'

export default function Navber() {

  const pathName = usePathname()

  return (
      <header className={`w-full max-w-xl mx-auto bg-white  sticky top-0 z-10 ${!pathName === 'portfolio' ? 'shadow-sm' : 'border-b border-gray-300' }`}>
        {/* home page navber */}
        {pathName === '/' && <HomePageNav />}
       
        {/* invest navber */}
        {pathName === '/invest' && <InvestNav />}

        {/* invest navber */}
        {pathName === '/portfolio' && <PortfolioNav />}

        {/* news navber */}
        {pathName === '/inbox' && <InboxNav />}
      </header>
  )
}


 