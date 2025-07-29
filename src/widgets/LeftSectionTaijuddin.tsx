import Image from "next/image";
import Taijudding from "../../public/assets/frontpageimages/taijudding.png";
const LeftSectionTaijuddin = () => {
  return (
    <div className="grid grid-cols-12 border-b pb-2">
      <div className="col-span-8 ">
        <p className="text-lg font-semibold text-red-500">
          তাজউদ্দীনের জন্মশতবার্ষিকীতে মেয়ে শারমিন আহমদের সাক্ষাৎকার{" "}
          <span className="mx-2 text-lg text-gray-400 font-bold select-none">
            •
          </span>
          <span className="text-black col-span-12 text-lg font-semibold">
            তিনি স্বাধীনতার আকাঙ্ক্ষাকে বাস্তবায়ন করতে চেয়েছিলেন
          </span>
        </p>
      </div>

      <div className="col-span-4 h-16 ">
        <div className="h-16 w-full relative">
          <Image
            src={Taijudding}
            alt="normal image"
            fill
            className="object-cover"
          ></Image>
        </div>
      </div>
      <p></p>

      <p className="text-gray-500 col-span-12 text-xs mt-5">৫ ঘণ্টা আগে</p>
    </div>
  );
};

export default LeftSectionTaijuddin;
