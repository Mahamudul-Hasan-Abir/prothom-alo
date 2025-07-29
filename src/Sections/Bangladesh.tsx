import { ChevronRight, CirclePlus, ChevronDown, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Blur from "../../public/assets/frontpageimages/blur.png";
import Black from "../../public/assets/frontpageimages/Black.png";
import Handculf from "../../public/assets/frontpageimages/handculf.png";
import Plastic from "../../public/assets/frontpageimages/plastic.png";
import July from "../../public/assets/frontpageimages/july.png";
import Pilot from "../../public/assets/frontpageimages/pilot.png";
import Image from "next/image";
const Bangladesh = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center gap-2 border-t-4 pt-4 border-gray-400">
        <p className="font-semibold text-2xl">বাংলাদেশ</p>
        <ChevronRight className="size-8 text-red-700"></ChevronRight>
      </div>
      <div className="flex items-center gap-2 w-full p-6 mt-5 bg-[#e3f2fd]">
        <div className="flex items-center gap-2 w-1/4">
          <CirclePlus className="text-red-500"></CirclePlus>
          <p className="text-lg">আমার এলাকার খবর</p>
        </div>
        <div className="flex items-center justify-between gap-8 w-full ">
          <div className="w-full">
            <DropdownMenu>
              <DropdownMenuTrigger className="border border-gray-300 px-4 py-4 rounded flex items-center justify-between w-full">
                <span>বিভাগ</span>
                <ChevronDown className="size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>ঢাকা বিভাগ</DropdownMenuItem>
                <DropdownMenuItem>চট্টগ্রাম বিভাগ</DropdownMenuItem>
                <DropdownMenuItem>রাজশাহী বিভাগ</DropdownMenuItem>
                <DropdownMenuItem>খুলনা বিভাগ</DropdownMenuItem>
                <DropdownMenuItem>বরিশাল বিভাগ</DropdownMenuItem>
                <DropdownMenuItem>সিলেট বিভাগ</DropdownMenuItem>
                <DropdownMenuItem>রংপুর বিভাগ</DropdownMenuItem>
                <DropdownMenuItem>ময়মনসিংহ বিভাগ</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="w-full">
            <DropdownMenu>
              <DropdownMenuTrigger className="border border-gray-300 px-4 py-4 rounded flex items-center justify-between w-full">
                <span>জেলা</span>
                <ChevronDown className="size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>জেলা</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="w-full">
            <DropdownMenu>
              <DropdownMenuTrigger className="border border-gray-300 px-4 py-4 rounded flex items-center justify-between w-full">
                <span>উপজেলা</span>
                <ChevronDown className="size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>উপজেলা</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <button className="bg-[#0f47a1] text-white px-6 py-4 rounded flex items-center gap-2">
            <Search className="size-6" />
            <span>খুঁজুন</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-2 mt-5">
        <div className="col-span-4  ">
          <div>
            <div className="w-full h-80 relative">
              <Image
                src={Blur}
                alt="bangladesh"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-xl mt-2">
                {" "}
                ‘জয় বাংলা’ স্লোগান দিয়ে ভিডিও বানানো ১২ তরুণের নামে মামলা
              </h3>
              <p className="text-gray-500 text-sm mt-3">
                গ্রেপ্তার তরুণেরা একটি ফেসবুক পেজ চালান। ওই পেজে বিভিন্ন ভিডিও
                আপলোড করেন তাঁরা।
              </p>

              <p className="text-gray-400 text-xs mt-3">১৫ মিনিট আগে</p>
            </div>
          </div>
        </div>
        <div className="col-span-5   border-l-2 border-r-2 px-3">
          <div className="grid grid-cols-12 col-span-1 pr-3 border-b pb-4">
            <div className="col-span-8 ">
              <p className="text-lg font-semibold">
                চিকিৎসা শেষে বার্ন ইনস্টিটিউট থেকে দুজন শিক্ষার্থী আজ ছুটি
                পাচ্ছে
              </p>
              <p className="text-gray-500 text-sm">
                যারা হাসপাতাল থেকে ছুটি পাচ্ছে তাদের একজনের নাম রাফসি। অন্য জনের
                নাম আয়ান। এদের দুজনের বয়স ১২ বছর।
              </p>
            </div>
            <div className="col-span-4">
              <div className="h-28 w-full relative">
                <Image
                  src={Plastic}
                  fill
                  alt="scetch"
                  className="object-cover"
                ></Image>
              </div>
            </div>

            <p className="text-gray-500 col-span-12 text-xs mt-5">
              ২৭ মিনিট আগে
            </p>
          </div>
          {/* 2nd section */}
          <div className="grid grid-cols-12 col-span-1 pr-3 border-b mt-3 pb-3">
            <div className="col-span-8 ">
              <p className="text-lg font-semibold">
                মাহতাব বলেছিল, ‘আব্বু তোমরা চিন্তা করো না, আমি ঠিক হয়ে যাব’
              </p>
              <p className="text-gray-500 text-sm">
                পুলিশ ও স্থানীয় বাসিন্দাদের সূত্র বলছে, পার্বত্য চট্টগ্রাম
                জনসংহতি সমিতি (জেএসএস) ও
              </p>
            </div>
            <div className="col-span-4">
              <div className="h-28 w-full relative">
                <Image
                  src={Black}
                  fill
                  alt="scetch"
                  className="object-cover"
                ></Image>
              </div>
            </div>
            <div className="col-span-12">
              <p className="text-gray-500 text-sm">
                ইউনাইটেড পিপলস ডেমোক্রেটিক ফ্রন্টের (ইউপিডিএফ) মধ্যে এই
                গোলাগুলির ঘটনা ঘটে।
              </p>
            </div>
            <p className="text-gray-500 col-span-12 text-xs mt-5">
              ২৭ মিনিট আগে
            </p>
          </div>
          {/* 3nd section */}
          <div className="grid grid-cols-12 col-span-1 pr-3  mt-3 pb-3">
            <div className="col-span-8 ">
              <p className="text-lg font-semibold">
                ক্ষমতা বদলেছে, মানুষ তো বদলায়নি
              </p>
              <p className="text-gray-500 text-sm">
                অভ্যুত্থানের এক বছরে অনেক কিছুর পরিবর্তন ঘটেছে। তাতে ভালো আর
                মন্দ দুটোই আছে। তবে আমরা আরও ভালো আশা করেছি, আরও ভালো দেখতেও
                চাই।
              </p>
            </div>
            <div className="col-span-4">
              <div className="h-28 w-full relative">
                <Image
                  src={Handculf}
                  fill
                  alt="scetch"
                  className="object-cover"
                ></Image>
              </div>
            </div>
            <p className="text-gray-500 col-span-12 text-xs mt-2">
              ২৭ মিনিট আগে
            </p>
          </div>
        </div>
        <div className="col-span-3 ">
          <div className="grid grid-cols-12 mt-5  border-b pb-2">
            <div className="col-span-8">
              <p className="text-lg font-semibold">
                আসামির কাঠগড়ায় সাবেক প্রধান বিচারপতি খায়রুল হকের ৪০ মিনিট
              </p>
            </div>
            <div className="col-span-4">
              <div className="h-20 w-full relative">
                <Image
                  src={July}
                  fill
                  alt="scetch"
                  className="object-cover"
                ></Image>
              </div>
            </div>

            <p className="text-gray-500 col-span-12 text-xs mt-5">
              ১৫ ঘণ্টা আগে
            </p>
          </div>
          <div className="grid grid-cols-12 mt-5 ">
            <div className="col-span-8">
              <p className="text-lg font-semibold">
                নিরপরাধ কেউ যাতে হয়রানি না হন, সে জন্য মামলার তদন্তে সময় লাগছে:
                স্বরাষ্ট্র উপদেষ্টা
              </p>
            </div>
            <div className="col-span-4">
              <div className="h-20 w-full relative">
                <Image
                  src={Pilot}
                  fill
                  alt="scetch"
                  className="object-cover"
                ></Image>
              </div>
            </div>

            <p className="text-gray-500 col-span-12 text-xs mt-5">
              ১৫ ঘণ্টা আগে
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bangladesh;
