import Image from "next/image";
import BonjobiImage from "../../../public/assets/frontpageimages/Bonjobi.png";
const Bonjobi = () => {
  return (
    <div className="mt-5">
      <div className="h-[260px] md:h-[490px] w-full relative">
        <Image
          src={BonjobiImage}
          alt="Bonjobi"
          fill
          className="object-cover"
        ></Image>
      </div>
      <h2 className="font-semibold text-xl mt-5"> স্বপ্নে পাওয়া গান</h2>
      <p className="text-gray-500 mt-3">
        ২০০ বছরের বেশি সময় ধরে পর্তুগালের ইউনিভার্সিটি অব কোইমব্রার জোয়েনিনা
        লাইব্রেরিতে ঘাঁটি গেড়ে আছে বাদুরের ঝাঁক।
      </p>
      <p className="text-gray-500 text-sm mt-3">২ ঘণ্টা আগে</p>
    </div>
  );
};

export default Bonjobi;
