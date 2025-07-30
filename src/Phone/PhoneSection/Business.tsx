import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Share from "../../../public/assets/frontpageimages/share.png";
import Man from "../../../public/assets/frontpageimages/man5.png";
import Top from "../../../public/assets/frontpageimages/top-10.png";
import Bkash from "../../../public/assets/frontpageimages/Bkash.png";
import Dollor from "../../../public/assets/frontpageimages/Dollor2.png";
import BiSectionVid from "@/components/BiSection/BiSectionVid";

const Business = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2 border-t-4 pt-4 border-gray-400">
        <p className="font-semibold text-2xl">বাণিজ্য</p>
        <ChevronRight className="size-8 text-red-700"></ChevronRight>
      </div>
      <div className="mt-5">
        <div className="md:h-[552px] h-[294px] w-full relative">
          <Image
            src={Share}
            alt="Bonjobi"
            fill
            className="object-cover"
          ></Image>
        </div>
        <h2 className="font-semibold text-xl mt-5">
          {" "}
          শেয়ারের মূল্যবৃদ্ধিতে শীর্ষ পাঁচ কোম্পানি
        </h2>
        <p className="text-gray-500 mt-3">
          আজ দাম বেড়েছে ১১৯টি কোম্পানির শেয়ারের। দাম কমেছে ২৩০টি কোম্পানির
          শেয়ারের। সেই সঙ্গে অপরিবর্তিত আছে ৪৮টি কোম্পানির শেয়ার।
        </p>
        <p className="text-gray-500 text-sm mt-3">১ ঘণ্টা আগে</p>
      </div>
      <BiSectionVid
        LeftImage={Man}
        LeftTitle="  সিটি ব্যাংকের নতুন চেয়ারম্যান হোসেন খালেদ"
        LeftTime={"৩ ঘণ্টা আগে"}
        RightImage={Top}
        RightTitle="  যুক্তরাষ্ট্রে অভিবাসী শতকোটিপতি কারা, কত তাঁদের সম্পদ"
        RightTime={"৩ ঘণ্টা আগে"}
        LeftAlt="প্রথমে পুলিশ"
        RightAlt="যৌনকর্মী"
      ></BiSectionVid>
      <BiSectionVid
        LeftImage={Bkash}
        LeftTitle=" বিকাশ অ্যাপে এখন এক ট্যাপেই মুঠোফোন রিচার্জ"
        LeftTime={"৫ ঘণ্টা আগে"}
        RightImage={Dollor}
        RightTitle="  আজকের বিনিময় হার"
        RightTime={"৫ ঘণ্টা আগে"}
        LeftAlt="প্রথমে পুলিশ"
        RightAlt="যৌনকর্মী"
      ></BiSectionVid>
    </div>
  );
};

export default Business;
