import Image from "next/image";
import Ashami from "../../public/assets/frontpageimages/ashami.png";
const RightSectionAshami = () => {
  return (
    <div className="grid grid-cols-12 mt-5 border-t pt-2 border-b pb-2">
      <div className="col-span-8">
        <p className="text-lg font-semibold">
          আসামির কাঠগড়ায় সাবেক প্রধান বিচারপতি খায়রুল হকের ৪০ মিনিট, দুই হাত
          পেছনে নিয়ে পরানো হয় হাতকড়া
        </p>
      </div>
      <div className="col-span-4">
        <div className="h-16 w-full relative">
          <Image
            src={Ashami}
            fill
            alt="scetch"
            className="object-cover"
          ></Image>
        </div>
      </div>

      <p className="text-gray-500 col-span-12 text-xs mt-5">১৫ ঘণ্টা আগে</p>
    </div>
  );
};

export default RightSectionAshami;
