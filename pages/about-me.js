import Circle from "@/components/Svg/Circle";
import styled from "styled-components";
import Image from "next/image";

const AboutRechts = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  gap: 1rem;
`;

const AboutHeadline = styled.div`
  position: relative;
`;

const AboutTitle = styled.h2`
  font-family: Radley-italic;
  font-size: 2rem;
`;

const AboutWrapper = styled.section`
  display: flex;
  margin-bottom: 100px;
  margin-left: 30px;
  margin-right: 20px;
  gap: 1.5rem;
  grid-column-start: 2;
`;

const AboutLinks = styled.div``;

export default function AboutMe() {
  return (
    <AboutWrapper id="about-me">
      <AboutLinks>
        <Image
          src="/Ana und Patchy cute.jpg"
          width={300}
          height={400}
          alt="Ana und Hund"
          style={{
            borderRadius: "50% 50% 10% 10% / 33% 33% 0% 0%",
          }}
        />
      </AboutLinks>
      <AboutRechts>
        <AboutHeadline className="about-headline">
          <AboutTitle>About Ana Pecic</AboutTitle>
          <Circle position="left: -40px; top: -45px;" scale="scale: 2.5;" />
        </AboutHeadline>
        <p>
          Diving headfirst into the world of frontend web development at the
          moment. Currently, I&apos;m sharpening my skills at neuefische&rsquo;s
          web development bootcamp, and I&apos;m all about creating sleek,
          responsive web interfaces. With a solid background in digital
          marketing, large-scale social media projects, and influencer
          management, I&apos;m super excited to bring that experience into tech.
          <br /> <br />
          I&apos;m passionate about using HTML, CSS, and JavaScript as well as a
          number of frameworks (React.js, Angular) to build awesome user
          experiences. If you&apos;re looking for someone to craft dynamic and
          accessible websites, let&apos;s connect and make something amazing
          together!
        </p>
      </AboutRechts>
    </AboutWrapper>
  );
}
