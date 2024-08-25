import styled from "styled-components";

const LogoWrapper = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const LogoOutline = styled.div`
  border: 3px solid #0d1b2a;
  border-radius: 50%;
`;

const LogoMain = styled.div`
  background-color: #0d1b2a;
  padding: 0.4rem 2.5rem;
  border-radius: 50%;
  margin: 2px;
  position: relative;
`;

const Char = styled.p`
  color: #0d1b2a;
`;

const Characters = styled.p`
  position: absolute;
  color: #f4f1e8;
  font-family: Radley-italic;
  font-size: 3rem;
  top: -25px;
  left: 16px;
`;

export default function Header() {
  return (
    <LogoWrapper>
      <LogoOutline>
        <LogoMain>
          <Char>A</Char>
          <Char>P</Char>
          <Characters>AP</Characters>
        </LogoMain>
      </LogoOutline>
    </LogoWrapper>
  );
}
