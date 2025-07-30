"use client";

import HallRoom from "../../../public/assets/frontpageimages/hallroom.png";

import Rain from "../../../public/assets/frontpageimages/rain.png";
import Srom from "../../../public/assets/frontpageimages/srom.png";
import Ashami from "../../../public/assets/frontpageimages/Ashami2.png";

import Image from "next/image";
import { ChevronRight, CirclePlus, ChevronDown, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Pachar from "../../../public/assets/frontpageimages/pachar.png";

const BangladeshPhone = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2 border-t-4 pt-4 border-gray-400">
        <p className="font-semibold text-2xl">বাংলাদেশ</p>
        <ChevronRight className="size-8 text-red-700"></ChevronRight>
      </div>
      <div className="bg-[#e3f2fd]  p-6">
        <div className="flex items-center gap-2 w-full mt-5">
          <CirclePlus className="text-red-500"></CirclePlus>
          <p className="text-lg">আমার এলাকার খবর</p>
        </div>
        <div className="flex flex-col items-center gap-2 w-full mt-5 ">
          <div className="flex flex-col gap-8 w-full ">
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
      </div>
      <div className="mt-5">
        <div className="h-[260px] md:h-[490px] w-full relative">
          <Image
            src={Pachar}
            alt="Pachar Kari"
            fill
            loading="lazy"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          ></Image>
        </div>
        <h2 className="font-semibold text-xl mt-5">
          {" "}
          বিমানবন্দরের কর্মচারী খুনের মামলায় এক আসামির রিমান্ড
        </h2>
        <p className="text-gray-500 mt-3">
          বিমানবন্দরসংলগ্ন সরকারি কোয়ার্টারের বাসায় থাকতেন উসমান সিকদার। গত
          বছরের ১২ ডিসেম্বর রাতে তাঁকে বাসা থেকে তুলে নিয়ে যাওয়া হয় এবং পরদিন
          লাশ পাওয়া যায়।
        </p>
        <p className="text-gray-500 text-sm mt-3">১৫ মিনিট আগে</p>
      </div>
      <div className="mt-5">
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-12 mt-5 pt-3 border-t">
            <div className="col-span-8">
              <h2 className="text-lg font-semibold">
                {" "}
                জুলাই সনদের খসড়া গ্রহণ করতে পারি না: এনসিপি
              </h2>

              <p className="text-gray-500 col-span-12 text-xs mt-5">
                ৩৪ মিনিট আগে
              </p>
            </div>
            <div className="col-span-4">
              <div className="h-[176px] w-full relative">
                <Image
                  src={HallRoom}
                  alt="NCP MEETING"
                  className="object-cover"
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                ></Image>
              </div>
            </div>
          </div>
        </div>

        {/* Phone Content (below md) */}
        <div className="block md:hidden">
          <div className="grid grid-cols-12 pt-3 border-t">
            <div className="col-span-8">
              <h2 className="text-lg font-semibold">
                {" "}
                জুলাই সনদের খসড়া গ্রহণ করতে পারি না: এনসিপি
              </h2>
            </div>
            <div className="col-span-4">
              <div className="h-[94px] w-full relative">
                <Image
                  src={HallRoom}
                  alt="NCP MEETING"
                  className="object-cover"
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                ></Image>
              </div>
            </div>

            <p className="text-gray-500 col-span-12 text-xs mt-5">
              ৩৪ মিনিট আগে
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-12 mt-5 pt-3 border-t">
            <div className="col-span-8">
              <h2 className="text-lg font-semibold">
                {" "}
                রাজশাহীতে দিনভর বৃষ্টিতে ভোগান্তি
              </h2>

              <p className="text-gray-500 col-span-12 text-xs mt-5">
                ৩৯ মিনিট আগে
              </p>
            </div>
            <div className="col-span-4">
              <div className="h-[176px] w-full relative">
                <Image
                  src={Rain}
                  alt="NCP MEETING"
                  className="object-cover"
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                ></Image>
              </div>
            </div>
          </div>
        </div>

        {/* Phone Content (below md) */}
        <div className="block md:hidden">
          <div className="grid grid-cols-12 pt-3 border-t">
            <div className="col-span-8">
              <h2 className="text-lg font-semibold">
                {" "}
                রাজশাহীতে দিনভর বৃষ্টিতে ভোগান্তি
              </h2>
            </div>
            <div className="col-span-4">
              <div className="h-[94px] w-full relative">
                <Image
                  src={Rain}
                  alt="NCP MEETING"
                  className="object-cover"
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                ></Image>
              </div>
            </div>

            <p className="text-gray-500 col-span-12 text-xs mt-5">
              ৩৯ মিনিট আগে
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-12 mt-5 pt-3 border-t">
            <div className="col-span-8">
              <h2 className="text-lg font-semibold">
                {" "}
                গাজীপুরে বকেয়া বেতন ও কারখানা চালুর দাবিতে ঢাকায় শ্রমিকদের ‘ভুখা
                মিছিল’
              </h2>

              <p className="text-gray-500 col-span-12 text-xs mt-5">
                ১ ঘণ্টা আগে
              </p>
            </div>
            <div className="col-span-4">
              <div className="h-[176px] w-full relative">
                <Image
                  src={Srom}
                  alt="NCP MEETING"
                  className="object-cover"
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                ></Image>
              </div>
            </div>
          </div>
        </div>

        {/* Phone Content (below md) */}
        <div className="block md:hidden">
          <div className="grid grid-cols-12 pt-3 border-t">
            <div className="col-span-8">
              <h2 className="text-lg font-semibold">
                {" "}
                গাজীপুরে বকেয়া বেতন ও কারখানা চালুর দাবিতে ঢাকায় শ্রমিকদের ‘ভুখা
                মিছিল’
              </h2>
            </div>
            <div className="col-span-4">
              <div className="h-[94px] w-full relative">
                <Image
                  src={Srom}
                  alt="NCP MEETING"
                  className="object-cover"
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                ></Image>
              </div>
            </div>

            <p className="text-gray-500 col-span-12 text-xs mt-5">
              ৩৪ মিনিট আগে
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-12 mt-5 pt-3 border-t">
            <div className="col-span-8">
              <h2 className="text-lg font-semibold">
                {" "}
                আসামি শতবর্ষী ইদ্রিস শেখের আদালতে হাজিরা ও প্রিজন ভ্যানে যাত্রা
              </h2>

              <p className="text-gray-500 col-span-12 text-xs mt-5">
                ১ ঘণ্টা আগে
              </p>
            </div>
            <div className="col-span-4">
              <div className="h-[176px] w-full relative">
                <Image
                  src={Ashami}
                  alt="NCP MEETING"
                  className="object-cover"
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                ></Image>
              </div>
            </div>
          </div>
        </div>

        {/* Phone Content (below md) */}
        <div className="block md:hidden">
          <div className="grid grid-cols-12 pt-3 border-t">
            <div className="col-span-8">
              <h2 className="text-lg font-semibold">
                {" "}
                আসামি শতবর্ষী ইদ্রিস শেখের আদালতে হাজিরা ও প্রিজন ভ্যানে যাত্রা
              </h2>
            </div>
            <div className="col-span-4">
              <div className="h-[94px] w-full relative">
                <Image
                  src={Ashami}
                  alt="NCP MEETING"
                  className="object-cover"
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                ></Image>
              </div>
            </div>

            <p className="text-gray-500 col-span-12 text-xs mt-5">
              ১ ঘণ্টা আগে
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BangladeshPhone;
