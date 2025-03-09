"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Layout } from "lucide-react"
import { committees } from "@/data/committees"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Committees() {
  // Responsive ayarlar için breakpoint değerleri
  const [slidesToShow, setSlidesToShow] = useState(4)

  // Embla Carousel hook'u (8.0.0-rc17 versiyonu için uygun options)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  })

  // Ekran boyutuna göre gösterilecek slide sayısını ayarla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1) // Mobil
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2) // Küçük tablet
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3) // Büyük tablet
      } else {
        setSlidesToShow(4) // Masaüstü
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Carousel kontrolleri
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Aktif slide'ı takip et
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  // Belirli bir slide'a git
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  return (
    <section className="bg-gradient-to-b from-[#001529] to-gray-950 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-center gap-3">
          <Layout className="h-8 w-8 text-blue-400" />
          <h2 className="text-center text-3xl font-bold text-white">Tüm Komitelerimiz</h2>
        </div>

        <div className="relative">
          {/* Carousel Navigasyon Butonları - Masaüstü */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 transform border-gray-800 bg-gray-900/50 text-white backdrop-blur-sm hover:bg-gray-800/50"
              onClick={scrollPrev}
              aria-label="Önceki"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 transform border-gray-800 bg-gray-900/50 text-white backdrop-blur-sm hover:bg-gray-800/50"
              onClick={scrollNext}
              aria-label="Sonraki"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {committees.map((committee) => (
                <div
                  key={committee.id}
                  className={`flex-[0_0_100%] px-2 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]`}
                >
                  <Card className="h-full border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <CardContent className="flex flex-col items-center p-4">
                      <div className="relative mb-4 w-full overflow-hidden rounded-md pt-[100%]">
                        <Image
                          src={committee.image || "/placeholder.svg"}
                          alt={committee.name}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <h3 className="text-center text-lg font-semibold text-white">{committee.name}</h3>
                      <p className="mt-2 line-clamp-3 text-center text-sm text-gray-300">{committee.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mobil için Carousel Navigasyon Butonları */}
          <div className="mt-6 flex justify-center md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="mr-2 border-gray-800 bg-gray-900/50 text-white hover:bg-gray-800/50"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="ml-2 border-gray-800 bg-gray-900/50 text-white hover:bg-gray-800/50"
              onClick={scrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Sayfa Göstergeleri */}
        <div className="mt-8 flex justify-center space-x-2">
          {scrollSnaps.map((_, index) => (
            <Button
              key={index}
              variant={selectedIndex === index ? "default" : "outline"}
              size="sm"
              className={`w-2 h-2 p-0 rounded-full ${
                selectedIndex === index ? "bg-blue-600" : "bg-gray-900/50 border-gray-800"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Sayfa ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

