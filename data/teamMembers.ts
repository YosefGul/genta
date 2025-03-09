import type { LucideIcon } from "lucide-react"
import { Users, GraduationCap, Briefcase, Megaphone, Palette, Code } from "lucide-react"

export interface TeamMember {
  id: number
  name: string
  title: string
  category: "Koordinatör Ekibi" | "Akademik Ekibi" | "Organizasyon Ekibi"
  year: 2023 | 2025
  image: string
  bio?: string
  social?: {
    email?: string
    instagram?: string
    linkedin?: string
    twitter?: string
  }
  department?: string
  icon?: LucideIcon
}

export const categories = ["Koordinatör Ekibi", "Akademik Ekibi", "Organizasyon Ekibi"] as const
export const years = [2023, 2025] as const

export const categoryIcons: Record<string, LucideIcon> = {
  "Koordinatör Ekibi": Users,
  "Akademik Ekibi": GraduationCap,
  "Organizasyon Ekibi": Briefcase,
}

export const teamMembers: TeamMember[] = [
  // 2023 Ekibi
  {
    id: 1,
    name: "Ömer Ekin",
    title: "Genel Koordinatör",
    category: "Koordinatör Ekibi",
    year: 2023,
    image:
      "/team/omer.jpeg",
    bio: "GENTA 2023 organizasyonunun genel koordinatörü olarak görev yapmaktadır.",
    social: {
      email: "omerekin365@gmail.com",
      instagram: "#",
      linkedin: "#",
    },
    department: "Yönetim",
    icon: Users,
  },
  {
    id: 2,
    name: "Ömer Taha Ekşi",
    title: "Genel Koordinatör Yardımcısı",
    category: "Koordinatör Ekibi",
    year: 2023,
    image: "/team/talha.jpg",
    bio: "GENTA 2023 organizasyonunun genel koordinatör yardımcısı olarak görev yapmaktadır.",
    social: {
      email: "ekstomertaha973@gmail.com",
      instagram: "#",
      linkedin: "#",
    },
    department: "Yönetim",
    icon: Users,
  },












{
    id: 3,
    name: "Eylül Çetintürk",
    title: "Sosyoloji Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2023,
    image: "/student/eylül.png",
    bio: "GENTA 2023 organizasyonunun Sosyoloji Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
{
    id: 4,
    name: "Beyzanur",
    title: "Uluslararası İlişkiler Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2023,
    image: "/student/beyza.png",
    bio: "GENTA 2023 organizasyonunun Uluslararası İlişkiler Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
  {
    id: 5,
    name: "Ali Asaf Yıldız",
    title: "Psikoloji Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2023,
    image: "/student/asaf.jpeg",
    bio: "GENTA 2023 organizasyonunun Psikoloji Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
   
  {
    id: 6,
    name: "Mustafa Kadir Ağca",
    title: "Tarih Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2023,
    image: "/student/agca.png",
    bio: "GENTA 2023 organizasyonunun Tarih Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
   {
    id: 7,
    name: "Mehmet Umut",
    title: "Sosyoloji Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2023,
    image: "/student/mehmet.png",
    bio: "GENTA 2023 organizasyonunun Sosyoloji Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
    {
    id: 8,
    name: "Muhammet Ali Morkoç",
    title: "Ekonomi Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2023,
    image: "/student/morkoc.png",
    bio: "GENTA 2023 organizasyonunun Ekonomi Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
   {
    id: 9,
    name: "Ahmet Nevzat Tayfur",
    title: "Eğitim Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2023,
    image: "/student/nevo.png",
    bio: "GENTA 2023 organizasyonunun Eğitim Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
   {
    id: 10,
    name: "Yusuf Sait Solakoğlu",
    title: "Eğitim Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2023,
    image: "/student/sait.png",
    bio: "GENTA 2023 organizasyonunun Eğitim Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
  {
    id: 11,
    name: "Ahmet Selim",
    title: "Psikoloji Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2023,
    image: "/student/selim.png",
    bio: "GENTA 2023 organizasyonunun Psikoloji Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
  {
    id: 12,
    name: "Sümeyye Sarıkaya",
    title: "Tarih Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2023,
    image: "/student/sumeyye.png",
    bio: "GENTA 2023 organizasyonunun Tarih Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
  {
    id: 13,
    name: "Umut Özden",
    title: "Ekonomi Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2023,
    image: "/student/umut.png",
    bio: "GENTA 2023 organizasyonunun Ekonomi Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
  {
    id: 14,
    name: "Zeynep Tokgöz Timtal",
    title: "Uluslararsı İlişkiler Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2023,
    image: "/student/zeynep.png",
    bio: "GENTA 2023 organizasyonunun Uluslararsı İlişkiler Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
      
   

  











  
  {
    id: 15,
    name: "Ali Yasin Öztürk",
    title: "Press Eş Başkanı",
    category: "Organizasyon Ekibi",
    year: 2023,
    image: "/org/aliyasin.png",
    bio: "GENTA 2023 organizasyonunun Press Eş Başkanı olarak görev yapmaktadır.",
    department: "Etkinlik",
    icon: Briefcase,
  },
  {
    id: 16,
    name: "Mehmet Efe Güney",
    title: "Press Eş Başkanı",
    category: "Organizasyon Ekibi",
    year: 2023,
    image: "/org/efeguney.png",
    bio: "GENTA 2023 organizasyonunun Press Eş Başkanı olarak görev yapmaktadır.",
    department: "Etkinlik",
    icon: Briefcase,
  },
  {
    id: 17,
    name: "Muhammet Ali Gültekin",
    title: "Lojistik Eş Başkanı",
    category: "Organizasyon Ekibi",
    year: 2023,
    image: "/org/hafiz.png",
    bio: "GENTA 2023 organizasyonunun Lojistik Eş Başkanı olarak görev yapmaktadır.",
    department: "Etkinlik",
    icon: Briefcase,
  },
  {
    id: 18,
    name: "Mert Yusuf Öztürk",
    title: "PR Eş Başkanı",
    category: "Organizasyon Ekibi",
    year: 2023,
    image: "/org/mertyusuf.png",
    bio: "GENTA 2023 organizasyonunun PR Eş Başkanı olarak görev yapmaktadır.",
    department: "Etkinlik",
    icon: Briefcase,
  },
  {
    id: 19,
    name: "Yusuf Hamza Aydın",
    title: "Lojistik Eş Baskanı",
    category: "Organizasyon Ekibi",
    year: 2023,
    image: "/org/yusufhamza.png",
    bio: "GENTA 2023 organizasyonunun Lojistik Eş Başkanı olarak görev yapmaktadır.",
    department: "Etkinlik",
    icon: Briefcase,
  },
  {
    id: 20,
    name: "Musab Hüseyin Çiftçi",
    title: "PR Eş Baskanı",
    category: "Organizasyon Ekibi",
    year: 2023,
    image: "/org/musab.png",
    bio: "GENTA 2023 organizasyonunun PR Eş Başkanı olarak görev yapmaktadır.",
    department: "Etkinlik",
    icon: Briefcase,
  },
 

  // 2025 Ekibi
  {
    id: 21,
    name: "MUSTAFA ŞAHİN",
    title: "Genel Koordinatör",
    category: "Koordinatör Ekibi",
    year: 2025,
    image:
      "/team/mustafa.jpg",
    bio: "GENTA 2025 organizasyonunun genel koordinatörü olarak görev yapmaktadır.",
    social: {
      email: "mustafasah5812@gmail.com",
      instagram: "#",
      linkedin: "#",
    },
    department: "Yönetim",
    icon: Users,
  },
  {
    id: 22,
    name: "ABDÜLBAKİ DENİZ",
    title: "Genel Koordinatör Yardımcısı",
    category: "Koordinatör Ekibi",
    year: 2025,
    image:
      "/team/baki.jpeg",
    bio: "GENTA 2025 organizasyonunun genel koordinatör yardımcısı olarak görev yapmaktadır.",
    social: {
      email: "denizabdulbakieroi@gmail.com",
      instagram: "#",
      linkedin: "#",
    },
    department: "Yönetim",
    icon: Users,
  },
  {
    id: 23,
    name: "Şehbal Öztürk",
    title: "Akademi Başkanı",
    category: "Akademik Ekibi",
    year: 2025,
    image: "/student2025/sehbal.jpg",
    bio: "GENTA 2025 organizasyonunun Akademi Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
  {
    id: 24,
    name: "Leyla Çayan",
    title: "Tarih Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2025,
    image: "/student2025/leyla.jpg",
    bio: "GENTA 2025 organizasyonunun Tarih Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
  {
    id: 25,
    name: "Kerem Berat Hamamcıoğlu",
    title: "Tarih Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2025,
    image: "/student2025/kerem.jpg",
    bio: "GENTA 2025 organizasyonunun Tarih Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
  {
    id: 26,
    name: "Mert Yağız Kavuş",
    title: "Teknoloji Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2025,
    image: "/student2025/mert.jpg",
    bio: "GENTA 2025 organizasyonunun Teknolji Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
  {
    id: 27,
    name: "Zehra Özyaşar",
    title: "Teknoloji Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2025,
    image: "/student2025/zehra.jpg",
    bio: "GENTA 2025 organizasyonunun Teknolji Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
  {
    id: 28,
    name: "Esma Çevik",
    title: "Sosyoloji Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2025,
    image: "/student2025/esma.jpg",
    bio: "GENTA 2025 organizasyonunun Sosyoloji Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
   {
    id: 29,
    name: "Sara Garip",
    title: "Sosyoloji Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2025,
    image: "/student2025/sara.png",
    bio: "GENTA 2025 organizasyonunun Sosyoloji Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
  {
    id: 30,
    name: "Selman Emre Şamat",
    title: "Psikoloji Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2025,
    image: "/student2025/selman.jpg",
    bio: "GENTA 2025 organizasyonunun Psikoloji Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
  {
    id: 31,
    name: "Enes Malik Demir",
    title: "Psikoloji Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2025,
    image: "/student2025/enes.jpg",
    bio: "GENTA 2025 organizasyonunun Psikoloji Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
  {
    id: 32,
    name: "Nurefşan Demir",
    title: "Hukuk Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2025,
    image: "/student2025/nurefsan.png",
    bio: "GENTA 2025 organizasyonunun Hukuk Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
  {
    id: 33,
    name: "Efe Özgür Ato",
    title: "Hukuk Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2025,
    image: "/student2025/efe.jpg",
    bio: "GENTA 2025 organizasyonunun Hukuk Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
  {
    id: 34,
    name: "Burak Sağdıç",
    title: "Uluslararası İlişkiler Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2025,
    image: "/student2025/burak.jpg",
    bio: "GENTA 2025 organizasyonunun Uluslararası İlişkiler Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },
  {
    id: 35,
    name: "Ahmet Yiğit Gökdemir",
    title: "Uluslararası İlişkiler Komite Başkanı",
    category: "Akademik Ekibi",
    year: 2025,
    image: "/student2025/ahmet.jpg",
    bio: "GENTA 2025 organizasyonunun Uluslararası İlişkiler Komite Başkanı olarak görev yapmaktadır.",
    department: "Eğitim",
    icon: GraduationCap,
  },

  {
    id: 36,
    name: "Mehmet Zahid Maman",
    title: "Organizasyon Başkanı",
    category: "Organizasyon Ekibi",
    year: 2025,
    image: "/org2025/zaid.jpg",
    bio: "GENTA 2025 organizasyonunun Organizasyon Başkanı olarak görev yapmaktadır.",
    department: "Tasarım",
    icon: Palette,
  },
  {
    id: 37,
    name: "Fatma Zehra Korkmaz",
    title: "PR Eş Başkanı",
    category: "Organizasyon Ekibi",
    year: 2025,
    image: "/org2025/fatma.jpg",
    bio: "GENTA 2025 organizasyonunun PR Eş Başkanı olarak görev yapmaktadır.",
    department: "Tasarım",
    icon: Palette,
  },
  {
    id: 38,
    name: "Yağız Yerlikaya",
    title: "IT Eş Başkanı",
    category: "Organizasyon Ekibi",
    year: 2025,
    image: "/org2025/yagiz.jpg",
    bio: "GENTA 2025 organizasyonunun IT Eş Başkanı olarak görev yapmaktadır.",
    department: "Tasarım",
    icon: Palette,
  },
  {
    id: 39,
    name: "Alperen Muhammet Sekban",
    title: "IT Eş Başkanı",
    category: "Organizasyon Ekibi",
    year: 2025,
    image: "/org2025/alperen.jpg",
    bio: "GENTA 2025 organizasyonunun IT Eş Başkanı olarak görev yapmaktadır.",
    department: "Tasarım",
    icon: Palette,
  },
  {
    id: 40,
    name: "Ömer Taha Ekşi",
    title: "Lojistik Eş Başkanı",
    category: "Organizasyon Ekibi",
    year: 2025,
    image: "/org2025/taha.jpg",
    bio: "GENTA 2025 organizasyonunun Lojistik Eş Başkanı olarak görev yapmaktadır.",
    department: "Tasarım",
    icon: Palette,
  },
  {
    id: 41,
    name: "Süleyman Talha Erat",
    title: "Lojistik Eş Başkanı",
    category: "Organizasyon Ekibi",
    year: 2025,
    image: "/org2025/suleyman.jpg",
    bio: "GENTA 2025 organizasyonunun Lojistik Eş Başkanı olarak görev yapmaktadır.",
    department: "Tasarım",
    icon: Palette,
  },
  {
    id: 42,
    name: "Ahmet Kayra Loğoglu",
    title: "Press Eş Başkanı",
    category: "Organizasyon Ekibi",
    year: 2025,
    image: "/org2025/kayra.jpg",
    bio: "GENTA 2025 organizasyonunun Press Eş Başkanı olarak görev yapmaktadır.",
    department: "Tasarım",
    icon: Palette,
  },
   {
    id: 43,
    name: "Muhammet Emin Küçükgüzel",
    title: "Press Eş Başkanı",
    category: "Organizasyon Ekibi",
    year: 2025,
    image: "/org2025/emin.jpg",
    bio: "GENTA 2025 organizasyonunun Press Eş Başkanı olarak görev yapmaktadır.",
    department: "Tasarım",
    icon: Palette,
  },
 
]

