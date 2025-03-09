'use client'

import { motion } from 'framer-motion'
import { Info, Eye, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteContent } from '@/data/content'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Introduction() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#001529] to-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-16">
          <Info className="w-8 h-8 text-blue-400" />
          <h2 className="text-4xl font-bold text-center text-white">
            Tanıtım
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="h-full transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl mb-4 text-blue-400">{siteContent.introduction.vision.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6">
              <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center">
                <Eye className="w-12 h-12 text-blue-400" />
              </div>
              <p className="text-gray-300 text-center">
                {siteContent.introduction.vision.description}
              </p>
            </CardContent>
          </Card>

          <Card className="h-full transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl mb-4 text-green-400">{siteContent.introduction.mission.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6">
              <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center">
                <Target className="w-12 h-12 text-green-400" />
              </div>
              <p className="text-gray-300 text-center">
                {siteContent.introduction.mission.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

