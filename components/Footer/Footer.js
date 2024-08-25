import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledFooterWrapper = styled.div`
  background: #314028;
  color: #f4f1e8;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledFlexColumn = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
`;

const StyledFlexRow = styled.div`
  display: flex;
  padding: 1rem;
`;

// const StyledLink = styled(Link)`
//   color: black;
//   text-decoration: none;
//   padding-right: 1rem;
// `;

export default function Footer() {
  return (
    <StyledFooterWrapper>
      <StyledFlexRow>
        <StyledLink href="/impressum" style={{ fontSize: "14px" }}>
          Impressum
        </StyledLink>
        <StyledLink href="/datenschutz" style={{ fontSize: "14px" }}>
          Datenschutz
        </StyledLink>
      </StyledFlexRow>
      <StyledFlexRow>
        {/* <p
          style={{
            fontWeight: "bold",
            margin: 0,
            marginBottom: "5px",
            fontSize: "14px",
          }}
        >
          My Socials
        </p> */}
        <SocialIcon
          platform="LinkedIn"
          imgSrc="/linkedin-n.png"
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
`;

const StyledLink = styled(Link)`
  color: #f4f1e8;
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
