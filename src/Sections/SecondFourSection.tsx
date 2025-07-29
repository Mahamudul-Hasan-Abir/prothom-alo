import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Film from "../../public/assets/frontpageimages/film.png";
import Mosque from "../../public/assets/frontpageimages/mosque.png";
import Nature from "../../public/assets/frontpageimages/nature.png";
import Family from "../../public/assets/frontpageimages/family.png";
const SecondFourSection = () => {
  return (
    <div className="mt-20 grid grid-cols-4 gap-7">
      <div className="col-span-1">
        <div className="  flex items-center gap-2 border-t-4 pt-4 border-gray-400">
          <p className="font-semibold text-2xl">অন্য আলো</p>
          <ChevronRight className="size-8 text-red-700"></ChevronRight>
        </div>
        <div className="h-[191px] w-full relative mt-7">
          <Image src={Film} alt="image" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-xl font-semibold pb-4 border-b">
            স্ট্যানলি কুবরিকের দর্শন ও অস্তিত্বের সিনেফ্রেম
          </h2>
          <p className="text-gray-700 text-lg pb-4 border-b">
            {" "}
            স্কুল পালানো ছেলেগুলো
          </p>
          <p className="text-gray-700 text-lg pb-4 "> এক মগ কফি</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="  flex items-center gap-2 border-t-4 pt-4 border-gray-400">
          <p className="font-semibold text-2xl">দূর পরবাস</p>
          <ChevronRight className="size-8 text-red-700"></ChevronRight>
        </div>
        <div className="h-[191px] w-full relative mt-7">
          <Image src={Mosque} alt="image" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-xl font-semibold pb-4 border-b">
            আলহামরা: স্পেনে মুসলিম সভ্যতার নিদর্শন-শেষ পর্ব
          </h2>
          <p className="text-gray-700 text-lg pb-4 border-b"> চলো হাঁটি-২</p>
          <p className="text-gray-700 text-lg pb-4 ">
            {" "}
            আলহামরা: স্পেনে মুসলিম সভ্যতার নিদর্শন–১
          </p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="  flex items-center gap-2 border-t-4 pt-4 border-gray-400">
          <p className="font-semibold text-2xl">নাগরিক সংবাদ</p>
          <ChevronRight className="size-8 text-red-700"></ChevronRight>
        </div>
        <div className="h-[191px] w-full relative mt-7">
          <Image src={Nature} alt="image" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-xl font-semibold pb-4 border-b">
            পাঠকের ছবি (২৬ জুলাই ২০২৫)
          </h2>
          <p className="text-gray-700 text-lg pb-4 border-b"> পাখির কান্না</p>
          <p className="text-gray-700 text-lg pb-4">
            {" "}
            সাগর থেকে পাহাড় পর্যন্ত পর্যটনই কি কক্সবাজারের শেষ ঘণ্টা
          </p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="  flex items-center gap-2 border-t-4 pt-4 border-gray-400">
          <p className="font-semibold text-2xl">ধর্ম</p>
          <ChevronRight className="size-8 text-red-700"></ChevronRight>
        </div>
        <div className="h-[191px] w-full relative mt-7">
          <Image src={Family} alt="image" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-xl font-semibold pb-4 border-b">
            ফকিহদের দৃষ্টিতে নারী-পুরুষের মধ্যকার প্রেম–ভালোবাসা
          </h2>
          <p className="text-gray-700 text-lg pb-4 border-b">
            {" "}
            ভাইয়ের সাহায্যে ভাই
          </p>
          <p className="text-gray-700 text-lg pb-4 ">
            {" "}
            কাগজের মুদ্রার বিষয়ে ইসলামের দৃষ্টিভঙ্গি
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondFourSection;
