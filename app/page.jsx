"use client";

import Banner from "@/components/Banner";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="container mx-auto my-20 lg:flex">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <Image src="/assets/photo1.jpg" width={900} height={900} />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-center lg:text-left lg:ml-10"
        >
          <h1 className="text-2xl mb-2 text-blue-500">
            Uzman Psikolog Öykü Özdemir
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            reiciendis distinctio earum consectetur iusto aspernatur commodi
            vitae officiis eveniet labore. Cumque commodi quas totam sit
            inventore labore. Hic, assumenda asperiores?
          </p>
          <Link href="/about">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-3xl my-4 mr-4 hover:bg-black">
              Hakkımda
            </button>
          </Link>
          <Link href="/work">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-3xl my-4 hover:bg-black">
              Alanlar & Uygulamalar
            </button>
          </Link>
        </motion.div>
      </div>
      <div className="w-full bg-blue-500 h-[200px] lg:h-[150px] flex flex-col lg:flex-row items-center justify-center text-xl gap-4">
        <button className="bg-white rounded-3xl w-[250px] px-4 py-2 text-blue-600 font-bold hover:bg-black hover:text-white">
          Koginitif Terapi
        </button>
        <button className="bg-white rounded-3xl w-[250px] px-4 py-2 text-blue-600 font-bold hover:bg-black hover:text-white">
          Danışan Hakları
        </button>
        <button className="bg-white rounded-3xl w-[250px] px-4 py-2 text-blue-600 font-bold hover:bg-black hover:text-white">
          Etik ilkeler
        </button>
      </div>
      <div className=" my-4 container mx-auto hidden lg:block">
        <h1 className="text-4xl m-12 text-purple-500 text-center">
          Danışan Yorumları
        </h1>
        <Swiper
          spaceBetween={100}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="cursor-grab"
        >
          <SwiperSlide>
            <h1 className="text-xl border-b mb-3 p-2 text-blue-500 text-center">
              1. Danışan
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              similique quibusdam praesentium tempore sequi voluptatum
              laudantium porro soluta voluptate quasi harum sapiente mollitia
              repellat numquam illum fuga, sit at non! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Quam libero repellat pariatur
              at, quae ut exercitationem fugiat sint possimus quidem enim ipsam
              accusamus, id ducimus. Reiciendis iure animi temporibus
              accusantium?
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-xl border-b mb-3 p-2 text-blue-500 text-center">
              2. Danışan
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              similique quibusdam praesentium tempore sequi voluptatum
              laudantium porro soluta voluptate quasi harum sapiente mollitia
              repellat numquam illum fuga, sit at non! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aut dignissimos adipisci
              asperiores excepturi veniam quia blanditiis nobis. Eligendi
              laborum iste atque asperiores magnam nulla, voluptatum placeat
              aliquam exercitationem est molestias.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-xl border-b mb-3 p-2 text-blue-500 text-center">
              3. Danışan
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              similique quibusdam praesentium tempore sequi voluptatum
              laudantium porro soluta voluptate quasi harum sapiente mollitia
              repellat numquam illum fuga, sit at non! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eaque, maxime. Minus, beatae
              cum odio reiciendis nesciunt maiores, molestiae qui illo
              repudiandae officiis, ad illum iure? Inventore minima numquam
              dolor dolorum.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-xl border-b mb-3 p-2 text-blue-500 text-center">
              4. Danışan
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              similique quibusdam praesentium tempore sequi voluptatum
              laudantium porro soluta voluptate quasi harum sapiente mollitia
              repellat numquam illum fuga, sit at non! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Iusto, maxime nobis non
              eligendi qui fugit error, quis cupiditate, repellat dolores
              voluptates maiores impedit illum quas mollitia a dolor labore
              facilis.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-xl border-b mb-3 p-2 text-blue-500 text-center">
              5. Danışan
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              similique quibusdam praesentium tempore sequi voluptatum
              laudantium porro soluta voluptate quasi harum sapiente mollitia
              repellat numquam illum fuga, sit at non! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Iusto, maxime nobis non
              eligendi qui fugit error, quis cupiditate, repellat dolores
              voluptates maiores impedit illum quas mollitia a dolor labore
              facilis.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="text-center my-4 container mx-auto lg:hidden">
        <h1 className="text-4xl m-12 text-purple-500">Danışan Yorumları</h1>
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="cursor-grab"
        >
          <SwiperSlide>
            <h1 className="text-xl border-b mb-3 p-2 text-blue-500 text-center">
              1. Danışan
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              similique quibusdam praesentium tempore sequi voluptatum
              laudantium porro soluta voluptate quasi harum sapiente mollitia
              repellat numquam illum fuga, sit at non! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Quam libero repellat pariatur
              at, quae ut exercitationem fugiat sint possimus quidem enim ipsam
              accusamus, id ducimus. Reiciendis iure animi temporibus
              accusantium?
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-xl border-b mb-3 p-2 text-blue-500 text-center">
              2. Danışan
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              similique quibusdam praesentium tempore sequi voluptatum
              laudantium porro soluta voluptate quasi harum sapiente mollitia
              repellat numquam illum fuga, sit at non! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aut dignissimos adipisci
              asperiores excepturi veniam quia blanditiis nobis. Eligendi
              laborum iste atque asperiores magnam nulla, voluptatum placeat
              aliquam exercitationem est molestias.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-xl border-b mb-3 p-2 text-blue-500 text-center">
              3. Danışan
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              similique quibusdam praesentium tempore sequi voluptatum
              laudantium porro soluta voluptate quasi harum sapiente mollitia
              repellat numquam illum fuga, sit at non! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eaque, maxime. Minus, beatae
              cum odio reiciendis nesciunt maiores, molestiae qui illo
              repudiandae officiis, ad illum iure? Inventore minima numquam
              dolor dolorum.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-xl border-b mb-3 p-2 text-blue-500 text-center">
              4. Danışan
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              similique quibusdam praesentium tempore sequi voluptatum
              laudantium porro soluta voluptate quasi harum sapiente mollitia
              repellat numquam illum fuga, sit at non! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Iusto, maxime nobis non
              eligendi qui fugit error, quis cupiditate, repellat dolores
              voluptates maiores impedit illum quas mollitia a dolor labore
              facilis.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-xl border-b mb-3 p-2 text-blue-500 text-center">
              5. Danışan
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              similique quibusdam praesentium tempore sequi voluptatum
              laudantium porro soluta voluptate quasi harum sapiente mollitia
              repellat numquam illum fuga, sit at non! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Iusto, maxime nobis non
              eligendi qui fugit error, quis cupiditate, repellat dolores
              voluptates maiores impedit illum quas mollitia a dolor labore
              facilis.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container mx-auto items-center flex justify-center my-20">
        <Tabs defaultValue="Psikolog Kimdir?">
          <TabsList className="gap-10 w-full flex my-32 lg:my-10">
            <TabsTrigger value="Psikolog Kimdir?">Psikolog Kimdir?</TabsTrigger>
            <TabsTrigger value="Her Psikolog Terapist Değildir!">
              Her Psikolog Terapist Değildir!
            </TabsTrigger>
            <TabsTrigger value="Psikiyatrist Kimdir?">
              Psikiyatrist Kimdir?
            </TabsTrigger>
          </TabsList>

          <TabsContent value="Psikolog Kimdir?" className="container mx-auto">
            <p>
              Üniversitelerin Fen – Edebiyat veya İktisadi, İdari ve Sosyal
              Bilimler Fakültesi Psikoloji bölümlerinden mezun olmuş kişilere
              Psikolog ünvanı verilmektedir. Lisans eğitimi süresince
              psikolojinin alt alanlarına dair temel eğitimler tamamlanmakta, bu
              bir uzmanlık oluşturmamaktadır. Psikoloji bölümleri lisans eğitimi
              süresince danışan görme, terapi teorik ve uygulama eğitimleri
              vermemektelerdir.
            </p>
          </TabsContent>
          <TabsContent
            value="Her Psikolog Terapist Değildir!"
            className="container mx-auto"
          >
            <p>
              Lisans eğitimi sonrası terapi teorik ve uygulama eğitimlerini
              tamamlayan psikologlar terapi yapabilmektedir. Ülkemizde
              psikologların meslek yasasının olmaması sebebiyle danışmanlık ve
              terapi hizmetleri suistimale açıktır. Dolayısı ile alanında uzman
              birinden terapi aldığınıza emin olmanız adına
              psikoloğunuza/terapistinize terapi eğitimlerini nereden, ne zaman
              aldığını sormanızı öneriyorum.
            </p>
          </TabsContent>
          <TabsContent
            value="Psikiyatrist Kimdir?"
            className="container mx-auto"
          >
            <p>
              Psikiyatristler üniversitelerin Tıp Fakültesi’nden mezun olduktan
              sonra uzmanlıklarını psikiyatri üzerine tamamlamış uzman
              doktorlardır. Psikiyatristler temel eğitim ve uzmanlık eğitimleri
              esnasında medikal anlamda eğitim almaktalardır. Psikiyatristler
              ayrıcı tanı yaptıktan sonra gerek görürlerse farmakolojik tedavi
              önerebilirler. Psikologların ilaç yazma, önerme, düzenleme
              yetkileri yoktur. Psikiyatristiniz dışında birinin önerisi ile
              (psikolog, psikolojik danışman, arkadaş, vb.) ilaç tedavisine
              kesinlikle başlamamalısınız.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
