'use client'

import React from 'react'
import { useToggle } from 'ahooks'
import { Button } from 'antd'
import { ChevronsUp, CircleUserRound, Diamond, MenuSquare, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import MobileMenu from '@/components/ui/mobile-menu'

function Header() {
  const [isOpenMenu, { toggle: onToggleMenu }] = useToggle(false)

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b-[0.3px] border-[#babaff] px-7 py-1">
      {/* left section */}
      <div className="flex items-center gap-4 lg:gap-14">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-12 md:w-16"
        />

        <div className="hidden items-center gap-5 md:flex">
          <Button className="h-8 text-nowrap rounded-lg !bg-gradient-to-r !from-purple-500 !to-indigo-600 px-6 font-medium !text-white transition-all duration-300 hover:opacity-70">
            Play now
          </Button>

          <Button className="h-8 text-nowrap rounded-lg !bg-gradient-to-r !from-gray-500 !to-gray-600 px-6 font-medium !text-white transition-all duration-300 hover:opacity-70">
            Play now
          </Button>
        </div>
      </div>

      {/* right section */}

      <nav className="hidden items-center gap-4 md:flex lg:gap-8">
        <Link
          href="/"
          className="relative flex items-center gap-2 text-nowrap py-1 text-lg transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all after:content-[''] hover:text-purple-300 hover:after:w-full"
        >
          <CircleUserRound />
          <span className="text-sm font-medium">Avatar</span>
        </Link>

        <Link
          href="/"
          className="relative flex items-center gap-2 text-nowrap py-1 text-lg transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all after:content-[''] hover:text-purple-300 hover:after:w-full"
        >
          <Diamond />
          <span className="text-sm font-medium">Arena</span>
        </Link>

        <Link
          href="/"
          className="relative flex items-center gap-2 text-nowrap py-1 text-lg transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all after:content-[''] hover:text-purple-300 hover:after:w-full"
        >
          <ChevronsUp />
          <span className="text-sm font-medium">Beyond</span>
        </Link>

        <Link
          href="/"
          className="relative flex items-center gap-2 text-nowrap py-1 text-lg transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all after:content-[''] hover:text-purple-300 hover:after:w-full"
        >
          <ShoppingCart />
          <span className="text-sm font-medium">Shop</span>
        </Link>
      </nav>

      <Button
        onClick={onToggleMenu}
        type="primary"
        icon={<MenuSquare />}
        className="!flex !items-center md:!hidden"
      />

      <MobileMenu isOpen={isOpenMenu} onClose={onToggleMenu} />
    </header>
  )
}

export default Header
