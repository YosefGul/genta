import FlowPage from "@/components/FlowPage"
import Header from "@/components/Header"
import Contact from "@/components/Contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Program Akışı | GENTA Çalıştay",
  description: "GENTA Liseler Arası Gençlik Çalıştayı program akışı ve etkinlik takvimi.",
}

export default function ProgramFlow() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-950 to-[#001529] text-white">
      <Header />
      <main className="flex-grow">
        <FlowPage />
      </main>
      <Contact />
    </div>
  )
}

