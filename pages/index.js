import Main from "./home";
import styled from "styled-components";
import AboutMe from "@/components/AboutMe/AboutMe";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";

const Section = styled.section`
  font-family: sans-serif;
  background-color: var(--backgroundcolor);
  color: var(--textcolor);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <Section>
      <Main />
      <Projects />
      <AboutMe />
      <Footer />
    </Section>
  );
}
