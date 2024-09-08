"use client";

import Link from "next/link";

const contact = () => {
  return (
    <div>
      <div className="w-full h-[200px] bg-blue-500 items-center justify-center flex flex-col">
        <h1 className="text-white text-2xl font-semibold mb-4">İletişim</h1>
        <div className="space-x-2 text-white">
          <Link href="/">Anasayfa</Link>
          <span>/</span>
          <span>İletişim</span>
        </div>
      </div>
      <div className="text-center mt-12 mb-10">
        <h1 className="text-2xl font-bold">İletişim Formu</h1>
      </div>
      <form className="container mx-auto">
        <div className="lg:flex gap-4">
          <input
            type="text"
            placeholder="Ad Soyad"
            className="w-full h-12 outline-none border rounded-lg p-4 hover:border-blue-500 my-4"
          />
          <input
            type="text"
            placeholder="Telefon"
            className="w-full h-12 outline-none border rounded-lg p-4 hover:border-blue-500 my-4"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            className="w-full h-12 outline-none border rounded-lg p-4 hover:border-blue-500 my-4"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Konu"
            className="w-full h-12 outline-none border rounded-lg p-4 hover:border-blue-500 my-4"
          />
        </div>
        <div>
          <textarea
            rows={6}
            placeholder="Mesajınız..."
            className="w-full resize-none outline-none border rounded-lg p-4 hover:border-blue-500 my-4"
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-600 text-white font-bold text-xl py-2 px-4 my-4 mb-12 rounded-3xl w-[300px]">
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
};

export default contact;
