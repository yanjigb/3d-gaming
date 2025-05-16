'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
  isHovering3D: boolean
}

export default function CustomCursor(props: Props) {
  const { isHovering3D } = props

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })
  const cursorRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-10 mix-blend-difference"
      animate={{
        x: position.x - (isHovering3D ? 12 : 15),
        y: position.y - (isHovering3D ? 12 : 15),
        scale: isHovering3D ? 1.5 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      <motion.div
        className={`rounded-full ${isHovering3D ? 'bg-violet-500' : 'bg-white'}`}
        animate={{
          width: isHovering3D ? '24px' : '40px',
          height: isHovering3D ? '24px' : '40px',
        }}
        transition={{
          duration: 0.2,
        }}
      />

      {isHovering3D && (
        <motion.div
          className="absolute inset-0 rounded-full border border-violet-500"
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            scale: 2,
            opacity: 0.5,
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      )}
    </motion.div>
  )
}
