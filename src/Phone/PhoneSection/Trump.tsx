import EightFourComponent from "@/components/EightFourComponent/EightFourComponent";
import TrumpImage from "../../../public/assets/frontpageimages/trump2.png";
const Trump = () => {
  return (
    <EightFourComponent
      title=" থাইল্যান্ড–কম্বোডিয়ার প্রধানমন্ত্রীর সঙ্গে ট্রাম্পের ফোনালাপ, কী কথা হলো"
      description="লড়াই না থামলে দুই দেশের সঙ্গে যুক্তরাষ্ট্রের বাণিজ্য চুক্তির অগ্রগতি হবে না বলে ইঙ্গিত দিয়েছেন ডোনাল্ড ট্রাম্প।"
      imageAlt="trump"
      imageSrc={TrumpImage}
      timestamp="২ ঘণ্টা আগে"
    ></EightFourComponent>
  );
};

export default Trump;
