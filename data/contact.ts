export interface ContactInfo {
  address: {
    street: string
    district: string
    city: string
    postalCode: string
  }
  phone: string
  email: string
  socialMedia: {
    instagram?: string
    linkedin?: string
  }
}

export const contactInfo: ContactInfo = {
  address: {
    street: "Şeyhli Mahallesi, Hayatı Üstün Caddesi, Merdane Sokak No:1",
    district: "Pendik",
    city: "İstanbul",
    postalCode: "34906",
  },
  phone: "(0216) 378 83 86",
  email: "gentacalistay@gmail.com",
  socialMedia: {
    instagram: "#",
    linkedin: "#",
  },
}

