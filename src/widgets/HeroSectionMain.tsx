import Image from "next/image";

import Front from "../../public/assets/frontpageimages/front.png";
const HeroSectionMain = () => {
  return (
    <div className="grid grid-cols-2 gap-2 px-4 pb-2 border-b-2">
      <div className="col-span-1">
        <div className="w-72 h-48 relative">
          <Image
            src={Front}
            alt="normal image"
            fill
            priority
            className="object-cover"
          ></Image>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          গৃহায়ণ ও গণপূর্ত মন্ত্রণালয়
        </p>
      </div>
      <div className="col-span-1">
        <h3 className="text-3xl font-bold">
          {" "}
          নির্বাচিত সরকারের প্রধানমন্ত্রী ও মন্ত্রীদের জন্য বাসা খোঁজা হচ্ছে
        </h3>
        <p className="text-sm mt-5">
          গণভবনে ‘জুলাই গণ-অভ্যুত্থান স্মৃতি জাদুঘর’ হচ্ছে। এর ফলে ভবিষ্যতে কোনো
          সরকারপ্রধান বা প্রধানমন্ত্রীর আর গণভবনে থাকার সুযোগ নেই।{" "}
        </p>
        <p className="text-xs text-gray-400 mt-1">২ ঘণ্টা আগে</p>
      </div>
    </div>
  );
};

export default HeroSectionMain;
