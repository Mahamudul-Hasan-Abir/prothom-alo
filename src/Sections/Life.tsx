import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Women4 from "../../public/assets/frontpageimages/women-4.png";
import Daddy from "../../public/assets/frontpageimages/daddy.png";
import Fish from "../../public/assets/frontpageimages/fish.png";
import Banana from "../../public/assets/frontpageimages/banana.png";
const Life = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center gap-2 border-t-4 pt-4 border-gray-400">
        <p className="font-semibold text-2xl">জীবনযাপন</p>
        <ChevronRight className="size-8 text-red-700"></ChevronRight>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-5">
        <div className="col-span-1 border-r pr-3">
          <div className="w-full h-[254px] relative">
            <Image src={Women4} alt="image" fill className="object-cover" />
          </div>
          <h2 className="text-2xl font-semibold">
            {" "}
            আমরা আর তার স্কুল—এই ছিল তার জীবন: মাইলস্টোনের শিক্ষক মাসুকা বেগমের
            বড় বোন
          </h2>
          <p className="text-gray-500 mt-3">
            মৃত্যুর আগেও বোন আমার কথা বলে গেছে। বলবেই না কেন! আমার বোন না।
            মাঝেমধ্যে ভাবি, কী সৌভাগ্য আমার, বোনটা আমার কাছেই আছে।
          </p>
          <p className="text-gray-500 col-span-12 text-xs mt-3">২ ঘণ্টা আগে</p>
        </div>
        <div className="col-span-1 border-r pr-3">
          <div className="w-full h-[254px] relative">
            <Image src={Daddy} alt="image" fill className="object-cover" />
          </div>
          <h2 className="text-2xl font-semibold">
            {" "}
            স্প্যানিশ এই দম্পতি ঢাকায় আসতেই ভয় পাচ্ছিলেন, ফেরার সময় যা বলে গেলেন
          </h2>
          <p className="text-gray-500 mt-3">
            তাঁদের চোখেমুখে কেমন যেন একটা ভয়ের ছাপ। পরে কথা বলে জানলাম, আসার আগে
            গণমাধ্যমে আর পরিচিতমহলে শুনে এসেছেন, ভ্রমণের জন্য বাংলাদেশ খুব
            বিপজ্জনক।
          </p>
          <p className="text-gray-500 col-span-12 text-xs mt-3">৩০ মিনিট আগে</p>
        </div>
        <div className="col-span-1 border-r pr-3">
          <div className="w-full h-[254px] relative">
            <Image src={Fish} alt="image" fill className="object-cover" />
          </div>
          <h2 className="text-2xl font-semibold">
            {" "}
            মাছ ধরার জাহাজের প্রধান বাবুর্চি এখন কনটেন্ট ক্রিয়েটর, তাঁর ভিডিও
            হয়তো আপনিও দেখেছেন
          </h2>
          <p className="text-gray-500 mt-3">
            গভীর সমুদ্রের জেলেজীবন, মাছ ধরার মুহূর্ত আর জালে পড়া বিচিত্র সব মাছ
            নিয়ে ভিডিও বানান। তাঁর চ্যানেলে এসব ভিডিওর ভিউ লাখ লাখ।
          </p>
          <p className="text-gray-500 col-span-12 text-xs mt-3">৩০ মিনিট আগে</p>
        </div>
        <div className="col-span-1 ">
          <div className="w-full h-[254px] relative">
            <Image src={Banana} alt="image" fill className="object-cover" />
          </div>
          <h2 className="text-2xl font-semibold"> কাঁচকলার যত উপকারিতা</h2>
          <p className="text-gray-500 mt-3">
            কাঁচকলায় প্রতিরোধী স্টার্চ রয়েছে, যা একটি প্রিবায়োটিক হিসেবে কাজ
            করে। মানে অন্ত্রে উপকারী ব্যাকটেরিয়া সরবরাহ করে।
          </p>
          <p className="text-gray-500 col-span-12 text-xs mt-3">৩০ মিনিট আগে</p>
        </div>
      </div>
    </div>
  );
};

export default Life;
