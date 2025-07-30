import Image from "next/image";
import AnimationImage1 from "../../../public/assets/frontpageimages/animation-1.png";
import AnimationImage2 from "../../../public/assets/frontpageimages/animation-2.png";
import AnimationImage3 from "../../../public/assets/frontpageimages/animation-3.png";
const Animation = () => {
  return (
    <div>
      <div className="mt-5 pt-3 border-t flex justify-between ">
        <div>
          <h2 className="font-semibold text-xl mt-5"> স্বপ্নে পাওয়া গান</h2>
          <p className="text-gray-500 text-sm mt-3">২ ঘণ্টা আগে</p>
        </div>
        <div className="h-[117px] aspect-square md:h-[220px] relative">
          <Image
            src={AnimationImage1}
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
            ৯০ মিনিট চুপচাপ বসে থাকার প্রতিযোগিতা
          </h2>
          <p className="text-gray-500 text-sm mt-3">২৭ জুলাই ২০২৫</p>
        </div>
        <div className="h-[117px] aspect-square md:h-[220px] relative">
          <Image
            src={AnimationImage2}
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
          <h2 className="font-semibold text-xl mt-5"> আমাকে অপমান করা হয়েছে</h2>
          <p className="text-gray-500 text-sm mt-3">২৭ জুলাই ২০২৫</p>
        </div>
        <div className="h-[117px] aspect-square md:h-[220px] relative">
          <Image
            src={AnimationImage3}
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

export default Animation;
