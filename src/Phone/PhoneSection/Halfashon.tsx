import Image from "next/image";
import HalfashonImage from "../../../public/assets/frontpageimages/halfashonImage.png";
import Fashon from "../../../public/assets/frontpageimages/fashon-2.png";
import Mishti from "../../../public/assets/frontpageimages/mishti.png";
import Tradmil from "../../../public/assets/frontpageimages/tradmil-2.png";
import TwoGirl from "../../../public/assets/frontpageimages/twogirl.png";

const Halfashon = () => {
  return (
    <div className="bg-[#fff3e0] px-3">
      <div className="h-[96px] w-full relative">
        <Image
          src={HalfashonImage}
          alt="Halfashon"
          fill
          className="object-cover"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
      <div className="mt-5">
        <div className="h-[260px] md:h-[490px] w-full relative">
          <Image
            src={Fashon}
            alt="Bonjobi"
            fill
            className="object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          ></Image>
        </div>
        <h2 className="font-semibold text-xl mt-5">
          {" "}
          হঠাৎ শুকিয়ে কাঠ হয়ে যাচ্ছেন বলিউডের এই চল্লিশোর্ধ্ব পুরুষেরা, জেনে নিন
          কে কী করছেন
        </h2>
        <p className="text-gray-500 mt-3">
          প্রযোজক বনি কাপুর, পরিচালক করণ জোহর, অভিনেতা রাম কাপুর। বলিউডের এই
          নাদুস নাদুস চল্লিশোর্ধ্ব পুরুষেরা হঠাৎ শুকিয়ে কাঠ হয়ে যাচ্ছেন একেবারে।
        </p>
        <p className="text-gray-500 text-sm mt-3">১ ঘণ্টা আগে</p>
      </div>
      <div className="mt-5 pt-3 border-t flex justify-between ">
        <div>
          <h2 className="font-semibold text-xl mt-5">
            {" "}
            স্টার কিড থেকে স্টাইল আইকন: কে এই এল কভার গার্ল
          </h2>
          <p className="text-gray-500 text-sm mt-3">৯ ঘণ্টা আগে</p>
        </div>
        <div className="h-[117px] aspect-square md:h-[220px] relative">
          <Image
            src={TwoGirl}
            alt="Animation"
            fill
            className="object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      </div>
      <div className="mt-5 pt-3 border-t flex justify-between ">
        <div>
          <h2 className="font-semibold text-xl mt-5">
            {" "}
            স্টার কিড থেকে স্টাইল আইকন: কে এই এল কভার গার্ল
          </h2>
          <p className="text-gray-500 text-sm mt-3">৬ ঘণ্টা আগে</p>
        </div>
        <div className="h-[117px] aspect-square md:h-[220px] relative">
          <Image
            src={Tradmil}
            alt="Animation"
            fill
            className="object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      </div>
      <div className="mt-5 pt-3 border-t flex justify-between ">
        <div>
          <h2 className="font-semibold text-xl mt-5">
            {" "}
            ঢাকায় প্রথমবারের মতো গরমাগরম লাইভ মিষ্টি নিয়ে দুই বন্ধুর উদ্যোগ
            ক্ষীরওয়ালা
          </h2>
          <p className="text-gray-500 text-sm mt-3">৭ ঘণ্টা আগে</p>
        </div>
        <div className="h-[117px] aspect-square md:h-[220px] relative">
          <Image
            src={Mishti}
            alt="Animation"
            fill
            className="object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      </div>
    </div>
  );
};

export default Halfashon;
