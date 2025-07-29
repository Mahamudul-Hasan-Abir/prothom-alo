import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Bangladesh from "../../public/assets/frontpageimages/Bangladesh.png";
import Players from "../../public/assets/frontpageimages/players.png";
import Women from "../../public/assets/frontpageimages/women.png";
import Icon from "../../public/assets/frontpageimages/icon.png";
const ApnarJonnoSection = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center gap-2 border-t-4 pt-4 border-gray-400">
        <p className="font-semibold text-2xl">আপনার জন্য</p>
        <ChevronRight className="size-8 text-red-700"></ChevronRight>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-1 border-r pr-2">
          <div className="h-48 w-full relative">
            <Image
              src={Bangladesh}
              alt="apnarjonno"
              fill
              className="object-cover"
            ></Image>
          </div>
          <div>
            <h3 className="font-semibold mt-2">
              {" "}
              সবাইকে দেখতে গিয়েই বাংলাদেশ দলের এমন বিপর্যয়
            </h3>
            <p className="text-gray-500 text-sm mt-3">
              পাকিস্তানকে ধবলধোলাইয়ের ম্যাচে বাংলাদেশ খেলেছে পাঁচ পরিবর্তন নিয়ে।
              ম্যাচ শেষে এর ব্যাখ্যা দিয়েছেন অধিনায়ক লিটন দাস।
            </p>

            <p className="text-gray-400 text-xs mt-2">১৭ ঘণ্টা আগে</p>
          </div>
        </div>
        <div className="col-span-1  border-r pr-2">
          <div className="h-48 w-full relative">
            <Image
              src={Players}
              alt="apnarjonno"
              fill
              className="object-cover"
            ></Image>
          </div>
          <div>
            <h3 className="font-semibold mt-2">
              {" "}
              কুয়েতে বসে সিসিটিভিতে দেখলেন বাড়িতে ডাকাতির চেষ্টা, ডাকাত তাড়ালেন
              প্রবাসী যুবক
            </h3>
            <p className="text-gray-500 text-sm mt-3">
              কুয়েতে বসে মুঠোফোনে সিসিটিভিতে দেখতে পান, বাড়ির প্রধান ফটক ভাঙার
              চেষ্টা করছে ডাকাতের দল। সঙ্গে সঙ্গে বিষয়টি প্রতিবেশীদের জানান
              প্রবাসী যুবক।
            </p>

            <p className="text-gray-400 text-xs mt-2">২১ ঘণ্টা আগে</p>
          </div>
        </div>
        <div className="col-span-1  border-r pr-2">
          <div className="h-48 w-full relative">
            <Image
              src={Women}
              alt="apnarjonno"
              fill
              className="object-cover"
            ></Image>
          </div>
          <div>
            <h3 className="font-semibold mt-2">
              {" "}
              নির্বাচনের আগেই হিলারির মানসিক সমস্যা সম্পর্কে জেনেও প্রকাশ করেননি
              পুতিন
            </h3>
            <p className="text-gray-500 text-sm mt-3">
              প্রতিবেদনে দাবি করা হয়েছে, তাঁর স্বাস্থ্য সম্পর্কিত তথ্য ‘সর্বোচ্চ
              গোপন’ রাখা হয়েছিল। এমনকি তাঁর ঘনিষ্ঠ পরামর্শদাতারা পর্যন্ত এই
              বিষয়ে সম্পূর্ণভাবে অবগত ছিলেন না।
            </p>

            <p className="text-gray-400 text-xs mt-2">২০ ঘণ্টা আগে</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="h-48 w-full relative">
            <Image
              src={Icon}
              alt="apnarjonno"
              fill
              className="object-cover"
            ></Image>
          </div>
          <div>
            <h3 className="font-semibold mt-2">
              {" "}
              সরকারি কর্মকর্তা–কর্মচারীদের নতুন বেতনকাঠামো নির্ধারণে পে কমিশন
              গঠন
            </h3>
            <p className="text-gray-500 text-sm mt-3">
              আজ উপদেষ্টা পরিষদের সভায় এই সিদ্ধান্ত হয়। এ কমিশনের প্রধান করা
              হয়েছে সাবেক অর্থসচিব জাকির আহমেদ খানকে। ছয় মাসের মধ্যে প্রতিবেদন
              দিতে বলা হয়েছে।
            </p>

            <p className="text-gray-400 text-xs mt-2">২৪ জুলাই ২০২৫</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApnarJonnoSection;
