import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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

export default function SocialIcon({ platform, imgSrc, href, desc }) {
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
