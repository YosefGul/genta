export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  email: string;
  phone: string;
  instagram: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "ÖMER EKİN",
    role: "GENTA 2023 Genel Koordinatör",
    image: "/team/omer.jpeg",
    email: "omerekin365@gmail.com",
    phone: "0552 713 82 13",
    instagram: "https://www.instagram.com/omer_ekin34/"
  },
  {
    id: 2,
    name: "ÖMER TAHA EKŞİ",
    role: "GENTA 2023 Genel Koordinatör Yardımcısı",
    image: "/team/talha.jpg",
    email: "ekstomertaha973@gmail.com",
    phone: "0549 472 66 38",
    instagram: "https://www.instagram.com/byomertaha/"
  },
  {
    id: 3,
    name: "MUSTAFA ŞAHİN",
    role: "GENTA 2025 Genel Koordinatör",
    image: "/team/mustafa.jpg",
    email: "mustafasah5812@gmail.com",
    phone: "0552 785 50 58",
    instagram: "https://www.instagram.com/mustafqq_/"
  },
  {
    id: 4,
    name: "ABDÜLBAKİ DENİZ",
    role: "GENTA 2025 Genel Koordinatör Yardımcısı",
    image: "/team/baki.jpeg",
    email: "denizabdulbakieroi@gmail.com",
    phone: "0506 235 34 66",
    instagram: "https://www.instagram.com/baki.denizz/"
  }
];

