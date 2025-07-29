import Image from "next/image";
import image from "../../public/assets/frontpageimages/prothomalo-bangla_2025-07-25_hi6ji02o_Biman-1.png";
const LeftSectionMain = () => {
  return (
    <div className="grid grid-cols-12 border-b pb-2">
      <div className="col-span-8 ">
        <p className="text-lg font-semibold">
          বিমান বিধ্বস্তের স্থান দেখতে উৎসুক জনতার ভিড়
        </p>
      </div>

      <div className="col-span-4 h-16 ">
        <div className="h-16 w-full relative">
          <Image
            src={image}
            alt="normal image"
            fill
            className="object-cover"
          ></Image>
        </div>
      </div>
      <p className="text-gray-500 col-span-12 text-sm">
        গত সোমবার বেলা সোয়া একটার দিকে কলেজের একটি ভবনে বিমানবাহিনীর একটি
        যুদ্ধবিমান বিধ্বস্ত হয়। এতে হতাহতের ঘটনা ঘটে।
      </p>

      <p className="text-gray-500 col-span-12 text-xs mt-5">১ ঘণ্টা আগে</p>
    </div>
  );
};

export default LeftSectionMain;
