import Image from "next/image";
import xavi from "../../public/assets/frontpageimages/xavi.png";
import maulana from "../../public/assets/frontpageimages/maulana.png";
const HeroSecondSection = () => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-5">
      {/* Left Section */}
      <div className="grid grid-cols-12 col-span-1 pr-3 border-r-2">
        <div className="col-span-8 ">
          <p className="text-lg font-semibold">
            মাহতাব বলেছিল, ‘আব্বু তোমরা চিন্তা করো না, আমি ঠিক হয়ে যাব’
          </p>
        </div>
        <div className="col-span-4">
          <div className="h-20 w-full relative">
            <Image
              src={maulana}
              fill
              alt="scetch "
              className="object-cover"
            ></Image>
          </div>
        </div>
        <div className="col-span-12">
          <p className="text-gray-500 text-sm">
            গতকাল বৃহস্পতিবার বেলা ১টা ৫২ মিনিটে জাতীয় বার্ন ও প্লাস্টিক
            সার্জারি ইনস্টিটিউটের আইসিইউতে চিকিৎসাধীন অবস্থায় শিক্ষার্থী মাহতাব
            রহমানের মৃত্যু হয়।
          </p>
        </div>
        <p className="text-gray-500 col-span-12 text-xs mt-5">৪০ মিনিট আগে</p>
      </div>
      {/* Right Section */}
      <div className="grid grid-cols-12  col-span-1">
        <div className="col-span-8 ">
          <p className="text-lg font-semibold">
            ভারতের কোচ হতে জাভির আবেদন, খারিজ করে দিয়েছে ফেডারেশন
          </p>
        </div>
        <div className="col-span-4">
          <div className="h-20 w-full relative">
            <Image
              src={xavi}
              fill
              alt="scetch"
              className="object-cover"
            ></Image>
          </div>
        </div>
        <div className="col-span-12">
          <p className="text-gray-500 text-sm">
            {" "}
            বর্তমান কোচ মানোলো মার্কুয়েজের বিদায়ের পর জাতীয় দলের জন্য নতুন
            প্রধান কোচ খুঁজছে ভারত। এ দায়িত্ব নিতে আগ্রহ প্রকাশ করেছিলেন
            স্প্যানিশ কিংবদন্তি জাভি হার্নান্দেজ।
          </p>
        </div>
        <p className="text-gray-500 col-span-12 text-xs mt-5">৩ ঘণ্টা আগে</p>
      </div>
    </div>
  );
};

export default HeroSecondSection;
