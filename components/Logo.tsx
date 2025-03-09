'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-[40px] h-[40px]">
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Figure (Teal) */}
          <motion.path
            d="M20 40 L20 60 L35 70 L35 50 L20 40 M20 40 L35 50 M27.5 35 A5 5 0 0 1 27.5 45"
            fill="#006B76"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          
          {/* Right Figure (Red) */}
          <motion.path
            d="M80 40 L80 60 L65 70 L65 50 L80 40 M80 40 L65 50 M72.5 35 A5 5 0 0 1 72.5 45"
            fill="#FF4B26"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          />
          
          {/* Bottom Figure (Navy) */}
          <motion.path
            d="M35 70 L50 80 L65 70 L50 60 L35 70 M50 60 L50 80 M50 55 A5 5 0 0 1 50 65"
            fill="#1A1B4B"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
          />
        </motion.svg>
      </div>
      <span className="text-2xl font-bold text-white">GENTA</span>
    </Link>
  )
}

export default Logo

