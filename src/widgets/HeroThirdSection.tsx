import Image from "next/image";
import girls from "../../public/assets/frontpageimages/girls.png";
import cricketer from "../../public/assets/frontpageimages/cricketer.png";
import hasina from "../../public/assets/frontpageimages/hasina.png";
const HeroThirdSeciton = () => {
  return (
    <div className="grid grid-cols-3 gap-2 mt-5 pt-5 border-t">
      <div className="col-span-1 border-r pr-2">
        <div className="h-44 w-full relative">
          <Image
            src={girls}
            alt="image"
            fill
            className="object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <p className="text-lg font-semibold">
          {" "}
          জেন–জির স্মার্টফোনের যে ব্যবহারটা অন্যদেরও অনুসরণ করা উচিত
        </p>
        <p className="text-gray-500 col-span-12 text-xs mt-3">৩ ঘণ্টা আগে</p>
      </div>
      <div className="col-span-1  border-r pr-2">
        <div className="h-44 w-full relative">
          <Image
            src={cricketer}
            alt="image"
            fill
            className="object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <p className="text-lg font-semibold">
          {" "}
          ৪১ বছর বয়সে ৪১ বলে সেঞ্চুরি, ডি ভিলিয়ার্সের অপর নাম বিস্ময়
        </p>
        <p className="text-gray-500 col-span-12 text-xs mt-3">২ ঘণ্টা আগে</p>
      </div>
      <div className="col-span-1">
        <div className="h-44 w-full relative">
          <Image
            src={hasina}
            alt="image"
            fill
            className="object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <p className="text-lg font-semibold">
          {" "}
          আল-জাজিরার তথ্যচিত্রে শেখ হাসিনা ও ওয়ালী আসিফ ইনানের কথোপকথন প্রকাশ
        </p>
        <p className="text-gray-500 col-span-12 text-xs mt-3">১৭ ঘণ্টা আগে</p>
      </div>
    </div>
  );
};

export default HeroThirdSeciton;
