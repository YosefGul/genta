"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { FileText, Users, User, ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Başvuru türleri için veri yapısı
interface ApplicationType {
  id: string
  title: string
  description: string
  icon: React.ElementType
  deadline: string
  formUrl: string
}

// Başvuru türleri
const applicationTypes: ApplicationType[] = [
  {
    id: "delegation",
    title: "Delegasyon Başvurusu",
    description: "Okulunuzu temsilen bir grup olarak GENTA Çalıştayı'na katılmak için delegasyon başvurusu yapın.",
    icon: Users,
    deadline: "5 Nisan 2025",
    formUrl: "https://forms.gle/DfCx5mEKq2UeSwpQ6",
  },
  {
    id: "individual",
    title: "Bireysel Başvuru",
    description:
      "Kişisel olarak GENTA Çalıştayı'na katılmak ve farklı okullardan gelen öğrencilerle etkileşimde bulunmak için bireysel başvuru yapın.",
    icon: User,
    deadline: "5 Nisan 2025",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdBfEhxHk66dh30OzWosyC6cD94p4hUYicZLvJb1NzcKqJr_Q/viewform?usp=sf_link",
  },
]

export default function ApplicationPage() {
  return (
    <section className="bg-gradient-to-b from-gray-950 to-[#001529] py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="mb-12 flex items-center justify-center gap-3">
          <FileText className="h-8 w-8 text-blue-400" />
          <h1 className="text-center text-4xl font-bold">Başvuru</h1>
        </div>

        {/* Giriş */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-6 text-xl text-gray-300">
            GENTA Çalıştayı'na katılmak için iki farklı başvuru seçeneği sunuyoruz. Okulunuzla birlikte grup olarak veya
            bireysel olarak başvurabilirsiniz.
          </p>
        </div>

        {/* Başvuru Türleri */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {applicationTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="flex h-full flex-col justify-between border-gray-800 bg-gray-900/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="rounded-full bg-blue-600/90 p-2 text-white">
                      <type.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </div>
                  <p className="text-sm text-gray-400">{type.description}</p>
                </CardHeader>

                <CardContent className="space-y-4 pb-2 pt-2">
                 

                  <div className="flex items-center gap-2 text-amber-400">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm">Son Başvuru: {type.deadline}</span>
                  </div>
                </CardContent>

                <CardFooter>
                  <Link href={type.formUrl} target="_blank" className="w-full">
                    <Button className="group mt-4 w-full bg-blue-600 text-white hover:bg-blue-700">
                      <span>Hemen Başvur</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

