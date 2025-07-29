import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Trump from "../../public/assets/frontpageimages/trump.png";
import Charge from "../../public/assets/frontpageimages/charge.png";
import Resque from "../../public/assets/frontpageimages/resque.png";
import Meat from "../../public/assets/frontpageimages/meat.png";
import Artilary from "../../public/assets/frontpageimages/artilary.png";
const World = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center gap-2 border-t-4 pt-4 border-gray-400">
        <p className="font-semibold text-2xl">বিশ্ব</p>
        <ChevronRight className="size-8 text-red-700"></ChevronRight>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-5 ">
          <div className="h-80 w-full relative">
            <Image src={Trump} alt="image" fill className="object-cover" />
          </div>
          <h2 className="text-2xl font-semibold">
            {" "}
            হামাস সদস্যদের খুঁজে খুঁজে বের করা হবে: ট্রাম্প
          </h2>
          <p className="mt-8 text-gray-500">
            ট্রাম্প সাংবাদিকদের বলেন, ‘আমরা চূড়ান্ত ধাপে জিম্মি মুক্তির অপেক্ষায়
            আছি। আর তারা (হামাস) জানে, সবশেষ বন্দীদের ছাড়া হলে এরপর কী হতে পারে।
          </p>
          <p className="text-gray-500 col-span-12 text-xs mt-3">১৭ ঘণ্টা আগে</p>
        </div>
        <div className="col-span-7 ">
          <div className="grid grid-cols-2 gap-2 border-b-2 pb-2">
            <div className="col-span-1 pr-2 border-r border-gray-300">
              <div className="h-[222px] w-full relative">
                <Image
                  src={Artilary}
                  alt="trump"
                  fill
                  className="object-cover"
                ></Image>
              </div>
              <h2 className="text-lg font-semibold">
                {" "}
                থাইল্যান্ড ও কম্বোডিয়া কেন সীমান্ত সংঘাতে জড়িয়েছে, সমাধান কোন
                পথে
              </h2>
              <p className="text-gray-500 col-span-12 text-xs mt-3">
                ১৪ মিনিট আগে
              </p>
            </div>
            <div className="col-span-1">
              <div className="h-[222px] w-full relative">
                <Image
                  src={Meat}
                  alt="trump"
                  fill
                  className="object-cover"
                ></Image>
              </div>
              <h2 className="text-lg font-semibold">
                {" "}
                যুক্তরাষ্ট্রে গরুর মাংসের দাম রেকর্ড বেড়েছে, কারণ কী
              </h2>
              <p className="text-gray-500 col-span-12 text-xs mt-3">
                ৪২ মিনিট আগে
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-5">
            <div className="col-span-1 pr-2 border-r border-gray-300">
              <div className="h-[222px] w-full relative">
                <Image
                  src={Charge}
                  alt="trump"
                  fill
                  className="object-cover"
                ></Image>
              </div>
              <h2 className="text-lg font-semibold">
                {" "}
                সংস্কারে অগ্রগতি হলেও ধর্মীয় স্বাধীনতা নিয়ে দেশে উদ্বেগ রয়ে গেছে
              </h2>
              <p className="text-gray-500 col-span-12 text-xs mt-3">
                ২ ঘণ্টা আগে
              </p>
            </div>
            <div className="col-span-1">
              <div className="h-[222px] w-full relative">
                <Image
                  src={Resque}
                  alt="trump"
                  fill
                  className="object-cover"
                ></Image>
              </div>
              <h2 className="text-lg font-semibold">
                {" "}
                থাইল্যান্ড ও কম্বোডিয়ার সংঘাতে নিহত বেড়ে ৩২, আহত ১৩০
              </h2>
              <p className="text-gray-500 col-span-12 text-xs mt-3">
                ৪ ঘণ্টা আগে
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default World;
