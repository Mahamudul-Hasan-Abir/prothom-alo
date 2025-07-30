import Image from "next/image";
import Ektu from "../../../public/assets/frontpageimages/ektu.png";
const EktuThamun = () => {
  return (
    <div className="mt-5">
      <div className="h-[96px] w-full relative">
        <Image
          src={Ektu}
          alt="Ektu Thamun"
          fill
          className="object-cover"
        ></Image>
      </div>
    </div>
  );
};

export default EktuThamun;
