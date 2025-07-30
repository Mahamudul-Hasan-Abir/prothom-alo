import Poster from "@/components/Poster/Poster";
import BittiImage from "../../../public/assets/frontpageimages/bitti.png";
const Bitti = () => {
  return (
    <Poster
      sectionTitle="শিক্ষা"
      imageSrc={BittiImage}
      imageAlt="Bitti"
      posterItems={[
        " অষ্টম শ্রেণিতে আবারও বৃত্তি পরীক্ষা ফিরছে, আছে প্রশ্নও",
        " জার্মানির ডাড স্কলারশিপে স্নাতকোত্তর, মাসে ৯৯২ ইউরোর সঙ্গে বিমান টিকিট-বাড়িভাড়াসহ নানা সুবিধা",
        " নটর ডেম কলেজে: একাদশে ভর্তিতে যোগ্যতার শর্ত প্রকাশ, আসন ৩২৯০ টি",
      ]}
    ></Poster>
  );
};

export default Bitti;
