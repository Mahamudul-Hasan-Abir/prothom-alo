import EightFourComponent from "./EightFourComponent";
import Younus from "../../../public/assets/frontpageimages/younus.png";
import Hasina from "../../../public/assets/frontpageimages/hasina.png";

const ExampleUsage = () => {
  return (
    <div className="space-y-4">
      {/* First news item */}
      <EightFourComponent
        title="গন্ডগোল লাগিয়ে নির্বাচনের আয়োজনকে ভন্ডুল করার চেষ্টা চলছে: প্রধান উপদেষ্টা"
        description="প্রধান উপদেষ্টা অধ্যাপক ইউনূস বলেন, অভ‍্যুত্থানের সব শক্তি মিলে একটি সুন্দর নির্বাচন করতে না পারলে এই মস্ত বড় সুযোগ আমাদের হাতছাড়া হয়ে যাবে।"
        imageSrc={Younus}
        imageAlt="Younus"
        timestamp="৬ ঘণ্টা আগে"
      />

      {/* Second news item */}
      <EightFourComponent
        title="নির্বাচনী পরিবেশ নিয়ে প্রধানমন্ত্রীর গুরুত্বপূর্ণ বক্তব্য"
        description="প্রধানমন্ত্রী শেখ হাসিনা বলেছেন, দেশে শান্তিপূর্ণ ও সুষ্ঠু নির্বাচন অনুষ্ঠিত হবে। তিনি সকল রাজনৈতিক দলকে নির্বাচনী পরিবেশ বজায় রাখার আহ্বান জানিয়েছেন।"
        imageSrc={Hasina}
        imageAlt="Hasina"
        timestamp="৩ ঘণ্টা আগে"
      />

      {/* Third news item with external image URL */}
      <EightFourComponent
        title="বাংলাদেশের অর্থনৈতিক উন্নয়নের নতুন মাইলফলক"
        description="দেশের অর্থনৈতিক সূচকে ইতিবাচক পরিবর্তন লক্ষ্য করা যাচ্ছে। বিশেষজ্ঞরা বলছেন, এই উন্নয়ন ধারা বজায় রাখতে হলে আরও বেশি বিনিয়োগ প্রয়োজন।"
        imageSrc="https://example.com/economy-image.jpg"
        imageAlt="Economy"
        timestamp="১ দিন আগে"
      />
    </div>
  );
};

export default ExampleUsage;
