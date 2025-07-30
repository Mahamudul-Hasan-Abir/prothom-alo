import Image, { StaticImageData } from "next/image";

interface EightTwoSectionProps {
  title: string;
  timeStamp: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
}

const EightTwoSection = ({
  title,
  timeStamp,
  imageSrc,
  imageAlt,
}: EightTwoSectionProps) => {
  return (
    <div className="grid grid-cols-12 gap-2 pt-3 border-t mt-5">
      <div className="col-span-9">
        <h2 className="text-lg ">{title}</h2>
        <p className="text-gray-500 text-sm mt-3">{timeStamp}</p>
      </div>
      <div className="col-span-3 justify-items-end">
        <div className="h-[94px] md:h-[176px] aspect-square relative">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default EightTwoSection;
