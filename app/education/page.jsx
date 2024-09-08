"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const page = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-full h-[200px] bg-blue-500 items-center justify-center flex flex-col">
        <h1 className="text-white text-2xl font-semibold mb-4">Eğitim</h1>
        <div className="space-x-2 text-white">
          <Link href="/">Anasayfa</Link>
          <span>/</span>
          <span>Eğitim</span>
        </div>
      </div>
      <div className="container mx-auto grid lg:grid-cols-2 justify-center items-center text-center">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-[600px] h-[400px]"
        >
          <Image src="/assets/photo3.jpg" width={600} height={400} />
          <h1 className="capitalize mt-8">
            yetişkinlerde klinik ilk görüşme becerileri geliştirme workshop
          </h1>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          viewport={{ once: false, amount: 0.7 }}
          className="ml-10"
        >
          <Image src="/assets/photo4.jpg" width={500} height={300} />
          <h1 className="capitalize">
            yetişkinlerde klinik ilk görüşme teknikleri
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
