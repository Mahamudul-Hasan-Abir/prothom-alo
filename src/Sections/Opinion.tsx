import Image from "next/image";
import OpinionImage from "../../public/assets/frontpageimages/Opinion.png";
import { ChevronRight } from "lucide-react";
const Opinion = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center gap-2 border-t-4 pt-4 border-gray-400">
        <p className="font-semibold text-2xl">অন্যান্য</p>
        <ChevronRight className="size-8 text-red-700"></ChevronRight>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="h-[400px] w-full relative mx-10">
            <Image
              src={OpinionImage}
              alt=""
              fill
              className="object-contain"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinion;
