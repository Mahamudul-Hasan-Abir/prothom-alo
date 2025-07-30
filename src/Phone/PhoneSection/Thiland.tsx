import RedEightFourComponent from "@/components/EightFourComponent/RedEightFourComponent";
import Strike from "../../../public/assets/frontpageimages/strike.png";
const Thiland = () => {
  return (
    <RedEightFourComponent
      redTitle="মতামত"
      subtitle=" থাই-কম্বোডিয়ার সামরিক শক্তি পরীক্ষায় যুক্তরাষ্ট্র-চীন যেভাবে যুক্ত"
      description="থাইল্যান্ড ও কম্বোডিয়ার মধ্যে নতুন করে সংঘাত দেখা দিয়েছে। দুই দেশের মধ্যে যুদ্ধে সামরিক শক্তিতে কে বেশি এগিয়ে? সেখানে যুক্তরাষ্ট্র ও চীনের সংশ্লিষ্টতা কেমন?"
      imageAlt="Strike"
      imageSrc={Strike}
      timestamp="৬ ঘণ্টা আগে"
    ></RedEightFourComponent>
  );
};

export default Thiland;
