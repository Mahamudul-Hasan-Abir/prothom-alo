import Poster from "@/components/Poster/Poster";
import ChakriImage from "../../../public/assets/frontpageimages/chakri1.png";
const Chakri = () => {
  return (
    <Poster
      sectionTitle="চাকরি"
      imageSrc={ChakriImage}
      imageAlt="Chakri"
      posterItems={[
        "  বস্ত্র অধিদপ্তরে বড় নিয়োগ, চাকরির সুযোগ ১৯০ জনের",
        "  ইসলামিক ফাউন্ডেশন বিশাল নিয়োগ, পদ ৩৬৩",
        " শিক্ষা ও চিকিৎসার দুটি বিশেষ বিসিএস দ্রুত শেষ করতে চায় সরকার",
      ]}
    ></Poster>
  );
};

export default Chakri;
