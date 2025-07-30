import Poster from "@/components/Poster/Poster";
import Alo from "../../../public/assets/frontpageimages/onnoAlo.png";
const OnnoAlo = () => {
  return (
    <Poster
      sectionTitle="অন্য আলো"
      imageSrc={Alo}
      imageAlt="Onno Alo"
      posterItems={[
        "   ইংলিশ টিচার",
        "   কাঠখোদাইয়ে অবচেতন মনের অনুসন্ধান",
        "   গোলাম মুরশিদের আত্মকথন",
      ]}
    ></Poster>
  );
};

export default OnnoAlo;
