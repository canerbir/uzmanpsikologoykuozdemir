"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const about = () => {
  return (
    <div>
      <div className="w-full h-[200px] bg-blue-500 items-center justify-center flex flex-col">
        <h1 className="text-white text-2xl font-semibold mb-4">Hakkımda</h1>
        <div className="space-x-2 text-white">
          <Link href="/">Anasayfa</Link>
          <span>/</span>
          <span>Hakkımda</span>
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto my-20 lg:flex gap-6"
      >
        <Image
          src="/assets/photo2.jpg"
          width={400}
          height={500}
          className="mx-auto"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-semibold">
            Uzman Psikolog Öykü Özdemir
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt id
            ex alias saepe beatae labore eveniet. Nesciunt assumenda porro atque
            amet dolore perspiciatis ea explicabo, enim laudantium nulla, vel
            ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quod iure soluta totam quos, reprehenderit pariatur molestias fugit,
            voluptate vero possimus labore consequatur sunt, eius minus fugiat
            sequi neque dolorem libero? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt id ex alias saepe beatae labore eveniet.
            Nesciunt assumenda porro atque amet dolore perspiciatis ea
            explicabo, enim laudantium nulla, vel ducimus. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quod iure soluta totam quos,
            reprehenderit pariatur molestias fugit, voluptate vero possimus
            labore consequatur sunt, eius minus fugiat sequi neque dolorem
            libero? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Incidunt id ex alias saepe beatae labore eveniet. Nesciunt assumenda
            porro atque amet dolore perspiciatis ea explicabo, enim laudantium
            nulla, vel ducimus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quod iure soluta totam quos, reprehenderit
            pariatur molestias fugit, voluptate vero possimus labore consequatur
            sunt, eius minus fugiat sequi neque dolorem libero?
          </p>
        </div>
      </motion.div>
      <div className="container mx-auto">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum vel
          quod obcaecati illum rem fugiat debitis, modi optio? Expedita
          doloremque adipisci laborum omnis sit? Doloremque recusandae itaque
          perferendis eum cumque! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Ipsum vel quod obcaecati illum rem fugiat debitis,
          modi optio? Expedita doloremque adipisci laborum omnis sit? Doloremque
          recusandae itaque perferendis eum cumque!
        </p>
      </div>
    </div>
  );
};

export default about;
