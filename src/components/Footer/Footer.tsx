import Image from "next/image";
import Container from "../Container/Container";
import FooterLogo from "../../../public/assets/FooterLogo.png";
import FacebookIcon from "./FacebookIcon";

import InstagramIcon from "./InstagramIcon";
import TwitterIcon from "./TwitterIcon";
import YouTubeIcon from "./YouTubeIcon";
import PlayStoreLogo from "./PlayStoreLogo";
import AppStoreLogo from "./AppStoreLogo";

const Footer = () => {
  return (
    <Container>
      <div>
        <div className="w-full justify-center items-center flex border-t mb-8">
          <div className=" w-full flex items-center lg:justify-start justify-center">
            <div className="h-16 w-64 relative">
              <Image
                src={FooterLogo}
                alt="footer logo"
                fill
                className="object-contain"
              ></Image>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-6 text-sm font-light h-20 mb-4 border-b">
          <p>নাগরিক সংবাদ</p>

          <p>কিশোর আলো</p>
          <p>বিজ্ঞানচিন্তা</p>

          <p>বন্ধুসভা</p>
          <p>চিরন্তন ১৯৭১</p>
          <p>ইপেপার</p>
          <p>প্রথমা</p>
          <p>মোবাইল ভ্যাস</p>
          <p className="col-span-2">প্রথম আলো ট্রাস্ট</p>
        </div>
      </div>
      {/* Social Media */}
      <div className="flex flex-col md:flex-col lg:flex-row lg:justify-between lg:items-start border-b lg:border-b lg:border-t-0 lg:border-x-0 lg:pb-5 mb-0 ">
        <div className="text-center flex flex-col gap-4 pb-5 mb-5 md:border-b border-b lg:border-b-0 lg:mb-0 lg:pb-0 ">
          <p className="text-xs text-gray-500">অনুসরণ করুন</p>
          <div className="flex gap-5 justify-center ">
            <FacebookIcon />

            <InstagramIcon />
            <TwitterIcon />
            <YouTubeIcon />
            {/* <GoogleNewsIcon /> */}
          </div>
        </div>
        <div className="text-center flex flex-col gap-4 pb-5 mb-5  lg:mt-0 lg:mb-0 lg:pb-0 ">
          <p className="text-xs text-gray-500">মোবাইল অ্যাপস ডাউনলোড করুন</p>
          <div className="flex gap-5 justify-center">
            <PlayStoreLogo className="border rounded-sm" />
            <AppStoreLogo className="border rounded-sm" />
          </div>
        </div>
      </div>
      {/* prothom alo part */}
      <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 py-4 items-center border-b">
        <a className="hover:underline">প্রথম আলো</a>
        <span className="mx-2 text-lg font-bold select-none">•</span>
        <a className="hover:underline">বিজ্ঞাপন</a>
        <span className="mx-2 text-lg font-bold select-none">•</span>
        <a className="hover:underline">সার্কুলেশন</a>
        <span className="mx-2 text-lg font-bold select-none">•</span>
        <a className="hover:underline">শর্তাবলি ও নীতিমালা</a>
        <span className="mx-2 text-lg font-bold select-none">•</span>
        <a className="hover:underline">গোপনীয়তা নীতি</a>
        <span className="mx-2 text-lg font-bold select-none">•</span>
        <a className="hover:underline">যোগাযোগ</a>
        <span className="mx-2 text-lg font-bold select-none">•</span>
        <a className="hover:underline">নিউজলেটার</a>
      </div>
      <div className="text-xs text-gray-500 flex justify-center items-center gap-5 py-4">
        <div className="border-r-2 pr-5">
          <p>স্বত্ব © ১৯৯৮-২০২৫ প্রথম আলো</p>
        </div>
        <div>
          <p>সম্পাদক ও প্রকাশক: মতিউর রহমান</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
