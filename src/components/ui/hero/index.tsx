import { Button } from 'antd'
import Image from 'next/image'

export default function Hero() {
  return (
    <main className="relative mb-[10%] flex h-screen w-full justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 -z-10 h-[95%] w-full object-cover first-letter:left-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="absolute bottom-[15%] flex flex-col items-center gap-5">
        <Image
          src="/images/illu-text.png"
          alt="illu-text"
          width={300}
          height={300}
          quality={100}
          priority
          className="w-80 object-cover md:w-[30rem]"
        />

        <h1 className="text-xl font-bold md:text-2xl">Explore, Capture, Conquer</h1>

        <div className="h-[0.1px] w-3/5 bg-[#baba] md:w-3/4" />

        <Button className="h-10 text-nowrap rounded-lg !bg-gradient-to-r !from-gray-500 !to-gray-600 px-16 font-medium !text-white transition-all duration-300 hover:opacity-70">
          Play now
        </Button>

        <div className="flex items-center gap-5 text-3xl font-extrabold text-gray-200">
          <Image
            src="/images/illu-logo.png"
            alt="illlu-logo"
            width={64}
            height={64}
            className="h-12 md:h-16"
          />
          Zero
        </div>

        <p className="max-w-[80%] text-center text-[#babaff]">
          Notice: Illuvium Games are in Beta. Participation involves risk. Read our full Disclaimer
          here.
        </p>
      </div>

      <div className="absolute bottom-40 right-5 mt-24 hidden animate-bounce sm:inline-block lg:right-24">
        <div className="flex flex-col items-center">
          <div className="flex h-12 w-8 justify-center rounded-full border-2 border-[#babaff] pt-1">
            <div className="h-3 w-1 animate-pulse rounded-full bg-[#babaff]" />
          </div>

          <p className="mt-2 text-[#babaff]">Scroll Down</p>
        </div>
      </div>
    </main>
  )
}
