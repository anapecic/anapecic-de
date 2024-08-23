import Circle from "@/components/Svg/Circle";
import styled from "styled-components";
import Image from "next/image";

const AboutRechts = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    width: 50%;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 50% 50% 10% 10% / 33% 33% 0% 0%;
  padding-bottom: 1rem;
  @media (min-width: 700px) {
  }
`;

const AboutHeadline = styled.div`
  position: relative;
  padding-top: 1rem;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  margin: 0;
`;

const AboutWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
  background: #9b4819;
  color: #f4f1e8;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;
  @media (min-width: 700px) {
    flex-wrap: nowrap;
    width: 93%;
  }
`;

const StyledText = styled.p`
  line-height: 1.5;
  font-size: 1rem;
`;

const AboutLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 700px) {
    padding-right: 1rem;
    width: auto;
  }
`;

export default function AboutMe() {
  return (
    <>
      <AboutWrapper id="about-me">
        <AboutLinks>
          <StyledImage
            src="/Ana und Patchy cute.jpg"
            width={300}
            height={350}
            alt="Ana und Hund"
            style={{
              objectFit: "cover",
            }}
          />
        </AboutLinks>
        <AboutRechts>
          <AboutHeadline>
            <AboutTitle>About Me</AboutTitle>
          </AboutHeadline>
          <StyledText>
            Diving headfirst into the world of frontend web development at the
            moment. Currently, I&apos;m sharpening my skills at
            neuefische&rsquo;s web development bootcamp, and I&apos;m all about
            creating sleek, responsive web interfaces.
            <br />
            <br />
            With a solid background in digital marketing, large-scale social
            media projects, and influencer management, I&apos;m super excited to
            bring that experience into tech.
          </StyledText>
        </AboutRechts>
      </AboutWrapper>
    </>
  );
}
