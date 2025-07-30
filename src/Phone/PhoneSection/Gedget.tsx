import Poster from "@/components/Poster/Poster";
import Phone from "../../../public/assets/frontpageimages/gedget.png";
const Gedget = () => {
  return (
    <Poster
      sectionTitle="গ্যাজেটস"
      imageSrc={Phone}
      imageAlt="Windows11"
      posterItems={[
        "   দ্রুত চার্জ হওয়ার পাশাপাশি ভিজলেও নষ্ট হয় না এই স্মার্টফোন",
        "  কি–বোর্ড ছাড়াই ইশারায় টাইপ করার সুযোগ দেবে এই স্মার্ট রিস্টব্যান্ড",
        "   দেশের বাজারে কোপাইলট চ্যাটবটযুক্ত নতুন দুই ল্যাপটপ",
      ]}
    ></Poster>
  );
};

export default Gedget;
