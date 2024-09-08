"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaUser, FaRegCalendarAlt, FaPhoneAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-full h-[400px] xl:w-full xl:h-[600px] flex text-center justify-center items-center"
        >
          <Image
            src="/assets/banner.png"
            priority
            quality={100}
            fill
            alt=""
            className="-z-50"
          />
          <div className="bg-white/60 p-4 rounded-lg lg:hover:scale-125 transition-all duration-500">
            <h1 className="capitalize text-blue-600 text-4xl lg:text-6xl">
              uzman psikolog öykü özdemir
            </h1>
            <div className="lg:flex mx-auto gap-6 items-center justify-center my-12">
              <div>
                <Button className="w-[150px] my-4">
                  <FaUser className="mr-1" />
                  Hakkımda
                </Button>
              </div>
              <div>
                <Button className="w-[150px] my-4">
                  <FaRegCalendarAlt className="mr-1" />
                  Randevu
                </Button>
              </div>
              <div>
                <Button className="w-[150px] my-4">
                  <FaPhoneAlt className="mr-1" />
                  İletişim
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Banner;
