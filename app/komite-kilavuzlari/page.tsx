import CommitteeGuides from '@/components/CommitteeGuides'
import Header from '@/components/Header'
import Contact from '@/components/Contact'

export default function CommitteeGuidesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 to-[#001529] text-white">
      <Header />
      <main className="flex-grow">
        <CommitteeGuides />
      </main>
      <Contact />
    </div>
  )
}

