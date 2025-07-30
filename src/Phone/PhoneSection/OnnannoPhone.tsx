"use client";

import Image from "next/image";
import BdGirls from "../../../public/assets/frontpageimages/bdGirls.png";
import Jug from "../../../public/assets/frontpageimages/jug.png";
import Art from "../../../public/assets/frontpageimages/art2.png";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const OnnannoPhone = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const carouselData = [
    {
      sectionTitle: "কিশোর আলো",
      title: " নারী বিশ্বকাপে সুযোগ পেতে হলে কী করতে হবে বাংলাদেশকে?",
      episode: "পর্ব ৫",
      item1: " দম বন্ধ করা ভূতের গল্প 'ওলা ওঠা'",
      item2: " ইংরেজির যে ৮ ভুল আমরা সহজেই এড়াতে পারি",
      image: BdGirls,
    },
    {
      sectionTitle: "বিজ্ঞানচিন্তা",
      title: " যেভাবে বাংলাদেশি বিজ্ঞানী ওরস্যালাইন তৈরি করলেন",
      episode: "বিশ্ব ওআরএস দিবস",
      item1: " বিজ্ঞানচিন্তার সঙ্গে ১ বছর",
      item2: " ড্যাফোডিলে অনুষ্ঠিত হলো আন্তর্জাতিক জ্যোতির্বিজ্ঞান কর্মশালা",
      image: Jug,
    },
    {
      sectionTitle: "বন্ধুসভা",
      title: " ওম ও অর্ধজ্যোৎস্না",
      episode: "গল্প",
      item1: " শিক্ষার মাধ্যমেই সমাজের পরিবর্তন সম্ভব",
      item2: " সমুদ্র আর তুমি",
      image: Art,
    },
  ];

  return (
    <div className="mt-5">
      <div className="flex items-center gap-2 border-t-4 pt-4 border-gray-400">
        <p className="font-semibold text-2xl">অন্যান্য</p>
      </div>

      <Carousel setApi={setApi} className="w-full">
        <CarouselContent className="-ml-6 md:-ml-[500px]">
          {carouselData.map((data, index) => (
            <CarouselItem
              key={index}
              className="pl-6 md:pl-[500px] basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="col-span-1 border p-5 rounded-md w-full md:w-[608px]">
                <p className="inline-block border-b border-red-500">
                  {data.sectionTitle}
                </p>

                <div className="h-[193px] md:h-[384px] w-full relative mt-5">
                  <Image
                    src={data.image}
                    alt="carousel-image"
                    fill
                    className="object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  ></Image>
                </div>
                <h2 className="text-lg font-semibold pb-5 border-b">
                  <span className="text-red-500">{data.episode}</span>
                  <span className="mx-2 text-lg text-gray-400 font-bold select-none">
                    •
                  </span>{" "}
                  {data.title}
                </h2>
                <p className="text-lg pb-5 border-b">{data.item1}</p>
                <p className="text-lg pb-5 border-b">{data.item2}</p>
                <div className="flex justify-center mt-5 mb-8">
                  <Button className="px-5 py-5 bg-blue-500 text-white">
                    আরও
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dot indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              current === index ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OnnannoPhone;
