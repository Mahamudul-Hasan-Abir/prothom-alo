import Poster from "@/components/Poster/Poster";
import Windows11 from "../../../public/assets/frontpageimages/windows11.png";
const Tech = () => {
  return (
    <Poster
      sectionTitle="প্রযুক্তি"
      imageSrc={Windows11}
      imageAlt="Windows11"
      posterItems={[
        "   উইন্ডোজ ১১ আপডেট করতে না পারার নিষেধাজ্ঞা তুলে নিয়েছে মাইক্রোসফট",
        "  উত্তর আটলান্টিক মহাসাগরে বিপুল পরিমাণ ন্যানোপ্লাস্টিকের সন্ধান",
        "  পৃথিবী থেকে ৩৭ কোটি মাইল দূরে থাকা মহাকাশযানের ক্যামেরা যেভাবে মেরামত করেছে নাসা",
      ]}
    ></Poster>
  );
};

export default Tech;
