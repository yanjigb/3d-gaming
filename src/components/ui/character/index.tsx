/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */

'use client'

import { useState } from 'react'
import { Button } from 'antd'
import { AnimatePresence, motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

import ThreeDModel from './3d-model'
import CustomCursor from './custom-cursor'

export default function Character() {
  const [selectedAvatar, setSelectedAvatar] = useState('VIKI')
  const [cursorInModelArea, setCursorInModelArea] = useState(false)

  const Avatar = {
    VIKI: {
      name: 'VIKI',
      power: 75,
      stable: 95,
      penetrate: 30,
      portable: 80,
      star: 3,
    },
    EVA: {
      name: 'EVA',
      power: 90,
      stable: 80,
      penetrate: 70,
      portable: 60,
      star: 4,
    },
  }

  const currentAvatar = Avatar[selectedAvatar as keyof typeof Avatar]

  const handle3DAreaMouseEnter = () => {
    setCursorInModelArea(true)
  }

  const handle3DAreaMouseLeave = () => {
    setCursorInModelArea(false)
  }

  return (
    <div className="relative mb-[10%] h-screen w-full overflow-hidden">
      <CustomCursor isHovering3D={cursorInModelArea} />

      <div className="relative z-10 pt-6 text-center">
        <h1
          className="mb-8 text-5xl font-bold tracking-widest md:-mb-14"
          style={{
            textShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
          }}
        >
          FIGHTER
        </h1>
      </div>

      <div className="relative z-10 flex size-full flex-col items-center p-4 md:flex-row">
        {/* left side */}
        <div className="flex w-full flex-col md:ml-10 md:w-1/2">
          {/* selected avatar */}
          <div className="mb-4 rounded-lg border border-gray-800 bg-gray-900/80 p-4 shadow-[0_0_15px_rgba(167,139,250,0.2)] backdrop-blur-sm">
            <h1 className="mb-2 text-2xl font-semibold">{currentAvatar.name}</h1>

            {/* avatar statistics */}
            <div className="mb-16 space-y-3">
              {/* power statics */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Power</span>

                <div className="h-4 flex-1 overflow-hidden rounded-full bg-gray-800">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{
                      width: `${currentAvatar.power}%`,
                    }}
                  />
                </div>

                <span className="ml-2">{currentAvatar.power}</span>
              </div>

              {/* stable statics */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Stable</span>

                <div className="h-4 flex-1 overflow-hidden rounded-full bg-gray-800">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{
                      width: `${currentAvatar.stable}%`,
                    }}
                  />
                </div>

                <span className="ml-2">{currentAvatar.stable}</span>
              </div>

              {/* penetrate statics */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Penetrate</span>

                <div className="h-4 flex-1 overflow-hidden rounded-full bg-gray-800">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{
                      width: `${currentAvatar.penetrate}%`,
                    }}
                  />
                </div>

                <span className="ml-2">{currentAvatar.penetrate}</span>
              </div>

              {/* portable statics */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Portable</span>

                <div className="h-4 flex-1 overflow-hidden rounded-full bg-gray-800">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{
                      width: `${currentAvatar.portable}%`,
                    }}
                  />
                </div>

                <span className="ml-2">{currentAvatar.portable}</span>
              </div>
            </div>

            {/* action button */}
            <div className="flex gap-3">
              <Button className="rounded-md !bg-violet-900 px-4 py-1 font-semibold !text-white transition-all duration-300 hover:opacity-70">
                Porficient
              </Button>

              <Button className="rounded-md !bg-violet-900 px-4 py-1 font-semibold !text-white transition-all duration-300 hover:opacity-70">
                Redemption
              </Button>
            </div>
          </div>

          {/* avatar selection cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* VIKI card */}
            <div
              onClick={() => setSelectedAvatar('VIKI')}
              className="relative flex cursor-pointer flex-col items-center justify-between rounded-lg border bg-gray-900 p-3 px-12 backdrop-blur-sm transition-all duration-300 lg:flex-row"
            >
              <div className="mb-2 text-lg">VIKI</div>

              {/* avatar visual placeholder */}
              <div className="mb-2 flex size-20 items-center justify-center rounded-md bg-gray-800/50">
                <Image src="/images/VIKI.png" alt="VIKI" width={80} height={80} />
              </div>

              {/* star rating */}
              <div className="flex">
                {[...Array(3)].map((_, index) => (
                  <Star key={index} className="size-4 fill-violet-400 text-violet-500" />
                ))}
              </div>

              {/* highlight for selected avatar */}
              {selectedAvatar === 'VIKI' && (
                <div className="pointer-events-none absolute inset-0 rounded-lg border-2" />
              )}
            </div>

            {/* EVA card */}
            <div
              onClick={() => setSelectedAvatar('EVA')}
              className="relative flex cursor-pointer flex-col items-center justify-between rounded-lg border bg-gray-900 p-3 px-12 backdrop-blur-sm transition-all duration-300 lg:flex-row"
            >
              <div className="mb-2 text-lg">EVA</div>

              {/* avatar visual placeholder */}
              <div className="mb-2 flex size-20 items-center justify-center rounded-md bg-gray-800/50">
                <Image src="/images/EVA.png" alt="EVA" width={80} height={80} />
              </div>

              {/* star rating */}
              <div className="flex">
                {[...Array(4)].map((_, index) => (
                  <Star key={index} className="size-4 fill-violet-400 text-violet-500" />
                ))}
              </div>

              {/* highlight for selected avatar */}
              {selectedAvatar === 'EVA' && (
                <div className="pointer-events-none absolute inset-0 rounded-lg border-2" />
              )}
            </div>
          </div>
        </div>

        {/* right side - 3d model */}
        <div
          className="relative flex h-80 w-full items-center justify-center overflow-hidden md:h-full md:w-1/2"
          onMouseEnter={handle3DAreaMouseEnter}
          onMouseLeave={handle3DAreaMouseLeave}
        >
          <AnimatePresence mode="wait">
            {selectedAvatar === 'VIKI' ? (
              <motion.div
                key="viki"
                className="absolute inset-0 flex items-center justify-center"
                initial={{
                  x: '100%',
                }}
                animate={{
                  x: 0,
                }}
                exit={{
                  x: '-100%',
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <ThreeDModel character="VIKI" />
              </motion.div>
            ) : (
              <motion.div
                key="eva"
                className="absolute inset-0 flex items-center justify-center"
                initial={{
                  x: '100%',
                }}
                animate={{
                  x: 0,
                }}
                exit={{
                  x: '-100%',
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <ThreeDModel character="EVA" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
