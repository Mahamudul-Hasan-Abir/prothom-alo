import Image from "next/image";
import Moinudding from "../../public/assets/frontpageimages/mainuddinahmed.png";

const RightSEctionMoinuddin = () => {
  return (
    <div className="grid grid-cols-12 mt-5 border-t pt-2">
      <div className="col-span-8">
        <p className="text-lg font-semibold">
          <span className="text-red-500">মহিউদ্দিন আহমদের কলাম</span>
          <span className="mx-2 text-lg text-gray-400 font-bold select-none">
            •
          </span>{" "}
          আনুপাতিক প্রতিনিধিত্ব নিয়ে বাহাস
        </p>
      </div>
      <div className="col-span-4">
        <div className="h-16 w-full relative">
          <Image
            src={Moinudding}
            fill
            alt="scetch"
            className="object-cover"
          ></Image>
        </div>
      </div>

      <p className="text-gray-500 col-span-12 text-xs mt-5">৫ ঘণ্টা আগে</p>
    </div>
  );
};

export default RightSEctionMoinuddin;
