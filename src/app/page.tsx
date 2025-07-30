import Container from "@/components/Container/Container";
import AdSection from "@/Sections/AdSection";
import ApnarJonnoSection from "@/Sections/ApnarJonnoSection";
import Bangladesh from "@/Sections/Bangladesh";
import Business from "@/Sections/Business";
import Entertainment from "@/Sections/Entertainment";
import FourSection from "@/Sections/FourSection";
import Life from "@/Sections/Life";
import MainSection from "@/Sections/MainSection";
import Onnanno from "@/Sections/Onnanno";
import Opinion from "@/Sections/Opinion";
import SecondFourSection from "@/Sections/SecondFourSection";
import Sports from "@/Sections/Sports";
import World from "@/Sections/World";
import LazySection from "@/components/LazySection";
import TabletHero from "@/Phone/PhoneSection/HeroSection";
import BlankSection from "@/Phone/PhoneSection/BlankSection";
import Younuse from "@/Phone/PhoneSection/Younuse";
import JulyKotha from "@/Phone/PhoneSection/JulyKotha";
import Trump from "@/Phone/PhoneSection/Trump";
import UttorayBiman from "@/Phone/PhoneSection/UttorayBiman";
import MetroBi from "@/Phone/PhoneSection/MetroBi";
import Thiland from "@/Phone/PhoneSection/Thiland";
import Shorker from "@/Phone/PhoneSection/Shorker";
import Chadabaj from "@/Phone/PhoneSection/Chadabaj";
import GulshanChadabaj from "@/Phone/PhoneSection/GulshanChadabaj";
import Adalot from "@/Phone/PhoneSection/Adalot";
import Hujur from "@/Phone/PhoneSection/Hujur";
import NationalTreaty from "@/Phone/PhoneSection/NationalTreaty";
import EktuThamun from "@/Phone/PhoneSection/EktuThamun";
import Bonjobi from "@/Phone/PhoneSection/Bonjobi";
import Animation from "@/Phone/PhoneSection/Animation";
import ApnarJonno from "@/Phone/PhoneSection/ApnarJonno";
import Halfashon from "@/Phone/PhoneSection/Halfashon";
import BangladeshPhone from "@/Phone/PhoneSection/BangladeshPhone";
import Business2 from "@/Phone/PhoneSection/Business";
import Bitti from "@/Phone/PhoneSection/Bitti";
import Chakri from "@/Phone/PhoneSection/Chakri";
import Tech from "@/Phone/PhoneSection/Tech";
import Gedget from "@/Phone/PhoneSection/Gedget";
import OnnoAlo from "@/Phone/PhoneSection/OnnoAlo";
import Porobash from "@/Phone/PhoneSection/Porobash";
import OnnannoPhone from "@/Phone/PhoneSection/OnnannoPhone";

export default function Home() {
  return (
    <div>
      <div className="hidden lg:block">
        <Container>
          <MainSection></MainSection>
        </Container>
        <AdSection></AdSection>
        <Container>
          <ApnarJonnoSection></ApnarJonnoSection>
        </Container>
        <LazySection>
          <Container>
            <Sports></Sports>
          </Container>
        </LazySection>
        <LazySection>
          <Container>
            <Bangladesh></Bangladesh>
          </Container>
        </LazySection>
        <LazySection>
          <Container>
            <World></World>
          </Container>
        </LazySection>
        <LazySection>
          <Container>
            <Entertainment></Entertainment>
          </Container>
        </LazySection>
        <LazySection>
          <Container>
            <Life></Life>
          </Container>
        </LazySection>
        <LazySection>
          <Container>
            <Opinion></Opinion>
          </Container>
        </LazySection>
        <LazySection>
          <Container>
            <Business></Business>
          </Container>
        </LazySection>
        <LazySection>
          <Container>
            <FourSection></FourSection>
          </Container>
        </LazySection>
        <LazySection>
          <Container>
            <SecondFourSection></SecondFourSection>
          </Container>
        </LazySection>
        <LazySection>
          <Container>
            <Onnanno></Onnanno>
          </Container>
        </LazySection>
      </div>
      <div className="block lg:hidden">
        <Container>
          <TabletHero></TabletHero>
        </Container>
        <Container>
          <BlankSection></BlankSection>
        </Container>
        <Container>
          <Younuse></Younuse>
        </Container>
        <Container>
          <JulyKotha></JulyKotha>
        </Container>
        <Container>
          <Trump></Trump>
        </Container>
        <Container>
          <UttorayBiman></UttorayBiman>
        </Container>
        <Container>
          <MetroBi></MetroBi>
        </Container>
        <Container>
          <Thiland></Thiland>
        </Container>
        <Container>
          <Shorker></Shorker>
        </Container>
        <Container>
          <Chadabaj></Chadabaj>
        </Container>
        <Container>
          <BlankSection></BlankSection>
        </Container>
        <Container>
          <GulshanChadabaj></GulshanChadabaj>
        </Container>
        <Container>
          <Adalot></Adalot>
        </Container>
        <Container>
          <Hujur></Hujur>
        </Container>
        <Container>
          <NationalTreaty></NationalTreaty>
        </Container>
        <Container>
          <EktuThamun></EktuThamun>
        </Container>
        <Container>
          <Bonjobi></Bonjobi>
        </Container>
        <Container>
          <Animation></Animation>
        </Container>
        <Container>
          <ApnarJonno></ApnarJonno>
        </Container>
        <Container>
          <Halfashon></Halfashon>
        </Container>
        <Container>
          <BangladeshPhone></BangladeshPhone>
        </Container>
        <Container>
          <Business2></Business2>
        </Container>
        <Container>
          <Bitti></Bitti>
        </Container>
        <Container>
          <Chakri></Chakri>
        </Container>
        <Container>
          <Chakri></Chakri>
        </Container>
        <Container>
          <Tech></Tech>
        </Container>
        <Container>
          <Gedget></Gedget>
        </Container>
        <Container>
          <OnnoAlo></OnnoAlo>
        </Container>
        <Container>
          <Porobash></Porobash>
        </Container>
        <Container>
          <OnnannoPhone></OnnannoPhone>
        </Container>
      </div>
    </div>
  );
}
