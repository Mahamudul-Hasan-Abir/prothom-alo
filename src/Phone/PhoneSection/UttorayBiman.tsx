import RedEightFourComponent from "@/components/EightFourComponent/RedEightFourComponent";
import Upodeshta from "../../../public/assets/frontpageimages/upodeshta.png";
const UttorayBiman = () => {
  return (
    <RedEightFourComponent
      redTitle="উত্তরায় বিমান বিধ্বস্ত"
      subtitle=" আহতদের খোঁজ নিতে বার্ন ইনস্টিটিউটে প্রধান উপদেষ্টা"
      description="যুদ্ধবিমান বিধ্বস্তের ঘটনায় আহতদের চিকিৎসার খোঁজ নিতে জাতীয় বার্ন ও প্লাস্টিক সার্জারি ইনস্টিটিউটে যান অন্তর্বর্তী সরকারের প্রধান উপদেষ্টা অধ্যাপক মুহাম্মদ ইউনূস।"
      imageAlt="uttoray biman"
      imageSrc={Upodeshta}
      timestamp="১ ঘণ্টা আগে"
    ></RedEightFourComponent>
  );
};

export default UttorayBiman;
