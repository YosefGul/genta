export interface Committee {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const committees: Committee[] =[
  {
    "id": 1,
    "name": "Ekonomi Komitesi",
    "description": "Ekonomi ve finansal gelişmeleri tartışan komite.",
    "image": "/committees/ekonomi.jpeg"
  },
  {
    "id": 2,
    "name": "Tarih Komitesi",
    "description": "Tarihsel olayları ve kültürel mirası inceleyen komite.",
    "image": "/committees/tarih.png"
  },
  {
    "id": 3,
    "name": "Sosyoloji Komitesi",
    "description": "Toplumsal yapıları ve sosyal dinamikleri araştıran komite.",
    "image": "/committees/sosyoloji.jpg"
  },
  {
    "id": 4,
    "name": "Eğitim Komitesi",
    "description": "Eğitim sistemleri ve gelişim üzerine çalışan komite.",
    "image": "/committees/egitim.jpeg"
  },
  {
    "id": 5,
    "name": "Psikoloji Komitesi",
    "description": "İnsan davranışları ve zihinsel süreçleri inceleyen komite.",
    "image": "/committees/psikoloji.jpg"
  },
  {
    "id": 6,
    "name": "Uluslararası İlişkiler Komitesi",
    "description": "Küresel ilişkileri ve diplomatik süreçleri ele alan komite.",
    "image": "/committees/uluslararasi.jpeg"
  },
  {
    "id": 7,
    "name": "Hukuk Komitesi",
    "description": "Yasal düzenlemeleri ve adalet sistemini inceleyen komite.",
    "image": "/committees/hukuk.jpg"
  },
  {
    "id": 8,
    "name": "Teknoloji Komitesi",
    "description": "Teknolojik gelişmeleri ve inovasyonu takip eden komite.",
    "image": "/committees/teknoloji.png"
  }
]
