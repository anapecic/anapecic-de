import Main from "./home";
import styled from "styled-components";
import AboutMe from "@/components/AboutMe/AboutMe";

const Section = styled.section`
  font-family: sans-serif;
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
