import Image from "next/image";
import Scetch from "../../public/assets/frontpageimages/scetch.png";

const RightSectionMain = () => {
  return (
    <div className="mt-64">
      <div className="grid grid-cols-12 border-t pt-2">
        <div className="col-span-8 ">
          <p className="text-lg font-semibold">
            <span className="text-red-500">মতামত</span>
            <span className="mx-2 text-lg text-gray-400 font-bold select-none">
              •
            </span>{" "}
            রাজনৈতিক দলগুলোর ঐক্যের জন্য কে কাজ করবে
          </p>
        </div>
        <div className="col-span-4">
          <div className="h-16 w-full relative">
            <Image
              src={Scetch}
              fill
              alt="scetch"
              className="object-cover"
            ></Image>
          </div>
        </div>
        <div className="col-span-12">
          <p className="text-gray-500 text-sm">
            {" "}
            সহনশীল রাজনৈতিক ব্যবস্থা ও চর্চার অভ্যাস করে তোলার জন্য যে রাজনৈতিক
            সংস্কৃতি গড়ে তোলা প্রয়োজন, তার উদ্যোগ কে নেবে?
          </p>
        </div>
        <p className="text-gray-500 col-span-12 text-xs mt-5">৫৮ মিনিট আগে</p>
      </div>
    </div>
  );
};

export default RightSectionMain;
