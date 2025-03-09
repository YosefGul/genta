export interface GalleryYear {
  id: string
  year: number
  title: string
  description: string
  driveLink: string
  coverImage: string
}

export const galleryYears: GalleryYear[] = [
  {
    id: "gallery-2023",
    year: 2023,
    title: "GENTA 2023 Fotoğraf Galerisi",
    description: "2023 yılında gerçekleşen GENTA etkinliklerinden kareler",
    driveLink: "https://drive.google.com/drive/folders/15XmebRKF3YM_Xo5v9FQva2ppdGgZnviz",
    coverImage: "/yirmiuc.jpg",
  },
  {
    id: "gallery-2025",
    year: 2025,
    title: "GENTA 2025 Fotoğraf Galerisi",
    description: "2025 yılında gerçekleşen GENTA etkinliklerinden kareler",
    driveLink: "https://drive.google.com/drive/folders/1smJ4dEIpKRzsnnNviG8YEaFBGvCOY5l9",
    coverImage: "/placeholder.svg?height=400&width=600",
  },
]

