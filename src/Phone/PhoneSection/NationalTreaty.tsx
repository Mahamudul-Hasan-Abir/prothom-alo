import Treaty from "../../../public/assets/frontpageimages/treaty.png";
import BenStocks from "../../../public/assets/frontpageimages/ben-stocks-2.png";
import Hujur from "../../../public/assets/frontpageimages/hujur-2.png";
import Trump from "../../../public/assets/frontpageimages/trump-3.png";
import Dollor from "../../../public/assets/frontpageimages/dollor.png";
import EightTwoSection from "@/components/EightTwoSection/EightTwoSection";

const NationalTreaty = () => {
  return (
    <div>
      <EightTwoSection
        imageAlt=" জাতীয় ঐকমত্য কমিশনের বৈঠক থেকে বিএনপির ওয়াক আউট, পরে যোগদান "
        title="  জাতীয় ঐকমত্য কমিশনের বৈঠক থেকে বিএনপির ওয়াক আউট, পরে যোগদান"
        timeStamp=" ২ ঘণ্টা আগে"
        imageSrc={Treaty}
      ></EightTwoSection>
      <EightTwoSection
        imageAlt="  স্টোকসের ‘হ্যান্ডশেকের’ প্রস্তাবে কেন রাজি হয়নি ভারত "
        title="   স্টোকসের ‘হ্যান্ডশেকের’ প্রস্তাবে কেন রাজি হয়নি ভারত"
        timeStamp=" ৩ ঘণ্টা আগে"
        imageSrc={BenStocks}
      ></EightTwoSection>
      <EightTwoSection
        imageAlt=" টানা ২৬ বছর কারাভোগ, ৬০ বছর বয়সে বিয়ের পিঁড়িতে ‘শিবির’ নাছির "
        title="   টানা ২৬ বছর কারাভোগ, ৬০ বছর বয়সে বিয়ের পিঁড়িতে ‘শিবির’ নাছির"
        timeStamp="৫ ঘণ্টা আগে"
        imageSrc={Hujur}
      ></EightTwoSection>
      <EightTwoSection
        imageAlt="  ডোনাল্ড ট্রাম্প ভুগছেন ক্রনিক ভেনাস ইনসাফিশিয়েন্সিতে, এই রোগ সম্পর্কে কতটা জানেন"
        title="  ডোনাল্ড ট্রাম্প ভুগছেন ক্রনিক ভেনাস ইনসাফিশিয়েন্সিতে, এই রোগ সম্পর্কে কতটা জানেন"
        timeStamp=" ২ ঘণ্টা আগে"
        imageSrc={Trump}
      ></EightTwoSection>
      <EightTwoSection
        imageAlt="  বিদেশি ঋণ শোধে রেকর্ড, এক বছরে ৪০৯ কোটি ডলার দিল বাংলাদেশ"
        title="  জাতীয় ঐকমত্য কমিশনের বৈঠক থেকে বিএনপির ওয়াক আউট, পরে যোগদান"
        timeStamp=" ৩ ঘণ্টা আগে"
        imageSrc={Dollor}
      ></EightTwoSection>
    </div>
  );
};

export default NationalTreaty;
