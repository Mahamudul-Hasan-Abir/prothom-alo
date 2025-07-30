import BiSectionVid from "@/components/BiSection/BiSectionVid";
import AdalotImage from "../../../public/assets/frontpageimages/adalot.png";
import Victoryfrom from "../../../public/assets/frontpageimages/victory.png";

const Adalot = () => {
  return (
    <BiSectionVid
      LeftImage={AdalotImage}
      LeftTitle=" আদালতে মুখ ঢেকে রাখার সর্বাত্মক চেষ্টা করেন ছাত্র আন্দোলনের নেতা রাজ্জাক, সাত দিন রিমান্ডে তাঁরা"
      LeftTime={"১৩ ঘণ্টা আগে"}
      RightImage={Victoryfrom}
      RightTitle=" অষ্টম শ্রেণিতে আবারও বৃত্তি পরীক্ষা ফিরছে, আছে প্রশ্নও"
      RightTime={"৩ ঘণ্টা আগে"}
      LeftAlt="আদালতে মুখ"
      RightAlt="অষ্টম শ্রেণিতে"
    ></BiSectionVid>
  );
};

export default Adalot;
