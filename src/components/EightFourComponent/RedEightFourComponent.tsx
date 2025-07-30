import Image from "next/image";
import { StaticImageData } from "next/image";

interface RedEightFourComponentProps {
  redTitle: string;
  subtitle: string;
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  timestamp: string;
}

const RedEightFourComponent: React.FC<RedEightFourComponentProps> = ({
  redTitle,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  timestamp,
}) => {
  return (
    <>
      {/* Tablet Content (md to lg) */}
      <div className="hidden md:block lg:hidden">
        <div className="grid grid-cols-12 mt-5 pt-3 border-t">
          <div className="col-span-8">
            <h1 className="text-lg font-semibold text-red-600 mt-3">
              {redTitle}
              <span className="mx-2 text-lg text-gray-400 font-bold select-none">
                •
              </span>
              <span className="text-black col-span-12 text-lg font-semibold">
                {subtitle}
              </span>
            </h1>
            <p className="text-gray-500 mt-3">{description}</p>
            <p className="text-gray-500 col-span-12 text-xs mt-5">
              {timestamp}
            </p>
          </div>
          <div className="col-span-4">
            <div className="h-[176px] w-full relative">
              <Image
                src={imageSrc}
                alt={imageAlt}
                className="object-cover"
                fill
              ></Image>
            </div>
          </div>
        </div>
      </div>

      {/* Phone Content (below md) */}
      <div className="block md:hidden">
        <div className="grid grid-cols-12 pt-3 border-t">
          <div className="col-span-8">
            <h2 className="text-lg font-semibold text-red-600">
              {redTitle}
              <span className="mx-2 text-lg text-gray-400 font-bold select-none">
                •
              </span>{" "}
              <span className="text-lg font-semibold text-black">
                {" "}
                {subtitle}
              </span>
            </h2>
          </div>
          <div className="col-span-4">
            <div className="h-[94px] w-full relative">
              <Image
                src={imageSrc}
                alt={imageAlt}
                className="object-cover"
                fill
              ></Image>
            </div>
          </div>
          <p className="text-gray-500 mt-3 col-span-12">{description}</p>
          <p className="text-gray-500 col-span-12 text-xs mt-5">{timestamp}</p>
        </div>
      </div>
    </>
  );
};

export default RedEightFourComponent;
