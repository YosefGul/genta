export interface ScheduleItem {
  time: string
  program: string
  location: string
  type: "meal" | "ceremony" | "break" | "education" | "session" | "activity"
}

export interface FlowDay {
  id: string
  year: number
  day: number
  title: string
  schedule: ScheduleItem[]
}

export const flowDays: FlowDay[] = [
  // 2023 yılı programı
  {
    id: "2023-day1",
    year: 2023,
    day: 1,
    title: "1. Gün Programı",
    schedule: [
      { time: "09.00-10.00", program: "Kahvaltı", location: "Yemekhane", type: "meal" },
      { time: "10.00-11.00", program: "Açılış Programı", location: "Konferans Salonu", type: "ceremony" },
      { time: "11.00-11.20", program: "Çay Arası", location: "Konferans Salonu", type: "break" },
      { time: "11.20-12.20", program: "Akademik Eğitim", location: "Konferans Salonu", type: "education" },
      { time: "12.20-13.20", program: "Öğle Yemeği", location: "Yemekhane", type: "meal" },
      { time: "13.30-14.20", program: "1.Oturum", location: "Sınıflar", type: "session" },
      { time: "14.20-14.40", program: "Çay Arası", location: "Konferans Salonu", type: "break" },
      { time: "14.40-15.30", program: "2.Oturum", location: "Sınıflar", type: "session" },
      { time: "15.30-16.30", program: "Etkinlik", location: "Konferans Salonu", type: "activity" },
      { time: "16.30-17.20", program: "3.Oturum", location: "Sınıflar", type: "session" },
      { time: "17.20-17.40", program: "Çay Arası", location: "Konferans Salonu", type: "break" },
      { time: "17.40-18.30", program: "4.Oturum", location: "Sınıflar", type: "session" },
      { time: "18.30-19.30", program: "Akşam Yemeği", location: "Yemekhane", type: "meal" },
    ],
  },
  {
    id: "2023-day2",
    year: 2023,
    day: 2,
    title: "2. Gün Programı",
    schedule: [
      { time: "09.00-10.00", program: "Kahvaltı", location: "Yemekhane", type: "meal" },
      { time: "10.00-11.00", program: "Açılış Programı", location: "Konferans Salonu", type: "ceremony" },
      { time: "11.00-11.20", program: "Çay Arası", location: "Konferans Salonu", type: "break" },
      { time: "11.20-12.20", program: "Akademik Eğitim", location: "Konferans Salonu", type: "education" },
      { time: "12.20-13.20", program: "Öğle Yemeği", location: "Yemekhane", type: "meal" },
      { time: "13.30-14.20", program: "1.Oturum", location: "Sınıflar", type: "session" },
      { time: "14.20-14.40", program: "Çay Arası", location: "Konferans Salonu", type: "break" },
      { time: "14.40-15.30", program: "2.Oturum", location: "Sınıflar", type: "session" },
      { time: "15.30-16.30", program: "Etkinlik", location: "Konferans Salonu", type: "activity" },
      { time: "16.30-17.20", program: "3.Oturum", location: "Sınıflar", type: "session" },
      { time: "17.20-17.40", program: "Çay Arası", location: "Konferans Salonu", type: "break" },
      { time: "17.40-18.30", program: "4.Oturum", location: "Sınıflar", type: "session" },
      { time: "18.30-19.30", program: "Kapanış Töreni", location: "Konferans Salonu", type: "ceremony" },
    ],
  },
   {
    id: "2025-day1",
    year: 2025,
    day: 1,
    title: "1. Gün Programı",
    schedule: [
      { time: "09.00-10.00", program: "Kahvaltı", location: "Yemekhane", type: "meal" },
      { time: "10.00-11.00", program: "Açılış Programı", location: "Konferans Salonu", type: "ceremony" },
      { time: "11.00-11.20", program: "Çay Arası", location: "Konferans Salonu", type: "break" },
      { time: "11.20-12.20", program: "Akademik Eğitim", location: "Konferans Salonu", type: "education" },
      { time: "12.20-13.20", program: "Öğle Yemeği", location: "Yemekhane", type: "meal" },
      { time: "13.30-14.20", program: "1.Oturum", location: "Sınıflar", type: "session" },
      { time: "14.20-14.40", program: "Çay Arası", location: "Konferans Salonu", type: "break" },
      { time: "14.40-15.30", program: "2.Oturum", location: "Sınıflar", type: "session" },
      { time: "15.30-16.30", program: "Etkinlik", location: "Konferans Salonu", type: "activity" },
      { time: "16.30-17.20", program: "3.Oturum", location: "Sınıflar", type: "session" },
      { time: "17.20-17.40", program: "Çay Arası", location: "Konferans Salonu", type: "break" },
      { time: "17.40-18.30", program: "4.Oturum", location: "Sınıflar", type: "session" },
      { time: "18.30-19.30", program: "Akşam Yemeği", location: "Yemekhane", type: "meal" },
    ],
  },
  {
    id: "2025-day2",
    year: 2025,
    day: 2,
    title: "2. Gün Programı",
    schedule: [
      { time: "09.00-10.00", program: "Kahvaltı", location: "Yemekhane", type: "meal" },
      { time: "10.00-11.00", program: "Açılış Programı", location: "Konferans Salonu", type: "ceremony" },
      { time: "11.00-11.20", program: "Çay Arası", location: "Konferans Salonu", type: "break" },
      { time: "11.20-12.20", program: "Akademik Eğitim", location: "Konferans Salonu", type: "education" },
      { time: "12.20-13.20", program: "Öğle Yemeği", location: "Yemekhane", type: "meal" },
      { time: "13.30-14.20", program: "1.Oturum", location: "Sınıflar", type: "session" },
      { time: "14.20-14.40", program: "Çay Arası", location: "Konferans Salonu", type: "break" },
      { time: "14.40-15.30", program: "2.Oturum", location: "Sınıflar", type: "session" },
      { time: "15.30-16.30", program: "Etkinlik", location: "Konferans Salonu", type: "activity" },
      { time: "16.30-17.20", program: "3.Oturum", location: "Sınıflar", type: "session" },
      { time: "17.20-17.40", program: "Çay Arası", location: "Konferans Salonu", type: "break" },
      { time: "17.40-18.30", program: "4.Oturum", location: "Sınıflar", type: "session" },
      { time: "18.30-19.30", program: "Kapanış Töreni", location: "Konferans Salonu", type: "ceremony" },
    ],
  },
]

