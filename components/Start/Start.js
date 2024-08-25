import styled, { keyframes } from "styled-components";
import Arrow from "../Svg/Svg";
import Circle from "../Svg/Circle";
import Link from "next/link";

const HeadlineWrapper = styled.div`
  position: relative;
  text-align: center;
`;

const appearText = keyframes`0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }`;

const Headline = styled.h1`
  font-family: Carlito, sans-serif;
  font-weight: normal;
  font-family: Radley;
  font-weight: normal;
  font-size: 4rem;
  animation: ${appearText} 1s linear forwards 1;
  display: inline;
`;

const Subtitle = styled.h2`
  font-family: Carlito, sans-serif;
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
  width: 70%;
`;

const KontaktBtn = styled.a`
  align-self: center;
  text-decoration: none;
  border: 2px solid #9b4819;
  background-color: #f5f9fa;
  border-radius: 50px;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #9b4819;
  font-weight: bold;
  font-family: SF, sans-serif;

  &:hover {
    background-color: #9b4819;
    color: #f5f9fa;
  }
`;

export default function Start() {
  return (
    <>
      <HeadlineWrapper>
        <Headline>Hello, I am Ana!</Headline>
      </HeadlineWrapper>
      <Subtitle>
        Web Developer in Training and Social Media Marketing Expert
      </Subtitle>
      <KontaktBtn href="/kontakt/">Kontakt</KontaktBtn>
      <Link href="#projects">
        <Arrow />
      </Link>
    </>
  );
}
