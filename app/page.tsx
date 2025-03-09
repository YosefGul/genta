import Image from "next/image"
import { HomeIcon } from "lucide-react"
import Header from "@/components/Header"
import Introduction from "@/components/Introduction"
import Committees from "@/components/Committees"
import TeamSection from "@/components/TeamSection"
import Contact from "@/components/Contact"
import { siteContent } from "@/data/content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GENTA Çalıştay",
  description:
    "GENTA Liseler Arası Gençlik Çalıştayı resmi web sitesi. Komitelerimiz, ekibimiz ve etkinliklerimiz hakkında bilgi alın.",
  openGraph: {
    title: "GENTA Calistay - Ana Sayfa",
    description:
      "GENTA Liseler Arası Gençlik Çalıştayı resmi web sitesi. Komitelerimiz, ekibimiz ve etkinliklerimiz hakkında bilgi alın.",
  },
}

export default function Home() {
  // Mevcut kod değişmeden kalacak
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-950 to-[#001529] text-white">
      <Header />
      <main className="flex-1">
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dark-futuristic-low-poly-surface-background-with-the-gentle-motion-of-black-polygonal-triangle-shapes-and-glowing-blue-neon-light-4k-and-looping-technology-motion-background-animation-free-video.jpg-f7K9suz4b98byQJLduYnkDWsvK7BAy.jpeg"
              alt="GENTA Çalıştayı Arka Plan Görseli"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              className="opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 flex max-w-[980px] flex-col items-center text-center gap-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <HomeIcon className="w-8 h-8 text-blue-400" />
              <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl text-white drop-shadow-md">
                {siteContent.hero.title}
              </h1>
            </div>
            <p className="max-w-[700px] text-lg text-gray-300 drop-shadow-md">{siteContent.hero.description}</p>
          </div>
        </section>
        <Introduction />
        <Committees />
        <TeamSection />
        <Contact />
      </main>
    </div>
  )
}

