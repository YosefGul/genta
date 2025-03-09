import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { academicEducators } from '@/data/academicEducators'
import Header from '@/components/Header'
import Contact from '@/components/Contact'

export default function AcademicEducatorsPage() {
  // const years = [2023, 2025];
  const years = [2023];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-950 to-[#001529] text-white">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-center text-3xl font-bold">Akademik Eğitimciler</h1>
          {years.map(year => (
            <div key={year} className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">{year} Yılı Eğitimcileri</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {academicEducators
                  .filter(educator => educator.year === year)
                  .map(educator => (
                    <Link href={`/akademik-egitimciler/${educator.id}`} key={educator.id}>
                      <Card className="border-gray-800 bg-gray-900/50 transition-shadow duration-300 hover:shadow-lg">
                        <CardHeader>
                          <CardTitle className="text-white">{educator.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center space-x-4">
                            <Image
                              src={educator.image}
                              alt={educator.name}
                              width={100}
                              height={100}
                              className="rounded-full"
                            />
                            <div>
                              <p className="text-sm text-gray-400">{educator.title}</p>
                              <p className="mt-2 line-clamp-3 text-sm text-gray-300">{educator.bio}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
          {/* Yeni Yıl Ekleneceği zaman bu altındaki alanı kaldıracağız. */}
          <h2 className="mb-4 text-2xl font-semibold">2025 Yılı Eğitimcileri</h2>
          <div className="border-grey-500 rounded-md border bg-gray-900/50 py-6 text-center transition-shadow duration-300 hover:shadow-lg">Çok Yakında...</div>
        </div>
      </main>
      <Contact />
    </div>
  )
}

