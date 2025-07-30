"use client";

import Container from "@/components/Container/Container";
import {
  CameraIcon,
  ChevronRight,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import Nahid from "../../public/assets/frontpageimages/Nahid.png";
import Bird from "../../public/assets/frontpageimages/bird.png";
import Bacca from "../../public/assets/frontpageimages/bacca.png";
import Flower from "../../public/assets/frontpageimages/flower.png";
import Feriwala from "../../public/assets/frontpageimages/feriwala.png";
import Kiddo from "../../public/assets/frontpageimages/kiddo.png";
import Working from "../../public/assets/frontpageimages/workingWoman.png";
import Fisherman from "../../public/assets/frontpageimages/Fisherman.png";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const Camera = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData = [
    {
      image: Nahid,
      title:
        "জুলাই সনদ হতে হবে, জুলাই সনদের ভিত্তিতেই নির্বাচন হবে: নাহিদ ইসলাম",
      time: "৭ ঘণ্টা আগে",
    },
    {
      image: Bird,
      title: "বাড়ির পাশে ঠেলা জাল দিয়ে মাছ ধরছে দুই শিশু।",
      time: "১১ ঘণ্টা আগে",
    },
    {
      image: Flower,
      title: "হাওরে জাল পেতে রেখেছিলেন, সেই জাল তোলা হচ্ছে।",
      time: "২১ ঘণ্টা আগে",
    },
    {
      image: Feriwala,
      title: "ছোট ছোট মাছ ধরে নৌকায় সাজিয়ে রাখা হয়েছে।",
      time: "২৮ জুলাই ২০২৫",
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, carouselData.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <div className="mt-20 py-10">
      <div className="flex items-center gap-2 border-t-4 pt-4 border-gray-400">
        <p className="font-semibold text-2xl">ছবি</p>
        <ChevronRight className="size-8 text-red-700"></ChevronRight>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-7 h-[608px] w-full">
          <div className="h-[506px] w-full relative">
            <Carousel className="w-full h-full">
              <CarouselContent>
                {carouselData.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-[506px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                      <div className="absolute top-2 left-2 bg-red-500 rounded-full p-3">
                        <CameraIcon className="size-12 text-white hover:text-yellow-500 transition-colors cursor-pointer" />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Control buttons at top right */}
              <div className="absolute top-4 right-4 flex gap-2 z-10">
                <button
                  onClick={goToPrevious}
                  className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  onClick={togglePlayPause}
                  className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="size-6" />
                  ) : (
                    <Play className="size-6" />
                  )}
                </button>
                <button
                  onClick={goToNext}
                  className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  <ChevronRightIcon className="size-6" />
                </button>
              </div>
            </Carousel>
          </div>
          <div className=" mt-5">
            <h2 className="text-3xl">{carouselData[currentSlide].title}</h2>
            <p className="text-gray-400 text-sm mt-2">
              {carouselData[currentSlide].time}
            </p>
          </div>
        </div>
        <div className="col-span-5">
          <div className="grid-cols-2 grid gap-5">
            <div className="flex gap-5 col-span-2">
              <div className="  w-full ">
                <div className="h-[212px] w-full relative">
                  <Image
                    src={Bird}
                    alt="Nahid"
                    fill
                    className="object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  ></Image>
                  <div className="absolute top-2 left-2 bg-red-500 rounded-full p-3">
                    <Play className="size-5 text-white hover:text-yellow-500 transition-colors cursor-pointer" />
                  </div>
                </div>
                <div className=" mt-1">
                  <h2 className="text-xl ">একঝলক (২৯ জুলাই ২০২৫)</h2>
                  <p className="text-gray-400 text-sm mt-2">১২ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="  w-full ">
                <div className="h-[212px] w-full relative">
                  <Image
                    src={Bacca}
                    alt="Nahid"
                    fill
                    className="object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  ></Image>
                  <div className="absolute top-2 left-2 bg-red-500 rounded-full p-3">
                    <Play className="size-5 text-white hover:text-yellow-500 transition-colors cursor-pointer" />
                  </div>
                </div>
                <div className=" mt-1">
                  <h2 className="text-xl ">ধাপ্পু খেলায় মেতেছে ওরা</h2>
                  <p className="text-gray-400 text-sm mt-2">২১ ঘণ্টা আগে</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-cols-2 grid gap-5 mt-5">
            <div className="flex gap-5 col-span-2">
              <div className="  w-full ">
                <div className="h-[212px] w-full relative">
                  <Image
                    src={Flower}
                    alt="Nahid"
                    fill
                    className="object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  ></Image>
                  <div className="absolute top-2 left-2 bg-red-500 rounded-full p-3">
                    <Play className="size-5 text-white hover:text-yellow-500 transition-colors cursor-pointer" />
                  </div>
                </div>
                <div className=" mt-1">
                  <h2 className="text-xl "> দৃষ্টিনন্দন জলাশয়ের ফুল</h2>
                  <p className="text-gray-400 text-sm mt-2">২৮ জুলাই ২০২৫</p>
                </div>
              </div>
              <div className="  w-full ">
                <div className="h-[212px] w-full relative">
                  <Image
                    src={Feriwala}
                    alt="Nahid"
                    fill
                    className="object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  ></Image>
                  <div className="absolute top-2 left-2 bg-red-500 rounded-full p-3">
                    <Play className="size-5 text-white hover:text-yellow-500 transition-colors cursor-pointer" />
                  </div>
                </div>
                <div className=" mt-1">
                  <h2 className="text-xl ">একঝলক (২৮ জুলাই ২০২৫)</h2>
                  <p className="text-gray-400 text-sm mt-2">২৮ জুলাই ২০২৫</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camera;
