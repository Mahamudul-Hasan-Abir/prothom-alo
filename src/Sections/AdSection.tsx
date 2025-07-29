import Image from "next/image";
import Footer from "../../public/assets/frontpageimages/footer.png";
import Container from "@/components/Container/Container";
import Photo1 from "../../public/assets/frontpageimages/1.png";
import Photo2 from "../../public/assets/frontpageimages/2.png";
import Photo3 from "../../public/assets/frontpageimages/3.png";
import Photo4 from "../../public/assets/frontpageimages/4.png";

const AdSection = () => {
  return (
    <div>
      <div className="mt-40 bg-[#f7f7f7] h-80 "></div>
      <div className="h-40 flex items-center bg-[#fdf4f3] ">
        <Container>
          <div className="grid grid-cols-4 gap-7">
            <div className="col-span-1 h-28 relative">
              <Image
                src={Photo1}
                alt="photo1"
                fill
                className="object-cover"
              ></Image>
            </div>
            <div className="col-span-1 h-28 relative">
              <Image
                src={Photo2}
                alt="photo2"
                fill
                className="object-cover"
              ></Image>
            </div>
            <div className="col-span-1 h-28 relative">
              <Image
                src={Photo3}
                alt="photo3"
                fill
                className="object-cover"
              ></Image>
            </div>
            <div className="col-span-1 h-28 relative">
              <Image
                src={Photo4}
                alt="photo4"
                fill
                className="object-cover"
              ></Image>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AdSection;
