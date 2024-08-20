import Circle from "@/components/Svg/Circle";
import styled from "styled-components";
import Image from "next/image";

const AboutRechts = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 2rem;
`;

const AboutHeadline = styled.div`
  position: relative;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  margin: 0;
`;

const AboutWrapper = styled.section`
  display: flex;
  margin-bottom: 100px;
  margin-left: 30px;
  margin-right: 20px;
  grid-column-start: 2;
  background: #314028;
  color: #f4f1e8;
  padding: 8rem 4rem;
  border-radius: 30% 70% 72% 28% / 37% 34% 66% 63%;
  position: relative;
`;

const StyledBackground = styled.div`
  background: #9b4819;
  padding: 7rem;
  border-radius: 72% 28% 48% 52% / 41% 34% 66% 59%;
  z-index: -1;
  width: 400px;
  height: 300px;
  position: absolute;
  left: -140px;
  top: 30px;
  transform: rotate(25deg);
`;

const StyledText = styled.p`
  line-height: 1.5;
  font-size: 1rem;
`;

const AboutLinks = styled.div``;

export default function AboutMe() {
  return (
    <AboutWrapper id="about-me">
      <StyledBackground></StyledBackground>
      <AboutLinks>
        <Image
          src="/Ana und Patchy cute.jpg"
          width={300}
          height={350}
          alt="Ana und Hund"
          style={{
            borderRadius: "30% 70% 72% 28% / 37% 34% 66% 63%",
            objectFit: "cover",
          }}
        />
      </AboutLinks>
      <AboutRechts>
        <AboutHeadline className="about-headline">
          <AboutTitle>About Me</AboutTitle>
          {/* <Circle position="left: -40px; top: -45px;" scale="scale: 2.5;" /> */}
        </AboutHeadline>
        <StyledText>
          Diving headfirst into the world of frontend web development at the
          moment. Currently, I&apos;m sharpening my skills at neuefische&rsquo;s
          web development bootcamp, and I&apos;m all about creating sleek,
          responsive web interfaces.
          <br />
          <br />
          With a solid background in digital marketing, large-scale social media
          projects, and influencer management, I&apos;m super excited to bring
          that experience into tech.
        </StyledText>
      </AboutRechts>
    </AboutWrapper>
  );
}
