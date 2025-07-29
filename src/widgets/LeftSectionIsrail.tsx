import Image from "next/image";
import Israil from "../../public/assets/frontpageimages/israil.png";
const LeftSectionIsrail = () => {
  return (
    <div className="grid grid-cols-12 border-b pb-2 mt-3 border-t pt-2">
      <div className="col-span-8 ">
        <p className="text-lg font-semibold">
          ইসরায়েল কি ইরানের বিরুদ্ধে দ্বিতীয় যুদ্ধের পরিকল্পনা করছে
        </p>
      </div>

      <div className="col-span-4 h-16 ">
        <div className="h-16 w-full relative">
          <Image
            src={Israil}
            alt="normal image"
            fill
            className="object-cover"
          ></Image>
        </div>
      </div>

      <p className="text-gray-500 col-span-12 text-xs mt-4">১ ঘণ্টা আগে</p>
    </div>
  );
};

export default LeftSectionIsrail;
