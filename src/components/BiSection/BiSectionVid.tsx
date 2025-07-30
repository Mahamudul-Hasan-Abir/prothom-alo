import Image, { StaticImageData } from "next/image";

interface BiSectionProps {
  LeftImage: StaticImageData | string;
  LeftTitle: string;
  LeftTime: string;
  LeftAlt?: string;
  RightImage: StaticImageData | string;
  RightTitle: string;
  RightTime: string;
  RightAlt?: string;
}

const BiSectionVid = ({
  LeftImage,
  LeftTitle,
  LeftTime,
  LeftAlt,
  RightImage,
  RightTitle,
  RightTime,
  RightAlt,
}: BiSectionProps) => {
  return (
    <div className="grid grid-cols-12 gap-2 border-t pt-5">
      <div className="col-span-6 border-r pr-2 ">
        <div className="h-[103px] md:h-[234px]  relative">
          <Image
            src={LeftImage}
            alt={LeftAlt || "bi-section-left"}
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-4 ">
          <h3 className="font-semibold text-lg ">{LeftTitle}</h3>
          <p className="text-gray-500 text-sm mt-3">{LeftTime}</p>
        </div>
      </div>
      <div className="col-span-6">
        <div className="h-[103px] md:h-[234px]  relative">
          <Image
            src={RightImage}
            alt={RightAlt || "bi-section-right"}
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-4 ">
          <h3 className="font-semibold text-lg">{RightTitle}</h3>
          <p className="text-gray-500 text-sm mt-3">{RightTime}</p>
        </div>
      </div>
    </div>
  );
};

export default BiSectionVid;
