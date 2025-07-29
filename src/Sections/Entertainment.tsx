import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Women1 from "../../public/assets/frontpageimages/women-1.png";
import Women2 from "../../public/assets/frontpageimages/women-2.png";
import Women3 from "../../public/assets/frontpageimages/women-3.png";
import Film from "../../public/assets/frontpageimages/film.png";
import Kishor from "../../public/assets/frontpageimages/kishor.png";
import Amitab from "../../public/assets/frontpageimages/amitab.png";
import Avishek from "../../public/assets/frontpageimages/avishek.png";

const Entertainment = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center gap-2 border-t-4 pt-4 border-gray-400">
        <p className="font-semibold text-2xl">বিনোদন</p>
        <ChevronRight className="size-8 text-red-700"></ChevronRight>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-4 pr-3 border-r-2">
          {/* Left Section */}
          <div className="grid grid-cols-12 border-b pb-2">
            <div className="col-span-7">
              <h2 className="text-xl font-semibold">
                {" "}
                ৬ লাখ ডলার থেকে বছর ঘুরতেই পারিশ্রমিক কোটির ক্লাবে
              </h2>
              <p className="text-gray-500 col-span-12 text-xs mt-3">
                ১ ঘণ্টা আগে
              </p>
            </div>
            <div className="col-span-5">
              <div className="h-[106px] w-full relative">
                <Image src={Women1} alt="image" fill className="object-cover" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-5">
            <div className="col-span-7">
              <h2 className="text-xl font-semibold">
                {" "}
                ১০ সেকেন্ডের এক দৃশ্য, বিদ্রূপের শিকার অভিনেতা দেশ ছাড়েন
              </h2>
              <p className="text-gray-500 col-span-12 text-xs mt-3">
                ২ ঘণ্টা আগে
              </p>
            </div>
            <div className="col-span-5">
              <div className="h-[106px] w-full relative">
                <Image src={Women2} alt="image" fill className="object-cover" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-5">
            <div className="col-span-7">
              <h2 className="text-xl font-semibold">
                {" "}
                ‘আমি মরে গেলে দয়া করে কেউ আফসোস করবেন না’, অভিনেত্রীর ক্ষোভ
              </h2>
              <p className="text-gray-500 col-span-12 text-xs mt-3">
                ৪ ঘণ্টা আগে
              </p>
            </div>
            <div className="col-span-5">
              <div className="h-[106px] w-full relative">
                <Image src={Women3} alt="image" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
        {/* Middle Section */}
        <div className="col-span-4">
          <div className="w-full h-[254px] relative">
            <Image src={Film} alt="image" fill className="object-cover" />
          </div>
          <h2 className="text-2xl font-semibold">
            {" "}
            স্ট্যানলি কুবরিক, স্কুল পালানো সেই ছেলেটি হয়েছিলেন সময়ের সেরা
            নির্মাতা
          </h2>
          <p className="text-gray-500 mt-3">
            ১৩ বছর বয়সে বাবার কিনে দেওয়া ক্যামেরা সিনেমার নেশা উসকে দিয়েছিল,
            সন্দেহ নেই। হচ্ছিল ইতিহাসের অন্যতম গুরুত্বপূর্ণ নির্মাতা স্ট্যানলি
            কুবরিকের কথা। আজ এ নির্মাতার জন্মদিন।
          </p>
          <p className="text-gray-500 col-span-12 text-xs mt-3">৩০ মিনিট আগে</p>
        </div>
        {/* Right Section */}
        <div className="col-span-4 pl-3 border-l-2">
          <div className="grid grid-cols-12 border-b pb-2">
            <div className="col-span-7">
              <h2 className="text-xl font-semibold">
                {" "}
                হবু পুত্রবধূর আগে বিয়ে হয়েছিল শুনেই হৃদ্‌রোগে আক্রান্ত হন কিশোর
                কুমার
              </h2>
              <p className="text-gray-500 col-span-12 text-xs mt-3">
                ৬ ঘণ্টা আগে
              </p>
            </div>
            <div className="col-span-5">
              <div className="h-[106px] w-full relative">
                <Image src={Kishor} alt="image" fill className="object-cover" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 border-b pb-2 mt-5">
            <div className="col-span-7">
              <h2 className="text-xl font-semibold">
                {" "}
                ক্লিনিক্যালি ডেড অমিতাভ, কী হয়েছিল সেদিন
              </h2>
              <p className="text-gray-500 col-span-12 text-xs mt-3">
                ৭ ঘণ্টা আগে
              </p>
            </div>
            <div className="col-span-5">
              <div className="h-[106px] w-full relative">
                <Image src={Amitab} alt="image" fill className="object-cover" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12  mt-5">
            <div className="col-span-7">
              <h2 className="text-xl font-semibold">
                {" "}
                ববিতার কারণেই অভিষেক ও কারিশমার প্রেম ভেঙে যায়
              </h2>
              <p className="text-gray-500 col-span-12 text-xs mt-3">
                ১০ ঘণ্টা আগে
              </p>
            </div>
            <div className="col-span-5">
              <div className="h-[106px] w-full relative">
                <Image
                  src={Avishek}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
