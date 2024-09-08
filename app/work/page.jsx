"use client";

import Link from "next/link";

const work = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-full h-[200px] bg-blue-500 items-center justify-center flex flex-col">
        <h1 className="text-white text-2xl font-semibold mb-4">
          Alanlar ve Uygulamalar
        </h1>
        <div className="space-x-2 text-white">
          <Link href="/">Anasayfa</Link>
          <span>/</span>
          <span>Alanlar ve Uygulamalar</span>
        </div>
      </div>
      <div className="text-center my-14">
        <h1 className="text-xl text-blue-600 font-semibold">
          Çalışma Alanları
        </h1>
      </div>
      <div className="container mx-auto lg:flex w-full gap-6 my-12">
        <div className="flex flex-col lg:w-[580px] gap-2 my-4 lg:my-0">
          <button className="border text-left p-2 rounded-md ">
            Depresyon Bozuklukları
          </button>
          <button className="border text-left p-2 rounded-md">
            Anksiyete Bozuklukları
          </button>
          <button className="border text-left p-2 rounded-md">
            Obsesif-Kompulsif Bozukluk
          </button>
          <button className="border text-left p-2 rounded-md">
            Travma ve Stresörle İlgili Bozukluklar
          </button>
          <button className="border text-left p-2 rounded-md">
            Yıkıcı Bozukluklar, Dürtü Denetimi ve Davranım Bozuklukları
          </button>
          <button className="border text-left p-2 rounded-md">
            İlişki Sorunları
          </button>
        </div>
        <div className="flex flex-col lg:w-[580px] gap-2">
          <button className="border text-left p-2 rounded-md">
            Bedensel Belirti Bozuklukları ve İlişkili Bozukluklar
          </button>
          <button className="border text-left p-2 rounded-md">
            Kişilik Bozuklukları
          </button>
          <button className="border text-left p-2 rounded-md">
            Beslenme ve Yeme Bozuklukları
          </button>
          <button className="border text-left p-2 rounded-md">
            Madde ile İlişkili Bozukluklar ve Bağımlılık Bozuklukları
          </button>
          <button className="border text-left p-2 rounded-md">
            İletişim Becerileri, Öfke ve Stres Denetimi
          </button>
          <button className="border text-left p-2 rounded-md">
            Toplumsal Çevre ile İlişkili Diğer Sorunlar
          </button>
        </div>
      </div>
      <div className="text-center my-14 container mx-auto">
        <h1 className="text-xl text-blue-600 font-semibold mb-2">
          Uygulanan Testler
        </h1>
        <p>
          Kliniğimizde uygulanan başlıca testler ve bu testler hakkında kısa
          bilgiler aşağıda yer almaktadır. Her test / ölçek her danışana
          uygulanmamaktadır. Size uygun değerlendirme için uygulanması
          gerekenleri ilk görüşmeden sonra uzmanımız önerecektir.
        </p>
      </div>
      <div className="container mx-auto lg:flex w-full gap-6 my-12">
        <div className="flex flex-col lg:w-[580px] gap-2 my-4 lg:my-0">
          <button className="border text-left p-2 rounded-md ">
            Minnesota Çok Yönlü Kişilik Envanteri (MMPI)
          </button>
          <button className="border text-left p-2 rounded-md">
            Beier Cümle Tamamlama Testi (BCT)
          </button>
          <button className="border text-left p-2 rounded-md">
            Nöropsikolojik Testler
          </button>
          <button className="border text-left p-2 rounded-md">
            Wechsler Yetişkinler için Zeka Ölçeği (WAIS-R)
          </button>
        </div>
        <div className="flex flex-col lg:w-[580px] gap-2">
          <button className="border text-left p-2 rounded-md">
            Tematik Algı Testi (TAT)
          </button>
          <button className="border text-left p-2 rounded-md">
            Beck Depresyon Envanteri (BDE)
          </button>
          <button className="border text-left p-2 rounded-md">
            Beck Anksiyete Envanteri (BAE)
          </button>
          <button className="border text-left p-2 rounded-md">
            Dikkat Eksikliği ve Hiperaktivite Bozukluğu Testi (DEHB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default work;
