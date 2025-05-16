/* eslint-disable jsx-a11y/anchor-is-valid */
import { Instagram, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-[25%] flex items-center justify-between border-t-[0.3px] border-[#babaff] p-8 md:px-16 lg:mt-[15%] lg:px-32">
      <Image
        height={90}
        width={140}
        src="/images/illu-text.png"
        alt="Illu Text"
        className="object-cover"
      />

      <Image
        src="/images/logo.png"
        alt="logo"
        width={64}
        height={64}
        className="hidden h-16 object-cover md:inline"
      />

      <div className="flex gap-4">
        <Link href="#" className="text-2xl duration-300 hover:text-violet-600 md:text-3xl">
          <Twitter />
        </Link>

        <Link href="#" className="text-2xl duration-300 hover:text-violet-600 md:text-3xl">
          <Youtube />
        </Link>

        <Link href="#" className="text-2xl duration-300 hover:text-violet-600 md:text-3xl">
          <Instagram />
        </Link>
      </div>
    </footer>
  )
}
