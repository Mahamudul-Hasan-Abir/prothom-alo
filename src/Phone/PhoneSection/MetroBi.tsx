import BiSection from "@/components/BiSection/BiSection";
import Metro from "../../../public/assets/frontpageimages/Metro.png";
import Ear from "../../../public/assets/frontpageimages/ear.png";

const MetroBi = () => {
  return (
    <BiSection
      LeftImage={Metro}
      LeftTitle="কমলাপুর–বিমানবন্দর ও সাভার–ভাটারা পথে মেট্রোর ব্যয় দাঁড়াবে ২ লাখ কোটি টাকা, কী ভাবছে সরকার"
      LeftTime={"৩ ঘণ্টা আগে"}
      RightImage={Ear}
      RightTitle="কান পেতে শুনুন: আপনার স্বাস্থ্য সম্পর্কে গুরুত্বপূর্ণ তথ্য"
      RightTime={"১১ মিনিট আগে"}
      LeftAlt="Metro"
      RightAlt="Ear"
    />
  );
};

export default MetroBi;
