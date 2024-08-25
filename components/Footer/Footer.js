import styled from "styled-components";
import SocialIcon from "../SocialIcon/SocialIcon";
import Link from "next/link";

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

const StyledLink = styled(Link)`
  color: #e0e1dd;
  text-decoration: none;
  padding-right: 1rem;
`;

export default function Footer() {
  return (
    <StyledFooterWrapper>
      <StyledFlexRow>
        <SocialIcon
          platform="LinkedIn"
          imgSrc="/LinkedIn-n.png"
          href="https://www.linkedin.com/in/ana-pecic/"
          desc="Ana Pecic"
        />
        <SocialIcon
          platform="Xing"
          imgSrc="/xing-n.png"
          href="https://www.xing.com/profile/Ana_Pecic/web_profiles"
          desc="Ana Pecic"
        />
        <SocialIcon
          platform="Github"
          imgSrc="/github-n.png"
          href="https://github.com/anapecic"
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
