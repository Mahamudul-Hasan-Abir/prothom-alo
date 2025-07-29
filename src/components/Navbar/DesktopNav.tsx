"use client";

import React, { useState } from "react";
import Container from "../Container/Container";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import Image1 from "../../../public/assets/nav 3 image/1.png";
import Image2 from "../../../public/assets/nav 3 image/2.png";
import Image3 from "../../../public/assets/nav 3 image/3.png";
import {
  Camera,
  CirclePlay,
  Dock,
  Globe,
  Menu,
  Search,
  User,
} from "lucide-react";

const DesktopNav = () => {
  return (
    <div>
      <div className="border-b border-gray-300">
        <Container>
          <div className=" h-28 w-full flex justify-between items-center ">
            <div className="relative h-20 w-72">
              <Image
                src={logo}
                alt="App logo"
                fill
                className="object-contain"
              ></Image>
            </div>
            <div className="flex gap-2">
              {/* top image section 1 */}
              <div className="flex gap-2 border-r border-gray-300 pr-2">
                <div className="relative h-16 w-16">
                  <Image src={Image1} alt="App logo" fill></Image>
                </div>
                <div className="flex gap-2">
                  <Camera className="size-4 text-red-500 mt-[2px]"></Camera>
                  <p className="text-sm">মশকনিধন</p>
                </div>
              </div>
              {/* top image section 1 */}
              <div className="flex gap-2 border-r border-gray-300 pr-2">
                <div className="relative h-16 w-16">
                  <Image src={Image2} alt="App logo" fill></Image>
                </div>
                <div className="flex gap-2">
                  <CirclePlay className="size-4 text-red-500 mt-[2px]"></CirclePlay>
                  <p>
                    বিধ্বস্ত হওয়া বিমানের <br /> পাইলটের সঙ্গে শেষ যে কথা
                    হয়েছিল
                  </p>
                </div>
              </div>
              {/* top image section 1 */}
              <div className="flex gap-2 ">
                <div className="relative h-16 w-16">
                  <Image src={Image3} alt="App logo" fill></Image>
                </div>
                <div className="flex gap-2">
                  <CirclePlay className="size-4 text-red-500 mt-[2px]"></CirclePlay>
                  <p>
                    ‘গ্রিল ভেঙে স্টুডেন্টদের বের <br /> করেছি, ততক্ষণে আগুন চলে
                    এসেছে’
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="border-b-2 border-gray-400">
        <Container>
          <div
            className="grid grid-cols-12 
            h-16"
          >
            <div className="flex mr-2 justify-between items-center col-span-8 ">
              <a className="font-semibold" href="#">
                সর্বশেষ
              </a>
              <a className="font-semibold" href="#">
                রাজনীতি
              </a>
              <a className="font-semibold" href="#">
                বাংলাদেশ
              </a>
              <a className="font-semibold" href="#">
                অপরাধ
              </a>
              <a className="font-semibold" href="#">
                বিশ্ব
              </a>
              <a className="font-semibold" href="#">
                বাণিজ্য
              </a>
              <a className="font-semibold" href="#">
                মতামত
              </a>
              <a className="font-semibold" href="#">
                বিনোদন
              </a>
              <a className="font-semibold" href="#">
                চাকরি
              </a>
              <a className="font-semibold" href="#">
                জীবনযাপন
              </a>
            </div>
            <div className="col-span-4  flex gap-2 justify-between text-gray-700">
              <div className="flex gap-2 border-r border-l px-2 items-center ">
                <Search></Search>
                <p>খুঁজুন</p>
              </div>
              <div className="flex gap-2 border-r  px-2 items-center">
                <Dock></Dock>
                <p className="whitespace-nowrap">ই-পেপার</p>
              </div>
              <div className="flex gap-2 border-r  px-2 items-center">
                <Globe></Globe>
                <p>EN</p>
              </div>
              <div className="flex gap-2   px-2 items-center">
                <User></User>
                <p>Login</p>
              </div>
              <div className="flex border-l  px-2 items-center justify-center">
                <Menu></Menu>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DesktopNav;
