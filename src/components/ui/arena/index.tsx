import { Button } from 'antd'
import { ExternalLink, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

export default function Arena() {
  return (
    <div className="mt-60 p-0 md:mt-0 md:min-h-[90%] lg:p-8">
      <div className="relative z-10 pt-6 text-center">
        <h3
          className="mb-28 text-5xl font-bold tracking-widest"
          style={{
            textShadow: '0 0 10px rgba(255, 255, 255, 0.7) , 0 0 20px rgba(167, 139, 250, 0.5)',
          }}
        >
          Arena
        </h3>
      </div>

      <div className="mx-auto grid w-[90%] grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:max-w-[90%]">
        <div className="space-y-4 md:col-span-1 md:space-y-6">
          <div className="relative aspect-[4.4/4] overflow-hidden rounded-3xl border border-white transition-transform duration-300 hover:scale-105">
            <div className="absolute size-full">
              <Image
                src="/images/bento-card1.png"
                alt="Bento Card 1"
                fill
                className="object-cover"
              />

              <Button
                icon={<ShoppingCart />}
                className="!absolute bottom-0 left-0 !h-16 w-full text-nowrap !border-none !bg-black/70 !text-2xl !font-bold uppercase !text-white transition-all duration-300 hover:!text-yellow-400"
              >
                NFT Store
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4.5/4] overflow-hidden rounded-3xl border border-white transition-transform duration-300 hover:scale-105">
            <div className="absolute size-full">
              <video className="size-full object-cover" autoPlay muted loop playsInline>
                <source src="/videos/bento-card2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="space-y-4 md:col-span-2 md:space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white transition-transform duration-300 hover:scale-105">
              <video className="size-full object-cover" autoPlay muted loop playsInline>
                <source src="/videos/bento-card3.mp4" type="video/mp4" />
              </video>

              <h3 className="absolute bottom-2 left-1/2 -translate-x-1/2 text-2xl font-extrabold">
                Scoriox
              </h3>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white transition-transform duration-300 hover:scale-105">
              <video className="size-full object-cover" autoPlay muted loop playsInline>
                <source src="/videos/bento-card4.mp4" type="video/mp4" />
              </video>

              <h3 className="absolute bottom-2 left-1/2 -translate-x-1/2 text-2xl font-extrabold">
                Floralynx
              </h3>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white transition-transform duration-300 hover:scale-105">
              <video className="size-full object-cover" autoPlay muted loop playsInline>
                <source src="/videos/bento-card5.mp4" type="video/mp4" />
              </video>

              <h3 className="absolute bottom-2 left-1/2 -translate-x-1/2 text-2xl font-extrabold">
                Titanor
              </h3>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-3xl border border-white transition-transform duration-300 hover:scale-[1.02] md:col-span-2">
            <Image src="/images/bento-card5.png" alt="Bento Card 6" fill className="object-cover" />

            <Button
              icon={<ExternalLink />}
              className="!absolute bottom-0 !h-16 !w-full !bg-black/70 !text-2xl !font-bold !text-white transition-all duration-300 hover:!text-yellow-400"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
