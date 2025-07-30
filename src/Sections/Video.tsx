import Container from "@/components/Container/Container";
import { ChevronRight, Play, CirclePlay } from "lucide-react";
import Nahid from "../../public/assets/frontpageimages/Nahid.png";
import Accident from "../../public/assets/frontpageimages/acccident.png";
import Army from "../../public/assets/frontpageimages/aarmy.png";
import Shongshod from "../../public/assets/frontpageimages/shongshod.png";
import Chinese from "../../public/assets/frontpageimages/chinese.png";
import Image from "next/image";

const Video = () => {
  return (
    <div className="mt-20 bg-[#323232] py-10">
      <Container>
        <div className="flex items-center gap-2">
          <p className="font-semibold text-2xl text-white">ভিডিও</p>
          <ChevronRight className="size-8 text-yellow-500"></ChevronRight>
        </div>
        <div className="grid grid-cols-12 gap-5 mt-5">
          <div className="col-span-6 h-[608px] w-full bg-black">
            <div className="h-[342px] w-full relative">
              <Image
                src={Nahid}
                alt="Nahid"
                fill
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              ></Image>
              <div className="absolute top-2 left-2 bg-red-500 rounded-full p-3">
                <Play className="size-12 text-white hover:text-yellow-500 transition-colors cursor-pointer" />
              </div>
            </div>
            <div className="px-5 mt-5">
              <h2 className="text-3xl text-white">
                জুলাই সনদ হতে হবে, জুলাই সনদের ভিত্তিতেই নির্বাচন হবে: নাহিদ
                ইসলাম
              </h2>
              <p className="text-gray-400 text-sm mt-2">৭ ঘণ্টা আগে</p>
            </div>
          </div>
          <div className="col-span-6">
            <div className="grid-cols-2 grid gap-5">
              <div className="flex gap-5 col-span-2">
                <div className=" h-[288px] w-full bg-black">
                  <div className="h-[162px] w-full relative">
                    <Image
                      src={Army}
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
                  <div className="px-5 mt-1">
                    <h2 className="text-xl text-white">
                      কারওয়ান বাজার এলাকার ছিনতাইকারী চক্রের রনিকে গ্রেপ্তার
                      করেছে সেনাবাহিনী
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">৮ ঘণ্টা আগে</p>
                  </div>
                </div>
                <div className=" h-[288px] w-full bg-black">
                  <div className="h-[162px] w-full relative">
                    <Image
                      src={Accident}
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
                  <div className="px-5 mt-1">
                    <h2 className="text-xl text-white">
                      রাউজানে গিয়াস উদ্দিন কাদের ও গোলাম আকবরের অনুসারীরা
                      মুখোমুখি
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">৯ ঘণ্টা আগে</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-cols-2 grid gap-5 mt-5">
              <div className="flex gap-5 col-span-2">
                <div className=" h-[288px] w-full bg-black">
                  <div className="h-[162px] w-full relative">
                    <Image
                      src={Shongshod}
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
                  <div className="px-5 mt-1">
                    <h2 className="text-xl text-white">রাজনীতি কোন পথে?</h2>
                    <p className="text-gray-400 text-sm mt-2">১০ ঘণ্টা আগে</p>
                  </div>
                </div>
                <div className=" h-[288px] w-full bg-black">
                  <div className="h-[162px] w-full relative">
                    <Image
                      src={Chinese}
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
                  <div className="px-5 mt-1">
                    <h2 className="text-xl text-white">
                      বিগত সরকার বিএনপি ও জামায়াতে ইসলামীর সঙ্গে যোগাযোগে বাধা
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">১০ ঘণ্টা আগে</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Video;
