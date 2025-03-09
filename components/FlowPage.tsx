"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { flowDays } from "@/data/flow"

export default function FlowPage() {
  const [selectedYear, setSelectedYear] = useState<number>(2023)
  const [currentDay, setCurrentDay] = useState<number>(1)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  // const years = [2023, 2025]
  const years = [2023]

  // Seçilen yıl ve güne göre program verilerini filtrele
  const currentFlowDay = flowDays.find((day) => day.year === selectedYear && day.day === currentDay)

  // Etkinlik tipine göre filtreleme
  const filteredSchedule = activeFilter
    ? currentFlowDay?.schedule.filter((item) => item.type === activeFilter)
    : currentFlowDay?.schedule

  // Etkinlik tipine göre renk belirleme
  const getTypeColor = (type: string) => {
    switch (type) {
      case "meal":
        return "bg-blue-900/90 border-blue-800 text-blue-50"
      case "ceremony":
        return "bg-indigo-900/90 border-indigo-800 text-indigo-50"
      case "break":
        return "bg-cyan-900/90 border-cyan-800 text-cyan-50"
      case "education":
        return "bg-teal-900/90 border-teal-800 text-teal-50"
      case "session":
        return "bg-sky-900/90 border-sky-800 text-sky-50"
      case "activity":
        return "bg-violet-900/90 border-violet-800 text-violet-50"
      default:
        return "bg-gray-900/90 border-gray-800 text-gray-50"
    }
  }

  // Filtre seçenekleri
  const filters = [
    { label: "Tümü", value: null },
    { label: "Yemek", value: "meal" },
    { label: "Törenler", value: "ceremony" },
    { label: "Molalar", value: "break" },
    { label: "Eğitim", value: "education" },
    { label: "Oturumlar", value: "session" },
    { label: "Etkinlikler", value: "activity" },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 to-[#001529] text-white">
      <header className="border-b border-gray-800/50 bg-[#001529]/50 px-4 py-8 shadow-lg backdrop-blur-sm md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-3">
            <Calendar className="h-8 w-8 text-blue-400" />
            <h1 className="text-center text-3xl font-bold md:text-4xl">Program Akışı</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Yıl Seçimi */}
        <div className="mb-6 flex justify-center space-x-4">
          {years.map((year) => (
            <Button
              key={year}
              variant={selectedYear === year ? "default" : "outline"}
              onClick={() => {
                setSelectedYear(year)
                setCurrentDay(1) // Yıl değiştiğinde ilk güne dön
                setActiveFilter(null) // Filtreyi sıfırla
              }}
              className={selectedYear === year ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900/50 border-gray-800"}
            >
              {year} Yılı
            </Button>
          ))}
        </div>

        {/* Gün Seçimi */}
        <div className="mb-8 flex justify-center space-x-4">
          {[1, 2].map((day) => (
            <Button
              key={day}
              variant={currentDay === day ? "default" : "outline"}
              onClick={() => {
                setCurrentDay(day)
                setActiveFilter(null) // Filtreyi sıfırla
              }}
              className={currentDay === day ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900/50 border-gray-800"}
            >
              {day}. Gün
            </Button>
          ))}
        </div>

        {/* Filtreler */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.label}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? "bg-white text-[#001529]"
                  : "bg-gray-800/40 text-white hover:bg-gray-700/50 border border-gray-700/50"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Zaman Çizelgesi */}
        <motion.div
          key={`${selectedYear}-${currentDay}-${activeFilter}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Timeline indicator */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-1 bg-gradient-to-b from-blue-400 to-indigo-400 lg:block"></div>

          <div className="relative space-y-6">
            {filteredSchedule?.map((item, index) => (
              <div key={index} className="relative">
                {/* Direction arrow */}
                <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform lg:block">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-400 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#001529]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Card - alternating left and right on desktop */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? "lg:ml-0 lg:mr-auto" : "lg:mr-0 lg:ml-auto"}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`rounded-lg border p-4 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl hover:translate-y-[-2px] ${getTypeColor(item.type)}`}
                  >
                    <div className="mb-3 flex items-center">
                      <Clock className="mr-2 h-5 w-5 opacity-80" />
                      <span className="font-semibold">{item.time}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{item.program}</h3>
                    <div className="flex items-center text-sm opacity-90">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

