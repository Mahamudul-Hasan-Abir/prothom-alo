import HeroFourthSection from "@/widgets/HeroFourthSection";
import HeroSecondSection from "@/widgets/HeroSecondSection";
import HeroSectionMain from "@/widgets/HeroSectionMain";
import HeroThirdSeciton from "@/widgets/HeroThirdSection";
import LeftRendomText from "@/widgets/LeftRendomText";
import LeftSectionIsrail from "@/widgets/LeftSectionIsrail";
import LeftSectionJulyKotha from "@/widgets/LeftSectionJulyKotha";
import LeftSectionMain from "@/widgets/LeftSectionMain";
import LeftSectionTaijuddin from "@/widgets/LeftSectionTaijuddin";
import RightSectionAshami from "@/widgets/RightSectionAshami";
import RightSectionMain from "@/widgets/RightSectionMain";
import RightSEctionMoinuddin from "@/widgets/RightSectionMoinuddin";

const MainSection = () => {
  return (
    <div className="grid grid-cols-12 gap-2 h-screen">
      <div className="col-span-3  ">
        <LeftSectionMain></LeftSectionMain>
        <LeftSectionJulyKotha></LeftSectionJulyKotha>
        <LeftSectionIsrail></LeftSectionIsrail>
        <LeftSectionTaijuddin></LeftSectionTaijuddin>
        <LeftRendomText></LeftRendomText>
      </div>
      <div className="col-span-6   border-l-2 border-r-2 px-3">
        <HeroSectionMain></HeroSectionMain>
        <HeroSecondSection></HeroSecondSection>
        <HeroThirdSeciton></HeroThirdSeciton>
        <HeroFourthSection></HeroFourthSection>
      </div>
      <div className="col-span-3 ">
        <RightSectionMain></RightSectionMain>
        <RightSEctionMoinuddin></RightSEctionMoinuddin>
        <RightSectionAshami></RightSectionAshami>
      </div>
    </div>
  );
};

export default MainSection;
