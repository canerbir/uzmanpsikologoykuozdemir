"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="w-full lg:h-[300px] bg-purple-500 items-center justify-center flex text-white">
        <div className="container mx-auto flex lg:flex-row flex-col mt-4 lg:gap-36 justify-center">
          <div className="max-w-[600px] text-center">
            <h1 className="text-4xl">Öykü Özdemir</h1>
            <span>Uzman Psikolog</span>
            <div className="flex gap-10 items-center justify-center my-10">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
          <div className="max-w-[700px]">
            <div>
              <h1 className="text-2xl font-bold">
                Uzman Psikolog Öykü Özdemir
              </h1>
              <p>
                Uzman Psikolog Öykü Özdemir ile etik ilkeler kapsamında
                Ankara’da yüz yüze ve dünyanın herhangi bir yerinden online
                olarak görüşebilirsiniz. You can also have psychotherapy
                sessions in English
              </p>
            </div>
            <div className="flex justify-between">
              <div className="my-8">
                <h1 className="flex items-center font-bold">
                  <FaLocationDot className="mr-2 w-4 h-4" />
                  ADRES
                </h1>
                <span>Ankara</span>
              </div>
              <div className="my-8">
                <h1 className="flex items-center font-bold">
                  <FaPhoneAlt className="mr-2 w-4 h-4" />
                  TELEFON
                </h1>
                <span>0555 555 55 55</span>
              </div>
              <div className="my-8">
                <h1 className="flex items-center font-bold">
                  <IoIosMail className="mr-2 w-6 h-6" />
                  E-POSTA
                </h1>
                <span>oykuozdemir@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mx-auto bg-purple-700 w-full h-[50px] justify-center items-center">
        <div className="container text-center text-white">
          <span>© 2024 Öykü Özdemir | Tüm Hakları Saklıdır.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
