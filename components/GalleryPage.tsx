"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ImageIcon, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { galleryYears } from "@/data/gallery"

export default function GalleryPage() {
  return (
    <section className="bg-gradient-to-b from-gray-950 to-[#001529] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-center gap-3">
          <ImageIcon className="h-8 w-8 text-blue-400" />
          <h1 className="text-center text-4xl font-bold">Fotoğraf Galerisi</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {galleryYears.map((gallery, index) => (
            <motion.div
              key={gallery.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full overflow-hidden border-gray-800 bg-gray-900/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={gallery.coverImage || "/placeholder.svg"}
                    alt={`${gallery.year} Galeri Kapak Görseli`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">{gallery.year}</h3>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{gallery.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-400">{gallery.description}</p>
                </CardContent>

                <CardFooter>
                  <Button
                    className="flex w-full items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open(gallery.driveLink, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Google Drive'da Görüntüle</span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

