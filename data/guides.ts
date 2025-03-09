import { DollarSign, Clock, Users, GraduationCap, Brain, Globe, Cpu, Gavel, Book } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Guide {
  id: string
  title: string
  description: string
  pdfUrl: string
  icon: LucideIcon
  year: number
}

export const guides: Guide[] = [
  // 2023 Kılavuzları
  {
    id: "economy-2023",
    title: "EKONOMİ KOMİTESİ KAYNAKÇA KILAVUZU",
    description: "GENÇLİK VE TARTIŞMA ÇALIŞTAYI 2023",
    pdfUrl: "/pdfs/ekonomi.pdf",
    icon: DollarSign,
    year: 2023,
  },
  {
    id: "history-2023",
    title: "TARİH KOMİTESİ KAYNAKÇA KILAVUZU",
    description: "GENÇLİK VE TARTIŞMA ÇALIŞTAYI 2023",
    pdfUrl: "/pdfs/tarih.pdf",
    icon: Clock,
    year: 2023,
  },
  {
    id: "sociology-2023",
    title: "SOSYOLOJİ KOMİTESİ KAYNAKÇA KILAVUZU",
    description: "GENÇLİK VE TARTIŞMA ÇALIŞTAYI 2023",
    pdfUrl: "/pdfs/sosyoloji.pdf",
    icon: Users,
    year: 2023,
  },
  {
    id: "sadas-2023",
    title: "EĞİTİM KOMİTESİ KAYNAKÇA KILAVUZU",
    description: "GENÇLİK VE TARTIŞMA ÇALIŞTAYI 2023",
    pdfUrl: "/pdfs/egitim.pdf",
    icon: Book,
    year: 2023,
  },
  {
    id: "asdasdsa-2023",
    title: "PSİKOLOJİ KOMİTESİ KAYNAKÇA KILAVUZU",
    description: "GENÇLİK VE TARTIŞMA ÇALIŞTAYI 2023",
    pdfUrl: "/pdfs/psikoloji.pdf",
    icon: Users,
    year: 2023,
  },
  {
    id: "asdasdsadasd-2023",
    title: "ULUSLARARASI İLİŞKİLER KOMİTESİ KAYNAKÇA KILAVUZU",
    description: "GENÇLİK VE TARTIŞMA ÇALIŞTAYI 2023",
    pdfUrl: "/pdfs/uluslararasi.pdf",
    icon: Globe,
    year: 2023,
  },

  // 2025 Kılavuzları
  {
    id: "sosyology-2025",
    title: "SOSYOLOJİ KOMİTESİ KAYNAKÇA KILAVUZU",
    description: "GENÇLİK VE TARTIŞMA ÇALIŞTAYI 2025",
    pdfUrl: "/pdfs/egitim-kilavuz-2025.pdf",
    icon: GraduationCap,
    year: 2025,
  },
  {
    id: "psychology-2025",
    title: "PSİKOLOJİ KOMİTESİ KAYNAKÇA KILAVUZU",
    description: "GENÇLİK VE TARTIŞMA ÇALIŞTAYI 2025",
    pdfUrl: "/pdfs/psikoloji-kilavuz-2025.pdf",
    icon: Brain,
    year: 2025,
  },
  {
    id: "international-relations-2025",
    title: "ULUSLARARASI İLİŞKİLER KOMİTESİ KAYNAKÇA KILAVUZU",
    description: "GENÇLİK VE TARTIŞMA ÇALIŞTAYI 2025",
    pdfUrl: "/pdfs/uluslararasi-iliskiler-kilavuz-2025.pdf",
    icon: Globe,
    year: 2025,
  },
  {
    id: "technology-2025",
    title: "TEKNOLOJİ KOMİTESİ KAYNAKÇA KILAVUZU",
    description: "GENÇLİK VE TARTIŞMA ÇALIŞTAYI 2025",
    pdfUrl: "/pdfs/teknoloji-kilavuz-2025.pdf",
    icon: Cpu,
    year: 2025,
  },
  {
    id: "law-2025",
    title: "HUKUK KOMİTESİ KAYNAKÇA KILAVUZU",
    description: "GENÇLİK VE TARTIŞMA ÇALIŞTAYI 2025",
    pdfUrl: "/pdfs/hukuk-kilavuz-2025.pdf",
    icon: Gavel,
    year: 2025,
  },
  {
    id: "history-2025",
    title: "TARİH KOMİTESİ KAYNAKÇA KILAVUZU",
    description: "GENÇLİK VE TARTIŞMA ÇALIŞTAYI 2025",
    pdfUrl: "/pdfs/hukuk-kilavuz-2025.pdf",
    icon: Gavel,
    year: 2025,
  },
]

