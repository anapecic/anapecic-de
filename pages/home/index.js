import AboutMe from "@/components/AboutMe/AboutMe";
import Header from "@/components/Header/Header";
import Start from "@/components/Start/Start";
import Link from "next/link";
import styled from "styled-components";

const MainWrapper = styled.main`
  font-family: Radley;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
//hier wird nur Header/Logo und Start gewrappt!
export default function Main() {
  return (
    <MainWrapper>
      <Link href="/" style={{ color: "#0d1b2a" }}>
        <Header />
      </Link>
      <Start />
    </MainWrapper>
  );
}
