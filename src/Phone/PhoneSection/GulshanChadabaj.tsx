import BiSectionVid from "@/components/BiSection/BiSectionVid";
import Gulshan from "../../../public/assets/frontpageimages/gulshan-chadabaj.png";
import Bipasha from "../../../public/assets/frontpageimages/bipasha.png";

const GulshanChadabaj = () => {
  return (
    <BiSectionVid
      LeftImage={Gulshan}
      LeftTitle=" প্রথমে পুলিশ নিয়ে বাসায়, পরে হুমকি দিয়ে ১০ লাখ টাকা চাঁদা নেন বৈষম্যবিরোধী নেতারা"
      LeftTime={"৭ ঘণ্টা আগে"}
      RightImage={Bipasha}
      RightTitle=" যৌনকর্মী থেকে ‘আশিকি ২’-এর লেখক, সিনেমাকেও হার মানায় তাঁর গল্প"
      RightTime={"১ ঘণ্টা আগে"}
      LeftAlt="প্রথমে পুলিশ"
      RightAlt="যৌনকর্মী"
    ></BiSectionVid>
  );
};

export default GulshanChadabaj;
