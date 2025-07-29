"use client";

import React, { useState } from "react";
import Container from "../Container/Container";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";

import {
  Camera,
  CirclePlay,
  Dock,
  Globe,
  Menu,
  Search,
  User,
} from "lucide-react";

const navItems = [
  "সর্বশেষ",
  "রাজনীতি",
  "বাংলাদেশ",
  "অপরাধ",
  "বিশ্ব",
  "বাণিজ্য",
  "মতামত",
  "খেলা",
  "বিনোদন",
  "চাকরি",
  "জীবনযাপন",
];

const TabletNav = () => {
  return (
    <div>
      <div className="border-b border-gray-300">
        <Container>
          <div className="flex justify-between items-center">
            <div className=" h-16 flex justify-center items-center">
              <div className="h-12 w-52 relative">
                <Image src={logo} alt="app logo" fill></Image>
              </div>
            </div>
            <div className="flex gap-2 items-center text-gray-700">
              <div className="border-r pr-5">
                <Search></Search>
              </div>
              <div className="flex gap-2 items-center">
                <User></User>
                <p className="text-lg ">Login</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="border-b-2 border-gray-400">
        <Container>
          <div className="grid grid-cols-12 h-12 justify-items-end-safe">
            {/* Leftside */}
            <div className="flex w-full gap-4 md:col-span-10 col-span-8 items-center overflow-x-auto whitespace-nowrap min-w-0 hide-scrollbar">
              <a className="font-semibold text-sm" href="#">
                সর্বশেষ
              </a>
              <a className="font-semibold text-sm" href="#">
                রাজনীতি
              </a>
              <a className="font-semibold text-sm" href="#">
                বাংলাদেশ
              </a>
              <a className="font-semibold text-sm" href="#">
                অপরাধ
              </a>
              <a className="font-semibold text-sm" href="#">
                বিশ্ব
              </a>
              <a className="font-semibold text-sm" href="#">
                বাণিজ্য
              </a>
              <a className="font-semibold text-sm" href="#">
                মতামত
              </a>
              <a className="font-semibold text-sm" href="#">
                বিনোদন
              </a>
              <a className="font-semibold text-sm" href="#">
                চাকরি
              </a>
              <a className="font-semibold text-sm" href="#">
                জীবনযাপন
              </a>
            </div>
            {/* Rightside */}

            <div className="md:col-span-2 col-span-4 flex justify-between text-gray-700">
              <div
                className="flex gap-2 items-center border-r border-l px-3 bg-[#fbe9e7]"
                style={{ boxShadow: "-6px 0 12px -4px rgba(0,0,0,0.32)" }}
              >
                <Globe></Globe>
                <p>Eng</p>
              </div>
              <div className="flex gap-2 items-center px-2">
                <Menu></Menu>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[#f7f7f7]">
        <Container>
          <div className="grid grid-cols-3 items-center w-full h-12">
            <div className="flex gap-2 items-center grid-cols-1 border-r border-gray-300">
              <Camera className="text-red-500 size-4"></Camera>
              <p className="text-sm font-light text-gray-700">ছবি</p>
            </div>
            <div className="flex gap-2 items-center grid-cols-1 mx-2 border-r border-gray-300">
              <CirclePlay className="text-red-500 size-4"></CirclePlay>
              <p className="text-sm font-light text-gray-700">ভিডিও</p>
            </div>
            <div className="flex gap-2 items-center grid-cols-1">
              <CirclePlay className="text-red-500 size-4"></CirclePlay>
              <p className="text-sm font-light text-gray-700">ভিডিও</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TabletNav;
