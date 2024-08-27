import styled from "styled-components";
import { uid } from "uid";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const StyledProjectCard = styled.div`
  margin: 1rem;
  border-radius: 10px;
  background: #f5f5f5;
  color: #0d1b2a;
  padding: 1rem;
  width: 210px;
`;

const StyledTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #f5f5f5;
  gap: 5px;
  padding: 0.5rem;
`;

const StyledTag = styled.div`
  background: #415a77;
  color: #e0e1dd;
  border: 1px solid #415a77;
  padding: 3px 5px;
  border-radius: 5px;
  font-size: 12px;
`;

const StyledCardTitle = styled.h3`
  padding: 0;
  margin: 0;
  padding-top: 10px;
  color: #1b263b;

  &:hover {
    text-decoration: underline dotted;
    text-decoration-thickness: 3px;
    text-decoration-color: #778da9;
  }
`;

const StyledImageBox = styled.div`
  position: relative;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;

  &:hover {
    filter: brightness(50%);
  }
`;

const StyledHoverIcon = styled.div`
  color: #e0e1dd;
  position: absolute;
  top: 90px;
  left: 90px;
  font-weight: bold;
`;

const StyledDesc = styled.p`
  text-align: left;
  font-size: 0.8rem;
  margin: 0;
  text-decoration: none;
  line-height: 1.5;
`;

//add github logo and link it

export default function Project({ project }) {
  const [hover, setHover] = useState(false);

  return (
    <StyledProjectCard>
      <Link href={project.deployment}>
        <StyledImageBox
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <StyledImage
            src={project.imageSource}
            alt={project.name}
            height={200}
            width={200}
          />
          {hover ? (
            <StyledHoverIcon>
              <Image
                src="/external.svg"
                alt="icon for external page"
                width={30}
                height={30}
              />
            </StyledHoverIcon>
          ) : null}
        </StyledImageBox>
      </Link>
      <div>
        <Link
          href={project.deployment}
          style={{ textDecoration: "none", color: "#415A77" }}
        >
          <StyledCardTitle>{project.name}</StyledCardTitle>
        </Link>
        <StyledTagsWrapper>
          {project.tags.map((tag) => (
            <StyledTag key={uid()}>{tag}</StyledTag>
          ))}
        </StyledTagsWrapper>
        <StyledDesc>{project.description}</StyledDesc>
      </div>
    </StyledProjectCard>
  );
}
