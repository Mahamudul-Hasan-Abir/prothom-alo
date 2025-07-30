import Container from "@/components/Container/Container";
import ImageAsset from "../../../public/assets/frontpageimages/asadujjaman.png";
import SinglePageImage from "../../../public/assets/frontpageimages/singePage.png";
import Iddris from "../../../public/assets/frontpageimages/iddris.png";
import Iddris2 from "../../../public/assets/frontpageimages/iddriss3.png";
import Priojon from "../../../public/assets/frontpageimages/priojon.png";
import Navy from "../../../public/assets/frontpageimages/navy.png";
import UKren from "../../../public/assets/frontpageimages/ukren.png";
import Russia from "../../../public/assets/frontpageimages/russia.png";

import Subscribe from "../../../public/assets/frontpageimages/subscribe.png";

import Image from "next/image";
import GoogleNewsIcon from "@/components/Footer/GoogleNewsIcon";
const SinglePage = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-5 ">
        <div className="lg:col-span-7 md:col-span-12 sm:col-span-12 col-span-12">
          <h4 className="text-[#0673e6] border-b-2 text-lg border-[#0673e6] font-semibold w-fit">
            বাংলাদেশ
          </h4>
          <div>
            <h1 className="mt-10 md:mt-5 text-3xl font-semibold">
              আসামি শতবর্ষী ইদ্রিস শেখের আদালতে হাজিরা ও প্রিজন ভ্যানে যাত্রা
            </h1>
            <div className="border-b pb-2">
              <div className="h-24 w-full relative ">
                <Image
                  src={ImageAsset}
                  alt="demo-image"
                  fill
                  className="object-cover"
                ></Image>
              </div>
            </div>
            <div className="h-[414px] w-full relative ">
              <Image
                src={SinglePageImage}
                alt="demo-image"
                fill
                className="object-cover"
              ></Image>
            </div>
            <div className="pb-2 border-b">
              <p className="text-gray-500 mt-2">
                ইদ্রিস শেখকে প্রিজন ভ্যানে তোলার জন্য নিয়ে যাচ্ছে পুলিশ।
                মঙ্গলবার ঢাকার আদালত প্রাঙ্গণে{" "}
                <span className="text-red-500">|</span> ছবি:
                <br />
                <span className="text-xs"> আসাদুজ্জামান</span>
              </p>
            </div>
            <p className="mt-5">
              তখন সময় দুপুর ১২টা ৩ মিনিট। ঢাকার মহানগর দায়রা জজ আদালতের তৃতীয়
              তলায় ঢাকার দ্রুত বিচার ট্রাইব্যুনাল-১–এর এজলাস কক্ষ থেকে একজন
              বৃদ্ধ ব্যক্তিকে একজন পুলিশ সদস্য হাত ধরে সিঁড়ির কাছে নিয়ে যেতে
              থাকেন। সেই বৃদ্ধের ডান হাতে একখানা লাঠি। লাঠির ওপর ভর দিয়ে তিনি
              সিঁড়ির কাছে যেতে থাকেন।
            </p>
            <p className="mt-5">
              সিঁড়ির কাছে যাওয়ার পর তিনি কোনোভাবেই সেই সিঁড়ি বেয়ে তৃতীয় তলা
              থেকে দ্বিতীয় তলায় আসতে পারছিলেন না। দুজন পুলিশ কনস্টেবল অশীতিপর
              এই বৃদ্ধের দুই বাহু ধরে রাখেন।
            </p>
            <p className="mt-5">
              পরে ইদ্রিস শেখের দুই বাহু ধরে দ্বিতীয় তলায় আনা হয়। তখন ইদ্রিস
              শেখ হাঁপাচ্ছিলেন। পরে দুজন কনস্টেবল আবার ইদ্রিস শেখের দুই বহু ধরে
              রাখেন। এরপর খুব সাবধানে দুই তলার সিঁড়ি দিয়ে ইদ্রিস শেখ লাঠির ওপর
              ভর করে নিচতলায় নামেন। তৃতীয় তলা থেকে নিচতলায় নামতে ইদ্রিস শেখের
              সময় লেগেছে পাঁচ থেকে সাত মিনিট। ইদ্রিস শেখকে যখন নিচতলার সিঁড়ি
              দিয়ে হাজতখানার সামনে আনা হয়, তখন তাঁর ছেলে বাবুল শেখ কেঁদে
              ফেলেন।
            </p>
            <p className="mt-5">
              বাবুল শেখ তখন চিৎকার দিয়ে বলে ওঠেন, ‘আমার বাবার বয়স এখন ১২০ বছর।
              এই ১২০ বছর বয়সেও আমার বাবাকে জেলের ঘানি টানতে হবে।’
            </p>
            <div className="h-[414px] w-full relative ">
              <Image
                src={Iddris}
                alt="Iddris"
                fill
                className="object-cover"
              ></Image>
            </div>
            <div className="pb-2 border-b">
              <p className="text-gray-500 mt-2">
                প্রিজন ভ্যানে ইদ্রিস শেখ। মঙ্গলবার ঢাকার আদালত প্রাঙ্গণে
                <span className="text-red-500">|</span>
                <br />
                <span className="text-xs"> ছবি: আসাদুজ্জামান</span>
              </p>
            </div>
            <p className="mt-5">
              ইদ্রিস শেখ যখন হাজতখানার ভেতরে ঢুকতে থাকেন, তখন তিনিও আবেগতাড়িত
              হয়ে পড়েন। ছেলেকে দেখে কাঁদতে থাকেন। নিজেই তখন বলছিলেন, ‘আমার
              বয়স এখন ১২০ বছর। এই বয়সেও আমাকে জেলে যেতে হচ্ছে। আমি ন্যায্য
              বিচার পাইলাম না।’
            </p>
            <p className="mt-5">
              ইদ্রিস শেখ হাজতখানার ভেতরে ঢুকে যান। তখন হাজতখানার সামনেই অপেক্ষা
              করতে থাকেন তাঁর ছেলে বাবুল শেখ।
            </p>
            <p className="mt-5">
              বাবুল তখন প্রথম আলোকে বলেন, ‘আমারই বয়স এখন ৭০ বছর। আমরা পাঁচ
              ভাই–বোন ছিলাম। আমার আরও তিন ভাই মারা গেছে। আমার বাবার বয়সী কোনো
              লোক এলাকায় বেঁচে নেই। বহু বছর আগে একটি খুনের মামলায় আমার বাবাকে
              জড়ানো হয়েছিল। সেই মামলার ঘানি টেনে চলেছেন উনি।’
            </p>
            <p className="mt-5">
              ইদ্রিস শেখ যখন হাজতখানার ভেতরে, তখন হাজতখানার বাইরে পায়চারি করতে
              থাকেন ছেলে বাবুল শেখ। বৃদ্ধ বাবাকে কখন কারাগারে নিয়ে যাওয়া হবে,
              তিনি বাবার সঙ্গে কথা বলবেন, সেই অপেক্ষার পালা শুরু হয় বাবুল
              শেখের।
            </p>
            <p className="mt-5">
              এ সময় বাবুল শেখ কাঁদতে কাঁদতে বলেন, ‘আমার বাবা তো বাড়িতেই ঠিকমতো
              চলতে-ফিরতে পারে না। কারাগারে গিয়ে আমার বাবা ক্যামনে থাকবেন, জানি
              না।’
            </p>
            <div className="h-[414px] w-full relative ">
              <Image
                src={Priojon}
                alt="Iddris"
                fill
                className="object-cover"
              ></Image>
            </div>
            <div className="pb-2 border-b">
              <p className="text-gray-500 mt-2">
                প্রিজন ভ্যানে ইদ্রিস শেখ। মঙ্গলবার ঢাকার আদালত প্রাঙ্গণে
                <span className="text-red-500">|</span>
                <br />
                <span className="text-xs"> ছবি: আসাদুজ্জামান</span>
              </p>
            </div>
            <h3 className="text-lg font-semibold mt-10">
              কী মামলা ইদ্রিস শেখের বিরুদ্ধে?
            </h3>
            <p className="mt-5">
              মামলার নথিপত্রের তথ্য বলছে, ইদ্রিস শেখদের গ্রামের বাড়ি
              মাদারীপুরের রাজৈর থানার শেখেরটেক এলাকায়। ২২ বছর আগে সেখানকার
              ইউনিয়ন পরিষদ নির্বাচনের সময় জনৈক শামসুল হক হাওলাদার ও সিরাজুল হক
              মোল্লার পরিবারের মধ্যে বিরোধ ছিল। নির্বাচনে প্রার্থী ছিলেন শামসুল
              হক হাওলাদার। পূর্ববিরোধ ও নির্বাচনকে কেন্দ্র করে ২০০৩ সালের ১১
              ফেব্রুয়ারি শেখেরটেক এলাকায় শামসুল হক হাওলাদার ও সিরাজুল হক
              মোল্লার অনুসারীদের মধ্যে সংঘর্ষ হয়। শামসুল হক হাওলাদারের লোকজন ৩০
              থেকে ৩৫ জনকে গুলি করে। ঘটনাস্থলেই সৈয়দ আলী ও সুলেমান মোল্লা নামে
              দুজন নিহত হন। গুরুতর জখম হন আরও ৩০ জন। এই ঘটনায় সৈয়দ আলী ও
              সুলেমান মোল্লার পরিবার রাজৈর থানায় একটি হত্যা মামলা দায়ের করে।
              এই মামলাটি তদন্ত করে সে বছরের আগস্ট মাসে শামসুল হক হাওলাদারসহ ৩০
              জনের বিরুদ্ধে আদালতে অভিযোগপত্র জমা দেয় পুলিশ। সেই অভিযোগপত্র
              আমলে নিয়ে আসামিদের বিরুদ্ধে ২০০৫ সালের ১০ নভেম্বর মাদারীপুরের
              আদালত অভিযোগ গঠন করেন। ২০০৯ সালে আওয়ামী লীগ সরকার ক্ষমতায় এলে
              ২০১০ সালে মামলাটি চাঞ্চল্যকর মামলা হিসেবে দ্রুত বিচার
              ট্রাইব্যুনালে পাঠানোর সিদ্ধান্ত হয়। স্বরাষ্ট্র মন্ত্রণালয়ের
              গেজেট হওয়ার পর ২০১০ সালে ঢাকার দ্রুত বিচার ট্রাইবুনাল-১ আদালতে
              বদলি হয়। প্রায় পাঁচ বছর সাক্ষ্য গ্রহণ ও যুক্তি–তর্ক শুনানি শেষে
              ২০১৫ সালের ২৯ অক্টোবর রায় দেন বিচারক শাহেদ নুর উদ্দিন। রায়ে এ
              মামলায় চারজনকে মৃত্যুদণ্ড দেওয়া হয়, যাবজ্জীবন কারাদণ্ড দেওয়া
              হয় একজনকে। আর ইদ্রিস শেখসহ নয়জনকে দেওয়া হয় ১০ বছর করে কারাদণ্ড।
              ইদ্রিস শেখের বিরুদ্ধে গুরুতর জখম করার অভিযোগ আনা হয়। রায়ের বিবরণ
              অনুযায়ী, রায়ের দিন ইদ্রিস শেখ আদালতে উপস্থিত ছিলেন।
            </p>
            <p className="mt-5">
              ইদ্রিস শেখের আইনজীবী রফিকুল ইসলাম প্রথম আলোকে বলেন, ‘আমার মক্কেল
              একজন অতিশয় বৃদ্ধ মানুষ। রাজৈর থানার এই খুনের মামলায় বিচারিক
              আদালতের দেওয়া রায় বহাল রেখেছেন হাইকোর্ট বিভাগ। হাইকোর্ট বিভাগের
              রায় চ্যালেঞ্জ করতে চান ইদ্রিস শেখ। কিন্তু সে জন্য ইদ্রিস শেখসহ
              সাতজন আসামি আজ আদালতে আত্মসমর্পণ করেছেন। আদালত তাঁদের কারাগারে
              পাঠানোর আদেশ দিয়েছেন। কারাগারে থেকেই জেল আপিল করবেন বৃদ্ধ ইদ্রিস
              শেখ।’
            </p>
            <div className="h-[414px] w-full relative ">
              <Image
                src={Iddris2}
                alt="Iddris"
                fill
                className="object-cover"
              ></Image>
            </div>
            <div className="pb-2 border-b">
              <p className="text-gray-500 mt-2">
                শতবর্ষী ইদ্রিস শেখকে প্রিজন ভ্যানে তোলার জন্য নিয়ে যাচ্ছে
                পুলিশ। মঙ্গলবার ঢাকার আদালত প্রাঙ্গণে
                <span className="text-red-500">|</span>
                <br />
                <span className="text-xs"> ছবি: আসাদুজ্জামান</span>
              </p>
            </div>
            <h3 className="text-lg font-semibold mt-10">
              প্রিজন ভ্যানে ইদ্রিস শেখের কান্না
            </h3>
            <p className="mt-5">
              দুপুরে ইদ্রিস শেখ হাজতখানার ভেতরে ঢুকে যাওয়ার পর তাঁর ছেলে বাবুল
              শেখ বারবার সেখানে দায়িত্বে থাকা পুলিশ কর্মকর্তাদের কাছ থেকে বাবার
              খবর নিতে থাকেন। বাবা কী খাচ্ছেন, কীভাবে আছেন, সেই সব খবর জানতে
              থাকেন ছেলে বাবুল শেখ।
            </p>
            <p className="mt-5">
              দুপুর গড়িয়ে বিকেল হয়। কিছুক্ষণ পরপরই হাজতখানার ভেতর থেকে
              আসামিদের বের করে প্রিজন ভ্যানে ঢোকাতে দেখেন বাবুল শেখ। তখন বাবুল
              শেখের চোখ খুঁজে ফেরে তাঁর বাবাকে। বাবুল বারবার হাজতখানার সামনেই
              পায়চারি করতে থাকেন। কৃষক ইদ্রিস শেখের ছেলে বাবুল শেখও কৃষক। পরনে
              তাঁর একটি সাদা রঙের পাঞ্জাবি আর লুঙ্গি। বিকেল পাঁচটার পর হাজতখানার
              সামনে আর কোনো প্রিজন ভ্যান দেখতে পাননি বাবুল। পরে গিয়ে হাজতখানার
              কর্মকর্তাদের কাছে জানতে চান, তাঁর বাবা ইদ্রিস শেখকে কি নিয়ে
              যাওয়া হয়েছে? পুলিশ কর্মকর্তার কাছ থেকে ‘না’ সূচক জবাব পেয়ে হাঁপ
              ছেড়ে বাঁচেন তিনি।
            </p>
            <p className="mt-5">
              সন্ধ্যা ৬টা ১৫ মিনিটের দিকে একটি প্রিজন ভ্যান হাজতখানার সামনের
              চত্বরে এসে থামে। হাজতখানার ভেতর থেকে দুজন পুলিশ সদস্য হাত ধরে
              ইদ্রিস শেখকে প্রিজন ভ্যানের কাছে নিয়ে আসেন। তখন দেখা যায়, ছেলে
              বাবুল বাবার হাতে একখানা চিরকুট দিয়েছেন। বাঁ হাত দিয়ে সেই চিরকুট
              গ্রহণ করেন ইদ্রিস শেখ।
            </p>
            <div className="flex items-center my-10 gap-2">
              <GoogleNewsIcon></GoogleNewsIcon>
              <p className="text-lg font-semibold text-blue-500">
                প্রথম আলোর খবর পেতে গুগল নিউজ চ্যানেল ফলো করুন
              </p>
            </div>
            <div className="h-[550px] w-full relative my-10">
              <Image
                src={Subscribe}
                alt="Iddris"
                fill
                className="object-fill"
              ></Image>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 md:col-span-12 sm:col-span-12 col-span-12">
          <div className="xl:px-20  lg:px-10">
            <div className="flex justify-start">
              <h4 className="text-black border-b-2  border-black font-semibold w-fit">
                রাশিয়া ইউক্রেন সংঘাত নিয়ে আরও পড়ুন
              </h4>
            </div>
            <div className="mt-10 border-b pb-5">
              <h3 className="font-semibold text-lg">
                {" "}
                পুতিনকে ট্রাম্পের নতুন সময়সীমার পরপরই রাশিয়ার হামলা, ইউক্রেনে
                নিহত ২৫
              </h3>
              <div className="grid grid-cols-12 gap-2">
                <p className="text-sm text-gray-500 col-span-8">
                  ২৯ জুলাই ২০২৫
                </p>
                <div className="lg:h-[77px] md:h-[191px] h-[100px] relative col-span-4 w-full">
                  <Image
                    src={Russia}
                    alt="Iddris"
                    fill
                    className="object-cover"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:px-20  lg:px-10">
            <div className="mt-10 border-b pb-5">
              <h3 className="font-semibold text-lg">
                {" "}
                জেলেনস্কির মসনদ নাড়িয়ে দিয়েছে যে আন্দোলন
              </h3>
              <div className="grid grid-cols-12 gap-2">
                <p className="text-sm text-gray-500 col-span-8">
                  ২৮ জুলাই ২০২৫
                </p>
                <div className="lg:h-[77px] md:h-[191px] h-[100px] relative col-span-4 w-full">
                  <Image
                    src={UKren}
                    alt="Iddris"
                    fill
                    className="object-cover"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:px-20  lg:px-10">
            <div className="mt-10 border-b pb-5">
              <h3 className="font-semibold text-lg">
                {" "}
                ‘নিরাপত্তার কারণে’ নৌবাহিনীর বার্ষিক কুচকাওয়াজ বাতিল রাশিয়ার
              </h3>
              <div className="grid grid-cols-12 gap-2">
                <p className="text-sm text-gray-500 col-span-8">
                  ২৭ জুলাই ২০২৫
                </p>
                <div className="lg:h-[77px] md:h-[191px] h-[100px] relative col-span-4 w-full">
                  <Image
                    src={Navy}
                    alt="Iddris"
                    fill
                    className="object-cover"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SinglePage;
