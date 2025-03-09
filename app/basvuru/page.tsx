import ApplicationPage from "@/components/ApplicationPage"
import Header from "@/components/Header"
import Contact from "@/components/Contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Başvuru | GENTA Çalıştay",
  description:
    "GENTA Liseler Arası Gençlik Çalıştayı başvuru sayfası. Delegasyon ve bireysel başvuru seçenekleri hakkında bilgi alın ve hemen başvurun.",
  keywords: ["GENTA", "başvuru", "delegasyon", "bireysel", "çalıştay", "lise", "öğrenci"],
}

export default function ApplicationPageRoute() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-950 to-[#001529] text-white">
      <Header />
      <main className="flex-grow">
        <ApplicationPage />
      </main>
      <Contact />
    </div>
  )
}

