import styled, { keyframes } from "styled-components";
import Arrow from "../Svg/Svg";
import Link from "next/link";

const HeadlineWrapper = styled.div`
  position: relative;
  text-align: center;
`;

const appearText = keyframes`
  0% {
    max-width: 0;
  }
  100% {
    max-width: 100%;
  }
`;

const blinkCaret = keyframes`
  0%, 100% {
    border-right-color: transparent;
  }
  50% {
    border-right-color: black;
  }
`;

const removeCaret = keyframes`
  0% {
    border-right-color: black;
  }
  100% {
    border-right-color: transparent;
  }
`;

const Headline = styled.h1`
  font-family: serif;
  font-weight: normal;
  font-weight: normal;
  font-size: 4rem;
  animation: ${appearText} 2s steps(30, end) forwards,
    ${blinkCaret} 0.75s step-end 2s 4, ${removeCaret} 1s step-end 5s forwards;
  border-right: 2px solid black;
  margin: 0;
  display: inline;
  color: #0d1b2a;
  display: inline-block;
  max-width: 0;
  width: 100%;
  overflow: hidden;
  white-space: normal;

  @media (max-width: 750px) {
    animation: none;
    border: none;
    max-width: 100%;
  }
`;

const Subtitle = styled.h2`
  font-family: sans-serif;
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
  width: 70%;
  color: #0d1b2a;
`;

const KontaktBtn = styled.a`
  align-self: center;
  text-decoration: none;
  border: 2px solid #0d1b2a;
  background-color: #f5f5f5;
  border-radius: 50px;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #0d1b2a;
  font-weight: bold;
  font-family: SF, sans-serif;

  &:hover {
    background-color: #0d1b2a;
    color: #e0e1dd;
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
      <KontaktBtn href="mailto:ana.pecic97@gmail.com">Kontakt</KontaktBtn>
      <Link href="#projects">
        <Arrow />
      </Link>
    </>
  );
}
