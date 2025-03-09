"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Book, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { guides } from "@/data/guides"

export default function CommitteeGuides() {
  const [expandedGuide, setExpandedGuide] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState<number>(2023)

  const years = [2023, 2025]
  const filteredGuides = guides.filter((guide) => guide.year === selectedYear)

  const toggleGuide = (id: string) => {
    setExpandedGuide(expandedGuide === id ? null : id)
  }

  return (
    <section className="bg-gradient-to-b from-gray-950 to-[#001529] py-16 text-white">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center text-4xl font-bold">Komite Kılavuzları</h1>

        {/* Yıl Seçimi */}
        <div className="mb-8 flex justify-center space-x-4">
          {years.map((year) => (
            <Button
              key={year}
              variant={selectedYear === year ? "default" : "outline"}
              onClick={() => {
                setSelectedYear(year)
                setExpandedGuide(null) // Yıl değiştiğinde açık kılavuzu kapat
              }}
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
          className="grid gap-6"
        >
          {filteredGuides.map((guide) => (
            <Card key={guide.id} className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center text-xl font-semibold">
                    <guide.icon className="mr-2 h-6 w-6" />
                    {guide.title}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleGuide(guide.id)}
                    aria-label={expandedGuide === guide.id ? "Kılavuzu kapat" : "Kılavuzu aç"}
                  >
                    {expandedGuide === guide.id ? (
                      <ChevronUp className="h-6 w-6" />
                    ) : (
                      <ChevronDown className="h-6 w-6" />
                    )}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-400">{guide.description}</p>
                {expandedGuide === guide.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <iframe
                      src={guide.pdfUrl}
                      className="h-[500px] w-full rounded-lg"
                      title={`${guide.title} PDF Önizleme`}
                    />
                    <Button className="mt-4" onClick={() => window.open(guide.pdfUrl, "_blank")}>
                      <Book className="mr-2 h-4 w-4" /> PDF'i Aç
                    </Button>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

