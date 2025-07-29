import { ChevronRight } from "lucide-react";
import Gill from "../../public/assets/frontpageimages/gill.png";
import BDCric from "../../public/assets/frontpageimages/bd-cric.png";
import Naymar from "../../public/assets/frontpageimages/naymar.png";
import ACC from "../../public/assets/frontpageimages/acc.png";
import Pitarson from "../../public/assets/frontpageimages/pitarson.png";
import Africa from "../../public/assets/frontpageimages/africa.png";
import Image from "next/image";
const Sports = () => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-12">
        <div className="col-span-3 border-r border-gray-400 pr-5">
          <div className="flex items-center gap-2 border-t-4 pt-4 border-gray-400"></div>
          <div className="pb-3 border-b">
            <div className="flex justify-between items-center  border-gray-400 mx-5">
              <p className="text-lg font-semibold border-b-2 border-red-500">
                পঠিত
              </p>
              <p className="text-lg font-semibold hover:border-b-2 border-red-500">
                আলোচিত
              </p>
              <p className="text-lg font-semibold hover:border-b-2 border-red-500">
                সুখবর
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-2">
              <p className="text-6xl text-gray-400">১</p>
            </div>
            <div className="col-span-12 mt-5 pb-5 border-b">
              <h2 className="text-lg font-semibold ">
                {" "}
                থাইল্যান্ডে রাশিয়ার তৈরি ‘বিএম-২১’ দিয়ে হামলা চালাচ্ছে
                কম্বোডিয়া, ছড়িয়ে পড়ছে সংঘাত
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-2">
              <p className="text-6xl text-gray-400">২</p>
            </div>
            <div className="col-span-12 mt-5 pb-5 border-b">
              <h2 className="text-lg font-semibold ">
                {" "}
                সাত দিনে আয় ২৭৮ কোটি টাকা
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-2">
              <p className="text-6xl text-gray-400">৩</p>
            </div>
            <div className="col-span-12 mt-5 pb-5 border-b">
              <h2 className="text-lg font-semibold ">
                {" "}
                পাশাপাশি তিন শিশুর কবর, কাঁদাচ্ছে সবাইকে
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-2">
              <p className="text-6xl text-gray-400">৪</p>
            </div>
            <div className="col-span-12 mt-5 pb-5 border-b">
              <h2 className="text-lg font-semibold ">
                <span className="text-red-500">স্কুলে যুদ্ধবিমান বিধ্বস্ত</span>
                <span className="mx-2 text-lg text-gray-400 font-bold select-none">
                  •
                </span>{" "}
                সংকটাপন্ন পাঁচজন, নিহত বেড়ে ৩৩
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-2">
              <p className="text-6xl text-gray-400">৫</p>
            </div>
            <div className="col-span-12 mt-5 pb-5 border-b">
              <h2 className="text-lg font-semibold ">
                <span className="text-red-500"> আসকের সরেজমিন প্রতিবেদন</span>
                <span className="mx-2 text-lg text-gray-400 font-bold select-none">
                  •
                </span>{" "}
                গোপালগঞ্জে সহিংসতার ঘটনায় ‘গুরুতর মানবাধিকার লঙ্ঘন হয়েছে’
              </h2>
            </div>
          </div>
        </div>
        <div className="col-span-9 pl-5 ">
          <div className="flex items-center gap-2 border-t-4 pt-4 border-gray-400">
            <div className="flex items-center">
              <span className="mx-2 mb-2 text-blue-500 font-bold select-none text-7xl">
                •
              </span>{" "}
              <p className="font-semibold text-2xl">খেলা</p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-8 pr-5 border-gray-400 border-r">
              <div className="h-[386px] w-full relative ">
                <Image
                  src={Gill}
                  alt="sad"
                  fill
                  className="object-cover pb-3 border-b border-gray-400"
                ></Image>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-5">
                <div className="col-span-1 pr-2 border-r">
                  <div className="h-[182px] w-full relative">
                    <Image
                      src={BDCric}
                      alt="sad"
                      fill
                      className="object-cover"
                    ></Image>
                  </div>
                  <h2 className="text-lg font-semibold">
                    {" "}
                    রোমাঞ্চকর জয় শেষে যুবাদের খুনসুটি, ছুটির আমেজে ফুটবল তারকারা
                  </h2>
                  <p className="text-sm text-gray-400 mt-3">১ ঘণ্টা আগে</p>
                </div>
                <div className="col-span-1 ">
                  <div className="h-[182px] w-full relative">
                    <Image
                      src={Naymar}
                      alt="sad"
                      fill
                      className="object-cover"
                    ></Image>
                  </div>
                  <h2 className="text-lg font-semibold">
                    {" "}
                    নেইমারের সঙ্গে ঝামেলা: সেই ভক্ত মাফ চাইলেও তাঁর বিরুদ্ধে
                    পুলিশে অভিযোগ সান্তোসের
                  </h2>
                  <p className="text-sm text-gray-400 mt-3">১ ঘণ্টা আগে</p>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="h-[250px] w-full bg-gray-100"></div>
              <div className="grid grid-cols-12 mt-5 border-t pt-2">
                <div className="col-span-7">
                  <p className="text-lg font-semibold">
                    ৬ বলে ৭ রান নিতে পারল না দক্ষিণ আফ্রিকা, চ্যাম্পিয়ন
                    নিউজিল্যান্ড
                  </p>
                </div>
                <div className="col-span-5">
                  <div className="h-20  w-full relative">
                    <Image src={Africa} fill alt="scetch"></Image>
                  </div>
                </div>

                <p className="text-gray-500 col-span-12 text-xs mt-5">
                  ২ ঘণ্টা আগে
                </p>
              </div>
              <div className="grid grid-cols-12 mt-5 border-t pt-2">
                <div className="col-span-7">
                  <p className="text-lg font-semibold">
                    বিতর্ক উসকে দিলেন পিটারসেন: এখন ব্যাটিং ‘সহজ’, আগে ছিল
                    ‘কঠিন’
                  </p>
                </div>
                <div className="col-span-5">
                  <div className="h-20  w-full relative">
                    <Image src={Pitarson} fill alt="scetch"></Image>
                  </div>
                </div>

                <p className="text-gray-500 col-span-12 text-xs mt-5">
                  ৩ ঘণ্টা আগে
                </p>
              </div>
              <div className="grid grid-cols-12 mt-5 border-t pt-2">
                <div className="col-span-7">
                  <p className="text-lg font-semibold">
                    এশিয়া কাপে বাংলাদেশ কোন গ্রুপে, কবে ম্যাচ: দেখুন পূর্ণাঙ্গ
                    সূচি
                  </p>
                </div>
                <div className="col-span-5">
                  <div className="h-20  w-full relative">
                    <Image src={ACC} fill alt="scetch"></Image>
                  </div>
                </div>

                <p className="text-gray-500 col-span-12 text-xs mt-5">
                  ৩ ঘণ্টা আগে
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
