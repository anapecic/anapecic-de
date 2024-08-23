import getAllProjects from "@/lib/projects";
import styled from "styled-components";
import { uid } from "uid";
import Image from "next/image";
import Link from "next/link";

const StyledCardsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  padding-bottom: 100px;
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  text-decoration: underline dotted;
  text-decoration-thickness: 5px;
  text-decoration-color: #9b4819;
`;

export default function Projects() {
  const projects = getAllProjects();
  return (
    <StyledProjects id="projects">
      <StyledH2>My Projects</StyledH2>
      <StyledCardsSection>
        {projects.map((project) => (
          <Project key={uid()} project={project} />
        ))}
      </StyledCardsSection>
    </StyledProjects>
  );
}

//start different file here
const StyledProjectCard = styled.div`
  margin: 1rem;
  border-radius: 5px;
  background: #314028;
  color: #f4f1e8;
  padding: 1rem;
  width: 220px;
`;

const StyledTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: 314028;
  gap: 5px;
  padding: 0.5rem;
`;

const StyledTag = styled.div`
  background: #f4f1e8;
  color: #9b4819;
  border: 1px solid #9b4819;
  padding: 3px 5px;
  border-radius: 5px;
  font-size: 12px;
`;

const StyledCardTitle = styled.h3`
  padding: 0;
  margin: 0;
  padding-top: 10px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const StyledDesc = styled.p`
  text-align: left;
  font-size: 0.8rem;
  margin: 0;
  text-decoration: none;
  line-height: 1.5;
`;

function Project({ project }) {
  return (
    <StyledProjectCard>
      <Link href={project.deployment}>
        <StyledImage
          src={project.imageSource}
          alt={project.name}
          height={200}
          width={200}
        />
      </Link>
      <div>
        <Link
          href={project.deployment}
          style={{ textDecoration: "none", color: "#f4f1e8" }}
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
