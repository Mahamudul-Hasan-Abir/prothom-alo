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

export default function Home() {
  return (
    <div>
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
  );
}
