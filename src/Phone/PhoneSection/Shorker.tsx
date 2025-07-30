import RedEightFourComponent from "@/components/EightFourComponent/RedEightFourComponent";
import Fight from "../../../public/assets/frontpageimages/fight.png";
const Shorker = () => {
  return (
    <RedEightFourComponent
      redTitle="মতামত"
      subtitle=" কোথায় দাঁড়িয়ে আছে অন্তর্বর্তী সরকার"
      description="সরকারের ভেতরে যে আরেকটি সরকার আছে, অনেক ঘটনায়ই তার প্রমাণ পাওয়া যায়। "
      imageAlt="Fight"
      imageSrc={Fight}
      timestamp="১৯ ঘণ্টা আগে"
    ></RedEightFourComponent>
  );
};

export default Shorker;
