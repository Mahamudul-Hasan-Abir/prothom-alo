import { ChevronRight } from "lucide-react";
import Students from "../../public/assets/frontpageimages/students.png";
import Icon from "../../public/assets/frontpageimages/icon.png";
import Iphone from "../../public/assets/frontpageimages/iphone.png";
import Laptop from "../../public/assets/frontpageimages/laptop.png";
import Image from "next/image";
const FourSection = () => {
  return (
    <div className="mt-20 grid grid-cols-4 gap-7">
      <div className="col-span-1">
        <div className="  flex items-center gap-2 border-t-4 pt-4 border-gray-400">
          <p className="font-semibold text-2xl">শিক্ষা</p>
          <ChevronRight className="size-8 text-red-700"></ChevronRight>
        </div>
        <div className="h-[191px] w-full relative mt-7">
          <Image src={Students} alt="image" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-xl font-semibold pb-4 border-b">
            নটর ডেম কলেজে: একাদশে ভর্তিতে যোগ্যতার শর্ত প্রকাশ, আসন ৩২৯০ টি
          </h2>
          <p className="text-gray-700 text-lg pb-4 border-b">
            {" "}
            সাধারণ জ্ঞান-১২: জুন-২০২৫: বাংলাদেশ ও আন্তর্জাতিক বিশ্ব
          </p>
          <p className="text-gray-700 text-lg pb-4 ">
            {" "}
            একাদশ শ্রেণিতে ভর্তির আবেদন ৩০ জুলাই শুরু, ক্লাস ১৫ সেপ্টেম্বর থেকে
          </p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="  flex items-center gap-2 border-t-4 pt-4 border-gray-400">
          <p className="font-semibold text-2xl">চাকরি</p>
          <ChevronRight className="size-8 text-red-700"></ChevronRight>
        </div>
        <div className="h-[191px] w-full relative mt-7">
          <Image src={Icon} alt="image" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-xl font-semibold pb-4 border-b">
            জনস্বাস্থ্য প্রকৌশল অধিদপ্তরে ক্যাডারদের পদোন্নতি নেই এক যুগেও
          </h2>
          <p className="text-gray-700 text-lg pb-4 border-b">
            {" "}
            রুয়েটে বিভিন্ন গ্রেডে ১২৭ পদে শিক্ষক-কর্মকর্তা-কর্মচারী পদে নিয়োগ,
            করুন আবেদন
          </p>
          <p className="text-gray-700 text-lg pb-4 ">
            {" "}
            বিদ্যুৎ কোম্পানিতে চাকরি, সংশোধিত বিজ্ঞপ্তিতে নেবে ১১৮ জন
          </p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="  flex items-center gap-2 border-t-4 pt-4 border-gray-400">
          <p className="font-semibold text-2xl">শিক্ষা</p>
          <ChevronRight className="size-8 text-red-700"></ChevronRight>
        </div>
        <div className="h-[191px] w-full relative mt-7">
          <Image src={Iphone} alt="image" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-xl font-semibold pb-4 border-b">
            অ্যান্ড্রয়েড স্মার্টফোন ব্যবহারকারীদের জন্য সুখবর
          </h2>
          <p className="text-gray-700 text-lg pb-4 border-b">
            {" "}
            আর্দ্রা তারাকে প্রদক্ষিণ করা ছোট একটি তারার খোঁজ পেয়েছেন বিজ্ঞানীরা
          </p>
          <p className="text-gray-700 text-lg pb-4">
            {" "}
            এক্সের কমিউনিটি নোটসে পরিবর্তন আসছে
          </p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="  flex items-center gap-2 border-t-4 pt-4 border-gray-400">
          <p className="font-semibold text-2xl">শিক্ষা</p>
          <ChevronRight className="size-8 text-red-700"></ChevronRight>
        </div>
        <div className="h-[191px] w-full relative mt-7">
          <Image src={Laptop} alt="image" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-xl font-semibold pb-4 border-b">
            দেশের বাজারে কোপাইলট চ্যাটবটযুক্ত নতুন দুই ল্যাপটপ
          </h2>
          <p className="text-gray-700 text-lg pb-4 border-b">
            {" "}
            দেশের বাজারে কম দামে কৃত্রিম বুদ্ধিমত্তা প্রযুক্তির নতুন স্মার্টফোন
          </p>
          <p className="text-gray-700 text-lg pb-4 ">
            {" "}
            দেশের বাজারে নতুন গেমিং স্মার্টফোন
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourSection;
