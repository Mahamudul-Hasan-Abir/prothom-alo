import { ChevronRight } from "lucide-react";

const ApnarJonno = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2 border-t-4 pt-4 border-gray-400 mt-20">
        <div className="flex items-center gap-5 ">
          <p className="font-semibold text-xl border-b-2 border-red-600">
            পঠিত
          </p>
          <p className="font-semibold text-xl ">আলোচিত</p>
          <p className="font-semibold text-xl ">সুখবর</p>
        </div>
        <ChevronRight className="size-8 text-red-700"></ChevronRight>
      </div>
      <div className="border-b border-gray-600 w-full"></div>
      <div>
        <div className="flex items-center pb-5 border-b gap-5">
          <div className="text-6xl text-gray-400">১</div>
          <div className="text-lg ">
            {" "}
            <span className="text-red-500">উত্তরায় যুদ্ধবিমান বিধ্বস্ত</span>
            <span className="mx-2 text-lg text-gray-400 font-bold select-none">
              •
            </span>{" "}
            ‘শুধু সংসার না, আমাদের জীবনটাই অগোছালো হয়ে গেছে’
          </div>
        </div>
        <div className="flex items-center pb-5 border-b gap-5">
          <div className="text-6xl text-gray-400">২</div>
          <div className="text-lg ">
            {" "}
            পাঁচ দ্বীপরাষ্ট্রে বাড়ি কিনলেই পাবেন পাসপোর্ট, দেড় শতাধিক দেশে
            ভিসামুক্ত প্রবেশ সুবিধা
          </div>
        </div>
        <div className="flex items-center pb-5 border-b gap-5">
          <div className="text-6xl text-gray-400">৩</div>
          <div className="text-lg ">
            {" "}
            টঙ্গীতে নালায় পড়ে নিখোঁজ নারীর মরদেহ ৩ দিন পর বিল থেকে উদ্ধার
          </div>
        </div>
        <div className="flex items-center pb-5 border-b gap-5">
          <div className="text-6xl text-gray-400">৪</div>
          <div className="text-lg ">
            {" "}
            <span className="text-red-500">উত্তরায় যুদ্ধবিমান বিধ্বস্ত</span>
            <span className="mx-2 text-lg text-gray-400 font-bold select-none">
              •
            </span>{" "}
            ‘শুধু সংসার না, আমাদের জীবনটাই অগোছালো হয়ে গেছে’
          </div>
        </div>
        <div className="flex items-center pb-5 border-b gap-5">
          <div className="text-6xl text-gray-400">৫</div>
          <div className="text-lg ">
            {" "}
            ম্যানহাটানে বন্দুকধারীর হামলায় নিহত পুলিশ কর্মকর্তা বাংলাদেশি
            বংশোদ্ভূত
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApnarJonno;
