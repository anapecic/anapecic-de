import Header from "@/components/Header/Header";
import Start from "@/components/Start/Start";
import styled from "styled-components";

const MainWrapper = styled.main`
  grid-column-start: 2;
  background-color: var(--backgroundcolor);
  height: 100vh;
  font-family: Radley;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Main() {
  return (
    <MainWrapper>
      <Header />
      <Start />
    </MainWrapper>
  );
}
