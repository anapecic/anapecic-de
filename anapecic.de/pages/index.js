import Main from "./home";
import styled from "styled-components";

const Body = styled.section`
  font-family: Carlito, sans-serif;
  background-color: var(--backgroundcolor);
  color: var(--textcolor);
  display: grid;
  grid-template-columns: auto minmax(0, 814px) auto;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export default function Home() {
  return (
    <Body>
      <Main />
    </Body>
  );
}
