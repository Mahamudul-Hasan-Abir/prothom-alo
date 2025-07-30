import Poster from "@/components/Poster/Poster";
import Dur from "../../../public/assets/frontpageimages/DurPorishor.png";
const Porobash = () => {
  return (
    <Poster
      sectionTitle="দূর পরবাস"
      imageSrc={Dur}
      imageAlt="Dur Porobash"
      posterItems={[
        "    চাকরির বাজার",
        "   পেনসিলভানিয়াতে রসায়নবিদদের ডুকা মিলনমেলা-২০২৫ ",
        "    প্রবাসীদের ভোটের অধিকার নিশ্চিত করা এখন সময়ের দাবি",
      ]}
    ></Poster>
  );
};

export default Porobash;
