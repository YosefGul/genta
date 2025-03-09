"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { DollarSign, Clock, Users, GraduationCap, Brain, Globe, Gavel, Cpu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Committee {
  id: string
  title: string
  icon: React.ElementType
  color: string
  year: number
}

const committees: Committee[] = [
  // 2023 Komiteleri
  {
    id: "economy-2023",
    title: "EKONOMİ KOMİTESİ",
    icon: DollarSign,
    color: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
    year: 2023,
  },
  {
    id: "history-2023",
    title: "TARİH KOMİTESİ",
    icon: Clock,
    color: "from-amber-500/20 to-amber-600/20 border-amber-500/30",
    year: 2023,
  },
  {
    id: "sociology-2023",
    title: "SOSYOLOJİ KOMİTESİ",
    icon: Users,
    color: "from-purple-500/20 to-purple-600/20 border-purple-500/30",
    year: 2023,
  },
  {
    id: "education-2023",
    title: "EĞİTİM KOMİTESİ",
    icon: GraduationCap,
    color: "from-green-500/20 to-green-600/20 border-green-500/30",
    year: 2023,
  },
  {
    id: "psychology-2023",
    title: "PSİKOLOJİ KOMİTESİ",
    icon: Brain,
    color: "from-pink-500/20 to-pink-600/20 border-pink-500/30",
    year: 2023,
  },
  {
    id: "international-relations-2023",
    title: "ULUSLARARASI İLİŞKİLER KOMİTESİ",
    icon: Globe,
    color: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30",
    year: 2023,
  },

  // 2025 Komiteleri
  {
    id: "law-2025",
    title: "HUKUK KOMİTESİ",
    icon: Gavel,
    color: "from-red-500/20 to-red-600/20 border-red-500/30",
    year: 2025,
  },
  {
    id: "history-2025",
    title: "TARİH KOMİTESİ",
    icon: Clock,
    color: "from-amber-500/20 to-amber-600/20 border-amber-500/30",
    year: 2025,
  },
  {
    id: "sociology-2025",
    title: "SOSYOLOJİ KOMİTESİ",
    icon: Users,
    color: "from-purple-500/20 to-purple-600/20 border-purple-500/30",
    year: 2025,
  },
  {
    id: "education-2025",
    title: "ULUSLARARASI İLİŞKİLER KOMİTESİ",
    icon: Globe,
    color: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30",
    year: 2025,
  },
  {
    id: "psychology-2025",
    title: "PSİKOLOJİ KOMİTESİ",
    icon: Brain,
    color: "from-pink-500/20 to-pink-600/20 border-pink-500/30",
    year: 2025,
  },
  {
    id: "technology-2025",
    title: "TEKNOLOJİ KOMİTESİ",
    icon: Cpu,
    color: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
    year: 2025,
  },
]

export default function CommitteesPage() {
  const [selectedYear, setSelectedYear] = useState<number>(2023)
  const years = [2023, 2025]

  const filteredCommittees = committees.filter((committee) => committee.year === selectedYear)

  return (
    <section className="py-16 bg-gradient-to-b from-gray-950 to-[#001529] text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Komitelerimiz</h1>

        <div className="flex justify-center mb-12 space-x-4">
          {years.map((year) => (
            <Button
              key={year}
              variant={selectedYear === year ? "default" : "outline"}
              onClick={() => setSelectedYear(year)}
              className={selectedYear === year ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900/50 border-gray-800"}
            >
              {year} Yılı
            </Button>
          ))}
        </div>

        <motion.div
          key={selectedYear}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCommittees.map((committee, index) => (
            <motion.div
              key={committee.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full bg-gradient-to-br ${committee.color} backdrop-blur-sm border border-opacity-30 hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-gray-900/50 flex items-center justify-center mb-4">
                    <committee.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">{committee.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

