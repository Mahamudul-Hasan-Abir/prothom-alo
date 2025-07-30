import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface PosterProps {
  sectionTitle: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;

  posterItems: string[];
}

const Poster = ({
  sectionTitle,
  imageSrc,
  imageAlt,

  posterItems,
}: PosterProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 border-t-4 pt-4 border-gray-400 mt-20">
        <p className="font-semibold text-2xl ">{sectionTitle}</p>
        <ChevronRight className="size-8 text-red-700"></ChevronRight>
      </div>
      <div className="mt-5">
        <div className="h-[260px] md:h-[490px] w-full relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          ></Image>
        </div>
      </div>

      {posterItems.map((item, index) => (
        <h2
          key={index}
          className={`text-xl mt-5 pb-5 border-b ${
            index === 0 ? "font-semibold" : ""
          }`}
        >
          {item}
        </h2>
      ))}
    </div>
  );
};

export default Poster;
