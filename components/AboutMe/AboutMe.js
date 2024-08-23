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
  background: #314028;
  color: #f4f1e8;
  padding: 8rem 4rem;
  position: relative;
`;

// const StyledBackground = styled.div`
//   width: 100px;
//   height: 100px;
//   background: #000000;
// `;

const StyledText = styled.p`
  line-height: 1.5;
  font-size: 1rem;
`;

const AboutLinks = styled.div``;

export default function AboutMe() {
  return (
    <>
      <AboutWrapper id="about-me">
        <AboutLinks>
          <Image
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
          <AboutHeadline className="about-headline">
            <AboutTitle>About Me</AboutTitle>
            {/* <Circle position="left: -40px; top: -45px;" scale="scale: 2.5;" /> */}
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
