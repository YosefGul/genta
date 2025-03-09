import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Card, CardContent } from "@/components/ui/card"
import { academicEducators } from '@/data/academicEducators'
import Header from '@/components/Header'
import Contact from '@/components/Contact'

export default function EducatorDetailPage({ params }: { params: { id: string } }) {
  const educator = academicEducators.find(e => e.id === params.id);

  if (!educator) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 to-[#001529] text-white">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col items-center mb-8">
                <Image
                  src={educator.image}
                  alt={educator.name}
                  width={200}
                  height={200}
                  className="rounded-full shadow-md mb-4"
                />
                <h1 className="text-3xl font-bold text-center text-white">{educator.name}</h1>
              </div>
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-blue-400">{educator.title}</h2>
                  <p className="text-gray-400 text-lg">{educator.year} Yılı Eğitimcisi</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Özgeçmiş</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{educator.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Contact />
    </div>
  )
}

