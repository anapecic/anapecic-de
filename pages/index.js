import Main from "./home";
import styled from "styled-components";
import AboutMe from "@/components/AboutMe/AboutMe";

const Section = styled.section`
  font-family: sans-serif;
  background-color: var(--backgroundcolor);
  color: var(--textcolor);
  display: grid;
  grid-template-columns: auto minmax(0, 900px) auto;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export default function Home() {
  return (
    <Section>
      <Main />
      <AboutMe />
    </Section>
  );
}
