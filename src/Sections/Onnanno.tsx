import Sad from "../../public/assets/frontpageimages/sad.png";
import FoodPanda from "../../public/assets/frontpageimages/foodpanda.png";
import Art from "../../public/assets/frontpageimages/art.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const Onnanno = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="flex items-center gap-2 border-t-4 pt-4 border-gray-400">
        <p className="font-semibold text-2xl">অন্যান্য</p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-5 ">
        <div className="col-span-1 border p-5 rounded-md">
          <p className="inline-block border-b border-red-500">কিশোর আলো</p>

          <div className="h-[223px] w-full relative mt-5">
            <Image src={Sad} alt="sad" fill className="object-cover"></Image>
          </div>
          <h2 className="text-lg font-semibold pb-5 border-b">
            <span className="text-red-500">পর্ব ৫</span>
            <span className="mx-2 text-lg text-gray-400 font-bold select-none">
              •
            </span>{" "}
            দ্য নিউ অ্যাডভেঞ্চার অব ফার্মের মুরগি
          </h2>
          <p className="text-lg  pb-5 border-b">
            {" "}
            যে বনসাইয়ের দাম ১৬ কোটি টাকা
          </p>
          <p className="text-lg  pb-5 border-b">
            {" "}
            এর চেয়ে বোধ হয় ভূতই ভালো ছিল
          </p>
          <div className="flex justify-center mt-5 mb-8">
            <Button className="px-5 py-5 bg-blue-500 text-white">আরও</Button>
          </div>
        </div>
        <div className="col-span-1 border p-5 rounded-md">
          <p className="inline-block border-b border-red-500">বিজ্ঞানচিন্তা</p>

          <div className="h-[223px] w-full relative mt-5">
            <Image
              src={FoodPanda}
              alt="sad"
              fill
              className="object-cover"
            ></Image>
          </div>
          <h2 className="text-lg font-semibold pb-5 border-b">
            <span className="text-red-500">বিজ্ঞান উৎসব ২০২৫</span>
            <span className="mx-2 text-lg text-gray-400 font-bold select-none">
              •
            </span>{" "}
            শুরু হয়েছে বিজ্ঞান উৎসবের নিবন্ধন
          </h2>
          <p className="text-lg  pb-5 border-b">
            {" "}
            শতাব্দীর দীর্ঘতম বিরল সূর্যগ্রহণে অন্ধকারে ডুবে যাবে পৃথিবীর একাংশ
          </p>
          <p className="text-lg  pb-5 border-b">
            {" "}
            <span className="text-red-500">বিজ্ঞান রম্য</span>
            <span className="mx-2 text-lg text-gray-400 font-bold select-none">
              •
            </span>{" "}
            জিনবিজ্ঞানী ও তাঁর কুকুর
          </p>
          <div className="flex justify-center mt-5 mb-8">
            <Button className="px-5 py-5 bg-blue-500 text-white">আরও</Button>
          </div>
        </div>
        <div className="col-span-1 border p-5 rounded-md">
          <p className="inline-block border-b border-red-500">বন্ধুসভা</p>

          <div className="h-[223px] w-full relative mt-5">
            <Image src={Art} alt="sad" fill className="object-cover"></Image>
          </div>
          <h2 className="text-lg font-semibold pb-5 border-b">অনন্য প্রেম</h2>
          <p className="text-lg  pb-5 border-b"> তাঁরাও তো মানুষ</p>
          <p className="text-lg pb-5 border-b ">
            {" "}
            ‘মাছরাঙা’ যেন রঙিন ডানায় জলছবির শিল্পী
          </p>
          <div className="flex justify-center mt-5 mb-8">
            <Button className="px-5 py-5 bg-blue-500 text-white">আরও</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onnanno;
