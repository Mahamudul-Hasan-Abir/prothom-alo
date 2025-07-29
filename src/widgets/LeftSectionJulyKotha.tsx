import Image from "next/image";
import july from "../../public/assets/frontpageimages/july-kotha-image.png";
const LeftSectionJulyKotha = () => {
  return (
    <div className="h-20 w-full relative mt-3 ">
      <Image src={july} alt="july kotha" fill className="object-cover"></Image>
    </div>
  );
};

export default LeftSectionJulyKotha;
