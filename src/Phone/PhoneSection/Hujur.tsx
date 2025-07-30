import BiSectionVid from "@/components/BiSection/BiSectionVid";
import HujurImage from "../../../public/assets/frontpageimages/Hujur.png";
import LordClive from "../../../public/assets/frontpageimages/lordClive.png";

const Hujur = () => {
  return (
    <BiSectionVid
      LeftImage={HujurImage}
      LeftTitle=" খামেনিকে হত্যার হুমকি দিলেন ইসরায়েলি প্রতিরক্ষামন্ত্রী: আনাদোলু"
      LeftTime={"১ ঘণ্টা আগে"}
      RightImage={LordClive}
      RightTitle="  এক হবু সম্রাটের হত্যাই কি ডেকে এনেছিল প্রথম বিশ্বযুদ্ধ"
      RightTime={"৫ ঘণ্টা আগে"}
      LeftAlt="প্রথমে পুলিশ"
      RightAlt="যৌনকর্মী"
    ></BiSectionVid>
  );
};

export default Hujur;
