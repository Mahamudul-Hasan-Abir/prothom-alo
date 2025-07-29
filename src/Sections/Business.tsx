import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Man from "../../public/assets/frontpageimages/man-1.png";
import Fokrul from "../../public/assets/frontpageimages/fokrul.png";
import Global from "../../public/assets/frontpageimages/global.png";
import Bank from "../../public/assets/frontpageimages/bank.png";
import BDMap from "../../public/assets/frontpageimages/bd-map.png";
import BigImage from "../../public/assets/frontpageimages/BigImage.png";
const Business = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center gap-2 border-t-4 pt-4 border-gray-400">
        <p className="font-semibold text-2xl">বাণিজ্য</p>
        <ChevronRight className="size-8 text-red-700"></ChevronRight>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-5 ">
          <div className="h-80 w-full relative">
            <Image src={Man} alt="image" fill className="object-cover" />
          </div>
          <h2 className="text-2xl font-semibold">
            {" "}
            বন্দরের বাড়তি মাশুল ভোক্তার পকেট থেকেই যাবে
          </h2>
          <p className="mt-8 text-gray-500">
            চট্টগ্রাম বন্দরের সেবা খাতের মাশুল বাড়ানোর প্রক্রিয়া প্রায় চূড়ান্ত
            করেছে সরকার। অর্থ মন্ত্রণালয়ের অনুমোদনের পর এখন গেজেট প্রকাশের
            অপেক্ষা।
          </p>
          <p className="text-gray-500 col-span-12 text-xs mt-3">২ ঘণ্টা আগে</p>
        </div>
        <div className="col-span-7 ">
          <div className="grid grid-cols-2 gap-2 border-b-2 pb-2">
            <div className="col-span-1 pr-2 border-r border-gray-300">
              <div className="h-[222px] w-full relative">
                <Image
                  src={Fokrul}
                  alt="trump"
                  fill
                  className="object-cover"
                ></Image>
              </div>
              <h2 className="text-lg font-semibold">
                {" "}
                আগে ঘুষ দিতে হতো ১ লাখ টাকা, এখন দিতে হয় ৫ লাখ: মির্জা ফখরুল
              </h2>
              <p className="text-gray-500 col-span-12 text-xs mt-3">
                ৩ ঘণ্টা আগে
              </p>
            </div>
            <div className="col-span-1">
              <div className="h-[222px] w-full relative">
                <Image
                  src={Global}
                  alt="trump"
                  fill
                  className="object-cover"
                ></Image>
              </div>
              <h2 className="text-lg font-semibold">
                {" "}
                রাজনৈতিক স্থিতিশীলতা নিশ্চিত হলে আগামী এক বছরে প্রবৃদ্ধি বাড়বে:
                এসঅ্যান্ডপি
              </h2>
              <p className="text-gray-500 col-span-12 text-xs mt-3">
                ৪ ঘণ্টা আগে
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-5">
            <div className="col-span-1 pr-2 border-r border-gray-300">
              <div className="h-[222px] w-full relative">
                <Image
                  src={Bank}
                  alt="trump"
                  fill
                  className="object-cover"
                ></Image>
              </div>
              <h2 className="text-lg font-semibold">
                {" "}
                পাল্টা শুল্কের প্রভাবে এ বছর বাংলাদেশের জিডিপি প্রবৃদ্ধি কমতে
                পারে, এডিবির পূর্বাভাস
              </h2>
              <p className="text-gray-500 col-span-12 text-xs mt-3">
                ৫ ঘণ্টা আগে
              </p>
            </div>
            <div className="col-span-1">
              <div className="h-[222px] w-full relative">
                <Image
                  src={BDMap}
                  alt="trump"
                  fill
                  className="object-cover"
                ></Image>
              </div>
              <h2 className="text-lg font-semibold">
                {" "}
                কমছে এজেন্ট আউটলেট, ঋণের গতিও কম
              </h2>
              <p className="text-gray-500 col-span-12 text-xs mt-3">
                ৭ ঘণ্টা আগে
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        <div className="h-[500px] w-full relative">
          <Image src={BigImage} alt="image" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Business;
