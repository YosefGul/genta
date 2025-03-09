export interface SiteContent {
  hero: {
    title: string;
    description: string;
  };
  introduction: {
    vision: {
      title: string;
      description: string;
    };
    mission: {
      title: string;
      description: string;
    };
  };
}

export const siteContent: SiteContent = {
  hero: {
    title: "GENTA'ya Hoş Geldiniz - GENTA Liseler Arası Gençlik Çalıştayı",
    description: "GENTA, gençlerin potansiyelini keşfetmelerine ve geliştirmelerine yardımcı olan bir organizasyondur."
  },
  introduction: {
    vision: {
      title: "Vizyonumuz",
      description: "Genta çalıştayı, önemli ve komitelere özel olarak seçilmiş problemler için katılımcıların o konuda kendi komitelerinde grup halinde tartışıp fikirleri sentezleyip, çözümler üreterek 'kaliteli kararlar' alabilmesini katılımcıların hem tartışıp hem de akademik anlamda gelişmesini hedefler."
    },
    mission: {
      title: "Misyonumuz",
      description: "Genel olarak gençlik ve teknoloji kapsamlı olan bu çalıştayımız birbirinden farklı 6 komite altında işlenecektir. Bu komitelerle alakalı gündemde olan ve bu yıllara yakın konular tartışacaktır. Birlikte eğleneceğimiz, güzel vakitler geçireceğimiz, tartışacağımız gelecek hayata atılım için fırsat olacak bu çalıştayımızda sizleri aramızda görmekten mutluluk ve ağırlamaktan şeref duyarız."
    }
  }
};

