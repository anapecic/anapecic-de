import getAllProjects from "@/lib/projects";
import styled from "styled-components";
import { uid } from "uid";
import Project from "../Project/Project";

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
  background: #fff;
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  text-decoration: underline dotted;
  text-decoration-thickness: 5px;
  text-decoration-color: #9b4819;
`;

const StyledIntro = styled.p`
  max-width: 60%;
  margin: 0 auto;
  padding-bottom: 1.5rem;
`;

export default function Projects() {
  const projects = getAllProjects();
  return (
    <StyledProjects id="projects">
      <StyledH2>My Projects</StyledH2>
      <StyledIntro>
        Here are some of my favorite projects I did in the last couple of
        months. Most of it was done as exercises to keep learning, debugging and
        celebrating small successes.
      </StyledIntro>
      <StyledCardsSection>
        {projects.map((project) => (
          <Project key={uid()} project={project} />
        ))}
      </StyledCardsSection>
    </StyledProjects>
  );
}
