"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Sayfa değiştiğinde en üste kaydır
    window.scrollTo(0, 0)
  }, [pathname])

  return null // Bu bileşen herhangi bir UI render etmez
}

