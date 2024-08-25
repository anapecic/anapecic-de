import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledFooterWrapper = styled.div`
  background: #778da9;
  color: #e0e1dd;
  width: 100%;
  display: flex;
`;

// const StyledFlexColumn = styled.div`
//   display: flex;
//   padding: 1rem;
//   flex-direction: column;
// `;

const StyledFlexRow = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;
`;

// const StyledLink = styled(Link)`
//   color: #e0e1dd;
//   text-decoration: none;
//   padding-right: 1rem;
// `;

export default function Footer() {
  return (
    <StyledFooterWrapper>
      <StyledFlexRow>
        <SocialIcon
          platform="LinkedIn"
          imgSrc="/LinkedIn-n.png"
          href="/"
          desc="Ana Pecic"
        />
        <SocialIcon
          platform="Xing"
          imgSrc="/xing-n.png"
          href="/"
          desc="Ana Pecic"
        />
        <SocialIcon
          platform="Github"
          imgSrc="/github-n.png"
          href="/"
          desc="anapecic"
        />
        <StyledLink href="/impressum" style={{ fontSize: "14px" }}>
          Impressum
        </StyledLink>
        <StyledLink href="/datenschutz" style={{ fontSize: "14px" }}>
          Datenschutz
        </StyledLink>
      </StyledFlexRow>
    </StyledFooterWrapper>
  );
}

//move to different file

const StyledSocialP = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  padding-left: 5px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: #e0e1dd;
  text-decoration: none;
  padding-right: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

function SocialIcon({ platform, imgSrc, href, desc }) {
  return (
    <StyledLink href={href} style={{ display: "flex" }}>
      <Image
        width={15}
        height={15}
        alt={`Social Icon ${platform}`}
        src={imgSrc}
      />
      <StyledSocialP>{desc}</StyledSocialP>
    </StyledLink>
  );
}
