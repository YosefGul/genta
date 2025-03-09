import TeamPage from "@/components/TeamPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ekibimiz | GENTA Çalıştay",
  description: "GENTA Liseler Arası Gençlik Çalıştayı ekip üyeleri ve organizasyon kadrosu.",
}

export default function EkipPage() {
  return <TeamPage />
}

