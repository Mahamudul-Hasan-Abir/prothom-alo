import Image from "next/image";
import JulyKothaImage from "../../../public/assets/frontpageimages/july-kotha-image.png";
const JulyKotha = () => {
  return (
    <div className="pt-3 border-t mt-5 flex justify-center items-center">
      <div className="h-20  w-[280px] relative">
        <Image
          src={JulyKothaImage}
          alt="July Kotha"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default JulyKotha;
